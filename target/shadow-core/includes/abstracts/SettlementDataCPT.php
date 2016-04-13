<?php 

class SettlementDataCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_settlementdata'; 
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
        array('name' => 'sd_agreement',
            'title' => 'Purchase Agreement',
            'description' => 'The Purchase Agreement field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'settle_date',
            'title' => 'Settlement Date',
            'description' => 'The Settlement Date field',
            'type' => 'text',
        ),
        array('name' => 'price',
            'title' => 'Price',
            'description' => 'The Price field',
            'type' => 'text',
        ),
        array('name' => 'deposit',
            'title' => 'Deposit',
            'description' => 'The Deposit field',
            'type' => 'text',
        ),
        array('name' => 'closing_amount',
            'title' => 'Closing Amount',
            'description' => 'The Closing Amount field',
            'type' => 'text',
        ),
        array('name' => 'late_fee',
            'title' => 'Late Payment Fee (%)',
            'description' => 'The Late Payment Fee (%) field',
            'type' => 'text',
        ),
        array('name' => 'financing_type',
            'title' => 'Financing Type',
            'description' => 'The Financing Type field',
            'type' => 'text',
        ),
        array('name' => 'date_created',
            'title' => 'Date Created',
            'description' => 'The Date Created field',
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
        'sd_agreement' => array('name' => 'sd_agreement',
            'description' => 'Purchase Agreement',
            'size' => 'large',
            'entity_name' => 'PurchaseAgreement',
            'entity_description' => 'Purchase Agreement',
            'data_type' => 'sb_purchaseagrmnt',
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => false,
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
        'settle_date' => array('name' => 'settle_date',
            'description' => 'Settlement Date',
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
        'price' => array('name' => 'price',
            'description' => 'Price',
            'size' => 'medium',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'deposit' => array('name' => 'deposit',
            'description' => 'Deposit',
            'size' => 'medium',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'closing_amount' => array('name' => 'closing_amount',
            'description' => 'Closing Amount',
            'size' => 'medium',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'late_fee' => array('name' => 'late_fee',
            'description' => 'Late Payment Fee (%)',
            'size' => 'medium',
            'data_type' => 'number',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'financing_type' => array('name' => 'financing_type',
            'description' => 'Financing Type',
            'size' => 'medium',
            'data_type' => 'option',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'date_created' => array('name' => 'date_created',
            'description' => 'Date Created',
            'size' => 'medium',
            'data_type' => 'date',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => false,
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
        'li_settledata' => array('name' => 'li_settledata',
            'entity_name' => 'SettlementDataLoan',
            'data_type' => 'sb_settledataloan',
            'artifact_name' => 'settlementdataloan',
            'entity_description' => 'Loan Information',
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
                'li_settledata' => array('name' => 'li_settledata',
                    'description' => 'Settlement Data',
                    'size' => 'large',
                    'entity_name' => 'SettlementData',
                    'entity_description' => 'Settlement Data',
                    'data_type' => 'sb_settlementdata',
                    'is_required' => true,
                    'is_visible' => false,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => false,
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
                'loan_date' => array('name' => 'loan_date',
                    'description' => 'Loan Date',
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
                'loan_amount' => array('name' => 'loan_amount',
                    'description' => 'Amount',
                    'size' => 'medium',
                    'data_type' => 'money',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => false,),
                'interest_rate' => array('name' => 'interest_rate',
                    'description' => 'Interest Rate',
                    'size' => 'medium',
                    'data_type' => 'number',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => false,),
                'term' => array('name' => 'term',
                    'description' => 'Term',
                    'size' => 'medium',
                    'data_type' => 'number',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => false,),
                'loan_type' => array('name' => 'loan_type',
                    'description' => 'Loan Type',
                    'size' => 'medium',
                    'data_type' => 'option',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => false,),
                'date_created' => array('name' => 'date_created',
                    'description' => 'Date Created',
                    'size' => 'medium',
                    'data_type' => 'date',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => false,
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
       register_post_type('sb_settlementdata', 
            array(
                'label' => 'Settlement Data',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Settlement Data',
                'edit_item'         => 'Edit Settlement Data',
                'new_item'          => 'New Settlement Data',
                'view_item'         => 'View Settlement Data',
                'search_items'      => 'Search Settlement Data',
                'not_found'         => 'No Settlement Data Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Settlement Data',
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
        if ( $post->post_type == 'sb_settlementdata') 
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

    public static function sb_settlementdata_table_head($defaults){
        $defaults['sd_agreement']  = 'Purchase Agreement';
        $defaults['name']  = 'name';
        $defaults['settle_date']  = 'Settlement Date';
        $defaults['price']  = 'Price';
        $defaults['deposit']  = 'Deposit';
        $defaults['closing_amount']  = 'Closing Amount';
        $defaults['late_fee']  = 'Late Payment Fee (%)';
        $defaults['financing_type']  = 'Financing Type';
        $defaults['date_created']  = 'Date Created';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_settlementdata_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'sd_agreement') {
            $field_value = get_post_meta($post_id, 'sd_agreement', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'settle_date') {
            $field_value = get_post_meta($post_id, 'settle_date', true );
            echo $field_value;
        }
        if ($column_name == 'price') {
            $field_value = get_post_meta($post_id, 'price', true );
            echo $field_value;
        }
        if ($column_name == 'deposit') {
            $field_value = get_post_meta($post_id, 'deposit', true );
            echo $field_value;
        }
        if ($column_name == 'closing_amount') {
            $field_value = get_post_meta($post_id, 'closing_amount', true );
            echo $field_value;
        }
        if ($column_name == 'late_fee') {
            $field_value = get_post_meta($post_id, 'late_fee', true );
            echo $field_value;
        }
        if ($column_name == 'financing_type') {
            $field_value = get_post_meta($post_id, 'financing_type', true );
            echo $field_value;
        }
        if ($column_name == 'date_created') {
            $field_value = get_post_meta($post_id, 'date_created', true );
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