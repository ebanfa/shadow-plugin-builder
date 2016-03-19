<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PurchaseAgreementViewFilter extends ViewFilter {

    public static $view_title_map = array(
        'purchase' => 'Property Purchase',
        'sale' => 'Property Sale',);

    public static $view_description_map = array(
        'purchase' => 'Property purchase form',
        'sale' => 'Property sale form',);
    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_purchaseagreement_view_title', array('PurchaseAgreementViewFilter', 'filter_view_title'), 10, 2);
        add_filter('shadowbanker_purchaseagreement_view_description', array('PurchaseAgreementViewFilter', 'filter_view_description'), 10, 2);
        //add_filter('shadowbanker_purchaseagreement_form_fields', array('PurchaseAgreementViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_purchaseagreement_action_links', array('PurchaseAgreementViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if(isset($_REQUEST['role']) && $page_action == 'list') {
            $form_fields = array();
            $field = array();
            $field['options_criteria'] = array('name' => 'role', 'value' => sanitize_text_field($_REQUEST['role']));
            array_push($form_fields, $field);
        }
        
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_title($view, $title) {
        $title = parent::filter_view_title($view, $title);
        if(isset($_REQUEST['a_type'])) {
            $a_type = sanitize_text_field($_REQUEST['a_type']);
            if(isset(self::$view_title_map[$a_type]))
                $title = self::$view_title_map[$a_type];
        }
        return $title;
    }

    /**
     *
     */
    public static function filter_view_description($view, $title) {
        $page_action = $view->get_page_action();
        $description = parent::filter_view_action_description($view, $title);
        if(isset($_REQUEST['a_type'])) {
            $a_type = sanitize_text_field($_REQUEST['a_type']);
            if(isset(self::$view_description_map[$a_type])){
                if($page_action == 'create' || $page_action == 'edit' ) {
                    $description = self::$view_description_map[$a_type];
                }
            }
        }
        return $description;
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        $page_action = $view->get_page_action();
        $a_type_param = '';
        if(isset($_REQUEST['a_type'])) {
            $a_type_param = '&a_type=' . sanitize_text_field($_REQUEST['a_type']);
        }
        //$action_links = parent::filter_view_action_links($view, $action_links);
        $action_links = array();
        if($page_action == 'create') {
            // Add Person link
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact='. $view->get_artifact_name() . $a_type_param);
        }
        if($page_action == 'list') {
            // Add Person link
            $action_links['create_entity_link'] = array('name' => 'Add New', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name() . $a_type_param);
        }
        if($page_action == 'view') {
            // Add Person link
            $action_links['create_entity_link'] = array('name' => 'Add New', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact='. $view->get_artifact_name() . $a_type_param);

            $action_links['list_party_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact='. $view->get_artifact_name() . $a_type_param);
        }
        return $action_links;
    }

}

?>