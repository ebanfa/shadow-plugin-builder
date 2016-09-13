<?php 

class ProductOrderItemCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_prodorderitem'; 
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
        array('name' => 'item_order',
            'title' => 'Order',
            'description' => 'The Order field',
            'type' => 'text',
        ),
        array('name' => 'order_item_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'order_item_status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'item_sequence',
            'title' => 'Sequence No',
            'description' => 'The Sequence No field',
            'type' => 'text',
        ),
        array('name' => 'quantity',
            'title' => 'Quantity',
            'description' => 'The Quantity field',
            'type' => 'text',
        ),
        array('name' => 'order_item_price',
            'title' => 'Price',
            'description' => 'The Price field',
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
            'size' => 'medium',
            'data_type' => 'alphanumeric',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'item_order' => array('name' => 'item_order',
            'description' => 'Order',
            'size' => 'large',
            'entity_name' => 'ProductOrder',
            'entity_description' => 'Product Order',
            'data_type' => 'sb_prodorder',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_item_type' => array('name' => 'order_item_type',
            'description' => 'Type',
            'size' => 'large',
            'entity_name' => 'ProductOrderItemType',
            'entity_description' => 'Product Order Item Type',
            'data_type' => 'sb_prodorderitype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_item_status' => array('name' => 'order_item_status',
            'description' => 'Status',
            'size' => 'large',
            'entity_name' => 'ProductOrderItemStatus',
            'entity_description' => 'Product Order Item Status',
            'data_type' => 'sb_prodorderistatus',
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
        'item_sequence' => array('name' => 'item_sequence',
            'description' => 'Sequence No',
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
        'quantity' => array('name' => 'quantity',
            'description' => 'Quantity',
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
        'order_item_price' => array('name' => 'order_item_price',
            'description' => 'Price',
            'size' => 'large',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'description' => array('name' => 'description',
            'description' => 'Description',
            'size' => 'large',
            'data_type' => 'text-lg',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
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
       register_post_type('sb_prodorderitem', 
            array(
                'label' => 'Product Order Item',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Product Order Item',
                'edit_item'         => 'Edit Product Order Item',
                'new_item'          => 'New Product Order Item',
                'view_item'         => 'View Product Order Item',
                'search_items'      => 'Search Product Order Item',
                'not_found'         => 'No Product Order Item Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Product Order Item',
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
        if ( $post->post_type == 'sb_prodorderitem') 
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

    public static function sb_prodorderitem_table_head($defaults){
        $defaults['entity_code']  = 'Code';
        $defaults['item_order']  = 'Order';
        $defaults['order_item_type']  = 'Type';
        $defaults['order_item_status']  = 'Status';
        $defaults['name']  = 'Name';
        $defaults['item_sequence']  = 'Sequence No';
        $defaults['quantity']  = 'Quantity';
        $defaults['order_item_price']  = 'Price';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_prodorderitem_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'item_order') {
            $field_value = get_post_meta($post_id, 'item_order', true );
            echo $field_value;
        }
        if ($column_name == 'order_item_type') {
            $field_value = get_post_meta($post_id, 'order_item_type', true );
            echo $field_value;
        }
        if ($column_name == 'order_item_status') {
            $field_value = get_post_meta($post_id, 'order_item_status', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'item_sequence') {
            $field_value = get_post_meta($post_id, 'item_sequence', true );
            echo $field_value;
        }
        if ($column_name == 'quantity') {
            $field_value = get_post_meta($post_id, 'quantity', true );
            echo $field_value;
        }
        if ($column_name == 'order_item_price') {
            $field_value = get_post_meta($post_id, 'order_item_price', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>