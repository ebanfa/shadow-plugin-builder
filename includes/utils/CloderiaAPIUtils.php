<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CloderiaAPIUtils {

    /**
     *
     */
    public static function is_valid_form() {
        // Ensure we have a valid form
        if(!isset($_POST['submitted']) && 
        	!isset($_POST['post_nonce_field']) && 
        	!wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            return false;
        }
        return true;
    }

    /**
     *
     */
    public static function do_before_ajax_edit() {
        // Ensure we have a valid form
        if(!CloderiaAPIUtils::is_valid_form() || !isset($_POST['edit_mode'])) {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }
    }

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
	            if(CloderiaAPIUtils::is_invalid_string($entity_data['entity_code'])) {
	                $entity_data['entity_code'] = CloderiaAPIUtils::get_token(8);
	            }
	        }
            CloderiaAPIUtils::copy_fields_to_post($entity_data);
            // Post information
            $post_information = array('post_title' => $entity_data['name'], 'post_content' => esc_attr($entity_data['name']), 
                'post_type' => $entity_data['entity_post_name'], 'post_status' => 'publish');
            // Insert the entity into the database
            $entity_data['id'] = wp_insert_post($post_information, true);
        } else {
            CloderiaAPIUtils::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $post_information = array('ID' => $entity_data['id'], 'post_title' => $entity_data['name'],
                'post_content' => esc_attr($entity_data['name']), 'post_type' => $entity_data['entity_post_name'], 'post_status' => 'publish');
            // Update the entity
            $entity_data['id'] = wp_update_post($post_information, true);
        }

        if(is_wp_error($entity_data['id'])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = $post_id->get_error_message();
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_edit($entity_data) {
    	// Process the results of the order creation
        if(!$entity_data['has_errors']) {

            $redirect_url = get_site_url() . '/page?type=entity&artifact='. $entity_data['entity_artifact_name'] . '&id=' . $entity_data['id'] . '&page_action=view';
            // Process the parent id, if any
            if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) 
            {
                $redirect_url = $redirect_url . '&parent_id=' . sanitize_text_field($_REQUEST['parent_id']);
                $redirect_url = $redirect_url . '&parent_artifact=' . sanitize_text_field($_REQUEST['parent_artifact']);
                $redirect_url = $redirect_url . '&parent_field=' . sanitize_text_field($_REQUEST['parent_field']);
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => $entity_data['message']));
        }
    }

    /**
     *
     */
    public static function do_before_ajax_find() {
        if(!isset($_POST['form'][2]) && !isset($_POST['form'][0]) && !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
    }

    /**
     *
     */
    public static function build_entity_query($entity_post_name, $entity_fields, $is_global) {
        $meta_array = array();
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          if(in_array($name, $entity_fields)){
              $value = sanitize_text_field($field['value']);
              $field_array = array();
              $field_array['key'] = $name;
              $field_array['value'] = $value;
              array_push($meta_array, $field_array);
          }
        }

        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => $entity_post_name, 'meta_query' => $meta_array);

        if ($is_global && !current_user_can('administrator')) {
            // Filter the results for non admin users
            $business_unit = BusinessUnit::get_current_user_business_unit();
            if(isset($business_unit['id'])) {
                $user_query_param = array('key' => 'business_unit', 'value' => $business_unit['id']);
                array_push($queryArgs['meta_query'], $user_query_param); 
            }
        }
        return $queryArgs;
    }


    /**
     *
     */
    public static function do_before_ajax_delete() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Entity identifier missing"));
        }
    }

    /**
     *
     */
    public static function do_after_ajax_delete($post_obj) {
        if ($post_obj) {
            $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => 'Error deleting entity'));
        }
    }


    /**
     *
     */
    public static function get_by_id($id){
        $entity_data = array();
        $post_obj = get_post($id);
        return $post_obj;
    }

    /**
     *
     */
    public static function get_status_by_code($status_type, $status_code){
        // Load the status
        $status_data = array();
        $statusQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => $status_type,
            'meta_query' => array(array('key' => 'entity_code', 'value' => $status_code)));
        $statusQuery = new WP_Query($statusQueryArgs);
        while ($statusQuery->have_posts()) : $statusQuery->the_post();
            $status = $statusQuery->post;
            $status_data['id'] = $status->ID;
            $status_data['entity_code'] = get_post_meta($status->ID, 'entity_code', true);
            $status_data['name'] = get_post_meta($status->ID, 'name', true);
        endwhile;
        return $status_data;
    }

     /**
     *
     */
    public static function get_entity_by_meta($entity_post_name, $meta_key, $meta_value){
        // Load the entity
        $entity_data = array();
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => $entity_post_name,
            'meta_query' => array(array('key' => $meta_key, 'value' => $meta_value)));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = $entity;
        endwhile;
        return $entity_data;
    }

    /**
     *
     */
    public static function copy_fields_to_post($entity_data){
        // Add each array element into the POST array
        // This is required the custom post type persistence manager
        foreach ($entity_data as $field_name => $field_value) {
            $_POST[$field_name] = $field_value;
        }
    }

}

?>