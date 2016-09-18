<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductOrderAPI {

    public static $sales_order_type_code = 'SALES_ORDER';
    public static $pending_order_status_code = 'PENDING';
    public static $confirmed_order_status_code = 'CONFIRMED';
    public static $sales_order_item_type_code = 'SALES_ORDER_ITEM';
    public static $pending_order_item_status_code = 'PENDING';
    public static $confirmed_order_item_status_code = 'CONFIRMED';


    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_user_order($user_data){
        return SalesOrderAPI::do_create_user_order($user_data);
    }
    /**
     * Creates an order for a given user with the provided type and status
     */
    public static function do_create_product_order_entity($order_entity_data, $order_type, $order_status, $user_party){
        if(!isset($order_type['id']) || !isset($order_status['id'])) {
            $order_entity_data['has_errors'] = true;
            $order_entity_data['message'] = 'Order type and status are required';
            return $order_entity_data;
        }
        $order_entity_data['total'] = 0.00;
        $order_entity_data['discount'] = 0.00;
        $order_entity_data['sub_total'] = 0.00;
        $order_entity_data['edit_mode'] = true;
        $order_entity_data['entity_code'] = EntityStringUtils::get_token(8);
        $order_entity_data['placed_by_party'] = $user_party['id'];
        $order_entity_data['prod_order_date'] = date("Y-m-d H:i:s");
        $order_entity_data['prod_order_type'] = $order_type['id'];
        $order_entity_data['prod_order_status'] = $order_status['id'];
        $order_entity_data['name'] = 'Sales Order: ' . $order_entity_data['entity_code'] . ' by ' . $user_party['name'];
        $order_entity_data['description'] = $order_entity_data['name'];
        // Set the order name to be customer name and code
        return self::do_create_entity($order_entity_data);
    }

    /**
     * Creates an order for a given user with the provided type and status
     */
    public static function do_create_order_item_entity($order_entity_data, $item_type, $item_status, $cart_item) {

        $order_entityitem_data = EntityAPIUtils::init_entity_data('productorderitem');
        if(!isset($item_type['id']) || !isset($item_status['id'])) {
            $order_entityitem_data['has_errors'] = true;
            $order_entityitem_data['message'] = 'Order item type and status are required';
            return $order_entityitem_data;
        }
        // Set the required relationship fields
        $order_entityitem_data['edit_mode'] = true;
        $order_entityitem_data['item_order'] = $order_entity_data['id'];
        $order_entityitem_data['order_item_type'] = $item_type['id'];
        $order_entityitem_data['order_item_status'] = $item_status['id'];

        $order_entityitem_data['name'] = $cart_item['name'];
        $order_entityitem_data['description'] = $cart_item['name'];
        $order_entityitem_data['quantity'] = $cart_item['quantity'];
        $order_entityitem_data['item_sequence'] = $cart_item['sequence'];
        $order_entityitem_data['order_item_price'] = $cart_item['price'];
        $order_entityitem_data['order_item_total'] = doubleval($cart_item['price']) * doubleval($cart_item['quantity']);
        $order_entityitem_data = EntityAPI::create_entity($order_entityitem_data);
        return $order_entityitem_data;
    }

    /**
     * 
     */
    public static function do_update_order_totals($order_entity_data, $order_entityitem_data) {
        $order_entity_data['sub_total'] = $order_entity_data['total'] + $order_entityitem_data['order_item_total'];
        $order_entity_data['total'] = $order_entity_data['sub_total'];
        return $order_entity_data;
    }
}
