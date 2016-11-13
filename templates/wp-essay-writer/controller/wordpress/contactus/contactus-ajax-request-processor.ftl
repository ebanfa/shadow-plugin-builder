<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContactUsAjaxRequestProcessor {

    /**
     * 
     */
    public static function create_entity_ajax($entity_data) {
    	/*$contact_data = array();*/
    	// 1. Validate the provided data
        /*if(!isset($_POST['subject']) || !isset($_POST['email']) || !isset($_POST['message'])) 
            return EntityAPIUtils::init_error($contact_data, 'Invalid contact data provided');*/
    	// 2. Build the content user data
        /*$contact_data['name'] = sanitize_text_field($_POST['subject']);
        $contact_data['email'] = sanitize_text_field($_POST['email']);
        $contact_data['description'] = sanitize_text_field($_POST['message']);*/
        $contact_data = ContactRequestAPI::do_create_entity($entity_data);
    	return $contact_data;
    }

}

?>