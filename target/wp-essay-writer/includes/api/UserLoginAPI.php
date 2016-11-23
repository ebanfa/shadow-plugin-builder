<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class UserLoginAPI {

	public static function do_signin_content_user($user_name, $password) {
	    $login_data = array();
	    $login_data['user_login'] = $user_name;
	    $login_data['user_password'] = $password;

		// 1. Verify that the user name exists in the system
		$user_party_data = EntityAPI::get_by_field('party', 'user_name', $user_name);
		if(!isset($user_party_data['id']))
            return EntityAPIUtils::init_error($login_data, 'Invalid username or password. Please try again');

        // 2. Ensure the account is active
        $profile_data = EntityAPI::get_by_field('partyprofile', 'profile_party', $user_party_data['id']);
        if(!isset($profile_data['id'])) return EntityAPIUtils::init_error($user_party_data, 'Profile not found');

        if($profile_data['profile_status'] != 'A') 
        	return EntityAPIUtils::init_error($user_party_data, 'You account has been deactivated please contact support on ' .
        		get_option('cp_notify_accounts'));

	    $user_verify = wp_signon($login_data, true);
	    if (is_wp_error($user_verify)) 
            return EntityAPIUtils::init_error($login_data, 'Invalid username or password. Please try again');
	    
	    wp_set_current_user($user_verify->ID);
        wp_set_auth_cookie($user_verify->ID);
        // Build the return
        $content_user = array('has_errors' => false, 'user_login' => $user_name, 'user_password' => $password);
        // Process redirect
        /*$content_user['redirect_url'] = get_option('cp_default_portal_home_url');
        if(UserPartyAPI::is_current_user_portal_admin())*/
        return $content_user;
	}



	public static function do_reset_content_user_password($user_name) {
		// 1. Verify that the user name exists in the system
		$user_party_data = EntityAPI::get_by_field('party', 'user_name', $user_name);
		if(!isset($user_party_data['id']))
            return array('has_errors' => true, 'message' => "Sorry the username you provided is not registered");
        // 2. Load the person associated with the party
		$user_person_data = EntityAPI::get_by_field('person', 'person_party', $user_party_data['id']);
		if(!isset($user_person_data['id']))
			return array('has_errors' => true, 'message' => "Sorry could not load the data for specified individual");
        // Build the content user data
        $content_user_data = array(
        	'user_pass' => SecurityAPI::generate_password(),
        	'last_name' => $user_person_data['last_name'],
        	'first_name' => $user_person_data['first_name'],
        	'user_login' => $user_party_data['user_name'],
        );
	    MailAPI::do_send_user_password_email($content_user_data, array());
        return array('has_errors' => false, 'content_user' => $content_user_data);
	}
}
