<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PageUtils {

    public static $page_action_list = 'list';
    public static $page_action_edit = 'edit';
    public static $page_action_view = 'view';
    public static $page_action_create = 'create';

    public static $link_text_list = 'View All';
    public static $link_text_create = 'Add New';

    public static $link_type_list = 'LIST_ENTITY';
    public static $link_type_create = 'CREATE_ENTITY';

    public static $base_view_path = 'page_action=view&artifact=';
    public static $base_edit_path = 'page_action=edit&artifact=';
    public static $base_list_path = 'page_action=list&artifact=';
    public static $base_create_path = 'page_action=create&artifact=';

    public static $global_entities = array('contentorder', 'content');

    static $page_action_mapping = array(
        'create' => 'Create',
        'edit' => 'Edit',
        'view' => 'View',
        'list' => 'List',
        'list_modal' => 'List Modal',
    );

    /**
     * 
     */
    public static function display_error($message){
        global $wp_query;
        var_dump($wp_query->query_vars);
         echo '<h2>'. $message. '!</h2>';
    }

    /**
     * Get the appropriate view header description text for the given page action
     */
    public static function get_page_description($page_action, $artifact_description) {

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
    public static function get_action_links($page_action, $artifact) {
        $action_links = array();
        if($page_action == 'create') {
            $action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
        }
        if($page_action == 'edit') {
            $action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
        }
        if($page_action == 'view') {
            $action_links['list_entity_link'] = self::build_link($artifact, self::$link_type_list, self::$link_text_list);
            //if(!UserPartyAPI::is_current_user_portal_admin() && !in_array($artifact, self::$global_entities)) return $action_links;
            $action_links['create_entity_link'] = self::build_link($artifact, self::$link_type_create, self::$link_text_create);
        }
        if($page_action == 'list') {
            //if(!UserPartyAPI::is_current_user_portal_admin() && !in_array($artifact, self::$global_entities)) return $action_links;
            $action_links['create_entity_link'] = self::build_link($artifact, self::$link_type_create, self::$link_text_create);
        }
        return $action_links;
    }

    /**
     *
     */
    public static function build_link($artifact, $link_type, $link_text) {
        $entity_action_link = '';

        if($link_type == self::$link_type_create)
            $entity_action_link = self::get_artifact_url($artifact) . self::$page_action_create;

        if($link_type == self::$link_type_list)
            $entity_action_link = self::get_artifact_url($artifact) . self::$page_action_list;

        /*if(isset($_REQUEST['criteria_name']) && isset($_REQUEST['criteria_value'])) {
            $entity_action_link = $entity_action_link . '&criteria_name='. sanitize_text_field($_REQUEST['criteria_name']);
            $entity_action_link = $entity_action_link . '&criteria_value='. sanitize_text_field($_REQUEST['criteria_value']);
        }*/
        return array('name' => $link_text, 'link' => $entity_action_link);
    }

    /**
     * Get the fields associated with the current artifact
     */
    public static function get_artifact_url($artifact) {
        return ArtifactRequestProcessor::get_artifact_url($artifact);
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