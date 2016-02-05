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
        '${field.name}' => array('name' => '${field.name}',
        'data_type' => '${field.dataType}',
        'is_required' => '${field.required}',
        'is_visible' => '${field.isVisible}',
        'is_create_field' => '${field.createField}',
        'is_edit_field' => '${field.editField}',
        'is_view_field' => '${field.viewField}',
        'is_list_field' => '${field.listField}',
        'is_form_field' => '${field.isFormField}',
        'is_relationship_field' => '${field.relationshipField}',),
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
        $entity_data = ${entity.name}API::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_edit($entity_data);
        $entity_data = CloderiaAPIUtils::build_entity_data_from_post($entity_data);
        $entity_data = CloderiaAPIUtils::validate_entity_data($entity_data);
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            // Create/edit the associated party record
            $entity_data = self::create_party($entity_data);
            $entity_data = self::create_party_role($entity_data);
            $entity_data = CloderiaAPIUtils::do_create_entity($entity_data);
        }
        $entity_data['redirect_url'] = get_site_url() . '/page?type=entity&artifact=party&id=' . $entity_data['party'] . '&page_action=view';
        // Run post edit hooks
        CloderiaAPIUtils::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function find_${entity.postName}_ajax() {
        $entity_data = ${entity.name}API::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_find($entity_data);
        $search_results = CloderiaAPIUtils::do_find_entity($entity_data);
        CloderiaAPIUtils::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function delete_${entity.postName}_ajax() {
        $entity_data = ${entity.name}API::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_delete($entity_data);
        $entity_data = CloderiaAPIUtils::do_delete_entity($entity_data);
        CloderiaAPIUtils::do_after_ajax_delete($entity_data);
    }

    /**
     *
     */
    public static function get_by_id($id){
        return CloderiaAPIUtils::get_entity_by_id(${entity.name}API::init_entity_data(), $id);
    }

    /**
     *
     */
    public static function get_by_code($entity_code){
        return CloderiaAPIUtils::get_entity_by_code(${entity.name}API::init_entity_data(), $entity_code);
    }

    /**
     *
     */
    public static function get_by_field($field_name, $field_value){
        return CloderiaAPIUtils::get_entity_by_meta(${entity.name}API::init_entity_data(), $field_name, $field_value);
    }

    /**
     * Get all parts with id's in the list provided
     */
    public static function find_by_ids($party_ids) {
        return CloderiaAPIUtils::find_by_ids(${entity.name}API::init_entity_data(), $entity_code);
    }

    /**
     * 
     */
    public static function find_by_criteria($entity_data, $criteria_data) {
        $entity_data = ${entity.name}API::init_entity_data();
        return CloderiaAPIUtils::find_by_criteria($entity_data, $criteria_data);
    }

    /**
     *
     */
    public static function init_entity_data() {
        // Check the ajax request
        $entity_data = array();
        $entity_data['entity_post_name'] = '${entity.postName}';
        $entity_data['entity_artifact_name'] = '${entity.name?lower_case}';
        $entity_data['entity_fields'] = ${entity.name}API::$entity_fields;
        $entity_data['is_global_entity'] = '${entity.global}';
        return $entity_data;
    }

    /**
     *
     */
    public static function create_party($entity_data) {
        
        $party_data = PartyAPI::init_entity_data();

        if($entity_data['edit_mode']) {
            $party_data['edit_mode'] = true;
            $party_type = PartyTypeAPI::get_by_code('ORGANIZATION');
            $party_data['party_type'] = $party_type['id'];
            $party_data['business_unit'] = $entity_data['business_unit'];
        }
        else {
            // First we need to load the entity from the db
            // So we can retrieve the id of the parent part
            if(isset($entity_data['id'])) {
                $entity_data['party'] = ${entity.name}API::get_by_id($entity_data['id']);
                $party_data = PartyAPI::get_by_id($entity_data['party']);
                $party_data['edit_mode'] = false;
            }
        }
        $party_data['name'] = $entity_data['name'];
        $party_data['description'] = $entity_data['description'];

        $party_data = CloderiaAPIUtils::validate_entity_data($party_data);
        $party_data = CloderiaAPIUtils::do_create_entity($party_data);

        if(isset($party_data['id'])){ 
            $entity_data['party'] = $party_data['id']; 
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function create_party_role($entity_data) {

        if($entity_data['edit_mode']) {
            $party_role_data = PartyRoleAPI::init_entity_data();
            $role_type = RoleTypeAPI::get_by_code(strtoupper($entity_data['role']));

            $party_role_data['edit_mode'] = true;
            $party_role_data['role'] = $role_type['id'];
            $party_role_data['party'] = $entity_data['party'];
            $party_role_data['description'] = $entity_data['description'];
            $party_role_data['parent_unit'] = $entity_data['business_unit'];
            $party_role_data['business_unit'] = $entity_data['business_unit'];
            $party_role_data['name'] = $entity_data['first_name'] . ' ' . $entity_data['last_name'];

            $party_role_data = CloderiaAPIUtils::validate_entity_data($party_role_data);
            $party_role_data = CloderiaAPIUtils::do_create_entity($party_role_data);
        }
        return $entity_data;
    }

}
