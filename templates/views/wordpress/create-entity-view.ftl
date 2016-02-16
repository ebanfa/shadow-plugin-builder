<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateEntityView {

    /**
     *
     */
    function __construct() {
        // Add the action
        add_action('wp_footer', 'enqueue_scripts');
    }

    /**
     * Action method to enqueue the required scripts
     */
    function enqueue_scripts() {
        //
        wp_register_script('cp_entity_form', 
            plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);

        wp_register_script('cp_entity_mask',
            plugins_url('/js/entity-input-mask.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);

        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_entity_mask');
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