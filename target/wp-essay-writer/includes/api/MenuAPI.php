<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class MenuAPI {


    /**
     *
     */
    public static function do_get_menu_header_data(){
        $menu_header_data = array(
            'menu_image' => '',
            'user_name' => get_option('cp_default_guest_user_name'),
        );
        // If the user is sign in the we load the name of the user
        if(is_user_logged_in()) {
            $current_user_party = PartyAPI::get_current_user_party();
            if(isset($current_user_party['id'])) 
                $menu_header_data['user_name'] = $current_user_party['user_name'];
        }
        // Process the menu header image
        $menu_image = get_option('cp_default_portal_menu_image');
        if(!EntityStringUtils::is_invalid_string($menu_image)) 
            $menu_header_data['menu_image'] = 'background: transparent url(' . $menu_image . ') no-repeat scroll left top / 100% auto;';

        return $menu_header_data;
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
