<?php 

class PaymentCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_payment'; 
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
        array('name' => 'p_type',
            'title' => 'Payment Type',
            'description' => 'The Payment Type field',
            'type' => 'text',
        ),
        array('name' => 'p_methtype',
            'title' => 'Payment Method',
            'description' => 'The Payment Method field',
            'type' => 'text',
        ),
        array('name' => 'payment_from',
            'title' => 'From',
            'description' => 'The From field',
            'type' => 'text',
        ),
        array('name' => 'payment_to',
            'title' => 'To',
            'description' => 'The To field',
            'type' => 'text',
        ),
        array('name' => 'payment_account',
            'title' => 'Billing Account',
            'description' => 'The Billing Account field',
            'type' => 'text',
        ),
        array('name' => 'payment_invoice',
            'title' => 'Invoice',
            'description' => 'The Invoice field',
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
        'p_type' => array('name' => 'p_type',
            'description' => 'Payment Type',
            'nick_name' => 'type',
            'size' => 'large',
            'entity_name' => 'PaymentType',
            'entity_description' => 'Payment Type',
            'data_type' => 'sb_paymenttype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'p_methtype' => array('name' => 'p_methtype',
            'description' => 'Payment Method',
            'nick_name' => 'p_methtype',
            'size' => 'large',
            'entity_name' => 'PaymentMethod',
            'entity_description' => 'Payment Method',
            'data_type' => 'sb_paymethod',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'payment_from' => array('name' => 'payment_from',
            'description' => 'From',
            'nick_name' => 'payment_from',
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
        'payment_to' => array('name' => 'payment_to',
            'description' => 'To',
            'nick_name' => 'payment_to',
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
        'payment_account' => array('name' => 'payment_account',
            'description' => 'Billing Account',
            'nick_name' => 'payment_account',
            'size' => 'large',
            'entity_name' => 'BillingAccount',
            'entity_description' => 'Billing Account',
            'data_type' => 'sb_billaccount',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'payment_invoice' => array('name' => 'payment_invoice',
            'description' => 'Invoice',
            'nick_name' => 'payment_invoice',
            'size' => 'large',
            'entity_name' => 'Invoice',
            'entity_description' => 'Invoice',
            'data_type' => 'sb_invoice',
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
        'amount' => array('name' => 'amount',
            'description' => 'Amount',
            'nick_name' => 'amount',
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
            'nick_name' => 'effective_date',
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
        'payment' => array('name' => 'payment',
            'entity_name' => 'Transaction',
            'data_type' => 'sb_transaction',
            'artifact_name' => 'transaction',
            'entity_description' => 'Transaction',
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
                'gl_txn_type' => array('name' => 'gl_txn_type',
                    'description' => 'Type',
                    'size' => 'large',
                    'entity_name' => 'TransactionType',
                    'entity_description' => 'Transaction Type',
                    'data_type' => 'sb_txntype',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'gl_txn_status' => array('name' => 'gl_txn_status',
                    'description' => 'Status',
                    'size' => 'large',
                    'entity_name' => 'TransactionStatus',
                    'entity_description' => 'Transaction Status',
                    'data_type' => 'sb_txnstatus',
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
            ),
        ),
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_payment', 
            array(
                'label' => 'Payment',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Payment',
                'edit_item'         => 'Edit Payment',
                'new_item'          => 'New Payment',
                'view_item'         => 'View Payment',
                'search_items'      => 'Search Payment',
                'not_found'         => 'No Payment Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Payment',
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
        if ( $post->post_type == 'sb_payment') 
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

    public static function sb_payment_table_head($defaults){
        $defaults['p_type']  = 'Payment Type';
        $defaults['p_methtype']  = 'Payment Method';
        $defaults['payment_from']  = 'From';
        $defaults['payment_to']  = 'To';
        $defaults['payment_account']  = 'Billing Account';
        $defaults['payment_invoice']  = 'Invoice';
        $defaults['name']  = 'name';
        $defaults['amount']  = 'Amount';
        $defaults['effective_date']  = 'Effective Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_payment_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'p_type') {
            $field_value = get_post_meta($post_id, 'p_type', true );
            echo $field_value;
        }
        if ($column_name == 'p_methtype') {
            $field_value = get_post_meta($post_id, 'p_methtype', true );
            echo $field_value;
        }
        if ($column_name == 'payment_from') {
            $field_value = get_post_meta($post_id, 'payment_from', true );
            echo $field_value;
        }
        if ($column_name == 'payment_to') {
            $field_value = get_post_meta($post_id, 'payment_to', true );
            echo $field_value;
        }
        if ($column_name == 'payment_account') {
            $field_value = get_post_meta($post_id, 'payment_account', true );
            echo $field_value;
        }
        if ($column_name == 'payment_invoice') {
            $field_value = get_post_meta($post_id, 'payment_invoice', true );
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