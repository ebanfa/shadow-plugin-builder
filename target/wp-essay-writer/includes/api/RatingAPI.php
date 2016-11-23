<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class RatingAPI {

   
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

        $average_rating = doubleval($total_rating) / doubleval($rating_count); 
        return $average_rating;
    }

    /**
     * For a given role of users, get the parties with the increases in scores
     */
    public static function get_rising_star($role_code) {
        
        return array();
    }
}
