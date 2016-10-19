<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ListContentView extends BaseEntityView {

    /**
     *
     */
    function __construct() {
        parent::__construct();
    }


    /**
     * Render this view
     */
    public function render_impl() {
        UIDisplayAPI::display_entity_archive($_REQUEST['page_info']);
    }

    /**
     * Gets all the content by subject area
     */
    public function get_content_by_subject() {
        if(!isset($_REQUEST['subject'])) return array();
        $subject = sanitize_text_field($_REQUEST['subject']);
        $all_content = EntityAPI::find_by_criteria('content', array('content_subject' => $subject));
        return $all_content;
    }
}

?>