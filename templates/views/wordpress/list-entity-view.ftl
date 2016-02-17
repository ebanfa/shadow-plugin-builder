<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ListEntityView extends ArtifactView {

    /**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * Render this view
     */
    public function render() {
        if(isset($_REQUEST['page_info'])) {
            $artifact = $_REQUEST['page_info']['artifact'];
            $custom_render_action = 'shadowbanker_render_list_' . $artifact . '_view';

            if(has_action($custom_render_action)) {
                // action exists so execute it
                do_action($custom_render_action);
            } else {
                // action has not been registered
                // execute default render operation
                do_action('shadowbanker_render_list_entity_view');
            }
        }
    }

}

?>