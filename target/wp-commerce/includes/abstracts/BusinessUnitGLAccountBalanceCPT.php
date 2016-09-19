<?php 

class BusinessUnitGLAccountBalanceCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_buglaccountbal'; 
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
        array('name' => 'buglaccount',
            'title' => 'BU GL Account',
            'description' => 'The BU GL Account field',
            'type' => 'text',
        ),
        array('name' => 'internal_org',
            'title' => 'Internal Organization',
            'description' => 'The Internal Organization field',
            'type' => 'text',
        ),
        array('name' => 'acctng_period',
            'title' => 'Accounting Period',
            'description' => 'The Accounting Period field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'balance',
            'title' => 'Balance',
            'description' => 'The Balance field',
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
        'buglaccount' => array('name' => 'buglaccount',
            'description' => 'BU GL Account',
            'nick_name' => 'buglaccount',
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
        'internal_org' => array('name' => 'internal_org',
            'description' => 'Internal Organization',
            'nick_name' => 'internal_org',
            'size' => 'large',
            'entity_name' => 'BusinessUnit',
            'entity_description' => 'Business Unit',
            'data_type' => 'sb_businessunit',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'acctng_period' => array('name' => 'acctng_period',
            'description' => 'Accounting Period',
            'nick_name' => 'acctng_period',
            'size' => 'large',
            'entity_name' => 'AccountingPeriod',
            'entity_description' => 'Accounting Period',
            'data_type' => 'sb_acctperiod',
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
        'balance' => array('name' => 'balance',
            'description' => 'Balance',
            'nick_name' => 'balance',
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
       register_post_type('sb_buglaccountbal', 
            array(
                'label' => 'Business Unit GL Account Balance',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Business Unit GL Account Balance',
                'edit_item'         => 'Edit Business Unit GL Account Balance',
                'new_item'          => 'New Business Unit GL Account Balance',
                'view_item'         => 'View Business Unit GL Account Balance',
                'search_items'      => 'Search Business Unit GL Account Balance',
                'not_found'         => 'No Business Unit GL Account Balance Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Business Unit GL Account Balance',
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
        if ( $post->post_type == 'sb_buglaccountbal') 
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

    public static function sb_buglaccountbal_table_head($defaults){
        $defaults['buglaccount']  = 'BU GL Account';
        $defaults['internal_org']  = 'Internal Organization';
        $defaults['acctng_period']  = 'Accounting Period';
        $defaults['name']  = 'name';
        $defaults['balance']  = 'Balance';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_buglaccountbal_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'buglaccount') {
            $field_value = get_post_meta($post_id, 'buglaccount', true );
            echo $field_value;
        }
        if ($column_name == 'internal_org') {
            $field_value = get_post_meta($post_id, 'internal_org', true );
            echo $field_value;
        }
        if ($column_name == 'acctng_period') {
            $field_value = get_post_meta($post_id, 'acctng_period', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'balance') {
            $field_value = get_post_meta($post_id, 'balance', true );
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