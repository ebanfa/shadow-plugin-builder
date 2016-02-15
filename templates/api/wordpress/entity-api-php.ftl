<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EntityAPI {

    /**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_create_entity_ajax', 'EntityAPI::create_entity_ajax');
        add_action('wp_ajax_nopriv_create_entity_ajax', 'EntityAPI::create_entity_ajax');

        add_action('wp_ajax_edit_entity_ajax', 'EntityAPI::edit_entity_ajax');
        add_action('wp_ajax_nopriv_edit_entity_ajax', 'EntityAPI::edit_entity_ajax');

        add_action('wp_ajax_view_entity_ajax', 'EntityAPI::view_entity_ajax');
        add_action('wp_ajax_nopriv_view_entity_ajax', 'EntityAPI::view_entity_ajax');

        add_action('wp_ajax_find_entity_ajax', 'EntityAPI::find_entity_ajax');
        add_action('wp_ajax_nopriv_find_entity_ajax', 'EntityAPI::find_entity_ajax');

        add_action('wp_ajax_delete_entity_ajax', 'EntityAPI::delete_entity_ajax');
        add_action('wp_ajax_nopriv_delete_entity_ajax', 'EntityAPI::delete_entity_ajax');
    }
    
    /**
     *
     */
    public static function create_entity_ajax() {
        // Check the ajax request
        $entity_data = self::do_before_ajax_edit();
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            $entity_data = self::do_create_entity($entity_data);
        }
        // Run post edit hooks
        self::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function do_before_ajax_edit($entity_data) {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode'])) {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }
        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data = EntityRequestUtils::build_entity_data_from_post($entity_data);
        $entity_data = EntityRequestUtils::validate_entity_data($entity_data);
        return $entity_data;
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
                if(isset($_REQUEST['parent_param'])) $redirect_url = $redirect_url . '&parent_param=' .  $_REQUEST['parent_param'];
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => $entity_data['message']));
        }
    }

    /**
     *
     */
    public static function find_entity_ajax() {
        $entity_data = self::do_before_ajax_find();
        $search_results = self::do_find_entity($entity_data);
        self::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function do_before_ajax_find() {
        if(!isset($_POST['form'][2]) && 
            !isset($_POST['form'][0]) && 
            !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = array('entity_artifact_name' => $artifact_name);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $criteria_data = EntityRequestUtils::build_criteria_from_form_data($entity_data);
        return EntityPersistenceAPI::find_by_criteria($artifact_name, $criteria_data);
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
    public static function delete_entity_ajax() {
        $entity_data = self::do_before_ajax_delete();
        $entity_data = self::do_delete_entity($entity_data);
        self::do_after_ajax_delete($entity_data);
    }

    /**
     *
     */
    public static function do_before_ajax_delete() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && 
            !isset($_POST['post_nonce_field']) && 
            !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) wp_send_json_error(array('message' => "Entity identifier missing"));

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = array('entity_artifact_name' => $artifact_name);
        return $entity_data;
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


}
