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
                // Create the segment
                $segment_data = self::do_create_segments($entity_data['id'], 
                    $segment['seg_type'], $segment['name'], $segment['seg_sequence'], $segment['description']);

                $segments_count++;
                // add to the list
                array_push($segments_list, $segment_data);
            }
            /*// Now we need to add the segments for ledger and accounts
            $ledger_seg_type = EntityAPI::get_by_field('coaaccountsegmenttype', 'name', 'Ledger');
            if(isset($ledger_seg_type['id'])) {
                $segment_data = self::do_create_segments($entity_data['id'], 
                    $ledger_seg_type['id'], 'Ledger', $segments_count + 1, 'Legder Segment');
            }
            // Now we need to add the segments for ledger and accounts
            $account_seg_type = EntityAPI::get_by_field('coaaccountsegmenttype', 'name', 'Account');
            if(isset($account_seg_type['id'])) {
                $segment_data = self::do_create_segments($entity_data['id'], 
                    $account_seg_type['id'], 'Account', $segments_count + 2, 'Account Segment');
            }*/
        }
        return $segments_list;
    }

   /**
     *
     */
    public static function do_create_segment($structure, $type, $name, $sequence, $description){
        $segment_data = EntityAPIUtils::init_entity_data('coaaccountsegment');
        $segment_data['edit_mode'] = true;
        $segment_data['name'] = $name;
        $segment_data['seg_type'] = $type;
        $segment_data['seg_sequence'] = $sequence;
        $segment_data['seg_acctstruct'] = $structure;
        $segment_data['description'] = $description;
        return EntityAPI::do_create_entity($segment_data);

    }

}
