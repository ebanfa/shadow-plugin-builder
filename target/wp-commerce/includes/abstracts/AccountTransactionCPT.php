<?php 

class AccountTransactionCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_accttransaction'; 
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
        array('name' => 'acct_txn_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'transaction_status',
            'title' => 'Status',
            'description' => 'The Status field',
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
        array('name' => 'account',
            'title' => 'Billing Account',
            'description' => 'The Billing Account field',
            'type' => 'text',
        ),
        array('name' => 'amount',
            'title' => 'Amount',
            'description' => 'The Amount field',
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
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'acct_txn_type' => array('name' => 'acct_txn_type',
            'description' => 'Type',
            'nick_name' => 'type',
            'size' => 'large',
            'entity_name' => 'AccountTransactionType',
            'entity_description' => 'Account Transaction Type',
            'data_type' => 'sb_accttxntype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'transaction_status' => array('name' => 'transaction_status',
            'description' => 'Status',
            'nick_name' => 'transaction_status',
            'size' => 'large',
            'entity_name' => 'AccountTransactionStatus',
            'entity_description' => 'Account Transaction Status',
            'data_type' => 'sb_accttxnstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
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
        'txn_date' => array('name' => 'txn_date',
            'description' => 'Transaction Date',
            'nick_name' => 'txn_date',
            'size' => 'medium',
            'data_type' => 'date',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'account' => array('name' => 'account',
            'description' => 'Billing Account',
            'nick_name' => 'account',
            'size' => 'large',
            'entity_name' => 'BillingAccount',
            'entity_description' => 'Billing Account',
            'data_type' => 'sb_billaccount',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'amount' => array('name' => 'amount',
            'description' => 'Amount',
            'nick_name' => 'amount',
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
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_accttransaction', 
            array(
                'label' => 'Account Transaction',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Account Transaction',
                'edit_item'         => 'Edit Account Transaction',
                'new_item'          => 'New Account Transaction',
                'view_item'         => 'View Account Transaction',
                'search_items'      => 'Search Account Transaction',
                'not_found'         => 'No Account Transaction Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Account Transaction',
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
        if ( $post->post_type == 'sb_accttransaction') 
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

    public static function sb_accttransaction_table_head($defaults){
        $defaults['acct_txn_type']  = 'Type';
        $defaults['transaction_status']  = 'Status';
        $defaults['name']  = 'name';
        $defaults['txn_date']  = 'Transaction Date';
        $defaults['account']  = 'Billing Account';
        $defaults['amount']  = 'Amount';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_accttransaction_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'acct_txn_type') {
            $field_value = get_post_meta($post_id, 'acct_txn_type', true );
            echo $field_value;
        }
        if ($column_name == 'transaction_status') {
            $field_value = get_post_meta($post_id, 'transaction_status', true );
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
        if ($column_name == 'account') {
            $field_value = get_post_meta($post_id, 'account', true );
            echo $field_value;
        }
        if ($column_name == 'amount') {
            $field_value = get_post_meta($post_id, 'amount', true );
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