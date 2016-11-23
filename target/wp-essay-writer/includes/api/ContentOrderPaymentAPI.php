<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderPaymentAPI  {

    /**
     * Content order client payment processor
     */
    public static function do_payment_received($payment_data){
        // 1. Verify the payment data
        if(!isset($payment_data['payment_status']) || 
            !isset($payment_data['payment_amount']) || 
            !isset($payment_data['content_order_code'])) 
            return EntityAPIUtils::init_error(array(), 'Invalid payment data received from listener API');
        // 2. Get and verify the referenced content order ...
        $content_order_data = EntityAPI::get_by_code('contentorder', $payment_data['content_order_code']);
        if(!isset($content_order_data['id']))
            return EntityAPIUtils::init_error($payment_data, 'Could not find content order with the code provided by listener API');
        // 3. Update content order, post the transaction and send out notifications
        $content_order_data = self::update_content_order_status($content_order_data, $payment_data);
        $transaction_data = self::post_account_transaction($content_order_data, $payment_data);
        MailAPI::do_send_client_payment_received_email($content_order_data, $transaction_data);
        return $content_order_data;
    }

    /**
     * Updates the order amount_paid, order status and the payment status
     */
    public static function update_content_order_status($content_order_data, $payment_data){

        $status_data = self::resolve_order_status($content_order_data, $payment_data);
        $pay_status_data = self::resolve_payment_status($content_order_data, $payment_data);
        $amount_paid = doubleval($content_order_data['amount_paid']) + doubleval($payment_data['payment_amount']);

        if(!isset($status_data['id'])) return EntityAPIUtils::init_error($content_order_data, 'Could not find order status');
        if(!isset($pay_status_data['id'])) return EntityAPIUtils::init_error($content_order_data, 'Could not find payment status');

        $content_order_data['edit_mode'] = false;
        $content_order_data['amount_paid'] = $amount_paid;
        $content_order_data['order_status'] = $status_data['id'];
        $content_order_data['payment_status'] = $pay_status_data['id'];
        return EntityAPI::do_create_entity($content_order_data);
    }

    /**
     * 
     */
    public static function resolve_order_status($content_order_data, $payment_data){
        return EntityAPI::get_by_code('contentorderstatus', ContentOrderAPI::$order_status_in_progress);
    }

    /**
     * 
     */
    public static function resolve_payment_status($content_order_data, $payment_data){
        $amount_paid = doubleval($content_order_data['amount_paid']) + doubleval($payment_data['payment_amount']);
        if($amount_paid == $content_order_data['total'])
            return EntityAPI::get_by_code('paymentstatus', ContentOrderAPI::$pay_status_completed);
        return EntityAPI::get_by_code('paymentstatus', ContentOrderAPI::$pay_status_partial);
    }

    /**
     * Content order client payment processor
     */
    public static function post_account_transaction($content_order_data, $payment_data){
        // 1. Get the billing account
        $billing_account_data = EntityAPI::get_by_field('billingaccount', 'b_account_party', $content_order_data['order_party']);
        if(!isset($billing_account_data['id'])) 
            return EntityAPIUtils::init_error($content_order_data, 'Could not find billing account');
        // 2. Get the billing account
        $transaction_type_data = EntityAPI::get_by_code('accounttransactiontype', AccountTransactionAPI::$txn_client_payment);
        if(!isset($transaction_type_data['id'])) 
            return EntityAPIUtils::init_error($content_order_data, 'Could not find transaction type');
        // 3. Get the billing account
        $transaction_status_data = EntityAPI::get_by_code('accounttransactionstatus', AccountTransactionAPI::$txn_status_completed);
        if(!isset($transaction_status_data['id'])) 
            return EntityAPIUtils::init_error($content_order_data, 'Could not find transaction status');
        // 4. Create a new account transaction that references the account and the order
        $transaction_data = EntityAPIUtils::init_entity_data('accounttransaction');
        $transaction_data['edit_mode'] = true;
        $transaction_data['txn_date'] = date("Y-m-d H:i:s");
        $transaction_data['name'] = $content_order_data['name'];
        $transaction_data['amount'] = $payment_data['payment_amount'];
        $transaction_data['description'] = $content_order_data['name'];
        $transaction_data['acct_txn_type'] = $transaction_type_data['id'];
        $transaction_data['billing_account'] = $billing_account_data['id'];
        $transaction_data['transaction_order'] = $content_order_data['id'];
        $transaction_data['transaction_status'] = $transaction_status_data['id'];
        return EntityAPI::do_create_entity($transaction_data);
    }

    /**
     * Content order client payment processor
     */
    public static function send_transaction_notification_emails($content_order_data, $transaction_data) {

        
    }

}
