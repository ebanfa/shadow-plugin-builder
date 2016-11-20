<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class StudentAPI {

    /**
     *
     */
    public static function find_all() {
        // Find all parties with the role student
        $rated_students = array();
        $all_students = PartyRoleAPI::find_by_role('student');
        // For each party find all the reviews 
        foreach ($all_students as $student) {
            $student['rating'] = self::get_student_rating($student['id']);
            array_push($rated_students, $student);
        }
        return $rated_students;
    }

    /**
     *
     */
    public static function get_by_id($student_id) {
        $student_data = EntityAPI::get_by_id('party', $student_id);
        if(!isset($student_data['id'])) 
            return EntityAPIUtils::init_error($student_data, 'Could not load student data');

        $student_data = self::load_profile_data($student_data);
        $student_data = self::load_individual_data($student_data);
        $student_data['rating'] = self::get_student_rating($student_id);
        return $student_data;
    }

    /**
     *
     */
    public static function load_individual_data($student_data) {
        // Load the actual person associated with this student
        $person_data = EntityAPI::get_by_field('person', 'person_party', $student_data['id']);
        if(!isset($person_data['id']))
            return EntityAPIUtils::init_error($student_data, 'Could not load the data associated with the specified individual');

        $student_data['last_name'] = $person_data['last_name'];
        $student_data['first_name'] = $person_data['first_name'];
        return $student_data;
    }

    /**
     *
     */
    public static function load_profile_data($student_data) {
        // Load the party profile associated with this student
        $profile_data = EntityAPI::get_by_field('partyprofile', 'profile_party', $student_data['id']);
        if(!isset($profile_data['id']))
            return EntityAPIUtils::init_error($student_data, 'Could not load the data associated with the specified profile');
        $student_data['display_name'] = $profile_data['display_name'];
        if($profile_data['profile_status'] == 'A') $student_data['active'] = true;
        else $student_data['active'] = false;
        // Load the profile image
        $student_data['image_url'] =  ${application.name}::plugin_url() . '/images/user.png';
        $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $student_data['id']);
        if(isset($tutor_image['id'])) $student_data['image_url'] = $tutor_image['file_url'];

        return $student_data;
    }

    /**
     *
     */
    public static function find_by_count($count) {
        return array_slice(self::find_all(), 0, $count);
    }

    /**
     *
     */
    public static function get_student_rating($student_id) {
        // Find all parties with the role student
        $party_reviews = EntityAPI::find_by_criteria('partyreview', array('reviewed_party' => $student_id));

        $total_rating = 0;
        $rating_count = count($party_reviews);
        foreach ($party_reviews as $party_review) { 
            $total_rating = doubleval($total_rating) + doubleval($party_review['rating']);
        }
        if($rating_count != 0)
            return doubleval($total_rating) / doubleval($rating_count); 
        return $total_rating;
    }
}
