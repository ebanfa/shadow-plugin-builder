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
     * 
     */
    public function get_form_fields() {
        $form_fields = array();
        return $form_fields; 
    }
}

?>