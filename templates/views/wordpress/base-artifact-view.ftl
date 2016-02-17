<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ArtifactView {

    public $artifact;
    public $page_action;
    public $page_action_txt;
    public $page_action_description;


    /**
     *
     */
    function __construct() {
        // Add the action
        $this->add_actions();

        $page_info = $_REQUEST['page_info'];
        $_REQUEST['page_info']['view'] = $this;
        $this->artifact = sanitize_text_field($page_info['artifact']);
        $this->page_action = sanitize_text_field($page_info['page_action']);
        $this->page_action_description = sanitize_text_field($page_info['page_action_description']);

        $this->set_page_action_txt();

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
       return $this->$artifact;
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function get_page_action() {
       return $this->$page_action;
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
     * Action method to enqueue the required scripts
     */
    public function set_page_action_txt() {
        $page_action = sanitize_text_field($_REQUEST['$page_info']['page_action']);

        if($page_action == 'create')
            $this->page_action_txt = 'Create a new '. strtolower($page_name ) . ' by filling in the form below';
        if($page_action == 'edit')
            $this->page_action_txt = 'Edit the '. strtolower($page_name ) . ' by updating the form below';
        if($page_action == 'view')
            $this->page_action_txt = 'To update or delete the ' . strtolower($page_name ) . ', click on the control buttons below.';
        if($page_action == 'list')
            $this->page_action_txt = 'The '. strtolower($page_name ) . ' list. To view a single record, click on the highlighted column.';
    }

    /**
     * Render this view
     */
    public function render() {
        if(isset($_REQUEST['page_info'])) {
            $artifact = $_REQUEST['page_info']['artifact'];
            $custom_render_action = 'shadowbanker_render_create_' . $artifact . '_view';

            if(has_action($custom_render_action)) {
                // action exists so execute it
                do_action($custom_render_action);
            } else {
                // action has not been registered
                // execute default render operation
                do_action('shadowbanker_render_create_entity_view');
            }
        }
    }

}

?>