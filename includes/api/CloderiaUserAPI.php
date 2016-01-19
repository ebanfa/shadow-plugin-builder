<?php

/*
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class CloderiaUserAPI {

    /**
     * 
     */
    public static function create_shadow_user($user_data) {
        // Validate the passed in data
        if(CloderiaUserAPI::validate_user_data($user_data)) {
            // create the party record
            $entity_data = CloderiaUserAPI::create_shadow_party($user_data);
            if(!$entity_data['has_errors']) {
                // create profile record
                CloderiaUserAPI::create_shadow_party_profile($user_data, $entity_data);
                // create account record
                CloderiaUserAPI::create_shadow_party_account($entity_data);
                // send out email
                CloderiaUserAPI::send_user_created_email($user_data['user_login']); 
            }
        }
    }

    /**
     * 
     */
    public static function create_shadow_party($user_data) {
        $entity_data = array();
        $entity_data['user_name'] = $user_data['user_login'];
        $entity_data['password'] = $user_data['user_pass'];
        $entity_data['description'] = $user_data['description'];
        $entity_data['name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];

        $party_type = PartyTypeAPI::get_by_code(get_option('cp_default_partytype'));
        $entity_data['edit_mode'] = true;
        $entity_data['party_type'] = $party_type->ID;
        // Create the party and return the results of the process
        return PartyAPI::do_create_entity($entity_data);
    }

    /**
     * 
     */
    public static function create_shadow_party_profile($user_data, $party_data) {
        $entity_data = array();
        $entity_data['owner'] = $party_data['id'];
        $entity_data['name'] = $user_data['display_name'];
        $entity_data['rating'] = '0'; 
        $entity_data['edit_mode'] = true;
        $entity_data['date_created'] = date("Y-m-d H:i:s");
        return PartyProfileAPI::do_create_entity($entity_data);
    }

    /**
     * 
     */
    public static function create_shadow_party_account($party_data) {
        $entity_data = array();
        $entity_data['owner'] = $party_data['id'];

        $entity_data['name'] = $party_data['name'];
        $entity_data['balance'] = '0'; 
        $entity_data['edit_mode'] = true;
        $entity_data['date_created'] = date("Y-m-d H:i:s");
        return PartyAccountAPI::do_create_entity($entity_data);
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
    public static function send_user_created_email($user_name) 
    {   
        // Find the user
        $user = get_user_by('login', $user_name );
        if($user) {
            // Get the user data context {username, password etc}
            $data_context = CloderiaUserAPI::get_user_data_context($user);
            //update_user_meta($user->ID, 'userDataContext', implode("|", $data_context));
            // 2. Send mail to user,
            CloderiaUserAPI::send_email($data_context, $user->user_login, 'account-created-subject.tpl', 'account-created-message.tpl', array());
            // 3 Send mail to the admin
            CloderiaUserAPI::send_email($data_context, get_option('cp_notify_accounts'), 'account-created-subject.tpl', 'account-created-message.tpl', array());
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
        $msg_templ = CloderiaUserAPI::parse($msg_templ, $data_context);
        $msg_sub_templ = CloderiaUserAPI::parse($msg_sub_templ, $data_context);
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
        $data_context['site_email'] = get_option('cp_notify_loans');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        return $data_context;
    }

    /*------------------------------------------------------------------------------
    SYNOPSIS: a simple parsing function for basic templating.
    INPUT:
        $tpl (str): a string containing [+placeholders+]
        $hash (array): an associative array('key' => 'value');
    OUTPUT
        string; placeholders corresponding to the keys of the hash will be replaced
        with the values and the string will be returned.
    ------------------------------------------------------------------------------*/
    public static function parse($tpl, $hash) {
        foreach ($hash as $key => $value) {
            if($key != 'attachments') {
                $tpl = str_replace('[+'.$key.'+]', $value, $tpl);
            }
        }
        return $tpl;
    }


}
