<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class COAAccountStructureAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the account structure type
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segments
        $segments_list = self::do_create_segments($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        return EntityAPI::do_delete_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_segments($entity_data){
        $segments_list = array();
        // 1. Check for the segments request param
        if(isset($_POST['coaaccountsegment'])) {
            // 2. Loop through the array of segments objects (JSON encoded)
            $segments = $_POST['coaaccountsegment'];
            $segments_count = 1;
            // Sort the segments according to segment sequence
            foreach ($segments as $segment) {
                $segment = json_decode(stripslashes($segment), true);
                $segment_data = EntityAPIUtils::init_entity_data('coaaccountsegment');

                $segment_data['edit_mode'] = true;
                $segment_data['name'] = $segment['name'];
                //$segment_data['mask'] = $segment_data['mask'];
                $segment_data['seg_sequence'] = $segment['seg_sequence'];
                $segment_data['seg_acctstruct'] = $entity_data['id'];
                $segment_data['seg_type'] = $segment['seg_type'];
                $segment_data['description'] = $segment['description'];

                $segment_data = EntityAPI::do_create_entity($segment_data);
                
                $segments_count++;
                // add to the list
                array_push($segments_list, $segment_data);
            }
        }
        return $segments_list;
    }

}
