<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ViewUtils {

	public static $base_view_path = '/page?type=entity&page_action=view&artifact=';
	public static $base_edit_path = '/page?type=entity&page_action=edit&artifact=';
	public static $base_list_path = '/page?type=entity&page_action=list&artifact=';
	public static $base_create_path = '/page?type=entity&page_action=create&artifact=';

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
         	return self::get_create_entity_action_links($page_action, $artifact);
        }
    }

    /**
     *
     */
    public static function get_create_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['list_entity_link'] = array('name' => 'View All', 'link' => $base_list_path . $artifact);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_edit_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['list_entity_link'] = array('name' => 'View All', 'link' => $base_list_path . $artifact);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_view_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['create_entity_link'] = array('name' => 'Add New', 'link' => $base_create_path. $artifact);
    	$action_links['list_entity_link'] = array('name' => 'View All', 'link' => $base_list_path . $artifact);
    	return $action_links;
   	}

   	/**
     *
     */
    public static function get_list_entity_action_links($page_action, $artifact) {
    	$action_links = array();
    	$action_links['create_entity_link'] = array('name' => 'Add New', 'link' => $base_create_path. $artifact);
    	return $action_links;
   	}
}

?>