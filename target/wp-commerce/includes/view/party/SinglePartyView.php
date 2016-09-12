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
        if($this->model['party_type_code'] == 'INDIVIDUAL') {
            $person_data = EntityAPI::get_by_field('person', 'party', $this->model['id']);
            if(isset($person_data['id'])) {
                if($person_data['gender'] == 'M')
                    $this->model['image'] = 'male.jpg';
                else
                    $this->model['image'] = 'female.jpg';
            }
        }
        else {
            $this->model['image'] = 'business.png';
        }
    }

    /**
     *
     */
    function get_tabs() {
        if(!isset($_REQUEST['role'])) {
            return parent::get_tabs();
        }
        $role = sanitize_text_field($_REQUEST['role']);
        if($role == 'customer') return $this->process_customer_view(); 
        if($role == 'supplier') return $this->process_supplier_view(); 
        if($role == 'employee') return $this->process_employee_view(); 
    }

    /**
     * 
     */
    public function process_customer_view() {
        $tabs = array(
            array(
                'tab_type' => 'entity-list',
                'name' => 'address',
                'description' => 'Address',
                'model' => EntityAPI::get_model('contactmechanism'),
                'artifact_name' => 'contactmechanism',
                'type_instances' =>  array(),
            )
        );
        return $tabs;
    }

    /**
     * 
     */
    public function process_supplier_view() {
        $tabs = array(
            array(
                'tab_type' => 'entity-list',
                'name' => 'address',
                'description' => 'Address',
                'model' => EntityAPI::get_model('contactmechanism'),
                'artifact_name' => 'contactmechanism',
                'type_instances' =>  array(),
            )
        );
        return $tabs;
    }
    
    /**
     * 
     */
    public function process_employee_view() {
        $tabs = array(
            array(
                'tab_type' => 'entity-list',
                'name' => 'address',
                'description' => 'Address',
                'model' => EntityAPI::get_model('contactmechanism'),
                'artifact_name' => 'contactmechanism',
                'type_instances' =>  array(),
            )
        );
        return $tabs;
    }

    /**
     * Render this view
     */
    public function get_edit_url() {
        $party_type = EntityAPI::get_by_code('partytype', 'INDIVIDUAL');

        $role_param = '';
        if(isset($_REQUEST['role'])) $role_param = '&role=' . sanitize_text_field($_REQUEST['role']);

        if(isset($party_type['id'])) {
            if($party_type['id'] == $this->model['party_type']) {
                $person_data = EntityAPI::get_by_field('person', 'party', $this->model['id']);
                if(isset($person_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=person&id=' . $person_data['id'] . $this->get_parent_url() . '&page_action=edit' . $role_param;
            }
            else {
                $partygroup_data = EntityAPI::get_by_field('partygroup', 'party', $this->model['id']);
                if(isset($partygroup_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=partygroup&id=' . $partygroup_data['id'] . $this->get_parent_url() . '&page_action=edit' . $role_param;
            }
        }
        // execute default render operation
        return EntityActionProcessor::get_base_url() . 'artifact=' . $this->get_artifact_name() . '&id=' . $this->model['id'] . $this->get_parent_url() . '&page_action=edit' . $role_param;
    }

    /**
     * Render this view
     */
    public function get_delete_url() {
        $party_type = EntityAPI::get_by_code('partytype', 'INDIVIDUAL');

        $role_param = '';
        if(isset($_REQUEST['role'])) $role_param = '&role=' . sanitize_text_field($_REQUEST['role']);
        
        if(isset($party_type['id'])) {
            if($party_type['id'] == $this->model['party_type']) {
                $person_data = EntityAPI::get_by_field('person', 'party', $this->model['id']);
                if(isset($person_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=person&id=' . $person_data['id'] . $this->get_parent_url() . '&page_action=delete' . $role_param;
            }
            else {
                $partygroup_data = EntityAPI::get_by_field('partygroup', 'party', $this->model['id']);
                if(isset($partygroup_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=partygroup&id=' . $partygroup_data['id'] . $this->get_parent_url() . '&page_action=delete' . $role_param;
            }
        }
        // execute default render operation
        return EntityActionProcessor::get_base_url() . 'artifact=' . $this->get_artifact_name() . '&id=' . $this->model['id'] . $this->get_parent_url() . '&page_action=delete' . $role_param;
    }

    /**
     * Render this view
     */
    public function render() {
        $custom_render_action = 'shadowbanker_render_' . $this->page_action .'_' . $this->artifact . '_view';

        if(isset($_REQUEST['page_info'])) {
            
            do_action('shadowbanker_before_main_content');

           // do_action('shadowbanker_before_artifact_content');

            if(has_action($custom_render_action)) {
                // action exists so execute it
                do_action($custom_render_action);
            } else {
                // action has not been registered
                // execute default render operation
                //do_action('shadowbanker_render_'. $this->page_action . '_entity_view');
                $this->render_impl();
             }

            //do_action('shadowbanker_after_artifact_content');

            do_action('shadowbanker_after_main_content');

           
        }
    }
}

?>