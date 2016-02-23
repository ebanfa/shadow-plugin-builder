<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BaseEntityView extends ArtifactView {

    public $model;
    public $parent_id;
    public $parent_url;
    public $parent_field;
    public $parent_param;
    public $parent_artifact;

    /**
     *
     */
    function __construct() {
        parent::__construct();
        
    }

    /**
     * Set up view
     */
    public function set_up() {
        parent::set_up();
        $this->process_model();
        $this->process_parent_parameters();
    }

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        $artifact_data = ArtifactUtils::$artifacts[$this->artifact];
        if($artifact_data['artifact_type'] == 'entity'){
            $this->model = EntityAPI::get_model($this->artifact);
        }
    }

    /**
     * Process the parent entity instance parameters.  
     */
    public function process_parent_parameters(){
        // Process the parent id, if any
        if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) {

            $this->parent_id = sanitize_text_field($_REQUEST['parent_id']);
            $this->parent_field = sanitize_text_field($_REQUEST['parent_field']);
            $this->parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
            $this->parent_url = '&parent_id=' . $this->parent_id . '&parent_artifact=' . $this->parent_artifact . '&parent_field=' . $this->parent_field;

            if(isset($_REQUEST['parent_param'])) $this->parent_param = urldecode($_REQUEST['parent_param']);
        }
    }

    /**
     * 
     */
    public function get_model() {
       return $this->model;
    }

    /**
     * 
     */
    public function get_parent_id() {
       return $this->parent_id;
    }

    /**
     * 
     */
    public function get_parent_artifact_name() {
       return $this->parent_artifact;
    }

    /**
     * 
     */
    public function get_parent_field() {
       return $this->parent_field;
    }

    /**
     * 
     */
    public function get_parent_param() {
       return $this->parent_param;
    }

    /**
     * 
     */
    public function get_parent_url() {
       return $this->parent_url;
    }
    
    /**
     * 
     */
    public function get_related_form_fields() {
        $model = $this->model;
        $related_form_fields = array();
        // The appropriate relationship fields for the current page action
        foreach ($model['entity_fields'] as $field) {
            if($this->page_action == 'create' && $field['is_relationship_field'] && $field['is_create_field']) {
                array_push($related_form_fields, $field);
            }
            if($this->page_action == 'edit' && $field['is_relationship_field'] && $field['is_edit_field']) {
                array_push($related_form_fields, $field);
            }
        }
        return $related_form_fields; 
    }

    /**
     * 
     */
    public function get_related_form_field_model($artifact) {
        return EntityAPI::get_model($artifact); 
    }


}

?>