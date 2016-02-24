<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SinglePartyView extends BaseEntityView { 

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
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            if($role == 'client') $this->process_client_view(); 
            if($role == 'tenant') $this->process_tenant_view(); 
            if($role == 'prospectivetenant') $this->process_prospectivetenant_view(); 
            if($role == 'serviceprovider') $this->process_serviceprovider_view(); 
        }
        
    }

    /**
     * 
     */
    public function process_client_view() {
        $client_related_entities = array();
        $model = $this->model;
        foreach ($client_related_entities as $value) {
            # code...
            // if value in array then unset the value
        }
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