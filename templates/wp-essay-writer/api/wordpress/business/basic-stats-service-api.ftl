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
        $all_tutors = array_slice($all_tutors, 0, 5);
        foreach ($all_tutors as $key => $tutor) { 
            $tutor['image_url'] =  ${application.name}::plugin_url() . '/images/user.png';
            $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $tutor['id']);
            if(isset($tutor_image['id'])) $tutor['image_url'] = $tutor_image['file_url'];
            $all_tutors[$key] = $tutor;
        }
        return $all_tutors;
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
