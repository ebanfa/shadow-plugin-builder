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
            echo 'size of array' . count($entity_data);
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

        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
                if(EntityStringUtils::is_invalid_string($entity_data['entity_code'])) {
                    $entity_data['entity_code'] = EntityStringUtils::get_token(8);
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
