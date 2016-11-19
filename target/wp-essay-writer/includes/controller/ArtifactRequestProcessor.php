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
        //self::process_session_data($page_instance);
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


    /**
     * Process the model
     */
    public static function process_session_data($page_instance){
        global $wp_session;
        //wp_session_unset();
        // 1. Get the current tab
        $tab_data = null;
        if(isset($_POST['tab_id'])) {
            $tab_id = sanitize_text_field($_POST['tab_id']);
            $tab_data = self::get_tab($tab_id);
        }
        else
            $tab_data = self::get_most_recent_tab();
        // 2. Initialize the session data for this page
        $page_data = array(
            'artifact' => $page_instance->get_artifact(),
            'artifact_url' => $page_instance->get_artifact_url(),
        );
        // Insert the page data to the
        // end of the tab array
        array_push($tab_data['pages'], $page_data);
        // Update tabs data with the modified tab
        self::add_tab($tab_data);
    }

    /**
     * Get the tabs data from the session. Tabs data
     * keeps a list of all the browsers tabs opened by the user
     */
    public static function get_tabs_data(){
        global $wp_session;
        if(!isset($wp_session['tabs_data'])) {
            $tabs_data = array(
                'recent' => '',
                'tabs' => array()
            );
            $wp_session['tabs_data'] = $tabs_data;
        }
        return $wp_session['tabs_data'];
    }
    
    /**
     *  
     */
    public static function get_tab($tab_id){
        global $wp_session;
        $tab_data = null;
        $tabs_data = self::get_tabs_data();
        // Tabs are not indexed by tab id hence the need for this loop
        foreach ($tabs_data['tabs'] as $tab) {
            if($tab['tab_id'] === $tab_id) $tab_data = $tab;
        }
        // If we get a null here we create a new tab
        if($tab_data === null) {
            $tab_data = array(
                'tab_id' => $tab_id,
                'pages' => array(),
            );
            self::add_tab($tab_data);
        }
        return $tab_data;
    }
    
    /**
     * 
     */
    public static function get_most_recent_tab(){
        global $wp_session;
        $tabs_data = self::get_tabs_data();
        // If we have the id of the most recently add tab we just return it
        if(!EntityStringUtils::is_invalid_string($tabs_data['recent'])) return $tabs_data['recent'];
        // If not we find the last tab in the tabs list
        $tabs = $tabs_data['tabs'];
        if(!empty($tabs)) return $tabs[count($tabs) - 1];
        // Now  we are here because both conditions above have failed so 
        // no we have to create a new tab and add it to the tabs list.
        $tab_data = array(
            'tab_id' => EntityStringUtils::get_token(8),
            'pages' => array(),
        );
        self::add_tab($tab_data);
        return $tab_data;
    }
    
    /**
     * 
     */
    public static function add_tab($tab_data){
        global $wp_session;
        $tabs_data = self::get_tabs_data();
        $tabs_data['recent'] = $tab_data['tab_id'];
        // Check if the tab exists
        $tab_exists = false;
        foreach ($tabs_data['tabs'] as $key => $tab) {
            if($tab['tab_id'] === $tab_data['tab_id']) {
                $tab_exists = true;
                // if it does we update the entry
                $tabs_data['tabs'][$key] = $tab_data;
            }
        }
        // If this a new tab then just push it into the array
        if(!$tab_exists) array_push($tabs_data['tabs'], $tab_data);
        $wp_session['tabs_data'] = $tabs_data;
    }
}
?>