<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ArtifactView {

    public $page_info;
    public $artifact;
    public $page_name;
    public $page_action;
    public $page_action_txt;
    public $page_action_description;

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
        $this->set_up();
    }

    /**
     * Set up view
     */
    public function set_up() {
        $this->page_info = $_REQUEST['page_info'];
        $_REQUEST['page_info']['view'] = $this;

        $this->add_actions();
        $this->artifact = sanitize_text_field($this->page_info['artifact']);
        $this->page_name = sanitize_text_field($this->page_info['artifact_display_name']);
        $this->page_action = sanitize_text_field($this->page_info['page_action']);
        $this->page_action_description = sanitize_text_field($this->page_info['page_action_description']);

        $this->set_page_action_txt();
        // Get the model
        $artifact_data = ArtifactUtils::$artifacts[$this->artifact];
        if($artifact_data['artifact_type'] == 'entity'){
            $this->model = EntityAPI::get_model($this->artifact);
        }
        // Process the parent id, if any
        if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) {

            $this->parent_id = sanitize_text_field($_REQUEST['parent_id']);
            $this->parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
            $this->parent_field = sanitize_text_field($_REQUEST['parent_field']);
            $this->parent_url = '&parent_id=' . $this->parent_id . '&parent_artifact=' . $this->parent_artifact . '&parent_field=' . $this->parent_field;
            if(isset($_REQUEST['parent_param'])) $this->$parent_param = urldecode($_REQUEST['parent_param']);
        }
    }

    /**
     * Register hooks
     */
    public function add_actions() {
        add_action('wp_footer', array($this, 'enqueue_scripts'));
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function enqueue_scripts() {
       
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_artifact_name() {
       return $this->artifact;
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_page_name() {
        $page_name_filter = 'shadowbanker_' . $this->artifact . '_view_title';
        if (has_filter($page_name_filter)) {
            $this->page_name = apply_filters($page_name_filter, $this, $this->page_name);
        }
        return $this->page_name;
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_page_action() {
       return $this->page_action;
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_page_action_description() {
       return $this->page_action_description;
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_page_action_txt() {
       return $this->page_action_txt;
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
     * Action method to enqueue the required scripts
     */
    public function set_page_action_txt() {
        $page_action = sanitize_text_field($_REQUEST['page_info']['page_action']);

        if($page_action == 'create')
            $this->page_action_txt = 'Create a new '. strtolower($this->page_name ) . ' by filling in the form below';
        if($page_action == 'edit')
            $this->page_action_txt = 'Edit the '. strtolower($this->page_name ) . ' by updating the form below';
        if($page_action == 'view')
            $this->page_action_txt = 'To update or delete the ' . strtolower($this->page_name ) . ', click on the control buttons below.';
        if($page_action == 'list')
            $this->page_action_txt = 'To view a single record, click on the highlighted column.';
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
    public function get_action_links() {
        $action_links = array();
        $action_links_filter = 'shadowbanker_' . $this->artifact . '_action_links';
        if (has_filter($action_links_filter)) {
            $action_links = apply_filters($action_links_filter, $this, $action_links );
        }
        else{
            $action_links = $this->get_view_action_links();
        }
        return $action_links; 
    }

    /**
     * 
     */
    public function get_form_fields() {
        $form_fields = array();
        $fields_filter = 'shadowbanker_' . $this->artifact . '_form_fields';
        if (has_filter($fields_filter)) {
            $form_fields = apply_filters($fields_filter, $this, $form_fields);
        }
        return $form_fields; 
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
        // We need to set 
        return $related_form_fields; 
    }

    /**
     * 
     */
    public function get_related_form_field_model($artifact) {
        return EntityAPI::get_model($artifact);; 
    }

    /**
     * This method add additional information to a field.
     * The added information is required to display the field.
     */
    public function prepare_view_form_field($field) {
        $field_filter = 'shadowbanker_filter_form_field';
        if (has_filter($field_filter)) {
            $field = apply_filters($field_filter, $this, $field);
        }
        return $field;
    }


    /**
     * Render this view
     */
    public function render() {
        if(isset($_REQUEST['page_info'])) {
            $custom_render_action = 'shadowbanker_render_' . $this->page_action .'_' . $this->artifact . '_view';

            if(has_action($custom_render_action)) {
                // action exists so execute it
                do_action($custom_render_action);
            } else {
                // action has not been registered
                // execute default render operation
                do_action('shadowbanker_render_'. $this->page_action . '_entity_view');
            }
        }
    }
    /**
     *
     */
    public function get_view_action_links() {
        $page_action = $this->get_page_action();
        //$action_links = parent::filter_view_action_links($view, $action_links);
        $action_links = array();
        $model = $this->model;
        $model_name = $model['entity_description'];
        if($this->get_page_action() == 'create') {
            // Add Person link
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => '/page?type=entity&page_action=list&artifact='. $this->artifact);
        }
        if($this->get_page_action() == 'view') {
            // Add list entity link
            $action_links['list_entity_link'] = array('name' => 'View All', 
                'link' => '/page?type=entity&page_action=list&artifact='. $this->artifact);
            // Add list entity link
            $action_links['create_entity_link'] = array('name' => 'Add New', 
                'link' => '/page?type=entity&page_action=create&artifact='. $this->artifact);
        }
        if($this->get_page_action() == 'list') {
            // Add list entity link
            $action_links['create_entity_link'] = array('name' => 'Add New', 
                'link' => '/page?type=entity&page_action=create&artifact='. $this->artifact);
        }
        return $action_links;
    }

}

?>