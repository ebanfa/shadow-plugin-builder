<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SubjectAreaAPI  {


    /**
     *
     */
    public static function get_all_subject_areas(){
        $subject_areas = EntityAPI::find_by_criteria('subjectarea', array());
        foreach ($subject_areas as $key => $subject_area) {
            // Load the profile image
            $subject_area['image_url'] = get_stylesheet_directory_uri() . '/images/placeholder.gif';
            $subject_area_image = EntityAPI::get_by_field('subjectareaimage', 'file_subject_area', $subject_area['id']);
            if(isset($subject_area_image['id'])) $subject_area['image_url'] = $subject_area_image['file_url'];

            // Count the subjects within the subject area
            $subjects = EntityAPI::find_by_criteria('subject', array('parent_area' => $subject_area['id']));
            $subject_area['count'] = count($subjects);

            $subject_areas[$key] = $subject_area;

        }
        return $subject_areas;
    }

    /**
     *
     */
    public static function get_subject_area($subject_area_id, $get_children_fg){

        $subject_area = EntityAPI::get_by_id('subjectarea', $subject_area_id);

        if(!isset($subject_area['id'])) return array();
        if($get_children_fg) {
            // Count the subjects within the subject area
            $subjects = EntityAPI::find_by_criteria('subject', array('parent_area' => $subject_area['id']));
            $subject_area['subjects'] = $subjects;
            $subject_area['count'] = count($subjects);
        }

        return $subject_area;
    }
}
