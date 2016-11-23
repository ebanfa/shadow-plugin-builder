<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProfileEditorAjaxRequestProcessor {

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
    	$content_user_data['role'] = 'student';
    	$content_user_data['user_login'] = sanitize_text_field($_POST['email']);
    	$content_user_data['user_pass'] = sanitize_text_field($_POST['password']);
    	$content_user_data['last_name'] = sanitize_text_field($_POST['last_name']);
    	$content_user_data['first_name'] = sanitize_text_field($_POST['first_name']);
        $content_user_data['description'] = sanitize_text_field($_POST['description']);
        $content_user_data['display_name'] = sanitize_text_field($_POST['display_name']);
    	// 3. Create the content user
    	$user_party_data = ContentUserAPI::do_create_content_user($content_user_data, true);
    	if($user_party_data['has_errors']) return $user_party_data;
        
        $id = EntityStringUtils::encode_id($user_party_data['id']);
        $user_party_data['redirect_url'] = ArtifactRequestProcessorUtils::get_view_artifact_url('profiledisplay') . $id;
    	return $user_party_data;
    }

    /**
     * 
     */
    public static function edit_entity_ajax() {
        $student_data = array();
        // 1. Validate the provided data
        if( !isset($_POST['id']) || !isset($_POST['display_name']) || 
            !isset($_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['description'])) 
            return EntityAPIUtils::init_error($student_data, 'Invalid data provided');
        // 2. Build the content user data
        $content_user_data['role'] = 'student';
        $content_user_data['last_name'] = sanitize_text_field($_POST['last_name']);
        $content_user_data['first_name'] = sanitize_text_field($_POST['first_name']);
        $content_user_data['description'] = sanitize_text_field($_POST['description']);
        $content_user_data['display_name'] = sanitize_text_field($_POST['display_name']);
        // Do this so we can pass the content user validation check
        $content_user_data['user_pass'] = sanitize_text_field($_POST['display_name']);
        $content_user_data['user_login'] = sanitize_text_field($_POST['display_name']);
        // 3. Find the party of the user
        $party_data = EntityAPI::get_by_id('party', sanitize_text_field($_POST['id']));
        if(!$party_data['id']) return EntityAPIUtils::init_error($content_user_data, 'User party not found');
        $content_user_data['user_login'] = $party_data['user_name'];
        // 4. Update the content user
        $user_party_data = ContentUserAPI::do_update_content_user($content_user_data, $party_data, false);
        if($user_party_data['has_errors']) return $user_party_data;

        $id = EntityStringUtils::encode_id($user_party_data['id']);
        $user_party_data['redirect_url'] = ArtifactRequestProcessorUtils::get_view_artifact_url('profiledisplay') . $id;
        return $user_party_data;
    }

}

?>