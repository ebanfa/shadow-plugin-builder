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
        return $product_data;
    }


}
