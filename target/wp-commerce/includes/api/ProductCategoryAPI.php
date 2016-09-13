<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductCategoryAPI {



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
    public static function load_categories(){
        $entity_data = EntityAPIUtils::init_entity_data('productcategory');
        $product_categories = EntityAPI::find_all($entity_data);
        foreach ($product_categories as $key => $product_category) {
            $product_category['product_types'] = EntityAPI::find_by_criteria('producttype', array('prod_cat' => $product_category['id']));
            $product_categories[$key] = $product_category;
            if(isset($product_category['id'])) {
                $product_category['product_cat_images'] = 
                    EntityAPI::find_by_criteria('productcategoryimage', array('prod_cat_image' => $product_category['id']));
                $product_categories[$key] = $product_category;
            }
        }
        return $product_categories;
    }
}
