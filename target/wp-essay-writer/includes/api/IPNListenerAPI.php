<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class IPNListenerAPI  {

    /**
     *
     */
    public static function do_web_accept($ipn_data){
        // 1. Verify IPN data
        if(!isset($ipn_data['invoice']) || 
            !isset($ipn_data['mc_fee']) || 
            !isset($ipn_data['payment_status'])) {
            LogUtils::shadow_log('Invalid IPN data received from framework');
            return array();
        }
        // 2. Extract the required variables
        $payment_data = array(
            'payment_amount' => $ipn_data['mc_fee'],
            'content_order_code' => $ipn_data['invoice'],
            'payment_status' => $ipn_data['payment_status'],
        );
        // 4. Process the content order payment
        $content_order_data = ContentOrderPaymentAPI::do_payment_received($payment_data);
        if($content_order_data['has_errors']) LogUtils::shadow_log($content_order_data['message']);

    }

}
