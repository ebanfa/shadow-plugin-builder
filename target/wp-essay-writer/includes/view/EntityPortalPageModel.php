<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class EntityPortalPageModel extends PortalPageModel { 


    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
    	$artifact = $this->ui_component->get_artifact();
        if(!$this->is_entity($artifact))
            ArtifactRequestProcessor::do_artifact_request_error('Requested record is not a persistence object');
            
        $this->model = EntityAPI::get_model($artifact);
        $this->ui_component->tabs = $this->init_tabs();
    }

    /**
     *
     */
    function init_tabs() {
        $tabs = array();
        $model = $this->get_model();
        foreach ($model['related_child_entities'] as $related_child_entity) { 
            $tab = array(
                'tab_type' => 'entity-list',
                'name' => $related_child_entity['name'],
                'description' => $related_child_entity['entity_description'],
                'model' => EntityAPI::get_model(strtolower($related_child_entity['entity_name'])),
                'artifact_name' => strtolower($related_child_entity['entity_name']),
                'type_instances' =>  array(),
            );
            array_push($tabs, $tab);
        }
        return $tabs;
    }

    /**
     * 
     */
    public function get_artifact_fields() {
        $artifact_fields = array();
        $page_action = $this->ui_component->get_page_action();

        foreach ($this->model['entity_fields'] as $field) {
            if ($field['is_create_field'] && $page_action == PageUtils::$page_action_create) {
                array_push($artifact_fields, $field);
            }
            if ($field['is_edit_field'] && $page_action == PageUtils::$page_action_edit) {
                array_push($artifact_fields, $field);
            }
            if ($field['is_view_field'] && $page_action == PageUtils::$page_action_view) {
                array_push($artifact_fields, $field);
            }
            if ($field['is_list_field'] && $page_action == PageUtils::$page_action_list) {
                array_push($artifact_fields, $field);
            }
        }
        return $this->filter_artifact_fields($artifact_fields); 
    }

    /**
     * 
     */
    public function get_related_form_field_model($artifact_name) {
        return EntityAPI::get_model($artifact_name);
    }

    /**
     * 
     */
    public function is_entity($artifact) {
        $is_entity = true;
        $artifact_data = ArtifactUtils::$artifacts[$artifact];
        if($artifact_data['artifact_type'] !== 'entity') $is_entity = false;
        return $is_entity;
    }

}
?>