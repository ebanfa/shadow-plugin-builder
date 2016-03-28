<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ChartOfAccountsAPI  { 

    /**
     *
     */
    public static function init_hooks() {
        add_action('wp_ajax_load_coa_ajax', 'ChartOfAccountsAPI::load_coa_ajax');
        add_action('wp_ajax_nopriv_load_coa_ajax', 'ChartOfAccountsAPI::load_coa_ajax');

        add_action('wp_ajax_generate_coa_ajax', 'ChartOfAccountsAPI::generate_coa_ajax');
        add_action('wp_ajax_nopriv_generate_coa_ajax', 'ChartOfAccountsAPI::generate_coa_ajax');
    }

    /**
     *
     */
    public static function do_create_entity($entity_data) {
       return EntityAPI::do_create_entity($entity_data);
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
    public static function load_coa_ajax() {
        if (!isset($_POST['id'])) wp_send_json_error(array('message' => "Chart of accounts identifier missing"));
        // Get the id of the coa
        $coa_id = sanitize_text_field($_POST['id']);
        wp_send_json(self::load_coa($coa_id));
    }

    /**
     *
     */
    public static function load_coa($coa_id) {
        $instances = array();
        $coa_segment_instances = EntityAPI::find_by_criteria(
            'coaaccountsegmentinstance', array('coa' => $coa_id));

        foreach ($coa_segment_instances as $value) {
            $instance = array();
            $instance['id'] =  '' . $value['id'] . '';
            $instance['text'] = $value['name'];
            $instance['parent'] = $value['parent_instance'];
            if(intval($instance['parent']) == 0) $instance['parent'] = '#';

            array_push($instances, $instance);
        }
        return $instances;
    }
    
    /**
     *
     */
    public static function generate_coa_ajax() {
        // Ensure we have a valid ID
        if (!isset($_POST['id'])) wp_send_json_error(array('message' => "Chart of accounts identifier missing"));
        // Get the id of the coa
        $id = sanitize_text_field($_POST['id']);
        $coa_data = EntityAPI::get_by_id('chartofaccounts', $id);

        if (!isset($coa_data['id'])) 
            wp_send_json_error(array('message' => "Connot find chart of accounts with specified identifier"));
        // Get the account structure
        $account_structure_id = $coa_data['acct_structure'];
        $account_structure_data = EntityAPI::get_by_id('coaaccountstructure', $account_structure_id);

        if(!isset($account_structure_data['id'])) 
            wp_send_json_error(array('message' => "Cannot find the account structure for the specified chart of accounts"));

        // Get the segments in the structure
        $coa_segments = EntityAPI::find_by_criteria('coaaccountsegment', array('seg_acctstruct' => $account_structure_data['id']));
        if(empty($coa_segments)) wp_send_json_error(array('message' => "No segments defind for the specified chart of accounts"));
        
        // Sort the segments according to the sequence number
        $coa_segments = self::sort_segments($coa_segments);
        // Build the segment instance tree structure
        self::process_segments ($coa_data, $coa_segments);

        // Update the status of the chart of accounts from pending to published
        $status_data = self::update_coa_status($coa_data, 'PUBLISHED');
        if (!$status_data) wp_send_json_error(array('message' => "Unable to update chart of accounts status"));

        wp_send_json_success(self::load_coa($coa_data['id']));
    }

    /**
     *
     */
    public static function process_segments ($coa_data, $coa_segments) {
        // for each segment
        $parent_instances = array();
        $segments_count = count($coa_segments);
        foreach ($coa_segments as $key => $segment_data) {
            // This is to ensure some sanity in the generated
            // segment instance tree structure. The first segment
            // in the sorted array (the lowest sequence no) is 
            // considered as the parent of all segments, while
            // the last segment is the last
            if($key == 0) 
                $segment_data['is_root_segment'] = true;
            else 
                $segment_data['is_root_segment'] = false;
            
            if($key == ($segments_count -1))
                $segment_data['is_last_segment'] = true;
            else 
                $segment_data['is_last_segment'] = false;
            
            // Get the segment type
            $segment_type_id = $segment_data['seg_type'];
            $segment_type_data = EntityAPI::get_by_id('coaaccountsegmenttype', $segment_type_id);

            if(!isset($segment_type_data['id'])) 
                wp_send_json_error(array('message' => "Data error, could not find segment type for segment" . $segment_type_data['name']));
            
            if($segment_type_data['has_val_src'] == 'Yes') {
                // Query the value entity
                $segment_values = EntityAPI::find_by_criteria($segment_type_data['val_provider'], array());
            }
            else {
                // get the values for the segment (the root segment can have only one value)
                $segment_values = EntityAPI::find_by_criteria(
                    'coaaccountsegmenttypevalue', array('v_segtype' => $segment_type_data['id']));
            }


            if(empty($segment_values)) 
                wp_send_json_error(array('message' => "No segments defind for the segment type " . $segment_type_data['name']));
            // The root segment does not have any parent hence its parent instances will be an empty array
            //if($segment_count == 0) $parent_instances 
            // create segment instances for each value defined for the current segment type
            // for each segment value
            $parent_instances = self::create_segment_instances($coa_data, $parent_instances, $segment_data, $segment_values);
        }
    }

    /**
     *
     */
    public static function create_segment_instances($coa_data, $parent_instances, $segment_data, $segment_values){
        $segment_instances = array(); 
        // for each segment value
        foreach ($segment_values as $value_data) {
            if(!$segment_data['is_root_segment']){
                // for each parent instance create a child instance for the given value
                foreach ($parent_instances as $parent_instance_data) {
                    $child_instance_data = self::create_segment_instance(
                        $coa_data, $parent_instance_data, $segment_data, $value_data);
                    array_push($segment_instances, $child_instance_data);
                }
            }
            else 
                // The root segment instance will have parent id of -1
                $child_instance_data = self::create_segment_instance(
                    $coa_data, array('id' => '0'), $segment_data, $value_data);
                array_push($segment_instances, $child_instance_data);
        }
        return $segment_instances;
    }

    /**
     *
     */
    public static function create_segment_instance($coa_data, $parent_instance_data, $segment_data, $value_data){
        // for each parent instance
        $child_instance_data = EntityAPIUtils::init_entity_data('coaaccountsegmentinstance');
        $child_instance_data['edit_mode'] = true;
        $child_instance_data['coa'] = $coa_data['id'];
        $child_instance_data['name'] = $value_data['name'];
        $child_instance_data['acct_segment'] = $segment_data['id'];
        $child_instance_data['description'] = $value_data['description'];
        $child_instance_data['parent_instance'] = $parent_instance_data['id'];

        $child_instance_data = EntityAPI::create_entity($child_instance_data);
        return $child_instance_data;
    }

    /**
     *
     */
    public static function sort_segments($coa_segments){ 
        $seg_sequences = array();
        foreach ($coa_segments as $key => $row)
        {
            $seg_sequences[$key] = $row['seg_sequence'];
        }
        array_multisort($seg_sequences, SORT_ASC, $coa_segments);
        return $coa_segments;
    }

    /**
     *
     */
    public static function update_coa_status($coa_data, $status_code){ 
        // Find the status with specified status code
        $status_data = EntityAPI::get_by_code('coastatus', $status_code);
        if(isset($status_data['id']))  {
            $coa_data['edit_mode'] = false;
            $coa_data['status'] = $status_data['id'];
            $coa_data = EntityAPI::create_entity($coa_data);
            return $coa_data;
        }
        else {
            return false;
        }
    }


}
