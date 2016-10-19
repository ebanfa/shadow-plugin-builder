<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class StudentListViewFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_studentlist_action_links', array('StudentListViewFilter', 'filter_view_action_links'), 10, 2);
        add_filter('shadowbanker_studenteditor_action_links', array('StudentListViewFilter', 'filter_view_action_links'), 10, 2);
        add_filter('shadowbanker_studentdisplay_action_links', array('StudentListViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        $page_action = $view->get_page_action();
        $action_links = array();
        
        if($page_action == 'create' || $page_action == 'edit') {
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studentlist&page_action=list');
        }
        if($page_action == 'list') {
            // Crude access control
            if(!UserPartyAPI::is_current_user_portal_admin() && !in_array($view->get_artifact_name(), ViewUtils::$global_entities)) return $action_links;

            $action_links['create_entity_link'] = array('name' => 'Add Student', 
                'link' => ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studenteditor&page_action=create');
           
        }
        if($page_action == 'view') {
            // Add Person link
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studentlist&page_action=list');
            // Crude access control
            if(!UserPartyAPI::is_current_user_portal_admin() && 
                !in_array($view->get_artifact_name(), ViewUtils::$global_entities)) return $action_links;

            $action_links['create_entity_link'] = array('name' => 'Add Student', 
                'link' => ArtficatAjaxRequestProcessorUtils::get_base_url() . 'partifact=studenteditor&page_action=create');
            
        }
        return $action_links;
    }
}

?>