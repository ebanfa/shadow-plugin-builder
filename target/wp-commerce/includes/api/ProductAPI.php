<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ProductAPI {

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
     *
     */
    public static function load_products($product_type_code){
        $product_type = EntityAPI::get_by_code('producttype', $product_type_code);
        if(isset($product_type['id'])) {
            $product_data_list = EntityAPI::find_by_criteria('product', array('prod_type' => $product_type['id']));
            foreach ($product_data_list as $key => $product_data) {
                if(isset($product_data['id'])) {
                    $product_data['product_images'] = EntityAPI::find_by_criteria('productimage', array('product' => $product_data['id']));
                    $product_data_list[$key] = $product_data;
                }
            }
            return $product_data_list;
        }
        return array();
    }


    /**
     *
     */
    public static function load_product_data($product_code){
        $product_data = EntityAPI::get_by_code('product', $product_code);
        if(isset($product_data['id'])) {
            // Load the product images
            $product_data['content_files'] = EntityAPI::find_by_criteria('productimage', array('product' =>  $product_data['id']));
            // Process the pricing of the product
            $product_price = 0;
            $price_components = EntityAPI::find_by_criteria('pricecomponent', array('component_prod' =>  $product_data['id']));
            foreach ($price_components as $component) {
               $product_price = $product_price + $component['component_price'];
            }
            $product_data['price'] = $product_price;
            // Process the inventory availability for the product
            $item_count = 0;
            $inventory_items = EntityAPI::find_by_criteria('inventoryitem', array('item_product' =>  $product_data['id']));
            foreach ($inventory_items as $inventory_item) {
               $item_count = $item_count + $inventory_item['quantity'];
            }
            $product_data['item_count'] = $item_count;
        }
        return $product_data;
    }

    /**
     *
     */
    public static function add_to_shopping_cart($item_data){
        global $wp_session;
        if(!isset($wp_session['shopping_cart'])) $wp_session['shopping_cart'] = array('items' => array());

        $id = $item_data['id'];
        $shopping_cart = $wp_session['shopping_cart'];

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
            CloderiaLogUtils::shadow_log('>>>>>>>>>>>>>>>>>>>price' . $item_data['price']);
            CloderiaLogUtils::shadow_log('>>>>>>>>>>>>>>>>>>>quantity' . $item_data['quantity']);
            $item_data['total_price'] = doubleval($cart_item['quantity']) * doubleval($cart_item['price']);
            CloderiaLogUtils::shadow_log('>>>>>>>>>>>>>>>>>>>total_price' . $item_data['total_price']);
            $product_data = self::load_product_data($cart_item['code']);
            if(isset($product_data['content_files'])) {
                if(!empty($product_data['content_files'])) {
                    $item_data['image_url'] = $product_data['content_files'][0]['image_url'];
                }
            }
            if(isset($item_data['total_price'])) 
                $sub_total = $sub_total + doubleval($item_data['total_price']);
            array_push($shopping_cart_data['items'], $item_data);
        }
        $shopping_cart_data['sub_total'] = $sub_total;
        return $shopping_cart_data;
    }

}
