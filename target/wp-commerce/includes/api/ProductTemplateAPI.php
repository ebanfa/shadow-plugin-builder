<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductTemplateAPI {



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
    public static function do_create_product_entity($entity_data) {
        if(!isset($entity_data['template_id'])) 
            return EntityAPIUtils::init_error($entity_data, 'Template is required');
        // 1. Get the template
        $template_data = EntityAPI::get_by_id('producttemplate', $entity_data['template_id']);
        if(!isset($template_data['id'])) 
            return EntityAPIUtils::init_error($entity_data, 'Product template not found');
        // 2. Get the product type
        $entity_data['prod_type'] = $template_data['prod_type'];
        // 3. Set name and description
        $entity_data['edit_mode'] = true;
        $entity_data['name'] = $entity_data['product_name'];
        $entity_data['description'] = $entity_data['product_name'];
        // 4. Create product
        $entity_data = ProductAPI::do_create_entity($entity_data);
        if(!isset($entity_data['has_errors'])) return $entity_data;
        // 5. get base price...
        if(!isset($template_data['base_price']) || !isset($template_data['inventory_count']))
            return EntityAPIUtils::init_error($entity_data, 'Base price and inventory count required');
        // ...and create price component and inventory item
        /*$inventory_item = self::do_create_inventory_item($entity_data, $template_data['inventory_count']);
        $price_component = self::do_create_base_price_component($entity_data, $template_data['base_price']);
        // Error checking
        if($inventory_item['has_errors']) return EntityAPIUtils::init_error($entity_data, $inventory_item['message']);
        if($price_component['has_errors']) return EntityAPIUtils::init_error($entity_data, $price_component['message']);*/
        // 7. Get images and create product images
        $entity_data = ProductImageAPI::do_upload_images($entity_data, $entity_data['images_param']);
        // Done
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_inventory_item($entity_data, $inventory_count) {
        $inventory_item_data = EntityAPIUtils::init_entity_data('inventoryitem');
        // 1. Get the required parent relationships
        $item_lot = EntityAPI::get_by_code('lot', 'DEFAULT_LOT');
        $item_facility = EntityAPI::get_by_code('facility', 'MAIN_STORE');
        $item_container = EntityAPI::get_by_code('container', 'DEFAULT');
        $item_status = EntityAPI::get_by_code('inventoryitemstatus', 'GOOD');
        $item_type = EntityAPI::get_by_code('inventoryitemtype', 'SERIALIZED_INVENTORY_ITEM');
        // Validate the above
        if(!isset($inventory_item_type['id']) || !isset($inventory_item_status['id']))
            return EntityAPIUtils::init_error($inventory_item_data, 'Inventory item type and status are required');

        if(!isset($item_lot['id']) || !isset($item_facility['id']) || !isset($item_container['id']))
            return EntityAPIUtils::init_error($inventory_item_data, 'Inventory item facility, container and lot are required');
        // 2. Set the values for parent relationship fields
        $inventory_item_data['item_product'] = $entity_data['id'];
        $inventory_item_data['item_type'] = $item_type['id'];
        $inventory_item_data['item_status'] = $item_status['id'];
        $inventory_item_data['item_facility'] = $item_facility['id'];
        $inventory_item_data['item_container'] = $item_container['id'];
        $inventory_item_data['item_lot'] = $item_lot['id'];
        // 3. Set the price
        // 4. Set the name and description
        $inventory_item_data['name'] = $entity_data['name'];
        $inventory_item_data['description'] = $entity_data['name'];
        // 5. Create the entity
        return EntityAPI::create_entity($inventory_item_data);
    }

    /**
     *
     */
    public static function do_create_base_price_component($entity_data, $base_price) {}
}
