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
        $entity_data['owner'] = $user_party->ID;
</#if>
        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
            if(CloderiaServiceUtils::is_invalid_string($entity_data['entity_code'])) {
                $entity_data['entity_code'] = ContentSecurityAPI::get_token(8);
            }}
            <#list entity.fields as field>
                <#if field.name == "status">
            if(!isset($entity_data['status'])) {
		$status = ${entity.name}API::get_status_by_code('PENDING');
            	$entity_data['status'] = $status['id'];
	    }
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
        $user_party = PartyAPI::get_user_party($current_user->ID);

        if(!isset($_POST['form'][2]) && !isset($_POST['form'][0]) && !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        $searchResults = array();
        // If the party role is specified, we will first have to
        // find all PartyRoles associated with the given role ,
        // then we find and return all partys referenced in the above
        // mentioned associations
        if(isset($_POST['form'][2]) && $_POST['form'][2]['name'] === 'party_role')
        {
            $party_role = sanitize_text_field($_POST['form'][2]['value']);
            $searchResults = ${entity.name}API::get_by_party_role($party_role);
        } 
        // Else we use the regular party search funtionality
        else {

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
    <#if entity.global == "N">
            if (!current_user_can('administrator')) {
                // Filter the results for non admin users
                $user_query_param = array('key' => 'owner', 'value' => $user_party['id']);
                array_push($queryArgs['meta_query'], $user_query_param);
            }
    </#if>
            $count = 0;
            $entityQuery = new WP_Query($queryArgs);

            while ($entityQuery->have_posts()) : $entityQuery->the_post();
                $entity = $entityQuery->post;
                array_push($searchResults, ${entity.name}API::entity_to_data($entity, false));
                $count++;
            endwhile;
            wp_reset_postdata();
        }
        
        wp_send_json_success($searchResults);
    }

    /**
     *
     */
    public static function get_by_party_role($party_role) {

        $searchResults = array();
        $role_type = RoleTypeAPI::get_by_code($party_role);

        if(isset($role_type['id'])) {

            // Search for all the party role type associations with the given role
            $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => 'sb_partyrole', 
            'meta_query' => array(array('key' => 'role', 'value' => $role_type['id'])));

            $party_ids = array();
            $entityQuery = new WP_Query($queryArgs);
            while ($entityQuery->have_posts()) : $entityQuery->the_post();
                $entity = $entityQuery->post;
                array_push($party_ids, get_post_meta($entity->ID, 'party', true));
            endwhile;
            wp_reset_postdata();
            return ${entity.name}API::get_by_ids($party_ids);
        }
            return $searchResults;
    }

    /**
     *
     */
    public static function get_by_ids($party_ids) {
        $searchResults = array();
        // Load all the partys with ID from above
        foreach($party_ids as $party_id){
            $party = ${entity.name}API::get_by_id(intval($party_id));
            array_push($searchResults, $party);
        }
        return $searchResults;
    }

    /**
     *
     */
    public static function get_party_roles($party_id) {
        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
        'post_status' => 'any', 'post_type' => 'sb_partyrole', 
        'meta_query' => array(array('key' => 'party', 'value' => $party_id)));

        $role_ids = array();
        $entityQuery = new WP_Query($queryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            array_push($role_ids, get_post_meta($entity->ID, 'role', true));
        endwhile;
        wp_reset_postdata();

        $roles =array();// Load all the partys with ID from above
        foreach($role_ids as $role_id){
            $role = RoleTypeAPI::get_by_id(intval($role_id));
            array_push($roles, $role);
        }
        return $roles;

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

        <#list entity.relatedChildEntities as child>
        $${child.name?lower_case}_data = ${child.name}API::get_by_meta('party', $id);
        if(isset($${child.name?lower_case}['id'])){
            $post_obj = wp_delete_post($${child.name?lower_case}['id']);
        }
        </#list>
       
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
            $entity_data = ${entity.name}API::entity_to_data($entity, false);
        endwhile;
        return $entity_data;
    }

    /**
     *
     */
    public static function get_by_meta($meta_key, $meta_value){
        // Load the entity
        $entity_data = array();
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => '${entity.postName}',
            'meta_query' => array(array('key' => $meta_key, 'value' => $meta_value)));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = ${entity.name}API::entity_to_data($entity, false);
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
        $entity_data['${field.name}'] = $related_entity_id;
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['${field.name}_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['${field.name}_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
    </#if>
        $entity_data['roles'] = ${entity.name}API::get_party_roles($entity_data['id']);
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
    public static function get_party_user($party_id){
	$user_data = array();
        $party_data = ${entity.name}API::get_by_id($party_id); 
      
        if(isset($party_data['id'])){	    
            $user = get_user_by('login', $party_data['user_name']); 
            if($user){
                $user_data['id'] = $user->ID;
                $user_data['user_name'] = $user->user_login;
            }
        }
	return $user_data;
    }

    /**
     *
     */
    public static function get_user_party($user_id){
	$user_party = array();
        $user = get_user_by('id', $user_id);
        $count = 0;
        if($user){ 
            $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => '${entity.postName}',
                'meta_query' => array(array('key' => 'user_name', 'value' => $user->user_login)));
            $entityQuery = new WP_Query($entityQueryArgs);
            while ($entityQuery->have_posts()) : $entityQuery->the_post();
                $entity = $entityQuery->post;
                if($count == 0){
                    $user_party = ${entity.name}API::entity_to_data($entity, false);
                }
                $count++;
            endwhile;
        }
	return $user_party;

    }

}
