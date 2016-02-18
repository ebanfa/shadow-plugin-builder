<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class EditEntityView extends ArtifactView { 

    /**
     *
     */
    function __construct() {
        parent::__construct();
        if (isset($_REQUEST['id'])) {
            $this->model = EntityAPI::get_by_id($this->get_artifact_name(),sanitize_text_field($_REQUEST['id']));
        }
    }

}

?>