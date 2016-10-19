<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorDisplayAjaxRequestProcessor {

    /**
     * 
     */
    public static function edit_entity_ajax() {
    	$tutor_data = array();
    	// 1. Validate the provided data
        if(!isset($_POST['display_action']) || !isset($_POST['id'])) 
            return EntityAPIUtils::init_error($tutor_data, 'A display action must be specified');
        // 2. Load the tutor data
        $tutor_data = TutorAPI::get_by_id(sanitize_text_field($_POST['id']));
        if(!isset($tutor_data['id']))
            return EntityAPIUtils::init_error($tutor_data, 'Tutor not found');
        // 3. Process the display action
        $display_action = sanitize_text_field($_POST['display_action']);
        if($display_action == 'rate_tutor') return self::rate_tutor($tutor_data);
        if($display_action == 'update_password') return self::update_password($tutor_data);
        if($display_action == 'deactivate_account') return self::deactivate_account($tutor_data);
        if($display_action == 'update_profile_image') return self::update_profile_image($tutor_data);
        // Illegal operation
    	return EntityAPIUtils::init_error($tutor_data, 'Invalid display action specified');
    }

    /**
     * 
     */
    public static function rate_tutor($tutor_data) {
        if(!isset($_POST['rating']) || !isset($_POST['description'])) 
            return EntityAPIUtils::init_error($tutor_data, 'Invalid review data');
        // 1 Get the review party
        $rating = sanitize_text_field($_POST['rating']);
        $description = sanitize_text_field($_POST['description']);
        $reviewing_party_data = UserPartyAPI::get_current_user_party();
        
        $rating_data = TutorAPI::do_rating($tutor_data, $reviewing_party_data, $rating, $description);
        if(!isset($rating_data['id'])) return EntityAPIUtils::init_error($rating_data, 'Could not rate party');
        return $tutor_data;
    }

    /**
     * 
     */
    public static function update_password($tutor_data) {
        if(!isset($_POST['password'])) return EntityAPIUtils::init_error($tutor_data, 'A password must be specified');

        $user_data = UserPartyAPI::get_party_user($tutor_data['id']);
        if(!isset($user_data['id'])) return EntityAPIUtils::init_error($tutor_data, 'User not found');
        
        wp_set_password($password, $user_data['id']);
        return $tutor_data;
    }

    /**
     * 
     */
    public static function deactivate_account($tutor_data) {
        // 1. Validate the provided data
        if(!isset($_POST['deactivate_action']))  return EntityAPIUtils::init_error($student_data, 'Invalid profile status');

        $deactivate_action = sanitize_text_field($_POST['deactivate_action']);
        if($deactivate_action == 'activate') $profile_status = 'A';
        if($deactivate_action == 'deactivate') $profile_status = 'I';
        $profile_data = PartyProfileAPI::do_update_status($student_data, $profile_status);

        if(!isset($profile_data['id'])) return EntityAPIUtils::init_error($student_data, 'Could not update profile status');
        return $student_data;
        //
    }

    /**
     * 
     */
    public static function update_profile_image($tutor_data) {
        // A tutor can have only one image, so we first delete any existing images
        $existing_images = EntityAPI::find_by_criteria('partyimage', array('file_party' => $tutor_data['id']));
        foreach ($existing_images as $tutor_image) {
            EntityAPI::do_delete_entity_impl($tutor_image, $tutor_image['id']) ;    
        }
        return FileAPI::do_files_upload($tutor_data, 'party_images');
    }

}

?>