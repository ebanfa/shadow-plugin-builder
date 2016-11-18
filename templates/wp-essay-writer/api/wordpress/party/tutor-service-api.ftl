<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorAPI {

    /**
     *
     */
    public static function get_by_id($tutor_id) {
        $tutor_data = EntityAPI::get_by_id('party', $tutor_id);
        $tutor_data = self::load_profile_data($tutor_data);
        return $tutor_data;
    }

    /**
     *
     */
    public static function find_all() {
        // Find all parties with the role tutor
        $rated_tutors = array();
        $all_tutors = PartyRoleAPI::find_by_role('tutor');
        // For each party find all the reviews 
        foreach ($all_tutors as $tutor_data) {
            $tutor_data = self::get_tutor_rating($tutor_data);
            $tutor_data = self::load_profile_data($tutor_data);
            array_push($rated_tutors, $tutor_data);
        }
        return $rated_tutors;
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
    public static function load_profile_data($tutor_data) {
        // Load the actual person associated with this tutor
        $person_data = EntityAPI::get_by_field('person', 'person_party', $tutor_data['id']);
        if(!isset($person_data['id']))
            return EntityAPIUtils::init_error($tutor_data, 'Could not load the data associated with the specified individual');

        $tutor_data['last_name'] = $person_data['last_name'];
        $tutor_data['first_name'] = $person_data['first_name'];
        // Load the party profile associated with this tutor
        $profile_data = EntityAPI::get_by_field('partyprofile', 'profile_party', $tutor_data['id']);
        if(!isset($profile_data['id']))
            return EntityAPIUtils::init_error($tutor_data, 'Could not load the data associated with the specified profile');
        $tutor_data['display_name'] = $profile_data['display_name'];
        // Load the profile image
        $tutor_data['image_url'] =  ${application.name}::plugin_url() . '/images/user.png';
        $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $tutor_data['id']);
        if(isset($tutor_image['id'])) $tutor_data['image_url'] = $tutor_image['file_url'];
        // Get the subjects for this tutor
        $subjects = EntityAPI::find_by_criteria('partysubject', array('subject_party' => $tutor_data['id']));
        $tutor_data['subjects'] = $subjects;
        // Get the education data for this tutor
        $education = EntityAPI::find_by_criteria('partyeducation', array('education_party' => $tutor_data['id']));
        $tutor_data['education'] = $education;

        $tutor_data = self::get_tutor_rating($tutor_data);
        return $tutor_data;
    }


    /**
     *
     */
    public static function get_tutor_rating($tutor_data) {
        // Find all parties with the role tutor
        $tutor_data['reviews'] = EntityAPI::find_by_criteria('partyreview', array('reviewed_party' => $tutor_data['id']));

        $tutor_data['rating'] = 0;
        $rating_count = count($tutor_data['reviews']);
        foreach ($tutor_data['reviews'] as $party_review) { 
            $total_rating = doubleval($total_rating) + doubleval($party_review['rating']);
        }
        if($rating_count != 0)
            $tutor_data['rating'] = doubleval($total_rating) / doubleval($rating_count);

        return $tutor_data;
    }

    /**
     *
     */
    public static function add_subject($tutor_data, $subject_id) {
        $party_subject_data = EntityAPIUtils::init_entity_data('partysubject');
        $party_subject_data['edit_mode'] = true;
        $party_subject_data['name'] = $tutor_data['name'];
        $party_subject_data['target_subject'] = $subject_id;
        $party_subject_data['subject_party'] = $tutor_data['id'];
        $party_subject_data['description'] = $tutor_data['name'];

        $party_subject_data = EntityAPI::do_create_entity($party_subject_data);
        return $party_subject_data;
    }

    /**
     *
     */
    public static function add_education($tutor_data, $education_data) {

        $subject_data = EntityAPI::get_by_id('subject', $education_data['subject']);
        $qualification_type_data = EntityAPI::get_by_id('qualificationtype', $education_data['qualification_type']);

        if(!isset($subject_data['id']) || !isset($qualification_type_data['id']))
            return EntityAPIUtils::init_error($tutor_data, 'Subject or qualification type not found');

        $party_education_data = EntityAPIUtils::init_entity_data('partyeducation');
        $party_education_data['edit_mode'] = true;
        $party_education_data['education_party'] = $tutor_data['id'];
        $party_education_data['qualification_sub'] = $subject_data['id'];
        $party_education_data['description'] = $qualification_type_data['name'];
        $party_education_data['qualification_date'] = $education_data['graduation'];
        $party_education_data['qualification_type'] = $qualification_type_data['id'];
        $party_education_data['name'] = $qualification_type_data['name'] . ' ' . $subject_data['name'];

        $party_education_data = EntityAPI::do_create_entity($party_education_data);
        return $party_education_data;
    }
}
