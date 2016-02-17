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
    }

}

?>