<?php 

class ProductOrderStatusCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_prodorderstatus'; 
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
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
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
        'prod_order_status' => array('name' => 'prod_order_status',
            'entity_name' => 'ProductOrder',
            'data_type' => 'sb_prodorder',
            'artifact_name' => 'productorder',
            'entity_description' => 'Product Order',
            'is_relationship_field' => true,
            'fields' => array(
                'entity_code' => array('name' => 'entity_code',
                    'description' => 'Code',
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
                'prod_order_type' => array('name' => 'prod_order_type',
                    'description' => 'Type',
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
                'placed_by_party' => array('name' => 'placed_by_party',
                    'description' => 'Placed By',
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
                'sub_total' => array('name' => 'sub_total',
                    'description' => 'Sub Total',
                    'size' => 'large',
                    'data_type' => 'money',
                    'is_required' => false,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => false,
                    'is_relationship_field' => false,),
                'discount' => array('name' => 'discount',
                    'description' => 'Discount',
                    'size' => 'large',
                    'data_type' => 'money',
                    'is_required' => false,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => false,
                    'is_relationship_field' => false,),
                'total' => array('name' => 'total',
                    'description' => 'Total',
                    'size' => 'large',
                    'data_type' => 'money',
                    'is_required' => false,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => false,
                    'is_relationship_field' => false,),
                'prod_order_date' => array('name' => 'prod_order_date',
                    'description' => 'Order Date',
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
       register_post_type('sb_prodorderstatus', 
            array(
                'label' => 'Product Order Status',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Product Order Status',
                'edit_item'         => 'Edit Product Order Status',
                'new_item'          => 'New Product Order Status',
                'view_item'         => 'View Product Order Status',
                'search_items'      => 'Search Product Order Status',
                'not_found'         => 'No Product Order Status Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Product Order Status',
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
        if ( $post->post_type == 'sb_prodorderstatus') 
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

    public static function sb_prodorderstatus_table_head($defaults){
        $defaults['entity_code']  = 'Code';
        $defaults['name']  = 'Name';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_prodorderstatus_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>