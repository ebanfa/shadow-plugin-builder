<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderAjaxRequestProcessor {

    /**
     * 
     */
    public static function create_entity_ajax($entity_data) {
        if(!isset($_POST['email'])) 
            return EntityAPIUtils::init_error($entity_data, 'A valid email address is required');
        // Process the order party
        $entity_data['email'] = sanitize_text_field($_POST['email']);
        $party_data = ContentOrderUserAPI::do_get_party($entity_data['email'], true, true);

        if(isset($_POST['post_question'])) $entity_data['post_question'] = sanitize_text_field($_POST['post_question']);

        if($party_data['has_errors']) return $party_data;
        // Create the order
    	$entity_data = ContentOrderAPI::do_create_contentorder($entity_data, $party_data);
        if($entity_data['has_errors']) return $entity_data;
        // Process any files uploaded
        $entity_data = FileAPI::do_files_upload($entity_data, 'order_attachment');
        // Send out the order notification emails
        MailAPI::do_send_order_created_email($entity_data, array());
        return $entity_data;
    }

    /**
     * 
     */
    public static function edit_entity_ajax($entity_data) {
        $entity_data = ContentOrderAPI::do_edit_contentorder($entity_data);
        if($entity_data['has_errors']) return $entity_data;
        // Process any files uploaded
        $entity_data = FileAPI::do_files_upload($entity_data, 'order_attachment');
        // Send out the order notification emails
        MailAPI::do_send_order_edited_email($entity_data, array());
        return $entity_data;
    }

}

?>