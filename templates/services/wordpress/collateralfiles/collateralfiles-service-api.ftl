<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CollateralFilesAPI {
    
    /**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_create_sb_colfiles_ajax', 'CollateralFilesAPI::create_sb_colfiles_ajax');
        add_action('wp_ajax_nopriv_create_sb_colfiles_ajax', 'CollateralFilesAPI::create_sb_colfiles_ajax');

        add_action('wp_ajax_edit_sb_colfiles_ajax', 'CollateralFilesAPI::edit_sb_colfiles_ajax');
        add_action('wp_ajax_nopriv_edit_sb_colfiles_ajax', 'CollateralFilesAPI::edit_sb_colfiles_ajax');

        add_action('wp_ajax_view_sb_colfiles_ajax', 'CollateralFilesAPI::view_sb_colfiles_ajax');
        add_action('wp_ajax_nopriv_view_sb_colfiles_ajax', 'CollateralFilesAPI::view_sb_colfiles_ajax');

        add_action('wp_ajax_find_sb_colfiles_ajax', 'CollateralFilesAPI::find_sb_colfiles_ajax');
        add_action('wp_ajax_nopriv_find_sb_colfiles_ajax', 'CollateralFilesAPI::find_sb_colfiles_ajax');
        
        add_action('wp_ajax_delete_sb_colfiles_ajax', 'CollateralFilesAPI::delete_sb_colfiles_ajax');
        add_action('wp_ajax_nopriv_delete_sb_colfiles_ajax', 'CollateralFilesAPI::delete_sb_colfiles_ajax');

    }
    
    /**
     *
     */
    public static function create_sb_colfiles_ajax() {
        // Ensure we have a valid form
        if(!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure the edit mode has also bee set before we proceed
        if(!isset($_POST['edit_mode'])) {
           wp_send_json_error(array('message' => "<span class='error'>Invalid artifact operation!</span>"));
        }
        // Build the entity data form $_POST
        $entity_data = CollateralFilesAPI::build_entity_data_from_post();
        // Validate the posted data
        $entity_data = CollateralFilesAPI::validate_entity_data($entity_data);

        if($entity_data['has_errors']) {
            // Form did not validate
            wp_send_json_error(array('message' => $entity_data['error_message']));
        }
        // Form has validated so we create the order
        $entity_data = CollateralFilesAPI::do_create_entity($entity_data);
        // Process the results of the order creation
        if(!$entity_data['has_errors']) {
            // If the user is not logged in we
            // will redirect to the login page
            // else we redirect to the order details page
            if ($entity_data['requires_redirect']) {
                $redirect_url = $entity_data['redirect_url'];
            } else {
                $redirect_url = get_site_url() . '/page?type=entity&artifact=collateralfiles&id=' . $entity_data['id'] . '&page_action=view';
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>//window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => '<span>' . $entity_data['message'] . '</span>'));
        }
    }

    /**
     *
     */
    public static function build_entity_data_from_post(){
        $entity_data = array();
        // Process redirect
        $entity_data['requires_redirect'] = true;
        if (is_user_logged_in()) { 
            $entity_data['requires_redirect'] = false;
        } 
        // Extract the edit mode
        $entity_data['edit_mode'] = true;
        if (sanitize_text_field($_POST['edit_mode']) == 'edit') {
            $entity_data['edit_mode'] = false;
        }
        if($entity_data['edit_mode']){
            if (isset($_POST['collateral']))
                $entity_data['collateral'] = sanitize_text_field($_POST['collateral']);
            if (isset($_POST['name']))
                $entity_data['name'] = sanitize_text_field($_POST['name']);
            if (isset($_POST['description']))
                $entity_data['description'] = sanitize_text_field($_POST['description']);
            if (isset($_FILES['collateral_attachment[]']))
                $entity_data['collateral_attachment'] = $_FILES['collateral_attachment[]'];
        }
        else {
            if (isset($_POST['id']))
                $entity_data['id'] = sanitize_text_field($_POST['id']);
            if (isset($_POST['collateral']))
                $entity_data['collateral'] = sanitize_text_field($_POST['collateral']);
            if (isset($_POST['name']))
                $entity_data['name'] = sanitize_text_field($_POST['name']);
            if (isset($_POST['description']))
                $entity_data['description'] = sanitize_text_field($_POST['description']);
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
            if(empty($entity_data['collateral'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'collateral');
            }
           if(empty($entity_data['name'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'name');
            }
            if(empty($entity_data['description'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'description');
            }
            if(isset($entity_data['has_errors'])){
                $entity_data['error_message'] = 'The following fields are required: '.implode(', ', $entity_data['error_fields']);
            }
        }
        else { 

            if(empty($entity_data['collateral'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'collateral');
            }
            if(empty($entity_data['name'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'name');
            }
            if(empty($entity_data['description'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'description');
            }
            if(empty($entity_data['collateral_attachment[]'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], 'collateral_attachment');
            }
            if(isset($entity_data['has_errors'])){
                $entity_data['error_message'] = 'The following fields are required: '.implode(', ', $entity_data['error_fields']);
            }
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_entity($entity_data){

        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
            if(CloderiaServiceUtils::is_invalid_string($entity_data['entity_code'])) {
                $entity_data['entity_code'] = ContentSecurityAPI::get_token(8);
            }}
            
            CollateralFilesAPI::copy_fields_to_post($entity_data);
            // Post information
            $post_information = array('post_title' => $entity_data['name'], 
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => 'sb_colfiles', 'post_status' => 'publish');
            // Insert the entity into the database
            $entity_data['id'] = wp_insert_post($post_information, true);
            
        } else {
            CollateralFilesAPI::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $post_information = array('ID' => $entity_data['id'], 
                'post_title' => $entity_data['name'],
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => 'sb_colfiles', 'post_status' => 'publish');
            // Update the entity
            $entity_data['id'] = wp_update_post($post_information, true);
        }

        if(is_wp_error($entity_data['id'])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = $post_id->get_error_message();
        }
        $uploaded_files = ${entity.name}API::do_files_upload($entity_data, 'collateral_attachment[]');
        return $entity_data;
    }



    /**
     *
     */
    public static function find_sb_colfiles_ajax() {
        $current_user = wp_get_current_user();

        $meta_array = array();
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          $value = sanitize_text_field($field['value']);
          $field_array = array();
          $field_array['key'] = $name;
          $field_array['value'] = $value;
          array_push($meta_array, $field_array);
        }
        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => 'sb_colfiles', 'meta_query' => $meta_array);
        $count = 0;
        $searchResults = array();
        $entityQuery = new WP_Query($queryArgs);

        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            array_push($searchResults, CollateralFilesAPI::entity_to_data($entity, false));
            $count++;
        endwhile;
        wp_reset_postdata();

        wp_send_json_success($searchResults);
    }

    /**
     *
     */
    public static function delete_sb_colfiles_ajax() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Entity identifier missing</span>"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post_obj = wp_delete_post($id);
       
        // Process the results of the order creation
        if ($post_obj) {
            $redirect_url = get_site_url() . '/page?type=entity&artifact=collateralfiles&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => '<span>Error deleting entity</span>'));
        }
    }

    /**
     *
     */
    public static function get_by_code($entity_code){
        // Load the entity
        $entity_data = array();
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => 'sb_colfiles',
            'meta_query' => array(array('key' => 'entity_code', 'value' => $entity_code)));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = ${entity.name}API::entity_to_data($entity);
        endwhile;
        return $entity_data;
    }

    /**
     *
     */
    public static function get_by_id($id){
        $entity_data = array();
        $post_obj = get_post($id);
        return CollateralFilesAPI::entity_to_data($post_obj, false);
    }

    /**
     *
     */
    public static function entity_to_data($entity, $load_deps) {
        $entity_data = array();
        $entity_data['id'] = $entity->ID;
        $entity_data['entity_code'] = get_post_meta($entity->ID, 'entity_code', true);


        $related_entity_id = get_post_meta($entity->ID, 'collateral', true);
        $entity_data['collateral'] = $related_entity_id;
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['collateral_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['collateral_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
        $entity_data['name'] = get_post_meta($entity->ID, 'name', true);

        $entity_data['description'] = get_post_meta($entity->ID, 'description', true);

        $entity_data['file_url'] = get_post_meta($entity->ID, 'file_url', true);

        $entity_data['file_size'] = get_post_meta($entity->ID, 'file_size', true);

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
    

    /**
     *
     */
    public static function do_files_upload($entity_data, $file_upload_param) {
	$count = 0;
	$files_uploaded = array();
	$current_user = wp_get_current_user();
        $user_party = PartyAPI::get_user_party($current_user->ID);
	if(!empty($_FILES)) 
	{

	foreach ($_FILES[$file_upload_param]['name'] as $filename) 
	{
	    if ($_FILES[$file_upload_param]['tmp_name'][$count] != '') 
	    {
		// Use the WordPress API to upload the file
		$upload = wp_upload_bits($_FILES[$file_upload_param]['name'][$count], 
		    null, file_get_contents($_FILES[$file_upload_param]['tmp_name'][$count]));
		if(isset($upload['error']) && $upload['error'] != 0) {
		    wp_die('There was an error uploading your file. The error is: ' . $upload['error']);
		} else {

		    $file_size = $_FILES[$file_upload_param]["size"][$count];
		    $file_size = $file_size / 1024;
		    $file_size = number_format((float)$file_size, 2, '.', ''); 
		    $date_obj = new DateTime();
		    $file_obj = array(
			'file_name' => $_FILES[$file_upload_param]['name'][$count], 
			'file_code' => get_token(12),
			'file_url' => $upload['url'],
			'file_size' => $file_size,
			'file_owner' => $user_party['id'],
			'file_created_date' => $date_obj->format('M j, Y, H:i'),
			'file_type' => 'FILE',
			'file_mime_type' => '',
			'file_description' => '',);
		
		    update_post_meta($entity_dat['id'], 'file_url', $file_obj['file_url']);  
		    update_post_meta($entity_dat['id'], 'file_size', $file_obj['file_size']);  
		    update_post_meta($entity_dat['id'], 'uploaded_date', $file_obj['file_created_date']);  
		    update_post_meta($entity_dat['id'], 'file_type', $file_obj['file_type']);  
		    update_post_meta($entity_dat['id'], 'mime_type', $file_obj['file_mime_type']);  
		   

		    array_push($files_uploaded, $file_obj);
		} // end 

	    } 
	    $count++;
	}
	} 
	return $files_uploaded;
    }

    /**
     *
     */
    public static function get_content_files($file_codes) {
	$content_files  = array();
	foreach ($file_codes as $file_code) 
	{
	    $fileQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => 'content_file',
	    'meta_query' => array(array('key' => 'cf_file_code', 'value' => $file_code)));
	    $fileQuery = new WP_Query($fileQueryArgs);
	    while ($fileQuery->have_posts()) : $fileQuery->the_post();
	        $content_file = $fileQuery->post;
	        $file_obj = array(
           	'file_name' => get_post_meta($content_file->ID, 'name', true), 
           	'file_code' => get_post_meta($content_file->ID, 'entity_code', true),
           	'file_url' => get_post_meta($content_file->ID, 'file_url', true),
           	'file_size' => get_post_meta($content_file->ID, 'file_size', true),
           	'file_owner' => get_post_meta($content_file->ID, 'owner', true),
           	'file_created_date' => get_post_meta($content_file->ID, 'uploaded_date', true),
           	'file_type' => get_post_meta($content_file->ID, 'file_type', true),
           	'file_mime_type' => get_post_meta($content_file->ID, 'mime_type', true),
           	'file_description' => get_post_meta($content_file->ID, 'description', true),);
	        $order_doctype = get_post_meta($content_file->ID, 'doctype_name', true);
	        array_push($content_files, $file_obj);
	    endwhile; wp_reset_postdata(); 
	}
	return $content_files;

   } 
}
