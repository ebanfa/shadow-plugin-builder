<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BusinessSummaryAPI {

    /**
     * 
     */
    public static function do_business_summary_data() {
        $summary_data = array();
        $summary_data['metrics'] = self::get_metrics_data();
        return $summary_data;
    }

    /**
     * 
     */
    public static function do_user_summary_data($party_id) {
        $summary_data = array();
        $summary_data['metrics'] = self::get_user_metrics_data($party_id);
        return $summary_data;
    }

    /**
     * 
     */
    public static function get_metrics_data() {
        $all_orders =  self::get_all_orders();
        return self::calculate_metrics($all_orders);
    }

    /**
     * 
     */
    public static function get_user_metrics_data($party_id) {
        $all_orders =  self::get_user_orders($party_id);
        return self::calculate_metrics($all_orders);
    }
    
    /**
     * 
     */
    public static function get_all_orders() {
        return EntityAPI::find_by_criteria('contentorder', array());
    }

    /**
     * 
     */
    public static function get_user_orders($party_id) {

        if(PartyRoleAPI::has_role($party_id, 'student')) 
            return EntityAPI::find_by_criteria('contentorder', array('order_party' => $party_id));
        else 
            return EntityAPI::find_by_criteria('contentorder', array('order_tutor' => $party_id));
    }

    /**
     * 
     */
    public static function calculate_metrics($content_orders) {
        $metrics_data = array();
        $metrics_data['total'] = 0;
        $metrics_data['pending'] = 0;
        $metrics_data['completed'] = 0;
        $metrics_data['in_progress'] = 0;
        $metrics_data['amount_due'] = 0;
        $metrics_data['amount_paid'] = 0;
        $metrics_data['total_amount'] = 0;

        foreach ($content_orders as $key => $content_order) {
            if($content_order['order_status_code'] == ContentOrderAPI::$order_status_pending) $metrics_data['pending']++;
            if($content_order['order_status_code'] == ContentOrderAPI::$order_status_completed) $metrics_data['completed']++;
            if($content_order['order_status_code'] == ContentOrderAPI::$order_status_in_progress) $metrics_data['in_progress']++;
            $metrics_data['amount_paid'] = $metrics_data['amount_paid'] + $content_order['amount_paid'];
            $metrics_data['total_amount'] = $metrics_data['total_amount'] + $content_order['total'];
            $metrics_data['total']++;
        }
        $metrics_data['amount_due'] = $metrics_data['total_amount'] - $metrics_data['amount_paid'];
        return $metrics_data;
    }

   
    


}
