<?php 

class InventoryItemCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_inventoryitem'; 
    public static $is_global_entity = true; 


    public static $is_virtual_entity = false; 
    


    /**
     * These are the wordpress custom post type 
     * specific fields
     */
    public static $custom_fields =  array(
        array('name' => 'entity_code',
            'title' => 'Code',
            'description' => 'The Code field',
            'type' => 'text',
        ),
        array('name' => 'item_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'item_product',
            'title' => 'Product',
            'description' => 'The Product field',
            'type' => 'text',
        ),
        array('name' => 'item_status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'item_facility',
            'title' => 'Facility',
            'description' => 'The Facility field',
            'type' => 'text',
        ),
        array('name' => 'item_container',
            'title' => 'Storage Container',
            'description' => 'The Storage Container field',
            'type' => 'text',
        ),
        array('name' => 'item_lot',
            'title' => 'Lot',
            'description' => 'The Lot field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'quantity',
            'title' => 'Quantity',
            'description' => 'The Quantity field',
            'type' => 'text',
        ),
        array('name' => 'description',
            'title' => 'Description',
            'description' => 'The Description field',
            'type' => 'text',
        ),
    );

    /**
     * These are the shadow banker framework 
     * specific fields. These represent the actual fields
     * defined in the entity mapping.
     */
 public static $entity_fields = array(
        'entity_code' => array('name' => 'entity_code',
            'description' => 'Code',
            'nick_name' => 'entity_code',
            'size' => 'medium',
            'data_type' => 'alphanumeric',
            'is_required' => false,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'item_type' => array('name' => 'item_type',
            'description' => 'Type',
            'nick_name' => 'item_type',
            'size' => 'large',
            'entity_name' => 'InventoryItemType',
            'entity_description' => 'Inventory Item Type',
            'data_type' => 'sb_invitemtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'item_product' => array('name' => 'item_product',
            'description' => 'Product',
            'nick_name' => 'item_product',
            'size' => 'large',
            'entity_name' => 'Product',
            'entity_description' => 'Product',
            'data_type' => 'sb_product',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'item_status' => array('name' => 'item_status',
            'description' => 'Status',
            'nick_name' => 'item_status',
            'size' => 'large',
            'entity_name' => 'InventoryItemStatus',
            'entity_description' => 'Inventory Item Status',
            'data_type' => 'sb_invitemstat',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'item_facility' => array('name' => 'item_facility',
            'description' => 'Facility',
            'nick_name' => 'item_facility',
            'size' => 'large',
            'entity_name' => 'Facility',
            'entity_description' => 'Facility',
            'data_type' => 'sb_facility',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'item_container' => array('name' => 'item_container',
            'description' => 'Storage Container',
            'nick_name' => 'item_container',
            'size' => 'large',
            'entity_name' => 'Container',
            'entity_description' => 'Container',
            'data_type' => 'sb_container',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'item_lot' => array('name' => 'item_lot',
            'description' => 'Lot',
            'nick_name' => 'item_lot',
            'size' => 'large',
            'entity_name' => 'Lot',
            'entity_description' => 'Lot',
            'data_type' => 'sb_lot',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'name' => array('name' => 'name',
            'description' => 'Name',
            'nick_name' => 'name',
            'size' => 'large',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'quantity' => array('name' => 'quantity',
            'description' => 'Quantity',
            'nick_name' => 'quantity',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'description' => array('name' => 'description',
            'description' => 'Description',
            'nick_name' => 'description',
            'size' => 'large',
            'data_type' => 'text-lg',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
   );

    /**
     * These are the shadow banker framework 
     * specific fields. Inferred fields are fields that are not
     * directly defined in the entity mapping of a given entity, but are instead
     * inferred from other entities. As an example a Party entity has a field that
     * points to the PartyType of a party, ie Party points to PartyType but not vice versa.
     * So an array of Party entities will be an inferred field on PartyType.
     */
 public static $related_child_entities = array(
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_inventoryitem', 
            array(
                'label' => 'Inventory Item',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Inventory Item',
                'edit_item'         => 'Edit Inventory Item',
                'new_item'          => 'New Inventory Item',
                'view_item'         => 'View Inventory Item',
                'search_items'      => 'Search Inventory Item',
                'not_found'         => 'No Inventory Item Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Inventory Item',
                'public' => true,
                'show_ui' => true,
                'menu_position' => 5,
                'supports' => array('title', 'custom-fields'),
                'has_archive'   => true,
                'rewrite'   => true,
            )
        );      
    }


    /*------------------------------------------------------------------------------
    Save the new Custom Fields values
    INPUT:
        $post_id (int) id of the post these custom fields are associated with
        $post (obj) the post object
  ------------------------------------------------------------------------------*/
    public static function save_custom_fields( $post_id, $post) 
    {
        if ( $post->post_type == 'sb_inventoryitem') 
        {
            // The 2nd arg here is important because there are multiple nonces on the page
            if ( !empty($_POST))// && check_admin_referer('update_custom_content_fields','custom_content_fields_nonce') )
            {     
                CloderiaCustomFieldsUtils::save_custom_fields($post_id, $post, self::$custom_fields);
            }
        }
    }

    public static function get_field_value($content_type, $post_id, $field){
        return $field['value'];
    }

    public static function sb_inventoryitem_table_head($defaults){
        $defaults['item_type']  = 'Type';
        $defaults['item_product']  = 'Product';
        $defaults['item_status']  = 'Status';
        $defaults['item_facility']  = 'Facility';
        $defaults['item_container']  = 'Storage Container';
        $defaults['item_lot']  = 'Lot';
        $defaults['name']  = 'Name';
        $defaults['quantity']  = 'Quantity';
        return $defaults;
    }

    public static function sb_inventoryitem_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'item_type') {
            $field_value = get_post_meta($post_id, 'item_type', true );
            echo $field_value;
        }
        if ($column_name == 'item_product') {
            $field_value = get_post_meta($post_id, 'item_product', true );
            echo $field_value;
        }
        if ($column_name == 'item_status') {
            $field_value = get_post_meta($post_id, 'item_status', true );
            echo $field_value;
        }
        if ($column_name == 'item_facility') {
            $field_value = get_post_meta($post_id, 'item_facility', true );
            echo $field_value;
        }
        if ($column_name == 'item_container') {
            $field_value = get_post_meta($post_id, 'item_container', true );
            echo $field_value;
        }
        if ($column_name == 'item_lot') {
            $field_value = get_post_meta($post_id, 'item_lot', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'quantity') {
            $field_value = get_post_meta($post_id, 'quantity', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>