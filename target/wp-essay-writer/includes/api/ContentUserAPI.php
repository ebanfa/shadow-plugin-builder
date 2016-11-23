<?php

/*
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class ContentUserAPI {

    /*
     * 
     **/
    public static function do_create_content_user($content_user_data, $send_email_flag) {
        if(!self::validate_user_data($content_user_data)) 
            return EntityAPIUtils::init_error($content_user_data, 'Invalid user sign up data');

        $content_user_data = self::clean_names($content_user_data);
        LogUtils::shadow_log('>>>>>>>>>>>>>> The updated names');
        LogUtils::shadow_log($content_user_data);
        // Only insert if the user does not exist
        $user = get_user_by('login', $content_user_data['user_login'] );
        if(!$user) {
            $user_id = wp_insert_user($content_user_data);
            if (is_wp_error($user_id)) return array('has_errors' => true, 'message' => $user_id->get_error_message());
        }
        $user_party_data = self::create_individual($content_user_data);
        if($user_party_data['has_errors']) return $user_party_data;

        if($send_email_flag) MailAPI::do_send_user_created_email($content_user_data, array());
        return $user_party_data;
    }

    /*
     * 
     **/
    public static function do_update_content_user($content_user_data, $party_data, $send_email_flag) {
        if(!self::validate_user_data($content_user_data)) 
            return EntityAPIUtils::init_error($content_user_data, 'Invalid user sign up data');
        // 1. Get the wordpress user with the specified username
        $user = get_user_by('login', $content_user_data['user_login'] );
        if(!$user) return EntityAPIUtils::init_error($content_user_data, 'Could not find the specified user');
        // 2. Update the first name and last name of the user
        update_user_meta($user->ID, 'last_name', $content_user_data['last_name']);
        update_user_meta($user->ID, 'first_name', $content_user_data['first_name']);
        // 4 Update the first name, last name and the desciption
        $party_data = self::edit_individual($content_user_data, $party_data);
        return $party_data;
    }

    /**
     * 
     */
    public static function create_individual($content_user_data) {
        $entity_data = EntityAPIUtils::init_entity_data('person');
        $entity_data['edit_mode'] = true;
        $entity_data['role'] = $content_user_data['role'];
        $entity_data['email'] = $content_user_data['user_login'];
        $entity_data['last_name'] = $content_user_data['last_name'];
        $entity_data['first_name'] = $content_user_data['first_name'];
        if(isset($content_user_data['description'])) $entity_data['description'] = $content_user_data['description'];
        if(isset($content_user_data['display_name'])) $entity_data['display_name'] = $content_user_data['display_name'];
        $entity_data = PartyAPI::do_create_individual($entity_data);
        return $entity_data;
    }

    /**
     * 
     */
    public static function edit_individual($content_user_data, $party_data) {
        $entity_data = EntityAPI::get_by_field('person', 'person_party', $party_data['id']);
        if(!isset($entity_data['id'])) return EntityAPIUtils::init_error($content_user_data, 'Could not find the specified individual');
        $entity_data['edit_mode'] = false;
        $entity_data['email'] = $content_user_data['user_login'];
        $entity_data['last_name'] = $content_user_data['last_name'];
        $entity_data['first_name'] = $content_user_data['first_name'];
        if(isset($content_user_data['description'])) $entity_data['description'] = $content_user_data['description'];
        if(isset($content_user_data['display_name'])) $entity_data['display_name'] = $content_user_data['display_name'];
        $entity_data = PartyAPI::do_edit_individual($entity_data, $party_data);
        return $entity_data;
    }

    /**
     * 
     */
    public static function validate_user_data($content_user_data) {
        if(!isset($content_user_data['first_name']) || 
            !isset($content_user_data['last_name']) || !isset($content_user_data['user_login']) || 
            !isset($content_user_data['user_pass']) || !isset($content_user_data['role'])) return false;
        // If the first name and last name are email addresses then we remove everything we remove the @ sign and everything after it
        
        return true;
    }

    /**
     * 
     */
    public static function clean_names($content_user_data) {
        if (strpos($content_user_data['first_name'], '@') !== false) 
            $content_user_data['first_name'] = self::clean_name ($content_user_data['first_name']);
        if (strpos($content_user_data['last_name'], '@') !== false) 
            $content_user_data['last_name'] = self::clean_name ($content_user_data['last_name']);
        return $content_user_data;
    }


    /**
     * 
     */
    public static function clean_name($name) {
        $split_username = explode('@', $name);
        if(!empty($split_username)) $name = ucfirst($split_username[0]);
        return $name;
    }
    

}
