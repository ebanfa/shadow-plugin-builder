<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
include_once('EntityStringUtils.php');

class EntityRequestUtils {

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
    public static function build_entity_data_from_post($entity_data){
        // Extract the edit mode
        $entity_data['edit_mode'] = true;
        if (sanitize_text_field($_POST['edit_mode']) == 'edit') {
            $entity_data['edit_mode'] = false;
        }
        if($entity_data['edit_mode']) {
            //Process entity create form fields
            foreach ($entity_data['entity_fields'] as $field_data) {
                if($field_data['is_form_field'] && $field_data['is_create_field']) {
                    $entity_data = self::build_entity_field_from_post($field_data, $entity_data);
                }
            }
            // Process non global entity data
            if(!$entity_data['is_global_entity']){
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

                if($field_data['is_form_field'] && $field_data['is_edit_field']) {
                    $entity_data = self::build_entity_field_from_post($field_data, $entity_data);
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
            if(EntityStringUtils::is_invalid_string($_POST[$field_data['name']])) {
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
                    $status = EntityPersistenceAPI::get_status_by_code($field_data['data_type'], 'PENDING');
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
    public static function build_criteria_from_form_data($entity_data) {
        $criteria_data = array();
        $form_data = $_POST['form'];
        foreach($form_data as $field){
          $name = sanitize_text_field($field['name']);
          if(array_key_exists($name, $entity_data['entity_fields'])){
              $value = sanitize_text_field($field['value']);
              $criteria_data[$name] = $value;
          }
        }
        return $criteria_data;
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
    public static function get_artifact_name(){
        if(!isset($_REQUEST['artifact'])) {
            return false;
        }
        return sanitize_text_field($_REQUEST['artifact']);
    }
}


?>