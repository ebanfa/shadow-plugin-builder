<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class COAAccountSegmentTypeAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the segment type
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segment type values
        $seg_ty_values_list = self::do_create_segment_values($entity_data);
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
    public static function do_create_segment_values($entity_data){
        $seg_ty_values_list = array();
        // 1. Check for the segment type value request param
        if(isset($_POST['coaaccountsegmenttypevalue'])) {
            // 2. Loop through the array of segment type value objects (JSON encoded)
            $seg_ty_values = $_POST['coaaccountsegmenttypevalue'];
            $seg_ty_values_count = 1;
            foreach ($seg_ty_values as $seg_ty_value) {
                $seg_ty_value = json_decode(stripslashes($seg_ty_value), true);
                $seg_ty_value_data = EntityAPIUtils::init_entity_data('coaaccountsegmenttypevalue');

                $seg_ty_value_data['edit_mode'] = true;
                $seg_ty_value_data['name'] = $seg_ty_value['name'];
                //$seg_ty_value_data['value'] = $seg_ty_value['value'];
                $seg_ty_value_data['v_segtype'] = $entity_data['id'];
                $seg_ty_value_data['description'] = $seg_ty_value['description'];

                $seg_ty_value_data = EntityAPI::do_create_entity($seg_ty_value_data);
                
                $seg_ty_values_count++;
                // add to the list
                array_push($seg_ty_values_list, $seg_ty_value_data);
            }
        }
        return $seg_ty_values_list;
    }

}
