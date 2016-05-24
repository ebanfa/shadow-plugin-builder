<?php 

class TransactionCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_transaction'; 
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
        array('name' => 'txn_type',
            'title' => 'Transaction Type',
            'description' => 'The Transaction Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'txn_date',
            'title' => 'Transaction Date',
            'description' => 'The Transaction Date field',
            'type' => 'text',
        ),
        array('name' => 'entry_date',
            'title' => 'Entry Date',
            'description' => 'The Entry Date field',
            'type' => 'text',
        ),
        array('name' => 'internal_org',
            'title' => 'Internal Organization',
            'description' => 'The Internal Organization field',
            'type' => 'text',
        ),
        array('name' => 'from_party',
            'title' => 'From Party',
            'description' => 'The From Party field',
            'type' => 'text',
        ),
        array('name' => 'to_party',
            'title' => 'To Party',
            'description' => 'The To Party field',
            'type' => 'text',
        ),
        array('name' => 'payment',
            'title' => 'Payment',
            'description' => 'The Payment field',
            'type' => 'text',
        ),
        array('name' => 'invoice',
            'title' => 'Invoice',
            'description' => 'The Invoice field',
            'type' => 'text',
        ),
        array('name' => 'porder',
            'title' => 'Purchase Order',
            'description' => 'The Purchase Order field',
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
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'txn_type' => array('name' => 'txn_type',
            'description' => 'Transaction Type',
            'size' => 'large',
            'entity_name' => 'TransactionType',
            'entity_description' => 'Transaction Type',
            'data_type' => 'sb_txntype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
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
        'txn_date' => array('name' => 'txn_date',
            'description' => 'Transaction Date',
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
        'entry_date' => array('name' => 'entry_date',
            'description' => 'Entry Date',
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
        'internal_org' => array('name' => 'internal_org',
            'description' => 'Internal Organization',
            'size' => 'large',
            'entity_name' => 'BusinessUnit',
            'entity_description' => 'Business Unit',
            'data_type' => 'sb_businessunit',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'from_party' => array('name' => 'from_party',
            'description' => 'From Party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'to_party' => array('name' => 'to_party',
            'description' => 'To Party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'payment' => array('name' => 'payment',
            'description' => 'Payment',
            'size' => 'large',
            'entity_name' => 'Payment',
            'entity_description' => 'Payment',
            'data_type' => 'sb_payment',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'invoice' => array('name' => 'invoice',
            'description' => 'Invoice',
            'size' => 'large',
            'entity_name' => 'Invoice',
            'entity_description' => 'Invoice',
            'data_type' => 'sb_invoice',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'porder' => array('name' => 'porder',
            'description' => 'Purchase Order',
            'size' => 'large',
            'entity_name' => 'PurchaseOrder',
            'entity_description' => 'Purchase Order',
            'data_type' => 'sb_porder',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
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
        'transaction' => array('name' => 'transaction',
            'entity_name' => 'TransactionDetail',
            'data_type' => 'sb_txndetail',
            'artifact_name' => 'transactiondetail',
            'entity_description' => 'Transaction Detail',
            'is_relationship_field' => true,
            'fields' => array(
                'entity_code' => array('name' => 'entity_code',
                    'description' => 'Code',
                    'size' => 'medium',
                    'data_type' => 'alphanumeric',
                    'is_required' => true,
                    'is_visible' => false,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => false,
                    'is_relationship_field' => false,),
                'txn_detail' => array('name' => 'txn_detail',
                    'description' => 'Associated Transaction Detail',
                    'size' => 'large',
                    'entity_name' => 'TransactionDetail',
                    'entity_description' => 'Transaction Detail',
                    'data_type' => 'sb_txndetail',
                    'is_required' => false,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => false,
                    'is_relationship_field' => true,),
                'transaction' => array('name' => 'transaction',
                    'description' => 'Transaction',
                    'size' => 'large',
                    'entity_name' => 'Transaction',
                    'entity_description' => 'Transaction',
                    'data_type' => 'sb_transaction',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'td_buglaccount' => array('name' => 'td_buglaccount',
                    'description' => 'Business Unit GL Account',
                    'size' => 'large',
                    'entity_name' => 'BusinessUnitGLAccount',
                    'entity_description' => 'Business Unit GL Account',
                    'data_type' => 'sb_buglaccount',
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
                'dbcr_fg' => array('name' => 'dbcr_fg',
                    'description' => 'Debit Credit Flag',
                    'size' => 'large',
                    'data_type' => 'flag',
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
                    'data_type' => 'text-lg',
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
            ),
        ),
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_transaction', 
            array(
                'label' => 'Transaction',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Transaction',
                'edit_item'         => 'Edit Transaction',
                'new_item'          => 'New Transaction',
                'view_item'         => 'View Transaction',
                'search_items'      => 'Search Transaction',
                'not_found'         => 'No Transaction Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Transaction',
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
        if ( $post->post_type == 'sb_transaction') 
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

    public static function sb_transaction_table_head($defaults){
        $defaults['name']  = 'name';
        $defaults['txn_date']  = 'Transaction Date';
        $defaults['entry_date']  = 'Entry Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_transaction_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'txn_type') {
            $field_value = get_post_meta($post_id, 'txn_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'txn_date') {
            $field_value = get_post_meta($post_id, 'txn_date', true );
            echo $field_value;
        }
        if ($column_name == 'entry_date') {
            $field_value = get_post_meta($post_id, 'entry_date', true );
            echo $field_value;
        }
        if ($column_name == 'internal_org') {
            $field_value = get_post_meta($post_id, 'internal_org', true );
            echo $field_value;
        }
        if ($column_name == 'from_party') {
            $field_value = get_post_meta($post_id, 'from_party', true );
            echo $field_value;
        }
        if ($column_name == 'to_party') {
            $field_value = get_post_meta($post_id, 'to_party', true );
            echo $field_value;
        }
        if ($column_name == 'payment') {
            $field_value = get_post_meta($post_id, 'payment', true );
            echo $field_value;
        }
        if ($column_name == 'invoice') {
            $field_value = get_post_meta($post_id, 'invoice', true );
            echo $field_value;
        }
        if ($column_name == 'porder') {
            $field_value = get_post_meta($post_id, 'porder', true );
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