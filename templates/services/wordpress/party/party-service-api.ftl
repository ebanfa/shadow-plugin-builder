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
        $entity_data = self::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_edit($entity_data);
        $entity_data = CloderiaAPIUtils::build_entity_data_from_post($entity_data);
        $entity_data = CloderiaAPIUtils::validate_entity_data($entity_data);
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
    public static function find_${entity.postName}_ajax() {
        $search_results = array();
        $entity_data = self::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_find($entity_data);
        $role_type = CloderiaAPIUtils::get_query_form_field('role');

        if($role_type) { $search_results = self::find_by_role($role_type); } 
        else { $search_results = CloderiaAPIUtils::do_find_entity($entity_data); }

        CloderiaAPIUtils::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     * Delete a single party record. This will also delete all child entity instances
     */
    public static function delete_${entity.postName}_ajax() {
        $entity_data = self::init_entity_data();
        $entity_data = CloderiaAPIUtils::do_before_ajax_delete($entity_data);
        $entity_data = CloderiaAPIUtils::do_delete_entity($entity_data);
        CloderiaAPIUtils::do_after_ajax_delete($entity_data);
        <#list entity.relatedChildEntities?keys as key> 
        // Delete the ${entity.relatedChildEntities[key].name}
        //$${entity.relatedChildEntities[key].name?lower_case}_data = ${entity.relatedChildEntities[key].name}API::get_by_meta('${key}', $id);
        //if(isset($${entity.relatedChildEntities[key].name?lower_case}['id'])){
            //$post_obj = wp_delete_post($${entity.relatedChildEntities[key].name?lower_case}['id']);
        //}
        </#list>
    }

    /**
     *
     */
    public static function get_by_id($id){
        return CloderiaAPIUtils::get_entity_by_id(self::init_entity_data(), $id);
    }

    /**
     *
     */
    public static function get_by_code($entity_code){
        return CloderiaAPIUtils::get_entity_by_code(self::init_entity_data(), $entity_code);
    }

    /**
     *
     */
    public static function get_by_field($field_name, $field_value){
        return CloderiaAPIUtils::get_entity_by_meta(self::init_entity_data(), $field_name, $field_value);
    }

    /**
     * Get all parts with id's in the list provided
     */
    public static function find_by_ids($party_ids) {
        return CloderiaAPIUtils::find_by_ids(self::init_entity_data(), $entity_code);
    }

    /**
     * 
     */
    public static function find_by_criteria($criteria_data) {
        return CloderiaAPIUtils::find_by_criteria(self::init_entity_data(), $criteria_data);
    }

    /**
     *
     */
    public static function init_entity_data() {
        // Check the ajax request
        $entity_data = array();
        $entity_data['entity_fields'] = self::$entity_fields;
        $entity_data['is_global_entity'] = '${entity.global}';
        $entity_data['entity_post_name'] = '${entity.postName}';
        $entity_data['entity_artifact_name'] = '${entity.name?lower_case}';
        return $entity_data;
    }

    /**
     * Get all parties with a given roles
     */
    public static function find_by_role($role) {

        $search_results = array();
        // Get the role 
        $role_type = RoleTypeAPI::get_by_code(strtoupper($role));
        // Process only if we got a valid response from the call above
        if(isset($role_type['id']) && isset($role_type['entity_code'])) {
            // Special treatment is required if the role type is 'user_organization'
            if($role === 'user_organization') {
                $search_results = self::find_user_organizations($role);
            } else {
                $party_ids = array();
                // Search for all the party role type associations with the given role
                $party_roles = PartyRoleAPI::find_by_criteria(array('role' => $role_type['id']));
                // Loop throug all the return party roles 
                // and push the party id into list of parties
                foreach ($party_roles as $party_role) {
                    array_push($party_ids, $party_role['party']);
                }
                $search_results = self::find_by_ids($party_ids);
            }
        }
        return $search_results;
    }


    
    /**
     * Get all the role types that a party has
     */
    public static function find_user_organizations($party_id) {
        $search_results = array();
        // Fist find all the party roles of the party
        // Get all the parent business units
        // FOr each business unit get it parent party
        // add the party of the party is 
        // find all busine
        return $search_results;

    }

    /**
     * Get all the role types that a party has
     */
    public static function find_user_business_units($party_id) {
        $search_results = array();
        // Fist find all the party roles of the party
        // Get all the parent business units
        // FOr each business unit get it parent party
        // add the party of the party is 
        // find all busine
        return $search_results;

    }


    /**
     * Get the WP_User object of the party witht the provided id
     */
    public static function get_party_user($party_id){
        $user_data = array();
        $party_data = self::get_by_id($party_id); 
      
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
     * Get the party of the user with the provided id
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
                    $user_party = CloderiaAPIUtils::entity_to_data(self::init_entity_data(), $entity, false);
                }
                $count++;
            endwhile;
        }
	return $user_party;

    }

    /**
     * Get the party of the currently logged in user
     */
    public static function get_current_user_party(){
        $user_party = array();
        $current_user = wp_get_current_user();
        if ($current_user) {
           $user_party = self::get_user_party($current_user->ID);
        }
        return $user_party;
    }


}
