<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SinglePartyView extends SingleEntityView { 

    public $role;

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
        if($this->model['party_type_code'] == PartyAPI::$individual_party_type) {
            $person_data = EntityAPI::get_by_field('person', 'person_party', $this->model['id']);
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

        if(isset($_REQUEST['role'])) $this->role = sanitize_text_field($_REQUEST['role']);
        
    }

    /**
     *
     */
    function get_tabs() {
        if(!isset($_REQUEST['role'])) {
            return parent::get_tabs();
        }
        $role = sanitize_text_field($_REQUEST['role']);
        if($role == 'tutor') return $this->process_tutor_view(); 
        if($role == 'student') return $this->process_student_view(); 
    }

    /**
     * 
     */
    public function process_tutor_view() {
        $tabs = array();
        $alowed_tabs = array(
            'partyqualification' => 'Qualifications',
            'partyreview' => 'Reviews',
            'partysubjectarea' => 'Subjects',
        );
        foreach ($this->model['related_child_entities'] as $field_name => $related_child_entity) {
            $related_artifact_name = strtolower($related_child_entity['entity_name']);

            foreach ($alowed_tabs as $tab_key => $tab_value) {
                if($related_artifact_name == $tab_key && $field_name != 'reviewed_by') {
                    $tab = array(
                        'tab_type' => 'entity-list',
                        'name' => $related_child_entity['name'],
                        'description' => $tab_value,
                        'model' => EntityAPI::get_model($related_artifact_name),
                        'artifact_name' => $related_artifact_name,
                        'type_instances' =>  array(),
                    );
                    array_push($tabs, $tab);
                }
            }
            
        }
        return $tabs;
    }

    /**
     * 
     */
    public function process_student_view() {
        $tabs = array();
        $alowed_tabs = array('partyqualification');
        foreach ($this->model['related_child_entities'] as $related_child_entity) {
            $related_artifact_name = strtolower($related_child_entity['entity_name']);
            if(in_array($related_artifact_name, $alowed_tabs)) {
                $tab = array(
                    'tab_type' => 'entity-list',
                    'name' => $related_child_entity['name'],
                    'description' => $related_child_entity['entity_description'],
                    'model' => EntityAPI::get_model($related_artifact_name),
                    'artifact_name' => $related_artifact_name,
                    'type_instances' =>  array(),
                );
                array_push($tabs, $tab); 
                // This code has to be written to serve the functions of the tutor and all the other requirem
            }
        }
        return $tabs;
    }

    /**
     * Render this view
     */
    public function get_edit_url() {
        $party_type = EntityAPI::get_by_code('partytype', PartyAPI::$individual_party_type);

        $role_param = '';
        if(isset($_REQUEST['role'])) $role_param = '&role=' . sanitize_text_field($_REQUEST['role']);

        if(isset($party_type['id'])) {
            if($party_type['id'] == $this->model['party_type']) {
                $person_data = EntityAPI::get_by_field('person', 'person_party', $this->model['id']);
                if(isset($person_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=person&id=' . $person_data['id'] . $this->get_parent_url() . '&page_action=edit' . $role_param;
            }
            else {
                $partygroup_data = EntityAPI::get_by_field('partygroup', 'partygroup_party', $this->model['id']);
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
        $party_type = EntityAPI::get_by_code('partytype', PartyAPI::$individual_party_type);

        $role_param = '';
        if(isset($_REQUEST['role'])) $role_param = '&role=' . sanitize_text_field($_REQUEST['role']);
        
        if(isset($party_type['id'])) {
            if($party_type['id'] == $this->model['party_type']) {
                $person_data = EntityAPI::get_by_field('person', 'person_party', $this->model['id']);
                if(isset($person_data['id'])) 
                    return EntityActionProcessor::get_base_url() . 'artifact=person&id=' . $person_data['id'] . $this->get_parent_url() . '&page_action=delete' . $role_param;
            }
            else {
                $partygroup_data = EntityAPI::get_by_field('partygroup', 'partygroup_party', $this->model['id']);
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

           do_action('shadowbanker_before_artifact_content');

            if(has_action($custom_render_action)) {
                // action exists so execute it
                do_action($custom_render_action);
            } else {
                // action has not been registered
                // execute default render operation
                //do_action('shadowbanker_render_'. $this->page_action . '_entity_view');
                $this->render_impl();
             }

            do_action('shadowbanker_after_artifact_content');

            do_action('shadowbanker_after_main_content');

           
        }
    }
}

?>