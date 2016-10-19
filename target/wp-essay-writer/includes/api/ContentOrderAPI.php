<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderAPI  {

    public static $order_status_pending = 'PENDING';
    public static $order_status_completed = 'COMPLETED';
    public static $order_status_in_progress = 'IN_PROGRESS';

    public static $pay_status_refunded = 'REFUNDED';
    public static $pay_status_not_paid = 'NOT_PAID';
    public static $pay_status_completed = 'COMPLETED';
    public static $pay_status_partial = 'PARTIAL_PAYMENT';

    public static $academic_paper_order = 'ACADEMIC_PAPER_ORDER';

    /**
     *
     */
    public static function do_create_contentorder($entity_data, $party_data){
        // Create the content order
        if(isset($party_data['id'])) {
            $status_data = EntityAPI::get_by_code('contentorderstatus', self::$order_status_pending);
            $order_type_data = EntityAPI::get_by_code('contentordertype', self::$academic_paper_order);
            $payment_status_data = EntityAPI::get_by_code('paymentstatus', self::$pay_status_not_paid);
            // Ensure the we have the order status and order type
            if(!isset($status_data['id']) || !isset($order_type_data['id']) || !isset($payment_status_data['id'])) 
                return EntityAPIUtils::init_error($entity_data, 'Order status, order type and payment status are required');
            
            $entity_data['amount_paid'] = 0.00;
            $entity_data['order_party'] = $party_data['id'];
            $entity_data['order_date'] = date("Y-m-d H:i:s");
            $entity_data['order_status'] = $status_data['id'];
            $entity_data['order_type'] = $order_type_data['id'];
            $entity_data['payment_status'] = $payment_status_data['id'];
            $entity_data = EntityAPI::do_create_entity($entity_data);
            if(isset($entity_data['id'])) $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_edit_contentorder($entity_data){
        // Update the content order
        if(isset($entity_data['id'])) 
            $entity_data = EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    

    /**
     * Updates the status of an order
     */
    public static function do_update_contentorder_status($entity_data){
        // Save the status in a temporary variable
        $order_status = $entity_data['order_status'];
        // Now we load the entity we want to edit using the supplied id
        if(isset($entity_data['id'])) $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);

        if(isset($entity_data['id'])) {
            $entity_data['edit_mode'] = false;
            $entity_data['order_status'] = $order_status;
            $entity_data = EntityAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = UserPartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code)) 
            return EntityAPI::find_by_criteria($artifact_name, array('order_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }

}
