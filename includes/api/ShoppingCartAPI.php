<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ShoppingCartAPI {

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
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     * Get the current shopping cart, or create on if does not exist
     */
    public static function get_shopping_cart() {
        global $wp_session;
        if(isset($wp_session['shopping_cart'])) return $wp_session['shopping_cart'];
        // Load the currency
        $currency_data = BusinessAPI::get_default_currency();
        if(!isset($currency_data['id'])) {
            $shopping_cart_data = EntityAPIUtils::init_error($shopping_cart_data, 'Default currency not configured');
        }
        else {
            $shopping_cart_data = array('items' => array());
            $shopping_cart_data['sub_total'] = 0.00;
            $shopping_cart_data['currency'] = $currency_data['symbol'];
            $wp_session['shopping_cart'] = $shopping_cart_data;
        }
    }

    /**
     *
     */
    public static function add_to_shopping_cart($item_data){
        global $wp_session;
        $id = $item_data['id'];
        $shopping_cart = self::get_shopping_cart();
        // Load the currency
        $currency_data = BusinessAPI::get_default_currency();
        if(!isset($currency_data['id']))
            return EntityAPIUtils::init_error($shopping_cart, 'Default currency not configured');
        $shopping_cart['currency'] = $currency_data['symbol'];

        if (!isset($wp_session['shopping_cart'][$id]))  {
            $total_price = $item_data['quantity'] * $item_data['price'];
            $cart_item = array(
                'id' => $id, 
                'name' => $item_data['name'], 
                'code' => $item_data['code'],
                'quantity' => $item_data['quantity'], 
                'price' => $item_data['price'],
                'total_price' => $total_price,
            );
            $shopping_cart['items'][$id] = $cart_item;
        }
        else {
            $cart_item = $wp_session['shopping_cart'][$id];
            $cart_item['name'] = $item_data['name'];
            $cart_item['code'] = $item_data['code'];
            // Update the quantity
            $cart_item['quantity'] = $cart_item['quantity'] + $item_data['quantity'];
            // Update the price 
            $cart_item['price'] = $item_data['price'];
            $cart_item['total_price'] = $cart_item['quantity'] * $item_data['price'];
            $shopping_cart['items'][$id] = $cart_item;
        }
        // Update the shopping cart sub total
        $sub_total = 0.00;
        foreach ($shopping_cart['items'] as $key => $cart_item) {
            if(isset($cart_item['total_price']))
                $sub_total = $sub_total + doubleval($cart_item['total_price']);
        }
        $shopping_cart['sub_total'] = $sub_total;
        $wp_session['shopping_cart'] = $shopping_cart;
        return $item_data;
    }

    /**
     *
     */
    public static function do_get_shopping_cart_items(){
        global $wp_session;

        if(!isset($wp_session['shopping_cart'])) $wp_session['shopping_cart'] = array('items' => array());
        $shopping_cart = $wp_session['shopping_cart'];
        // This is the shopping cart data that will be returned to the
        // caller of this function
        // Update the shopping cart sub total
        $sub_total = 0.00;
        $shopping_cart_data = array('items' => array(), 'sub_total' => $sub_total);
        foreach ($shopping_cart['items'] as $key => $cart_item) {
            $item_data = array();
            $item_data['name'] = $cart_item['name'];
            $item_data['price'] = $cart_item['price'];
            $item_data['quantity'] = $cart_item['quantity'];
            $item_data['total_price'] = doubleval($cart_item['quantity']) * doubleval($cart_item['price']);
            $product_data = ProductAPI::load_product_data($cart_item['code']);
            if(isset($product_data['content_files'])) {
                if(!empty($product_data['content_files'])) {
                    $item_data['image_url'] = $product_data['content_files'][0]['image_url'];
                }
            }
            if(isset($item_data['total_price'])) 
                $sub_total = $sub_total + doubleval($item_data['total_price']);
            // Check if the currency is not set the we can retrieve it from the
            // loaded product data
            if(!isset($shopping_cart_data['currency']))
                $shopping_cart_data['currency'] = $product_data['currency'];
            array_push($shopping_cart_data['items'], $item_data);
        }
        $shopping_cart_data['sub_total'] = $sub_total;
        return $shopping_cart_data;
    }

}
