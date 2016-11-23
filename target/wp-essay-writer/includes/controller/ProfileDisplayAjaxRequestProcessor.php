<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProfileDisplayAjaxRequestProcessor {

    /**
     * 
     */
    public static function edit_entity_ajax() {
    	$student_data = array();
    	// 1. Validate the provided data
        if(!isset($_POST['display_action']) || !isset($_POST['id'])) 
            return EntityAPIUtils::init_error($student_data, 'A display action must be specified');
        // 2. Load the student data
        $student_data = StudentAPI::get_by_id(sanitize_text_field($_POST['id']));
        if(!isset($student_data['id']))
            return EntityAPIUtils::init_error($student_data, 'Student not found');
        // 3. Process the display action
        $display_action = sanitize_text_field($_POST['display_action']);
       /* if($display_action == 'rate_student') return self::rate_student($student_data);*/
        if($display_action == 'update_password') return self::update_password($student_data);
        if($display_action == 'deactivate_account') return self::deactivate_account($student_data);
        if($display_action == 'update_profile_image') return self::update_profile_image($student_data);
        // Illegal operation
    	return EntityAPIUtils::init_error($student_data, 'Invalid display action specified');
    }
    
    /**
     * 
     */
    public static function update_password($student_data) {
        if(!isset($_POST['password'])) return EntityAPIUtils::init_error($student_data, 'A password must be specified');

        $user_data = UserPartyAPI::get_party_user($student_data['id']);
        if(!isset($user_data['id'])) return EntityAPIUtils::init_error($student_data, 'User not found');
        
        wp_set_password(sanitize_text_field($_POST['password']), $user_data['id']);
        return $student_data;
    }

    /**
     * 
     */
    public static function deactivate_account($student_data) {
        // 1. Validate the provided data
        if(!isset($_POST['deactivate_action']))  return EntityAPIUtils::init_error($student_data, 'Invalid profile status');

        $deactivate_action = sanitize_text_field($_POST['deactivate_action']);
        if($deactivate_action == 'activate') $profile_status = 'A';
        if($deactivate_action == 'deactivate') $profile_status = 'I';
        $profile_data = PartyProfileAPI::do_update_status($student_data, $profile_status);

        if(!isset($profile_data['id'])) return EntityAPIUtils::init_error($student_data, 'Could not update profile status');
        return $student_data;
    }

    /**
     * 
     */
    public static function update_profile_image($student_data) {
        // A student can have only one image, so we first delete any existing images
        $existing_images = EntityAPI::find_by_criteria('partyimage', array('file_party' => $student_data['id']));
        foreach ($existing_images as $student_image) {
            EntityAPI::do_delete_entity_impl($student_image, $student_image['id']) ;    
        }
        return FileAPI::do_files_upload($student_data, 'party_images');
    }

}

?>