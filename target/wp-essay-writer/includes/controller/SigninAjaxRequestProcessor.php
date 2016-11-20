<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SigninAjaxRequestProcessor {

    /**
     * Render this view
     */
    public static function create_entity_ajax() {
    	$content_user_data = array();
    	// 1. Validate the provided data
        if( !isset($_POST['username']) || !isset($_POST['password'])) 
            return EntityAPIUtils::init_error($content_user_data, 'Invalid signin data provided');
    	// 2. Build the content user data
    	$content_user_data['user_pass'] = sanitize_text_field($_POST['password']);
    	$content_user_data['user_login'] = sanitize_text_field($_POST['username']);
        
    	$content_user = UserLoginAPI::do_signin_content_user($content_user_data['user_login'], $content_user_data['user_pass']);
        $content_user['redirect_url'] = ArtifactRequestProcessorUtils::get_list_artifact_url('dashboard');
        if (isset($_POST['redirect_to'])) $content_user['redirect_url'] = $_POST['redirect_to'];
        return $content_user;
    }

}

?>