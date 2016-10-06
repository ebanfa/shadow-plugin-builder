<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreditApplicationAPI {


    /**
     *
     */
    public static function do_create_entity($entity_data){
        if($entity_data['edit_mode']) {
            // Process the application status
            $appl_status = EntityAPI::get_by_code('creditapplicationstatus', 'PENDING');
            if(!isset($appl_status['id'])) 
                return EntityAPIUtils::init_error($entity_data, 'An error occurred while processing your application status');
            $entity_data['appl_status'] = $appl_status['id'];
            $entity_data['biz_created_date'] = date("Y-m-d H:i:s");
            // Initial data required to create the user
            $user_data = self::init_user_data($entity_data);
            // Create the user and party information
            $user_party = CloderiaUserAPI::do_create_content_user($user_data);
            if(!isset($user_party['id'])) 
                return EntityAPIUtils::init_error($entity_data, 'An error occurred while processing your credentials');
            // Create the order
            $entity_data['appl_party'] = $user_party['id'];
            $entity_data =  EntityAPI::do_create_entity($entity_data);
            // Create a deposit account for the user
            DepositAccountAPI::do_create_account($user_party);
            // Send out the necessary notifications
            $user_party = self::send_application_notifications($user_data, $entity_data);
            return $entity_data;
        }
        else {
            return EntityAPI::do_create_entity($entity_data);
        }
    }

    /**
     *  Creates the user associated with an order, or returns 
     *  the user's data if the user already exists
     */
    public static function init_user_data($entity_data)
    {
        $user_data = array(
            'first_name' => $entity_data['first_name'], 
            'last_name' => $entity_data['last_name'],
            'email' => $entity_data['email'],
        );
        $user_data['user_login'] = $entity_data['email'];
        $user_data['user_pass'] = EntityStringUtils::get_token(8);
        $user_data['business_name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];
        return $user_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = PartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code))
            return EntityAPI::find_by_criteria($artifact_name, array('appl_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *  
     */
    public static function send_application_notifications($user_data, $entity_data){
        $data_context = self::get_user_data_context($user_data, $entity_data);
        CloderiaUserAPI::send_email($data_context, 
            $user_data['email'], 'application-created-subject.tpl', 'application-created-message.tpl', array());
    }
   
    /**
     * 
     */
    public static function get_user_data_context($user_data, $entity_data)
    {
        $data_context = array();
        $data_context['email'] = $user_data['email'];
        $data_context['display_name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_accounts');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['appl_no'] = $entity_data['entity_code'];
        //$data_context['order_currency'] = get_option('cp_default_currency');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        return $data_context;
    }

}
