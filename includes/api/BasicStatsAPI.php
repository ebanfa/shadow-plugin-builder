<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BasicStatsAPI {


    /**
     *
     */
    public static function do_get_baisc_stats(){
        return array(
            'rising_tutors' => self::do_get_rising_tutors(),
            'recent_orders' => self::do_get_recent_orders(),
            'top_rated_tutors' => self::do_get_top_rated_tutors(),
        );
    }

    /**
     * 
     */
    public static function do_get_rising_tutors(){
        return array();
    }

    /**
     *
     */
    public static function do_get_recent_orders(){
        return array_slice(EntityAPI::find_by_criteria('contentorder', array()), 0, 5);
    }

    /**
     *
     */
    public static function do_get_top_rated_tutors(){
        $all_tutors = TutorAPI::find_all();
        usort($all_tutors, array('BasicStatsAPI', 'do_rating_sort'));
        return array_slice($all_tutors, 0, 5);
    }

    /**
     *
     */
    public static function do_rating_sort($tutor_a, $tutor_b){
        if ($tutor_a['rating'] == $tutor_b['rating']) {
            return 0;
        }
        return ($tutor_a['rating'] < $tutor_b['rating']) ? -1 : 1;
    }
}
