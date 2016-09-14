<?php 

class ProductOrderCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_prodorder'; 
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
        array('name' => 'prod_order_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'prod_order_status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'place_by_party',
            'title' => 'Placed By',
            'description' => 'The Placed By field',
            'type' => 'text',
        ),
        array('name' => 'taken_by_party',
            'title' => 'Taken By',
            'description' => 'The Taken By field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'prod_order_date',
            'title' => 'Order Date',
            'description' => 'The Order Date field',
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
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'prod_order_type' => array('name' => 'prod_order_type',
            'description' => 'Type',
            'nick_name' => 'type',
            'size' => 'large',
            'entity_name' => 'ProductOrderType',
            'entity_description' => 'Product Order Type',
            'data_type' => 'sb_prodordertype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'prod_order_status' => array('name' => 'prod_order_status',
            'description' => 'Status',
            'nick_name' => 'status',
            'size' => 'large',
            'entity_name' => 'ProductOrderStatus',
            'entity_description' => 'Product Order Status',
            'data_type' => 'sb_prodorderstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'place_by_party' => array('name' => 'place_by_party',
            'description' => 'Placed By',
            'nick_name' => 'from_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'taken_by_party' => array('name' => 'taken_by_party',
            'description' => 'Taken By',
            'nick_name' => 'to_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
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
        'prod_order_date' => array('name' => 'prod_order_date',
            'description' => 'Order Date',
            'nick_name' => 'prod_order_date',
            'size' => 'large',
            'data_type' => 'date',
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
        'item_order' => array('name' => 'item_order',
            'entity_name' => 'ProductOrderItem',
            'data_type' => 'sb_prodorderitem',
            'artifact_name' => 'productorderitem',
            'entity_description' => 'Product Order Item',
            'is_relationship_field' => true,
            'fields' => array(
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
                    'is_create_field' => true,
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
            ),
        ),
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_prodorder', 
            array(
                'label' => 'Product Order',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Product Order',
                'edit_item'         => 'Edit Product Order',
                'new_item'          => 'New Product Order',
                'view_item'         => 'View Product Order',
                'search_items'      => 'Search Product Order',
                'not_found'         => 'No Product Order Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Product Order',
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
        if ( $post->post_type == 'sb_prodorder') 
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

    public static function sb_prodorder_table_head($defaults){
        $defaults['entity_code']  = 'Code';
        $defaults['prod_order_type']  = 'Type';
        $defaults['prod_order_status']  = 'Status';
        $defaults['place_by_party']  = 'Placed By';
        $defaults['taken_by_party']  = 'Taken By';
        $defaults['name']  = 'Name';
        $defaults['prod_order_date']  = 'Order Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_prodorder_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'prod_order_type') {
            $field_value = get_post_meta($post_id, 'prod_order_type', true );
            echo $field_value;
        }
        if ($column_name == 'prod_order_status') {
            $field_value = get_post_meta($post_id, 'prod_order_status', true );
            echo $field_value;
        }
        if ($column_name == 'place_by_party') {
            $field_value = get_post_meta($post_id, 'place_by_party', true );
            echo $field_value;
        }
        if ($column_name == 'taken_by_party') {
            $field_value = get_post_meta($post_id, 'taken_by_party', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'prod_order_date') {
            $field_value = get_post_meta($post_id, 'prod_order_date', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>