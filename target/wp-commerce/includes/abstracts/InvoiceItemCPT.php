<?php 

class InvoiceItemCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_invoiceitem'; 
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
        array('name' => 'ii_invoice',
            'title' => 'Invoice',
            'description' => 'The Invoice field',
            'type' => 'text',
        ),
        array('name' => 'ii_status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'ii_type',
            'title' => 'Item Type',
            'description' => 'The Item Type field',
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
        array('name' => 'unit_price',
            'title' => 'Unit Price',
            'description' => 'The Unit Price field',
            'type' => 'text',
        ),
        array('name' => 'total',
            'title' => 'Total',
            'description' => 'The Total field',
            'type' => 'text',
        ),
        array('name' => 'description',
            'title' => 'Description',
            'description' => 'The Description field',
            'type' => 'text',
        ),
        array('name' => 'business_unit',
            'title' => 'Business Unit',
            'description' => 'The Business Unit field',
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
        'ii_invoice' => array('name' => 'ii_invoice',
            'description' => 'Invoice',
            'nick_name' => 'ii_invoice',
            'size' => 'large',
            'entity_name' => 'Invoice',
            'entity_description' => 'Invoice',
            'data_type' => 'sb_invoice',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'ii_status' => array('name' => 'ii_status',
            'description' => 'Status',
            'nick_name' => 'ii_status',
            'size' => 'large',
            'entity_name' => 'InvoiceItemStatus',
            'entity_description' => 'Invoice Item Status',
            'data_type' => 'sb_invoiceitemstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'ii_type' => array('name' => 'ii_type',
            'description' => 'Item Type',
            'nick_name' => 'ii_type',
            'size' => 'large',
            'entity_name' => 'InvoiceItemType',
            'entity_description' => 'Invoice Item Type',
            'data_type' => 'sb_invoiceitemtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
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
        'unit_price' => array('name' => 'unit_price',
            'description' => 'Unit Price',
            'nick_name' => 'unit_price',
            'size' => 'large',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'total' => array('name' => 'total',
            'description' => 'Total',
            'nick_name' => 'total',
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
        'business_unit' => array('name' => 'business_unit',
            'description' => 'Business Unit',
            'nick_name' => 'business_unit',
            'size' => 'large',
            'entity_name' => 'BusinessUnit',
            'entity_description' => 'Business Unit',
            'data_type' => 'sb_businessunit',
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
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
       register_post_type('sb_invoiceitem', 
            array(
                'label' => 'Invoice Item',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Invoice Item',
                'edit_item'         => 'Edit Invoice Item',
                'new_item'          => 'New Invoice Item',
                'view_item'         => 'View Invoice Item',
                'search_items'      => 'Search Invoice Item',
                'not_found'         => 'No Invoice Item Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Invoice Item',
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
        if ( $post->post_type == 'sb_invoiceitem') 
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

    public static function sb_invoiceitem_table_head($defaults){
        $defaults['name']  = 'Name';
        $defaults['quantity']  = 'Quantity';
        $defaults['unit_price']  = 'Unit Price';
        $defaults['total']  = 'Total';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_invoiceitem_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'ii_invoice') {
            $field_value = get_post_meta($post_id, 'ii_invoice', true );
            echo $field_value;
        }
        if ($column_name == 'ii_status') {
            $field_value = get_post_meta($post_id, 'ii_status', true );
            echo $field_value;
        }
        if ($column_name == 'ii_type') {
            $field_value = get_post_meta($post_id, 'ii_type', true );
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
        if ($column_name == 'unit_price') {
            $field_value = get_post_meta($post_id, 'unit_price', true );
            echo $field_value;
        }
        if ($column_name == 'total') {
            $field_value = get_post_meta($post_id, 'total', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
        if ($column_name == 'business_unit') {
            $field_value = get_post_meta($post_id, 'business_unit', true );
            echo $field_value;
        }
    }

}

?>