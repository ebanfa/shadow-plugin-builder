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
    public static function do_before_ajax_edit($entity_data) {
        // Ensure we have a valid form
        if(!CloderiaAPIUtils::is_valid_form() || !isset($_POST['edit_mode'])) {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function build_entity_data_from_post($entity_data){
        // Extract the edit mode
        $entity_data['edit_mode'] = true;
        if (sanitize_text_field($_POST['edit_mode']) == 'edit') {
            $entity_data['edit_mode'] = false;
        }
        if($entity_data['edit_mode']) {
        	//Process entity create form fields
        	foreach ($entity_data['entity_fields'] as $field_data) {
        		if($field_data['is_form_field'] === 'Y' && $field_data['is_create_field'] === 'Y') {
        			$entity_data = CloderiaAPIUtils::build_entity_field_from_post($field_data, $entity_data);
        		}
        	}
        	// Process non global entity data
        	if($entity_data['is_global_entity'] === 'N'){
	            $business_unit = BusinessUnitAPI::get_current_user_business_unit();
	            if (isset($business_unit['id'])) {
	                $entity_data['business_unit'] = $business_unit['id'];
	            }
        	}
        }
        else {
        	// Get the id
            if (isset($_POST['id']))
                $entity_data['id'] = sanitize_text_field($_POST['id']);
            //Process entity create form fields
        	foreach ($entity_data['entity_fields'] as $field_name => $field_data) {

        		if($field_data['is_form_field'] === 'Y' && $field_data['is_edit_field'] === 'Y') {
        			$entity_data = CloderiaAPIUtils::build_entity_field_from_post($field_data, $entity_data);
        		}
        	}
        }
        return $entity_data;
    }
    /**
     *
     */
    public static function build_entity_field_from_post($field_data, $entity_data){
    	//Process date field
		if($field_data['data_type'] === 'date' ) {
			if(CloderiaAPIUtils::is_invalid_string($_POST[$field_data['name']])) {
                $entity_data[$field_data['name']] = date("Y-m-d H:i:s");
            }
            else{
               	if (isset($_POST[$field_data['name']]))
    				$entity_data[$field_data['name']] = sanitize_text_field($_POST[$field_data['name']]);
            }
		}
		// Process non date fields
		else {
			// Process status field
			if( $field_data['name'] === 'status'){
	            if(!isset($entity_data['status'])) {
	                $status = CloderiaAPIUtils::get_status_by_code($field_data['data_type'], 'PENDING');
	                $entity_data['status'] = $status['id'];
	            }
			}
			else {

               	if (isset($_POST[$field_data['name']])){
    				$entity_data[$field_data['name']] = sanitize_text_field($_POST[$field_data['name']]);
               	}
			}
		}
		return $entity_data;
    }

    /**
     *
     */
    public static function validate_entity_data($entity_data) {
   	   $entity_data['error_fields'] = array();
       $entity_data['has_errors'] = false;
       if($entity_data['edit_mode']) {
        	//Process entity create form fields
        	foreach ($entity_data['entity_fields'] as $field_data) {
        		if($field_data['is_required'] === 'Y' && $field_data['is_create_field'] === 'Y') {
        			CloderiaAPIUtils::validate_entity_field($field_data, $entity_data);
        		}
        	}
        }
        else { 
	    	//Process entity edit form fields
        	foreach ($entity_data['entity_fields'] as $field_data) {
        		if($field_data['is_required'] === 'Y' && $field_data['is_edit_field'] === 'Y') {
        			CloderiaAPIUtils::validate_entity_field($field_data, $entity_data);
        		}
        	}
        }
        if(isset($entity_data['has_errors'])){
            $entity_data['error_message'] = 'The following fields are required: '.implode(', ', $entity_data['error_fields']);
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function validate_entity_field($field_data, $entity_data) {
    	// If the field is not present we flag an error
		if(empty($entity_data[$field_data['name']])){
        	$entity_data['has_errors'] = true; 
            array_push($entity_data['error_fields'], $field_data['name']);
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

        	if(isset($entity_data['redirect_url'])) {
        		$redirect_url = $entity_data['redirect_url'];
        	} else {
            	$redirect_url = get_site_url() . '/page?type=entity&artifact='. $entity_data['entity_artifact_name'] . '&id=' . $entity_data['id'] . '&page_action=view';
        	}
            // Process the parent id, if any
            if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) 
            {
                $redirect_url = $redirect_url . '&parent_id=' . sanitize_text_field($_REQUEST['parent_id']);
                $redirect_url = $redirect_url . '&parent_artifact=' . sanitize_text_field($_REQUEST['parent_artifact']);
                $redirect_url = $redirect_url . '&parent_field=' . sanitize_text_field($_REQUEST['parent_field']);
                if(isset($_REQUEST['parent_param'])) $redirect_url = $redirect_url . sanitize_text_field(urldecode($_REQUEST['parent_param']));
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => $entity_data['message']));
        }
    }

    /**
     *
     */
    public static function do_before_ajax_find($entity_data) {
        if(!isset($_POST['form'][2]) && !isset($_POST['form'][0]) && !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        
        $search_results = array();
        $query_args = CloderiaAPIUtils::build_query_from_form_data($entity_data);
        $entity_query = new WP_Query($query_args);

        while ($entity_query->have_posts()) : $entity_query->the_post();
            $entity = $entity_query->post;
            array_push($search_results, CloderiaAPIUtils::entity_to_data($entity_data, $entity, false));
        endwhile;
        wp_reset_postdata();

        return $search_results;
    }

    /**
     *
     */
    public static function do_after_ajax_find($entity_data, $search_results) {
        wp_send_json_success($search_results);
    }

    /**
     *
     */
    public static function build_query_from_form_data($entity_data) {
        $criteria_data = array();
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          if(array_key_exists($name, $entity_data['entity_fields'])){
              $value = sanitize_text_field($field['value']);
              $criteria_data[$name] = $value;
          }
        }
        return CloderiaAPIUtils::build_query_from_criteria($entity_data, $criteria_data);
    }

    /**
     *
     */
    public static function get_query_form_field($field_name) {
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          if($name === $field_name){
              return sanitize_text_field($field['value']);
              $criteria_data[$name] = $value;
          }
        }
        return false;
    }

    /**
     *
     */
    public static function get_query_string_field($field_name) {
    	if(isset($_REQUEST[$field_name])) {
    		return sanitize_text_field($_REQUEST[$field_name]);
    	}
        return false;
    }

    /**
     *
     */
    public static function build_query_from_criteria($entity_data, $criteria_data) {
        $meta_array = array();
        foreach($criteria_data as $field_name => $field_value){
          if(array_key_exists($field_name, $entity_data['entity_fields'])){
              $field_array = array();
              $field_array['key'] = $field_name;
              $field_array['value'] = $field_value;
              array_push($meta_array, $field_array);
          }
        }
        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => $entity_data['entity_post_name'], 'meta_query' => $meta_array);

        if ($entity_data['is_global_entity'] === 'N' && !current_user_can('administrator')) {
            // Filter the results for non admin users
            $business_unit = BusinessUnitAPI::get_current_user_business_unit();
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
    public static function do_before_ajax_delete($entity_data) {
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
        return $entity_data;
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Entity identifier missing"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post_obj = wp_delete_post($id);
        if ($post_obj) {
           $entity_data['has_errors'] = false;
        } else {
            $entity_data['has_errors'] = true;
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_delete($entity_data) {
        if (!$entity_data['has_errors']) {
            $redirect_url = get_site_url() . '/page?type=entity&artifact='. $entity_data['entity_artifact_name'] .'&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => 'Error deleting entity'));
        }
    }

    /**
     *
     */
    public static function get_entity_by_id($entity_data, $id){
        return CloderiaAPIUtils::entity_to_data($entity_data, get_post($id), false);
    }

    /**
     *
     */
    public static function get_entity_by_code($entity_data, $entity_code){
        return CloderiaAPIUtils::get_entity_by_meta($entity_data, 'entity_code', $entity_code);
    }

    /**
     *
     */
    public static function get_entity_by_meta($entity_data, $meta_key, $meta_value){
        // Load the entity
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => $entity_data['entity_post_name'],
            'meta_query' => array(array('key' => $meta_key, 'value' => $meta_value)));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = CloderiaAPIUtils::entity_to_data($entity_data, $entity, false);
        endwhile;
        return $entity_data;
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
     * Get all parts with id's in the list provided
     */
    public static function find_by_ids($entity_data, $party_ids) {
        $search_results = array();
        if($party_ids){
            $query_args = array('post_type' => $entity_data['entity_post_name'], 'post__in' => $party_ids);
            $entity_query = new WP_Query($query_args);
            
            while ($entity_query->have_posts()) : $entity_query->the_post();
                $entity = $entity_query->post;
                array_push($search_results, CloderiaAPIUtils::entity_to_data($entity_data, $entity, false));
            endwhile;
            wp_reset_postdata();
        }
        
        return $search_results;
    }

    /**
     * 
     */
    public static function find_by_criteria($entity_data, $criteria_data) {
        $search_results = array();
        $query_args = CloderiaAPIUtils::build_query_from_criteria($entity_data, $criteria_data);
        $entity_query = new WP_Query($query_args);
        
        while ($entity_query->have_posts()) : $entity_query->the_post();
            $entity = $entity_query->post;
            array_push($search_results, CloderiaAPIUtils::entity_to_data($entity_data, $entity, false));
        endwhile;
        wp_reset_postdata();
        
        return $search_results;
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

    /**
     *
     */
    public static function entity_to_data($entity_data, $entity, $load_deps) {
        $entity_data['id'] = $entity->ID;
        //Process entity create form fields
    	foreach ($entity_data['entity_fields'] as $field_data) {
    		if($field_data['is_relationship_field'] === 'N') {
    			$entity_data[$field_data['name']] = get_post_meta($entity->ID, $field_data['name'], true);
    		}
    		if($field_data['is_relationship_field'] === 'Y') {
    			$related_entity_id = get_post_meta($entity->ID, $field_data['name'], true);
		        $entity_data[$field_data['name']] = $related_entity_id;
		        // Get the related post
		        $related_entity = get_post($related_entity_id);
		        if($related_entity) {
			        $entity_data[$field_data['name'] . '_txt'] = get_post_meta($related_entity->ID, 'name', true);
			        $entity_data[$field_data['name'] . '_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
		        }
    		}
    	}
        return $entity_data;
    }

	// Function for basic field validation (present and neither empty nor only white space
	/**
	 *
	 */
	public static function is_invalid_string($string){
	    return (!isset($string) || trim($string)==='');
	}

}

?>