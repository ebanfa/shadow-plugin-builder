<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class DashboardView extends ArtifactView {

    

    /**
     *
     */
    function __construct() {
        $this->set_up();
    }

   
    /**
     * Render this view
     */
    public function render() {
        if(isset($_REQUEST['page_info'])) {
            do_action('shadowbanker_render_dashboard_view');
        }
    }

}

?>