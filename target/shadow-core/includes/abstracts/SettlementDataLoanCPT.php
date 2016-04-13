<?php 

class SettlementDataLoanCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_settledataloan'; 
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
        array('name' => 'li_settledata',
            'title' => 'Settlement Data',
            'description' => 'The Settlement Data field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'loan_date',
            'title' => 'Loan Date',
            'description' => 'The Loan Date field',
            'type' => 'text',
        ),
        array('name' => 'loan_amount',
            'title' => 'Amount',
            'description' => 'The Amount field',
            'type' => 'text',
        ),
        array('name' => 'interest_rate',
            'title' => 'Interest Rate',
            'description' => 'The Interest Rate field',
            'type' => 'text',
        ),
        array('name' => 'term',
            'title' => 'Term',
            'description' => 'The Term field',
            'type' => 'text',
        ),
        array('name' => 'loan_type',
            'title' => 'Loan Type',
            'description' => 'The Loan Type field',
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
       register_post_type('sb_settledataloan', 
            array(
                'label' => 'Loan Information',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Loan Information',
                'edit_item'         => 'Edit Loan Information',
                'new_item'          => 'New Loan Information',
                'view_item'         => 'View Loan Information',
                'search_items'      => 'Search Loan Information',
                'not_found'         => 'No Loan Information Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Loan Information',
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
        if ( $post->post_type == 'sb_settledataloan') 
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

    public static function sb_settledataloan_table_head($defaults){
        $defaults['li_settledata']  = 'Settlement Data';
        $defaults['name']  = 'name';
        $defaults['loan_date']  = 'Loan Date';
        $defaults['loan_amount']  = 'Amount';
        $defaults['interest_rate']  = 'Interest Rate';
        $defaults['term']  = 'Term';
        $defaults['loan_type']  = 'Loan Type';
        $defaults['date_created']  = 'Date Created';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_settledataloan_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'li_settledata') {
            $field_value = get_post_meta($post_id, 'li_settledata', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'loan_date') {
            $field_value = get_post_meta($post_id, 'loan_date', true );
            echo $field_value;
        }
        if ($column_name == 'loan_amount') {
            $field_value = get_post_meta($post_id, 'loan_amount', true );
            echo $field_value;
        }
        if ($column_name == 'interest_rate') {
            $field_value = get_post_meta($post_id, 'interest_rate', true );
            echo $field_value;
        }
        if ($column_name == 'term') {
            $field_value = get_post_meta($post_id, 'term', true );
            echo $field_value;
        }
        if ($column_name == 'loan_type') {
            $field_value = get_post_meta($post_id, 'loan_type', true );
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