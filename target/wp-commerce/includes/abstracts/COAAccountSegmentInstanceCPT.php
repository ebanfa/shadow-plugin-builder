<?php 

class COAAccountSegmentInstanceCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_coaaseginst'; 
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
        array('name' => 'coa',
            'title' => 'Chart Of Accounts',
            'description' => 'The Chart Of Accounts field',
            'type' => 'text',
        ),
        array('name' => 'acct_segment',
            'title' => 'Account Segment',
            'description' => 'The Account Segment field',
            'type' => 'text',
        ),
        array('name' => 'parent_instance',
            'title' => 'Parent',
            'description' => 'The Parent field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'is_account',
            'title' => 'Is Account',
            'description' => 'The Is Account field',
            'type' => 'text',
        ),
        array('name' => 'casi_buglaccount',
            'title' => 'BU GL Account',
            'description' => 'The BU GL Account field',
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
        'coa' => array('name' => 'coa',
            'description' => 'Chart Of Accounts',
            'size' => 'large',
            'entity_name' => 'ChartOfAccounts',
            'entity_description' => 'Chart Of Accounts',
            'data_type' => 'sb_coa',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'acct_segment' => array('name' => 'acct_segment',
            'description' => 'Account Segment',
            'size' => 'large',
            'entity_name' => 'COAAccountSegment',
            'entity_description' => 'COA Account Segment',
            'data_type' => 'sb_coaacctseg',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'parent_instance' => array('name' => 'parent_instance',
            'description' => 'Parent',
            'size' => 'large',
            'entity_name' => 'COAAccountSegmentInstance',
            'entity_description' => 'COA Account Segment Instance',
            'data_type' => 'sb_coaaseginst',
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
        'is_account' => array('name' => 'is_account',
            'description' => 'Is Account',
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
        'casi_buglaccount' => array('name' => 'casi_buglaccount',
            'description' => 'BU GL Account',
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
        'parent_instance' => array('name' => 'parent_instance',
            'entity_name' => 'COAAccountSegmentInstance',
            'data_type' => 'sb_coaaseginst',
            'artifact_name' => 'coaaccountsegmentinstance',
            'entity_description' => 'COA Account Segment Instance',
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
                'coa' => array('name' => 'coa',
                    'description' => 'Chart Of Accounts',
                    'size' => 'large',
                    'entity_name' => 'ChartOfAccounts',
                    'entity_description' => 'Chart Of Accounts',
                    'data_type' => 'sb_coa',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'acct_segment' => array('name' => 'acct_segment',
                    'description' => 'Account Segment',
                    'size' => 'large',
                    'entity_name' => 'COAAccountSegment',
                    'entity_description' => 'COA Account Segment',
                    'data_type' => 'sb_coaacctseg',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'parent_instance' => array('name' => 'parent_instance',
                    'description' => 'Parent',
                    'size' => 'large',
                    'entity_name' => 'COAAccountSegmentInstance',
                    'entity_description' => 'COA Account Segment Instance',
                    'data_type' => 'sb_coaaseginst',
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
                'is_account' => array('name' => 'is_account',
                    'description' => 'Is Account',
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
                'casi_buglaccount' => array('name' => 'casi_buglaccount',
                    'description' => 'BU GL Account',
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
       register_post_type('sb_coaaseginst', 
            array(
                'label' => 'COA Account Segment Instance',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New COA Account Segment Instance',
                'edit_item'         => 'Edit COA Account Segment Instance',
                'new_item'          => 'New COA Account Segment Instance',
                'view_item'         => 'View COA Account Segment Instance',
                'search_items'      => 'Search COA Account Segment Instance',
                'not_found'         => 'No COA Account Segment Instance Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable COA Account Segment Instance',
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
        if ( $post->post_type == 'sb_coaaseginst') 
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

    public static function sb_coaaseginst_table_head($defaults){
        $defaults['coa']  = 'Chart Of Accounts';
        $defaults['acct_segment']  = 'Account Segment';
        $defaults['parent_instance']  = 'Parent';
        $defaults['name']  = 'name';
        $defaults['is_account']  = 'Is Account';
        $defaults['casi_buglaccount']  = 'BU GL Account';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_coaaseginst_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'coa') {
            $field_value = get_post_meta($post_id, 'coa', true );
            echo $field_value;
        }
        if ($column_name == 'acct_segment') {
            $field_value = get_post_meta($post_id, 'acct_segment', true );
            echo $field_value;
        }
        if ($column_name == 'parent_instance') {
            $field_value = get_post_meta($post_id, 'parent_instance', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'is_account') {
            $field_value = get_post_meta($post_id, 'is_account', true );
            echo $field_value;
        }
        if ($column_name == 'casi_buglaccount') {
            $field_value = get_post_meta($post_id, 'casi_buglaccount', true );
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