<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EntityAPI {

    public static function create_entity($entity_data) {
        $entity_name = $entity_data['entity_name'];
        $class_name = $entity_name . 'API';
        if (class_exists($class_name)) {
            return call_user_func($class_name . '::do_create_entity', $entity_data);
        }
        else{
            return self::do_create_entity($entity_data);
        }
    }
    
    /**
     *
     */
    public static function do_create_entity($entity_data){

        // Check if the we are delaing with a virtual entity
        if ($entity_data['is_virtual_entity']) {
            // Get the parent entity data
            $parent_entity_data = EntityAPIUtils::init_entity_data($entity_data['parent_artifact_name']);
            $parent_entity_data['edit_mode'] = $entity_data['edit_mode'];
            // Copy the fields from the virtual entity data to the parent entity data
            foreach ($parent_entity_data['entity_fields'] as $key => $value) {
                if(isset($entity_data[$key])) {
                    $parent_entity_data[$key] = $entity_data[$key];
                }
            }
            // Create the parent entity
            $parent_entity_data = self::do_create_entity_impl($parent_entity_data);
            if(isset($parent_entity_data['id'])) {
                if ($entity_data['edit_mode']) {
                    // Set the parent id on the virtual entity
                    $entity_data['parent_id'] = $parent_entity_data['id'];
                }
                // Save the virtual entity and return it to the caller
                return self::do_create_entity_impl($entity_data);
            }
        }
        else return do_create_entity_impl($entity_data);
    }

    /**
     *
     */
    public static function do_create_entity_impl($entity_data){

        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
                if(EntityStringUtils::is_invalid_string($entity_data['entity_code'])) {
                    $entity_data['entity_code'] = EntityStringUtils::get_token(8);
                }
            }
            else {
                $entity_data['entity_code'] = EntityStringUtils::get_token(8);
            }
            // Ensure the business unit is set
            if(!$entity_data['is_global_entity'] && !isset($entity_data['business_unit'])){
                $business_unit = BusinessUnitAPI::get_current_user_business_unit();
                if (isset($business_unit['id'])) {
                    $entity_data['business_unit'] = $business_unit['id'];
                }
            }
            EntityRequestUtils::copy_fields_to_post($entity_data);
            $entity_data = EntityPersistenceAPI::create_entity($entity_data);
        } else {
            EntityRequestUtils::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $entity_data = EntityPersistenceAPI::update_entity($entity_data);
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
    public static function find_entity($entity_data) {
        $entity_name = $entity_data['entity_name'];
        $class_name = $entity_name . 'API';
        if (class_exists($class_name)) {
            return call_user_func($class_name . '::do_find_entity', $entity_data);
        }
        return self::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        // Check if we are dealing with a virtual entity
        // Check if the we are delaing with a virtual entity
        if ($entity_data['is_virtual_entity']) {
            // Get the parent entity data
            $parent_entity_data = EntityAPIUtils::init_entity_data($entity_data['parent_artifact_name']);
            // Build criteria for parent from form data
            $parent_criteria_data = EntityRequestUtils::build_criteria_from_form_data($parent_entity_data);
            $parent_search_results = EntityPersistenceAPI::find_by_criteria($parent_entity_data, $parent_criteria_data);
            // Loop through each parent and find the corresponding virtual with the parent_id that points
            // to the current parent
            $virtual_entity_search_results = array();
            foreach ($parent_search_results as $parent_data) {
                // Use the id of the parent to find the virtual entity
                $virtual_entity_data = EntityPersistenceAPI::get_by_field(
                    $entity_data['artifact_name'], 'parent_id', $parent_data['id']);
                array_push($virtual_entity_search_results, $virtual_entity_data);
            }
            return $virtual_entity_search_results;
        }
        else return do_find_entity_impl($entity_data);
    }


    /**
     *
     */
    public static function do_find_entity_impl($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $criteria_data = EntityRequestUtils::build_criteria_from_form_data($entity_data);
        return EntityPersistenceAPI::find_by_criteria($entity_data, $criteria_data);
    }

    /**
     *
     */
    public static function delete_entity($entity_data) {
        $entity_name = $entity_data['entity_name'];
        $class_name = $entity_name . 'API';
        if (class_exists($class_name)) {
            return call_user_func($class_name . '::do_delete_entity', $entity_data);
        }
        return self::do_delete_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) wp_send_json_error(array('message' => "Entity identifier missing"));

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
    public static function get_by_id($artifact_name, $id){
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return EntityPersistenceAPI::get_entity_by_id($entity_data, $id);
    }

    /**
     *
     */
    public static function get_by_code($artifact_name, $entity_code){
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return EntityPersistenceAPI::get_entity_by_code($entity_data, $entity_code);
    }

    /**
     *
     */
    public static function get_by_field($artifact_name, $field_name, $field_value){
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return EntityPersistenceAPI::get_entity_by_meta($entity_data, $field_name, $field_value);
    }

    /**
     * Get all parts with id's in the list provided
     */
    public static function find_by_ids($artifact_name, $party_ids) {
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return EntityPersistenceAPI::find_by_ids($entity_data, $party_ids);
    }

    /**
     * 
     */
    public static function find_by_criteria($artifact_name, $criteria_data) {
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return EntityPersistenceAPI::find_by_criteria($entity_data, $criteria_data);
    }

    /**
     * 
     */
    public static function get_model($artifact_name) {
        return EntityAPIUtils::init_entity_data($artifact_name);
    }


}
