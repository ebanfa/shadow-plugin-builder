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
        // Check the ajax request
        CloderiaAPIUtils::do_before_ajax_edit();

        $entity_data = ${entity.name}API::build_entity_data_from_post();
        $entity_data = ${entity.name}API::validate_entity_data($entity_data);
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            $entity_data = CloderiaAPIUtils::do_create_entity($entity_data);
        }
        // Run post edit hooks
        CloderiaAPIUtils::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function build_entity_data_from_post(){
        $entity_data = array();
        $entity_data['entity_post_name'] = '${entity.postName}';
        $entity_data['entity_artifact_name'] = '${entity.name?lower_case}';
        // Extract the edit mode
        $entity_data['edit_mode'] = true;
        if (sanitize_text_field($_POST['edit_mode']) == 'edit') {
            $entity_data['edit_mode'] = false;
        }
        if($entity_data['edit_mode']){
    <#list entity.fields as field>
        <#if field.isFormField == "Y" && field.createField == "Y">
            <#if field.dataType == "date">
            if(CloderiaAPIUtils::is_invalid_string($_POST['${field.name}'])) {
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
    <#if entity.global == "N">
            // Get business unit of the current user
            $business_unit = BusinessUnitAPI::get_current_user_business_unit();
            if (isset($business_unit['id'])) {
                $entity_data['business_unit'] = $business_unit['id'];
            }
    </#if>
    <#list entity.fields as field>
        <#if field.name == "status">
            if(!isset($entity_data['status'])) {
                $status = CloderiaAPIUtils::get_status_by_code('${field.dataType}', 'PENDING');
                $entity_data['status'] = $status['id'];
            }
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
    public static function find_${entity.postName}_ajax() {

        CloderiaAPIUtils::do_before_ajax_find();
        <#if entity.global == "N">
        $is_global_entity = true;
        <#else>
        $is_global_entity = false;
        </#if>

        $entity_fields = ${entity.name}API::$entity_fields;
        $query_args = CloderiaAPIUtils::build_entity_query('${entity.postName}', $entity_fields, $is_global_entity);

        $searchResults = array();
        $entityQuery = new WP_Query($query_args);

        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            array_push($searchResults, ${entity.name}API::entity_to_data($entity, false));
        endwhile;
        wp_reset_postdata();

        wp_send_json_success($searchResults);
    }

    /**
     *
     */
    public static function delete_${entity.postName}_ajax() {

        CloderiaAPIUtils::do_before_ajax_delete();
        $post_obj = wp_delete_post(sanitize_text_field($_POST['id']));
        CloderiaAPIUtils::do_after_ajax_delete($post_obj);
    }

    /**
     *
     */
    public static function get_by_code($entity_code){
        $entity = CloderiaAPIUtils::get_entity_by_meta('${entity.postName}', 'entity_code', $entity_code);
        $entity_data = ${entity.name}API::entity_to_data($entity, false);
        return $entity_data;
    }

    /**
     *
     */
    public static function get_by_id($id){
        $entity = CloderiaAPIUtils::get_by_id($id);
        return ${entity.name}API::entity_to_data($entity, false);
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
</#list>
        return $entity_data;
        
    }

}
