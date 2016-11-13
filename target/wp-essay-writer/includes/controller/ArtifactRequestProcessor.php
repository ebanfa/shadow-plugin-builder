<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ArtifactRequestProcessor { 
    // Types of pages
    public static $page_type_portal = 'portal';
    public static $page_type_frontend = 'frontend';
    // Query variables
    public static $artifact_query_var_key = 'artifact';
    public static $page_type_query_var_key = 'page_type';
    public static $entity_id_query_var_key = 'entity_id';
    public static $page_action_query_var_key = 'page_action';


    /**
     *
     */
    public static function get_base_url() {
        return get_site_url() . '/page?';
    }

    /**
     *
     */
    public static function get_base_portal_url() {
        return trailingslashit(get_site_url() . '/portal');
    }

    /**
     * Get the fields associated with the current artifact
     */
    public static function get_artifact_url($artifact) {
        $artifact_url = self::get_base_portal_url();
        return $artifact_url . trailingslashit($artifact);
    }

    /**
     */
    public static function init_hooks() {
        add_action('shadowbanker_do_artifact_request', 'ArtifactRequestProcessor::do_artifact_request', 10);
    }
    
    /**
     */
    public static function do_artifact_request() {
        /*global $wp_query;
        var_dump($wp_query->query_vars);*/
        $artifact = get_query_var(self::$artifact_query_var_key);
        $page_type = get_query_var(self::$page_type_query_var_key);
        $page_action = get_query_var(self::$page_action_query_var_key);

        if (null === $page_type) return ViewUtils::display_error('Invalid request');
        if($page_type === self::$page_type_portal) {
            $page_instance = self::get_page_instance($artifact, $page_action);
        }
        else {
            $page_instance = new FrontendPage();
        }
        self::init_page_info($page_instance, $page_action);
        $page_instance->render();
    }
    
    /**
     */
    public static function get_page_instance($artifact, $page_action) {
        if(!isset(ArtifactUtils::$artifacts[$artifact])) {
            self::do_artifact_request_error('Artifact not found');
        }
        // At this stage we assume we are dealing with a valid artifact
        //$page_class_nm = 'ArtifactView';
        $artifact_class_nm = ArtifactUtils::$artifacts[$artifact]['name'];
        $artifact_type = ArtifactUtils::$artifacts[$artifact]['artifact_type'];

        if($artifact_type === 'entity') {
            if($page_action === PageUtils::$page_action_create) 
                $page_class_nm = 'Create' . $artifact_class_nm . 'Page';
            if($page_action === PageUtils::$page_action_edit) 
                $page_class_nm = 'Edit' . $artifact_class_nm . 'Page';
            if($page_action === PageUtils::$page_action_view) 
                $page_class_nm = 'View' . $artifact_class_nm . 'Page';
            if($page_action === PageUtils::$page_action_list) 
                $page_class_nm = 'List' . $artifact_class_nm . 'Page';

            if (!class_exists($page_class_nm)) {
                if($page_action === PageUtils::$page_action_create) 
                    $page_class_nm = 'CreateEntityPage';
                if($page_action === PageUtils::$page_action_edit) 
                    $page_class_nm = 'EditEntityPage';
                if($page_action === PageUtils::$page_action_view) 
                    $page_class_nm = 'ViewEntityPage';
                if($page_action === PageUtils::$page_action_list) 
                    $page_class_nm = 'ListEntityPage';
            }
        }
        else {
            $page_class_nm = $artifact_class_nm . 'Page';
        }
        $page_instance = new $page_class_nm($artifact, $page_action);
        return $page_instance;
    }

    public static function do_artifact_request_error($message){
        $page_class_nm = 'PortalErrorPage';
        $page_instance = new $page_class_nm($message);
        $page_action = get_query_var(self::$page_action_query_var_key);

        self::init_page_info($page_instance, $page_action);
        $page_instance->render();
        exit();
    }

    public static function init_page_info($page_instance, $page_action){
        $page_info = array(
            'view' => $page_instance,
            'page_action' => $page_action,
        );
        $_REQUEST['page_info'] = $page_info;
    }
}
?>