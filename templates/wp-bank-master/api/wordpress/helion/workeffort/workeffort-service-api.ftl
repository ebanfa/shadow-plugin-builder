<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class WorkEffortAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        if(isset($_POST['category'])) {
            $search_results = array();
            $we_category = sanitize_text_field($_POST['category']);
            $we_types = EntityAPI::find_by_criteria('workefforttype', array('category' => $we_category));

            foreach ($we_types as $key => $we_type) {
                $work_efforts = EntityAPI::find_by_criteria('workeffort', array('type' => $we_type['id']));
                foreach ($work_efforts as $key => $work_effort) {
                    array_push($search_results, $work_effort);
                }
            }
            return $search_results;
        }
        return  EntityAPI::do_find_entity($entity_data); 
    }



}