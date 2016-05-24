<?php 

class ReceiptCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_receipt'; 
    public static $is_global_entity = false; 


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
        array('name' => 'type',
            'title' => 'Receipt Type',
            'description' => 'The Receipt Type field',
            'type' => 'text',
        ),
        array('name' => 'r_methtype',
            'title' => 'Payment Method Type',
            'description' => 'The Payment Method Type field',
            'type' => 'text',
        ),
        array('name' => 'r_fpartyrole',
            'title' => 'From Party Role',
            'description' => 'The From Party Role field',
            'type' => 'text',
        ),
        array('name' => 'r_tpartyrole',
            'title' => 'To Party Role',
            'description' => 'The To Party Role field',
            'type' => 'text',
        ),
        array('name' => 'r_payment',
            'title' => 'Payment',
            'description' => 'The Payment field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'amount',
            'title' => 'Amount',
            'description' => 'The Amount field',
            'type' => 'text',
        ),
        array('name' => 'effective_date',
            'title' => 'Effective Date',
            'description' => 'The Effective Date field',
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
        'type' => array('name' => 'type',
            'description' => 'Receipt Type',
            'size' => 'large',
            'entity_name' => 'ReceiptType',
            'entity_description' => 'Receipt Type',
            'data_type' => 'sb_receipttype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'r_methtype' => array('name' => 'r_methtype',
            'description' => 'Payment Method Type',
            'size' => 'large',
            'entity_name' => 'PaymentMethodType',
            'entity_description' => 'Payment Method Type',
            'data_type' => 'sb_paymethtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'r_fpartyrole' => array('name' => 'r_fpartyrole',
            'description' => 'From Party Role',
            'size' => 'large',
            'entity_name' => 'PartyRole',
            'entity_description' => 'Party Role',
            'data_type' => 'sb_partyrole',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'r_tpartyrole' => array('name' => 'r_tpartyrole',
            'description' => 'To Party Role',
            'size' => 'large',
            'entity_name' => 'PartyRole',
            'entity_description' => 'Party Role',
            'data_type' => 'sb_partyrole',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'r_payment' => array('name' => 'r_payment',
            'description' => 'Payment',
            'size' => 'large',
            'entity_name' => 'Payment',
            'entity_description' => 'Payment',
            'data_type' => 'sb_payment',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
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
        'amount' => array('name' => 'amount',
            'description' => 'Amount',
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
        'effective_date' => array('name' => 'effective_date',
            'description' => 'Effective Date',
            'size' => 'medium',
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
        'business_unit' => array('name' => 'business_unit',
            'description' => 'Business Unit',
            'size' => 'large',
            'entity_name' => 'BusinessUnit',
            'entity_description' => 'Business Unit',
            'data_type' => 'sb_businessunit',
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
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
       register_post_type('sb_receipt', 
            array(
                'label' => 'Receipt',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Receipt',
                'edit_item'         => 'Edit Receipt',
                'new_item'          => 'New Receipt',
                'view_item'         => 'View Receipt',
                'search_items'      => 'Search Receipt',
                'not_found'         => 'No Receipt Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Receipt',
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
        if ( $post->post_type == 'sb_receipt') 
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

    public static function sb_receipt_table_head($defaults){
        $defaults['type']  = 'Receipt Type';
        $defaults['r_methtype']  = 'Payment Method Type';
        $defaults['r_fpartyrole']  = 'From Party Role';
        $defaults['r_tpartyrole']  = 'To Party Role';
        $defaults['name']  = 'name';
        $defaults['amount']  = 'Amount';
        $defaults['effective_date']  = 'Effective Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_receipt_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'type') {
            $field_value = get_post_meta($post_id, 'type', true );
            echo $field_value;
        }
        if ($column_name == 'r_methtype') {
            $field_value = get_post_meta($post_id, 'r_methtype', true );
            echo $field_value;
        }
        if ($column_name == 'r_fpartyrole') {
            $field_value = get_post_meta($post_id, 'r_fpartyrole', true );
            echo $field_value;
        }
        if ($column_name == 'r_tpartyrole') {
            $field_value = get_post_meta($post_id, 'r_tpartyrole', true );
            echo $field_value;
        }
        if ($column_name == 'r_payment') {
            $field_value = get_post_meta($post_id, 'r_payment', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'amount') {
            $field_value = get_post_meta($post_id, 'amount', true );
            echo $field_value;
        }
        if ($column_name == 'effective_date') {
            $field_value = get_post_meta($post_id, 'effective_date', true );
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