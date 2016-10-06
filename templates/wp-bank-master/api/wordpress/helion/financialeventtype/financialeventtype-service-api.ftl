<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class FinancialEventTypeAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the account structure type
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segments
        $segments_list = self::do_create_txn_mapping($entity_data);
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
    public static function do_create_txn_mapping($entity_data){
        $feventtxntypes_list = array();
        // 1. Check for the segments request param
        if(isset($_POST['feventtxntype'])) {
            // 2. Loop through the array of segments objects (JSON encoded)
            $feventtxntypes = $_POST['feventtxntype'];
            $feventtxntypes_count = 1;
            // Sort the segments according to segment sequence
            foreach ($feventtxntypes as $feventtxntype) {
                $feventtxntype = json_decode(stripslashes($feventtxntype), true);
                $feventtxntype_data = EntityAPIUtils::init_entity_data('coaaccountsegment');
                $feventtxntype_data['edit_mode'] = true;
                $feventtxntype_data['event_type'] = $entity_data['id'];
                $feventtxntype_data['name'] = $feventtxntype['name'];
                $feventtxntype_data['fetxn_type'] = $feventtxntype['fetxn_type'];
                $feventtxntype_data['description'] = $feventtxntype['description'];
                $feventtxntype_data = EntityAPI::do_create_entity($feventtxntype_data);

                $feventtxntypes_count++;
                // add to the list
                array_push($feventtxntypes_list, $feventtxntype_data);
            }
        }
        return $feventtxntypes_list;
    }

}
