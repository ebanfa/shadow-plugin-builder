<?php

/*
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class UserAPI {

    /*
     * 
     **/
    public static function do_create_content_user($user_data, $send_email_flag) {
        if(!self::validate_user_data($user_data)) 
            return EntityAPIUtils::init_error($user_data, 'Invalid user sign up data');
        // Only insert if the user does not exist
        $user = get_user_by('login', $user_data['user_login'] );
        if(!$user) {
            $user_id = wp_insert_user($user_data);
            if (is_wp_error($user_id)) return array('has_errors' => true, 'message' => $user_id->get_error_message());
        }
        $user_party_data = self::do_create_content_user($user_data);
        if($send_email_flag) CloderiaMailAPI::do_send_user_created_email($user_party_data);
        return $user_party_data;
    }

    /**
     * 
     */
    public static function create_content_user($user_data) {
        $entity_data = EntityAPIUtils::init_entity_data('person');
        $entity_data['email'] = $user_data['user_email'];
        $entity_data['last_name'] = $user_data['last_name'];
        $entity_data['first_name'] = $user_data['first_name'];
        $entity_data['role'] = $user_data['role'];
        $entity_data = PartyAPI::do_create_individual($entity_data);
        $entity_data['user_data'] = $user_data;
        return $entity_data;
    }

    /**
     * 
     */
    public static function validate_user_data($user_data) {
        if(!isset($user_data['first_name']) || !isset($user_data['last_name']) || 
            !isset($user_data['user_pass']) || !isset($user_data['user_pass'])) return false;
        return true;
    }
    

}
