<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

global $wp_session;

class ArtifactAjaxRequestProcessor {

    /**
     *
     */
    public static function init_hooks() {
        add_action('wp_ajax_create_entity_ajax', 'ArtifactAjaxRequestProcessor::create_entity_ajax');
        add_action('wp_ajax_nopriv_create_entity_ajax', 'ArtifactAjaxRequestProcessor::create_entity_ajax');

        add_action('wp_ajax_edit_entity_ajax', 'ArtifactAjaxRequestProcessor::edit_entity_ajax');
        add_action('wp_ajax_nopriv_edit_entity_ajax', 'ArtifactAjaxRequestProcessor::edit_entity_ajax');

        add_action('wp_ajax_view_entity_ajax', 'ArtifactAjaxRequestProcessor::view_entity_ajax');
        add_action('wp_ajax_nopriv_view_entity_ajax', 'ArtifactAjaxRequestProcessor::view_entity_ajax');

        add_action('wp_ajax_find_entity_ajax', 'ArtifactAjaxRequestProcessor::find_entity_ajax');
        add_action('wp_ajax_nopriv_find_entity_ajax', 'ArtifactAjaxRequestProcessor::find_entity_ajax');
        
        add_action('wp_ajax_find_child_entities_ajax', 'ArtifactAjaxRequestProcessor::find_child_entities_ajax');
        add_action('wp_ajax_nopriv_find_child_entities_ajax', 'ArtifactAjaxRequestProcessor::find_child_entities_ajax');
        
        add_action('wp_ajax_find_all_ajax', 'ArtifactAjaxRequestProcessor::find_all_ajax');
        add_action('wp_ajax_nopriv_find_all_ajax', 'ArtifactAjaxRequestProcessor::find_all_ajax');

        add_action('wp_ajax_delete_entity_ajax', 'ArtifactAjaxRequestProcessor::delete_entity_ajax');
        add_action('wp_ajax_nopriv_delete_entity_ajax', 'ArtifactAjaxRequestProcessor::delete_entity_ajax');
    }
    
    /**
     *
     */
    public static function create_entity_ajax() {
        // Run pre edit hooks
        $entity_data = ArtficatAjaxRequestProcessorUtils::do_before_ajax_edit();
        $custom_processor = $entity_data['entity_name'] . 'AjaxRequestProcessor';
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            if (class_exists($custom_processor)  && method_exists($custom_processor, 'create_entity_ajax')) {
                $entity_data = call_user_func($custom_processor . '::create_entity_ajax', $entity_data);
            }
            else {
                $entity_data = EntityAPI::create_entity($entity_data);
            }
        }
        // Run post edit hooks
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_edit($entity_data);
    }
    
    /**
     *
     */
    public static function edit_entity_ajax() {
        // Run pre edit hooks
        $entity_data = ArtficatAjaxRequestProcessorUtils::do_before_ajax_edit();
        $custom_processor = $entity_data['entity_name'] . 'AjaxRequestProcessor';
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            if (class_exists($custom_processor)  && method_exists($custom_processor, 'edit_entity_ajax')) {
                $entity_data = call_user_func($custom_processor . '::edit_entity_ajax', $entity_data);
            }
            else {
                $entity_data = EntityAPI::create_entity($entity_data);
            }
        }
        // Run post edit hooks
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function find_entity_ajax() {
        $search_results = array();
        $entity_data = ArtficatAjaxRequestProcessorUtils::do_before_ajax_find();
        $custom_processor = $entity_data['entity_name'] . 'AjaxRequestProcessor';
        if (class_exists($custom_processor)  && method_exists($custom_processor, 'find_entity_ajax')) {
            $search_results = call_user_func($custom_processor . '::find_entity_ajax', $entity_data);
        }
        else {
            $search_results = EntityAPI::find_entity($entity_data);
        }
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function find_child_entities_ajax() {
        if(!isset($_POST['artifact']) || !isset($_POST['parent_id']) || !isset($_POST['parent_field_name'])) return array();

        $parent_id = EntityRequestUtils::get_query_string_field('parent_id');
        // Decode the parent id
        $parent_id = EntityStringUtils::decode_id($parent_id);
        $artifact_name = EntityRequestUtils::get_query_string_field('artifact');
        $parent_field_name = EntityRequestUtils::get_query_string_field('parent_field_name');

        $search_results = EntityAPI::find_by_criteria($artifact_name, array($parent_field_name => $parent_id));
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_find(EntityAPIUtils::init_entity_data($artifact_name), $search_results);
    }

    /**
     *
     */
    public static function find_all_ajax() {
        $entity_data = ArtficatAjaxRequestProcessorUtils::do_before_ajax_find();
        $custom_processor = $entity_data['entity_name'] . 'AjaxRequestProcessor';
        if (class_exists($custom_processor)  && method_exists($custom_processor, 'find_all_ajax')) {
            $search_results = call_user_func($custom_processor . '::find_all_ajax', $entity_data);
        }
        else {
            $search_results = EntityAPI::find_all($entity_data);
        }
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function delete_entity_ajax() {
        $entity_data = ArtficatAjaxRequestProcessorUtils::do_before_ajax_delete();
        $custom_processor = $entity_data['entity_name'] . 'AjaxRequestProcessor';
        if (class_exists($custom_processor)  && method_exists($custom_processor, 'delete_entity_ajax')) {
            $entity_data = call_user_func($custom_processor . '::delete_entity_ajax', $entity_data);
        }
        else {
            $entity_data = EntityAPI::do_delete_entity($entity_data);
        }
        ArtficatAjaxRequestProcessorUtils::do_after_ajax_delete($entity_data);
    }  
   
}