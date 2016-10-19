<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ListSubjectAreaView extends BaseEntityView {

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
        // execute default render operation
        UIDisplayAPI::display_entity_archive($_REQUEST['page_info']);
    }

    /**
     * Gets all the subject areas
     */
    public function get_subject_areas() {
        $subject_areas = EntityAPI::find_by_criteria('subjectarea', array());
        foreach ($subject_areas as $key => $subject_area) {
           $subject_area['subjects'] = EntityAPI::find_by_criteria('subject', array('parent_area' => $subject_area['id']));
           $subject_areas[$key] = $subject_area;
        }
        return $subject_areas;
    }
}

?>