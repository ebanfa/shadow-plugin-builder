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
    public static function do_create_entity($entity_data){

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
        wp_send_json_success(array());
    }
    
    /**
     *
     */
    public static function generate_coa_ajax() {
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) wp_send_json_error(array('message' => "Entity identifier missing"));
        // Get the id of the coa
        $id = sanitize_text_field($_POST['id']);
        $coa_data = EntityAPI::get_by_id('chartofaccounts', $id);
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
        // for each segment
        foreach ($coa_segments as $key => $segment_data) {
            // get the values for the segment (the root segment can have only one value)
            // create segment instances for each value defined for the current segment type
            // for each segment value
            self::create_segment_instance(array(), $segment_data, array());
            // t
        }
        wp_send_json_success(array());
    }

    /**
     *
     */
    public static function create_segment_instance($parent_instances, $segment_data, $segment_values){ 
        // for each parent instance
    }

    /**
     *
     */
    public static function sort_segments($coa_segments){ 
        return $coa_segments;
    }


}
