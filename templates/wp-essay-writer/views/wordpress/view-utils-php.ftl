<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ViewUtils {

	public static $base_view_path = 'page_action=view&artifact=';
	public static $base_edit_path = 'page_action=edit&artifact=';
	public static $base_list_path = 'page_action=list&artifact=';
	public static $base_create_path = 'page_action=create&artifact=';

    public static $link_text_create = 'Add New';
    public static $link_type_create = 'CREATE_ENTITY';

    public static $link_text_list = 'View All';
    public static $link_type_list = 'LIST_ENTITY';

    public static $global_entities = array('contentorder');

	/**
     * Get the appropriate view header description text for the given page action
     */
    public static function get_view_header_description($page_action, $artifact_description) {

        if($page_action == 'create')
            return 'Create a new '. strtolower($artifact_description ) . ' by filling in the form below';
        if($page_action == 'edit')
            return 'Edit the '. strtolower($artifact_description ) . ' by updating the form below';
        if($page_action == 'view')
            return 'To update or delete the ' . strtolower($artifact_description ) . ', click on the control buttons below.';
        if($page_action == 'list')
            return  'To view a single record, click on the highlighted column.';
    }

    /**
     *
     */
    public static function get_entity_action_links($page_action, $artifact) {
        if($page_action == 'create') {
         	return self::get_create_entity_action_links($page_action, $artifact);
        }
        if($page_action == 'edit') {
         	return self::get_edit_entity_action_links($page_action, $artifact);
        }
        if($page_action == 'view') {
         	return self::get_view_entity_action_links($page_action, $artifact);
        }
        if($page_action == 'list') {
         	return self::get_list_entity_action_links($page_action, $artifact);
        }
    }

    /**
     *
     */
    public static function get_create_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_edit_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_view_entity_action_links($page_action, $artifact) {
    	$action_links = array();
        $action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
        if(!PartyAPI::is_current_user_portal_admin() && !in_array($artifact, self::$global_entities)) return $action_links;
    	$action_links['create_entity_link'] = self::build_link($artifact, self::$link_type_create, self::$link_text_create);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_list_entity_action_links($page_action, $artifact) {
    	$action_links = array();
        if(!PartyAPI::is_current_user_portal_admin() && !in_array($artifact, self::$global_entities)) return $action_links;
        $action_links['create_entity_link'] = self::build_link($artifact, self::$link_type_create, self::$link_text_create);
        return $action_links;
   	}

    /**
     *
     */
    public static function build_link($artifact, $link_type, $link_text) {
        $entity_action_link = '';

        if($link_type == self::$link_type_create)
            $entity_action_link = ArtficatAjaxRequestProcessorUtils::get_base_url() . self::$base_create_path. $artifact;

        if($link_type == self::$link_type_list)
            $entity_action_link = ArtficatAjaxRequestProcessorUtils::get_base_url() . self::$base_list_path. $artifact;

        if(isset($_REQUEST['criteria_name']) && isset($_REQUEST['criteria_value'])) {
            $entity_action_link = $entity_action_link . '&criteria_name='. sanitize_text_field($_REQUEST['criteria_name']);
            $entity_action_link = $entity_action_link . '&criteria_value='. sanitize_text_field($_REQUEST['criteria_value']);
        }
        return array('name' => $link_text, 'link' => $entity_action_link);
    }

    /**
     * This method add additional information to a field.
     * The added information is required to display the field.
     */
    public static function prepare_view_form_field($view, $field) {
        $field_filter = 'shadowbanker_filter_form_field';
        if (has_filter($field_filter)) {
            $field = apply_filters($field_filter, $view, $field);
        }
        return $field;
    }

    /**
     * 
     */
    public static function get_current_view_model() {
        $view = $_REQUEST['page_info']['view'];
        return $view->get_model();
    }

    /**
     * 
     */
    public static function get_entity_create_fields($model) {
        $fields = array();
        foreach ($model['entity_fields'] as $field) {
            if($field['is_create_field'] && $field['is_form_field']) {
                array_push($fields, $field);
            }
        }
        return $fields;
    }

    /**
     * 
     */
    public static function get_entity_edit_fields($model) {
        $fields = array();
        foreach ($model['entity_fields'] as $field) {
            if($field['is_edit_field'] && $field['is_form_field']) {
                array_push($fields, $field);
            }
        }
        return $fields;
    }

    /**
     * 
     */
    public static function build_entity_criteria_query_string() {
        $query_string = '';
        if(isset($_REQUEST['criteria_name']) && isset($_REQUEST['criteria_value'])) {
            $query_string = $query_string . '&criteria_name='. sanitize_text_field($_REQUEST['criteria_name']);
            $query_string = $query_string . '&criteria_value='. sanitize_text_field($_REQUEST['criteria_value']);
        }
        return $query_string;
    }
}

?>