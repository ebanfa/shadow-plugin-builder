<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PasswordAjaxRequestProcessor {

    /**
     * Render this view
     */
    public static function create_entity_ajax() {
    	$content_user_data = array();
    	// 1. Validate the provided data
        if( !isset($_POST['username'])) 
            return EntityAPIUtils::init_error($content_user_data, 'Invalid user name data provided');
    	// 2. Build the content user data
    	$content_user_data['user_login'] = sanitize_text_field($_POST['username']);

        $content_user = UserLoginAPI::do_reset_content_user_password($content_user_data['user_login']);
        $content_user['redirect_url'] = ArtifactRequestProcessorUtils::get_artifact_url('signin');
        if (isset($_POST['redirect_to'])) $content_user['redirect_url'] = $_POST['redirect_to'];
        return $content_user;
    }

}

?>