<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SinglePartyView extends SingleEntityView { 

	/**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        
        
    }

    /**
     *
     */
    function get_tabs() {
        if(!isset($_REQUEST['role'])) {
            return parent::get_tabs();
        }
        $role = sanitize_text_field($_REQUEST['role']);
        if($role == 'client') return $this->process_client_view(); 
        if($role == 'tenant') return $this->process_tenant_view(); 
        if($role == 'prospectivetenant') return $this->process_prospectivetenant_view(); 
        if($role == 'serviceprovider') return $this->process_serviceprovider_view(); 
    }

    /**
     * 
     */
    public function process_client_view() {
        $tabs = array();
        $tabs_entities = array('property', 'managementagreement', 'dispute');

        foreach ($this->model['related_child_entities'] as $related_child_entity) {
            $artifact_name = strtolower($related_child_entity['entity_name']);
            if(in_array($artifact_name, $tabs_entities)) {
                $tab = array(
                    'tab_type' => 'entity-list',
                    'name' => $related_child_entity['name'],
                    'description' => $related_child_entity['entity_description'],
                    'model' => EntityAPI::get_model(strtolower($related_child_entity['entity_name'])),
                    'artifact_name' => $artifact_name,
                    'type_instances' =>  array(),
                );
                array_push($tabs, $tab);
            }
        }
        return $tabs;
    }

    /**
     * 
     */
    public function process_tenant_view() {
        
    }

    /**
     * 
     */
    public function process_prospectivetenant_view() {
        
    }

    /**
     * 
     */
    public function process_serviceprovider_view() {
        
    }
}

?>