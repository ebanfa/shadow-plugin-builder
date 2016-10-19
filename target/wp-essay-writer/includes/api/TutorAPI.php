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
    public static function find_all() {
        // Find all parties with the role tutor
        $rated_tutors = array();
        $all_tutors = PartyRoleAPI::find_by_role('tutor');
        // For each party find all the reviews 
        foreach ($all_tutors as $tutor) {
            $tutor['rating'] = self::get_tutor_rating($tutor['id']);
            array_push($rated_tutors, $tutor);
        }
        return $rated_tutors;
    }

      /**
     *
     */
    public static function get_by_id($tutor_id) {
        $tutor_data = EntityAPI::get_by_id('party', $tutor_id);
        if(isset($tutor_data['id'])) 
            $tutor_data['rating'] = self::get_tutor_rating($tutor_id);
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
        return $tutor_data;
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
    public static function do_rating($tutor_data, $reviewing_party_data, $rating, $description) {

        $rating_data = EntityAPIUtils::init_entity_data('partyreview');
        $rating_data['rating'] = $rating;
        $rating_data['edit_mode'] = true;
        $rating_data['review_date'] = date("Y-m-d H:i:s");
        $rating_data['description'] = $description;
        $rating_data['reviewed_party'] = $tutor_data['id'];
        $rating_data['reviewed_by'] = $reviewing_party_data['id'];
        $rating_data['name'] = 'Rating by ' . $reviewing_party_data['name'];

        $rating_data = EntityAPI::do_create_entity($rating_data);
        return $rating_data;
    }

    /**
     *
     */
    public static function get_tutor_rating($tutor_id) {
        // Find all parties with the role tutor
        $party_reviews = EntityAPI::find_by_criteria('partyreview', array('reviewed_party' => $tutor_id));

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
