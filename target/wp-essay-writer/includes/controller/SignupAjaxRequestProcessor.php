<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SignupAjaxRequestProcessor {

    /**
     * Render this view
     */
    public static function create_entity_ajax() {
    	$content_user_data = array();
    	// 1. Validate the provided data
        if( !isset($_POST['email']) || !isset($_POST['password']) || 
        	!isset($_POST['first_name']) || !isset($_POST['last_name']) || 
            !isset($_POST['confirm_password']) || !isset($_POST['user_type'])) 
            return EntityAPIUtils::init_error($content_user_data, 'Invalid sign up data provided');
    	// 2. Build the content user data
    	$content_user_data['role'] = sanitize_text_field($_POST['user_type']);
    	$content_user_data['user_login'] = sanitize_text_field($_POST['email']);
    	$content_user_data['user_pass'] = sanitize_text_field($_POST['password']);
    	$content_user_data['last_name'] = sanitize_text_field($_POST['last_name']);
    	$content_user_data['first_name'] = sanitize_text_field($_POST['first_name']);
    	// 3. Create the content user
    	$user_party_data = ContentUserAPI::do_create_content_user($content_user_data, true);
    	if($user_party_data['has_errors']) return $user_party_data;

    	return UserLoginAPI::do_signin_content_user($content_user_data['user_login'], $content_user_data['user_pass']);
    }

}

?>