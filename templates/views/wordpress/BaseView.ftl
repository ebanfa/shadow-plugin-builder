<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class BaseArtifactView {

    /**
     *
     */
    function __construct() {
        // Add the action
        $this->add_view_actions();
    }

    /**
     * Action method to enqueue the required scripts
     */
    public function add_view_actions() {
    }

    /**
     * Render this view
     */
    public function render() {
        
    }

}

?>