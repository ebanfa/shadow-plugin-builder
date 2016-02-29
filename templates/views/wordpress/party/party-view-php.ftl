<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PartyView extends ViewController {

    public static $view_title_map = array('client' => 'Client',
        'tenant' => 'Tenant',
        'prospective_tenant' => 'Prospective Tenant',
        'service_provider' => 'Service Provider',);
    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_party_view_title', array('PartyView', 'filter_view_title'), 10, 2);
        add_filter('shadowbanker_party_form_fields', array('PartyView', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_party_action_links', array('PartyView', 'filter_view_action_links'), 10, 2);
        add_filter('shadowbanker_partygroup_action_links', array('PartyView', 'filter_view_action_links'), 10, 2);
        add_filter('shadowbanker_person_action_links', array('PartyView', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if(isset($_REQUEST['role']) && $page_action == 'list') {
            $form_fields['role'] = array('name' => 'role', 'value' => sanitize_text_field($_REQUEST['role']));
        }
        
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_title($view, $title) {
        $title = parent::filter_view_title($view, $title);
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            if(isset(self::$view_title_map[$role]))
                $title = self::$view_title_map[$role];
        }
        return $title;
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        $page_action = $view->get_page_action();
        $party_role_param = '';
        if(isset($_REQUEST['role'])) {
            $party_role_param = '&role=' . sanitize_text_field($_REQUEST['role']);
        }
        //$action_links = parent::filter_view_action_links($view, $action_links);
        $action_links = array();
        if($page_action == 'create') {
            // Add Person link
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact='. $view->get_artifact_name() . $party_role_param);
        }
        if($page_action == 'list') {
            // Add Person link
            $action_links['create_person_link'] = array('name' => 'Add New Person', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=person' . $party_role_param);
            // Add Organization link
            $action_links['create_organization_link'] = array('name' => 'Add New Organization', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=partygroup' . $party_role_param);
        }
        if($page_action == 'view') {
            // Add Person link
            $action_links['create_person_link'] = array('name' => 'Add New Person', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=person' . $party_role_param);
            // Add Organization link
            $action_links['create_organization_link'] = array('name' => 'Add New Organization', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=partygroup' . $party_role_param);

            $action_links['list_party_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact=party' . $party_role_param);
        }
        return $action_links;
    }

}

?>