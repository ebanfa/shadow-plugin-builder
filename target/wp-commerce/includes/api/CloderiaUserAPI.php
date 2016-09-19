<?php

/*
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class CloderiaUserAPI {

    /*
     * 
     **/
    public static function do_create_content_user($content_user_data) {

        $user_data = ContentUserLoginAPI::build_signup_data($content_user_data);
        // Only insert if the user does not exist
        $user = get_user_by('login', $user_data['user_login'] );
        if(!$user) {
            $user_id = wp_insert_user($user_data);
            if (is_wp_error($user_id)) return array('has_errors' => true, 'message' => $user_id->get_error_message());
            self::update_new_user_meta($user_id, $user_data);
        }
        return self::create_person($user_data);
    }

    /*
     * 
     **/
    public static function update_new_user_meta($user_id, $user_data) {
        update_user_meta($user_id, "last_name", $user_data['first_name']);
        update_user_meta($user_id, 'user_email', $user_data['user_email']);
        update_user_meta($user_id, "first_name", $user_data['first_name']);
        update_user_meta($user_id, "display_name", $user_data['display_name']);
    }

    /**
     * 
     */
    public static function create_person($user_data) {
        $entity_data = EntityAPIUtils::init_entity_data('person');
        $entity_data['gender'] = 'X';
        $entity_data['id_number'] = '0000000000';
        $entity_data['date_of_birth'] = date("Y-m-d H:i:s");
        $entity_data['email'] = $user_data['user_email'];
        $entity_data['last_name'] = $user_data['last_name'];
        $entity_data['first_name'] = $user_data['first_name'];
        $entity_data['role'] = PartyAPI::$cust_role_type_code;
        $entity_data['name'] = PersonAPI::do_process_party_name($user_data['first_name'], $user_data['last_name']);

        $entity_data = PartyAPI::do_create_individual($entity_data);
        return $entity_data;
    }

    /**
     * 
     */
    public static function validate_user_data($user_data) {
        /*if(!isset($user_data['first_name']) || !isset($user_data['last_name'])) {
            return false;
        }
        if(!isset($user_data['user_login']) || !isset($user_data['user_pass'])) {
            return false;
        }
        if(!isset($user_data['display_name'])) {
            return false;
        }*/
        return true;
    }

    /**
     * 
     */
    public static function send_user_created_email($user_data) 
    {   
        // Find the user
        $user = get_user_by('login', $user_data['user_login'] );
        if($user) {
            // Get the user data context {username, password etc}
            $data_context = self::get_user_data_context($user);
            //update_user_meta($user->ID, 'userDataContext', implode("|", $data_context));
            // 2. Send mail to user,
            self::send_email($data_context, $user->user_login, 'site-account-created-subject.tpl', 'site-account-created-message.tpl', array());
            // 3 Send mail to the admin
            self::send_email($data_context, get_option('cp_notify_accounts'), 'site-account-created-subject.tpl', 'site-account-created-message.tpl', array());
        }
    }

    /**
     * 
     */
    public static function send_email($data_context, $address, $subject_templ, $message_templ, $attachment) 
    {
        // Load the subject and message templates
        $msg_templ = file_get_contents(dirname(dirname(dirname(__FILE__))) .'/email_templates/' . $message_templ);
        $msg_sub_templ = file_get_contents(dirname(dirname(dirname(__FILE__))) .'/email_templates/' . $subject_templ);
        // Fill the templates
        $msg_templ = EntityStringUtils::parse($msg_templ, $data_context);
        $msg_sub_templ = EntityStringUtils::parse($msg_sub_templ, $data_context);

        CloderiaLogUtils::shadow_log($msg_templ);
        // Send the email
        wp_mail($address, $msg_sub_templ, $msg_templ, '', $attachment);
    }

    /**
     * 
     */
    public static function get_user_data_context($user)
    {
        $data_context = array('user_name' => $user->user_login, 'password' => $user->user_pass,
            'first_name' => $user->first_name, 'last_name' => $user->last_name);
        $data_context['email'] = $user->user_login;
        $data_context['display_name'] = get_user_meta($user->ID, 'display_name', true);
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_accounts');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        return $data_context;
    }

    

}
