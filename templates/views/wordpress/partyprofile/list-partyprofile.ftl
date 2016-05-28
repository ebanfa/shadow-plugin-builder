<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class List${entity.name}View extends ListEntityView {

    /**
     *
     */
    function __construct() {
        parent::__construct();
        $party_data = PartyAPI::get_current_user_party();
        if(isset($party_data['id'])) {
            $profile_data = EntityAPI::get_by_field($this->get_artifact_name(), 'party', $party_data['id']);
            if (isset($profile_data['id'])) $this->model = $profile_data;
        }
    }

    /**
     * Render this view
     */
    public function get_edit_url() {
        // execute default render operation
        $additional_seach_options = '';
        foreach ($this->get_form_fields() as $field) { 
            if(isset($field['view_criteria'])) { 
                foreach ($field['view_criteria'] as $criteria_name => $criteria_value) {
                    $additional_seach_options = $additional_seach_options . '&' . $criteria_name . '=' . $criteria_value;
                }
            }
        } 
        return EntityActionProcessor::get_base_url() . 'artifact=' . $this->get_artifact_name() . '&id=' . $this->model['id'] . $this->get_parent_url() . '&page_action=edit' . $additional_seach_options;
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