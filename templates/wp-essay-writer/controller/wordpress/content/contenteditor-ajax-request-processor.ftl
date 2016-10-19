<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentEditorAjaxRequestProcessor {

    /**
     * 
     */
    public static function create_entity_ajax() {
    	$tutor_data = array();
    	// 1. Validate the provided data
        if( !isset($_POST['email']) || !isset($_POST['display_name']) || 
        	!isset($_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['description'])) 
            return EntityAPIUtils::init_error($tutor_data, 'Invalid data provided');
    	// 2. Build the content user data
    	$content_user_data['role'] = 'tutor';
    	$content_user_data['user_login'] = sanitize_text_field($_POST['email']);
    	$content_user_data['user_pass'] = sanitize_text_field($_POST['password']);
    	$content_user_data['last_name'] = sanitize_text_field($_POST['last_name']);
    	$content_user_data['first_name'] = sanitize_text_field($_POST['first_name']);
        $content_user_data['description'] = sanitize_text_field($_POST['description']);
        $content_user_data['display_name'] = sanitize_text_field($_POST['display_name']);
    	// 3. Create the content user
    	$user_party_data = ContentUserAPI::do_create_content_user($content_user_data, true);
    	if($user_party_data['has_errors']) return $user_party_data;
        $user_party_data['redirect_url'] = ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=tutordisplay'.'&id='.$user_party_data['id'].'&page_action=view';
    	return $user_party_data;
    }

    /**
     * 
     */
    public static function edit_entity_ajax() {
        $tutor_data = array();
        // 1. Validate the provided data
        if( !isset($_POST['email']) || !isset($_POST['display_name']) || 
            !isset($_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['description'])) 
            return EntityAPIUtils::init_error($tutor_data, 'Invalid data provided');
        // 2. Build the content user data
        $content_user_data['role'] = 'tutor';
        $content_user_data['user_login'] = sanitize_text_field($_POST['email']);
        //$content_user_data['user_pass'] = sanitize_text_field($_POST['password']);
        $content_user_data['last_name'] = sanitize_text_field($_POST['last_name']);
        $content_user_data['first_name'] = sanitize_text_field($_POST['first_name']);
        $content_user_data['description'] = sanitize_text_field($_POST['description']);
        $content_user_data['display_name'] = sanitize_text_field($_POST['display_name']);
        // 3. Create the content user
        $user_party_data = ContentUserAPI::do_create_content_user($content_user_data, true);
        if($user_party_data['has_errors']) return $user_party_data;
        $user_party_data['redirect_url'] = ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=tutordisplay'.'&id='.$user_party_data['id'].'&page_action=view';
        return $user_party_data;
    }

}

?>