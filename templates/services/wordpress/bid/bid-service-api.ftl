<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ${entity.name}API {
    
    public static $entity_fields = array(
<#list entity.fields as field>
        '${field.name}',
</#list>   
   );
    /**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_create_${entity.postName}_ajax', '${entity.name}API::create_${entity.postName}_ajax');
        add_action('wp_ajax_nopriv_create_${entity.postName}_ajax', '${entity.name}API::create_${entity.postName}_ajax');

        add_action('wp_ajax_edit_${entity.postName}_ajax', '${entity.name}API::edit_${entity.postName}_ajax');
        add_action('wp_ajax_nopriv_edit_${entity.postName}_ajax', '${entity.name}API::edit_${entity.postName}_ajax');

        add_action('wp_ajax_view_${entity.postName}_ajax', '${entity.name}API::view_${entity.postName}_ajax');
        add_action('wp_ajax_nopriv_view_${entity.postName}_ajax', '${entity.name}API::view_${entity.postName}_ajax');

        add_action('wp_ajax_find_${entity.postName}_ajax', '${entity.name}API::find_${entity.postName}_ajax');
        add_action('wp_ajax_nopriv_find_${entity.postName}_ajax', '${entity.name}API::find_${entity.postName}_ajax');

        add_action('wp_ajax_delete_${entity.postName}_ajax', '${entity.name}API::delete_${entity.postName}_ajax');
        add_action('wp_ajax_nopriv_delete_${entity.postName}_ajax', '${entity.name}API::delete_${entity.postName}_ajax');
        
        add_action('wp_ajax_publish_bid_ajax', '${entity.name}API::publish_bid_ajax');
        add_action('wp_ajax_nopriv_publish_bid_ajax', '${entity.name}API::publish_bid_ajax');

        add_action('wp_ajax_accept_bid_ajax', '${entity.name}API::accept_bid_ajax');
        add_action('wp_ajax_nopriv_accept_bid_ajax', '${entity.name}API::accept_bid_ajax');
       
        add_action('wp_ajax_hold_funds_ajax', '${entity.name}API::hold_funds_ajax');
        add_action('wp_ajax_nopriv_hold_funds_ajax', '${entity.name}API::hold_funds_ajax');
        
        add_action('wp_ajax_release_funds_ajax', '${entity.name}API::release_funds_ajax');
        add_action('wp_ajax_nopriv_release_funds_ajax', '${entity.name}API::release_funds_ajax');
    }
    
    /**
     *
     */
    public static function create_${entity.postName}_ajax() {
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
        $entity_data = ${entity.name}API::build_entity_data_from_post();
        // Validate the posted data
        $entity_data = ${entity.name}API::validate_entity_data($entity_data);

        if($entity_data['has_errors']) {
            // Form did not validate
            wp_send_json_error(array('message' => $entity_data['error_message']));
        }
        // Form has validated so we create the order
        $entity_data = ${entity.name}API::do_create_entity($entity_data);
        // Process the results of the order creation
        if(!$entity_data['has_errors']) {
            // If the user is not logged in we
            // will redirect to the login page
            // else we redirect to the order details page
            if ($entity_data['requires_redirect']) {
                $redirect_url = $entity_data['redirect_url'];
            } else {
                $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $entity_data['id'] . '&page_action=view';
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
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
    <#list entity.fields as field>
        <#if field.isFormField == "Y" && field.createField == "Y">
            <#if field.dataType == "date">
            if(CloderiaServiceUtils::is_invalid_string($_POST['${field.name}'])) {
                $entity_data['${field.name}'] = date("Y-m-d H:i:s");
            }
            else{
               $entity_data['${field.name}'] = sanitize_text_field($_POST['${field.name}']);
            }
            <#else>
            if (isset($_POST['${field.name}']))
                $entity_data['${field.name}'] = sanitize_text_field($_POST['${field.name}']);
            </#if>
        </#if>
    </#list>
        }
        else {
            if (isset($_POST['id']))
                $entity_data['id'] = sanitize_text_field($_POST['id']);
    <#list entity.fields as field>
        <#if field.isFormField == "Y" && field.editField == "Y">
            if (isset($_POST['${field.name}']))
                $entity_data['${field.name}'] = sanitize_text_field($_POST['${field.name}']);
        </#if>
    </#list>
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
	    <#list entity.fields  as field>
            <#if field.required == "Y" && field.createField == "Y">
            if(empty($entity_data['${field.name}'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], '${field.name}');
            }
            </#if>
	    </#list>
            if(isset($entity_data['has_errors'])){
                $entity_data['error_message'] = 'The following fields are required: '.implode(', ', $entity_data['error_fields']);
            }
        }
        else { 

	    <#list entity.fields  as field>
            <#if field.required == "Y" && field.editField == "Y">
            if(empty($entity_data['${field.name}'])){
            	$entity_data['has_errors'] = true; 
                array_push($entity_data['error_fields'], '${field.name}');
            }
            </#if>
	    </#list>
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
<#if entity.global == "N"> 
        $current_user = wp_get_current_user();
        $user_party = PartyAPI::get_user_party($current_user->ID);
        $entity_data['owner'] = $user_party['id'];
</#if>

        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
            if(CloderiaServiceUtils::is_invalid_string($entity_data['entity_code'])) {
                $entity_data['entity_code'] = ContentSecurityAPI::get_token(8);
            }}
            <#list entity.fields as field>
                <#if field.name == "status">
            $status = ${entity.name}API::get_status_by_code('PENDING');
            $entity_data['status'] = $status['id'];
                </#if>
            </#list>
            
            ${entity.name}API::copy_fields_to_post($entity_data);
            // Post information
            $post_information = array('post_title' => $entity_data['name'], 
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => '${entity.postName}', 'post_status' => 'publish');
            // Insert the entity into the database
            $entity_data['id'] = wp_insert_post($post_information, true);
            
        } else {
            ${entity.name}API::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $post_information = array('ID' => $entity_data['id'], 
                'post_title' => $entity_data['name'],
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => '${entity.postName}', 'post_status' => 'publish');
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
    public static function find_${entity.postName}_ajax() {
        $current_user = wp_get_current_user();
        if(!isset($_POST['form'][2]) && !isset($_POST['form'][0]) && !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        $meta_array = array();
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          if(in_array($name, ${entity.name}API::$entity_fields)){
              $value = sanitize_text_field($field['value']);
              $field_array = array();
              $field_array['key'] = $name;
              $field_array['value'] = $value;
              array_push($meta_array, $field_array);
          }
        }
        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => '${entity.postName}', 'meta_query' => $meta_array);

        $count = 0;
        $searchResults = array();
        $entityQuery = new WP_Query($queryArgs);

        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            array_push($searchResults, ${entity.name}API::entity_to_data($entity, false));
            $count++;
        endwhile;
        wp_reset_postdata();

        wp_send_json_success($searchResults);
    }



    /**
     *
     */
    public static function delete_${entity.postName}_ajax() {
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
            $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => '<span>Error deleting entity</span>'));
        }
    }

    <#list entity.fields as field>
        <#if field.name == "status">
    /**
     *
     */
    public static function get_status_by_code($status_code){
        // Load the status
        $status_data = array();
        $statusQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => '${field.dataType}',
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
        </#if>
    </#list>
    
    /**
     *
     */
    public static function get_by_code($entity_code){
        // Load the entity
        $entity_data = array();
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => '${entity.postName}',
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
        return ${entity.name}API::entity_to_data($post_obj, false);
    }

    /**
     *
     */
    public static function entity_to_data($entity, $load_deps) {
        $entity_data = array();
        $entity_data['id'] = $entity->ID;
<#list entity.fields as field>
    <#if field.relationshipField == "N">
        $entity_data['${field.name}'] = get_post_meta($entity->ID, '${field.name}', true);
    </#if>

    <#if field.relationshipField == "Y">
        $related_entity_id = get_post_meta($entity->ID, '${field.name}', true);
        <#if field.name == "owner">
        $user_party = PartyAPI::get_by_id($related_entity_id);
        $entity_data['${field.name}'] = $related_entity_id;
        $entity_data['owner_username'] = $user_party['user_name'];
        <#else>
        $entity_data['${field.name}'] = $related_entity_id;
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['${field.name}_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['${field.name}_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
        </#if>
    </#if>
</#list>
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
    public static function publish_bid_ajax(){
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Bid identifier missing</span>"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post = ${entity.name}API::get_by_id($id);
        if(isset($post['id'])){
           $status = ${entity.name}API::get_status_by_code('PUBLISHED');
           update_post_meta($post['id'], 'status', $status['id']);
        }
        else {
            wp_send_json_error(array('message' => "<span class='error'>Invalid bid identifier</span>"));
        }
        $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $post['id'] . '&page_action=view';
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
   }
   
   /**
    *
    */
   public static function can_accept_bid($bid_id){
        $bid = ${entity.name}API::get_by_id($bid_id);
        if(!isset($bid['id'])){
             return false;
        }
        // Only bids that are published can be accepted
        $status = BidStatusAPI::get_by_id($bid['status']);
        if($status['entity_code'] != 'PUBLISHED'){
            return false;
        }

        // Only the owner of the application can accept the bid
        $application = ApplicationAPI::get_by_id($bid['application']);
        if(!isset($application['id'])){
            return false;
        }

        $current_user = wp_get_current_user();
        $application_owner = $application['owner'];
        $party_user = PartyAPI::get_party_user($application_owner);

        if($current_user->ID != $party_user['id']){
            return false;
        }

        // And only if the application is published
        $application_status = ApplicationStatusAPI::get_by_id($application['status']);
        if(!isset($application_status['id'])){
            return false;
        }

        if($application_status['entity_code'] != 'PUBLISHED'){
            return false;
        }
        return true;
   }

   public static function can_disburse_to_client($bid_id, $party_id){
        $bid = ${entity.name}API::get_by_id($bid_id);
        if(!isset($bid['id'])){
            return false;
        }
        if($bid['owner'] == $party_id){
            return true;
        }
        return false;
   }

   /**
    *
    */
   public static function accept_bid_ajax(){
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Bid identifier missing</span>"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post = ${entity.name}API::get_by_id($id);
        if(isset($post['id'])){
           // Mark the current bid as accepted
           $status = ${entity.name}API::get_status_by_code('ACCEPTED');
           update_post_meta($post['id'], 'status', $status['id']);
           
           // Find all other bids that belong to the parent bid and mark them as declined
           // Get the status for declined bids	
	   $declined_status = ${entity.name}API::get_status_by_code('DECLINED');
           
           // Sibling bids query
           $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post__not_in' => array($post['id']), 'post_type' => '${entity.postName}',
               'meta_query' => array(array('key' => 'application', 'value' => $post['application'])));
           $entityQuery = new WP_Query($entityQueryArgs);
           while ($entityQuery->have_posts()) : $entityQuery->the_post();
               $entity = $entityQuery->post;
               update_post_meta($entity->ID, 'status', $declined_status['id']); 
           endwhile;
           
           // Mark the parent application as sealed
           $sealed_application_status = ApplicationAPI::get_status_by_code('SEALED');
           update_post_meta($post['application'], 'status', $sealed_application_status['id']);
        }
        else {
            wp_send_json_error(array('message' => "<span class='error'>Invalid bid identifier</span>"));
        }
        $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $post['id'] . '&page_action=view';
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
   
   }

   /**
    *
    */
   public static function hold_funds_ajax(){
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('error_type' => 'data_error', 'message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('error_type' => 'data_error', 'message' => "Collateal file identifier missing"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post = ${entity.name}API::get_by_id($id);
        if(isset($post['id'])){
            // Find the bid
            if(!$post['amount'] > 0){
                wp_send_json_error(array('error_type' => "business_error", 'message' => "Invalid bid amount!"));
            }
            // Find the customer account
            $source_user = wp_get_current_user();
            $source_user_party = PartyAPI::get_user_party($source_user->ID);

            $destination_user = get_user_by('login', get_option('cp_admin_account'));
            $destination_user_party = PartyAPI::get_user_party($destination_user->ID);
            if(!isset($destination_user_party['id'])) {
                wp_send_json_error(array('error_type' => 'business_error', 'message' => "Cannot find funds destination user!"));
            }

            // Make the darn transfer
            $transfer_desc = 'Release of funds to holding account from '. $source_user_party['id'];
            $transfer_results = TransferAPI::transfer_funds($post['amount'], $source_user_party, $destination_user_party, $transfer_desc);      
            if($transfer_results['has_errors']){
                wp_send_json_error(array('error_type' => 'business_error', 'message' => $transfer_results['error_message'] . "!"));
            }

            // Update the status of the bid
            $status = ${entity.name}API::get_status_by_code('HOLDING');
            update_post_meta($post['id'], 'status', $status['id']);
 
            $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $post['id'] . '&page_action=view';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        }
        else {
            wp_send_json_error(array('error_type' => 'business_error', 'message' => "Invalid bid identifier!"));
        }
   }

   /**
    *
    */
   public static function release_funds_ajax(){
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('error_type' => 'data_error', 'message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('error_type' => 'data_error', 'message' => "Collateal file identifier missing"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post = ${entity.name}API::get_by_id($id);
        if(isset($post['id'])){
            // Find the bid
            if(!$post['amount'] > 0){
                wp_send_json_error(array('error_type' => "business_error", 'message' => "Invalid bid amount!"));
            }
            // The source user is the admin user since holding account belongs to admin and we are 
            // releasing funds from the holding account. The destination user is the owner of the load application
            $source_user = get_user_by('login', get_option('cp_admin_account'));
            $source_user_party = PartyAPI::get_user_party($source_user->ID);

            $application = ApplicationAPI::get_by_id($post['application']);
            $destination_user_party = PartyAPI::get_by_id($application['owner']); 

            if(!isset($destination_user_party['id'])) {
                wp_send_json_error(array('error_type' => 'business_error', 'message' => "Cannot find funds destination user!"));
            }

            // Make the darn transfer
            $transfer_desc = 'Disbursement of funds to client '. $destination_user_party['user_name'];
            $transfer_results = TransferAPI::transfer_funds($post['amount'], $source_user_party, $destination_user_party, $transfer_desc);      
            if($transfer_results['has_errors']){
                wp_send_json_error(array('error_type' => 'business_error', 'message' => $transfer_results['error_message'] . "!"));
            }
            
            // Update the status of the bid
            $status = ${entity.name}API::get_status_by_code('COMPLETED');
            update_post_meta($post['id'], 'status', $status['id']);
           
            // Now the  funds have been released next we setup the loan and its related structures to get things going.
            do_action('cloderia_create_shadow_loan', $post);
           
            $redirect_url = get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $post['id'] . '&page_action=view';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        }
        else {
            wp_send_json_error(array('error_type' => 'business_error', 'message' => "Invalid bid identifier!"));
        }
   }

}
