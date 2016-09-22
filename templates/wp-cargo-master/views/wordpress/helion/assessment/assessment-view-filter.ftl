<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AssessmentViewFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_assessment_action_links', array('AssessmentViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {

        $action_links = array();
        $page_action = $view->get_page_action();       

        if($page_action == 'create') {
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact='. $view->get_artifact_name());
        }
        if($page_action == 'list') {
            // Add Property Assessment link
            $action_links['create_property_assessment_link'] = array('name' => 'New Property Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());
            // Add Building Assessment link
            $action_links['create_building_assessment_link'] = array('name' => 'New Building Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());
            // Add Land Assessment link
            $action_links['create_land_assessment_link'] = array('name' => 'New Land Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());
        }
        if($page_action == 'view') {
            // Add Property Assessment link
            $action_links['create_property_assessment_link'] = array('name' => 'New Property Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());
            // Add Building Assessment link
            $action_links['create_building_assessment_link'] = array('name' => 'New Building Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());
            // Add Land Assessment link
            $action_links['create_land_assessment_link'] = array('name' => 'New Land Assessment', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name());

            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact='. $view->get_artifact_name());
        }
        return $action_links;
    }

}

?>