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
            $tutor['rating'] = self::get_party_rating($tutor);
            array_push($rated_tutors, $tutor);
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
    public static function get_party_rating($party_data) {
        // Find all parties with the role tutor
        $party_reviews = EntityAPI::find_by_criteria('partyreview', array('reviewed_party' => $party_data['id']));

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
