<?php 

class CostDataItemCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_cditemdata'; 
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
        array('name' => 'cdi_costdata',
            'title' => 'Cost Group',
            'description' => 'The Cost Group field',
            'type' => 'text',
        ),
        array('name' => 'cdi_type',
            'title' => 'Improvement Type',
            'description' => 'The Improvement Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'direct_cost',
            'title' => 'Total Direct Cost',
            'description' => 'The Total Direct Cost field',
            'type' => 'text',
        ),
        array('name' => 'indirect_cost',
            'title' => 'Total Indirect Cost',
            'description' => 'The Total Indirect Cost field',
            'type' => 'text',
        ),
        array('name' => 'p_depreciation',
            'title' => 'Physical Depreciation',
            'description' => 'The Physical Depreciation field',
            'type' => 'text',
        ),
        array('name' => 'f_depreciation',
            'title' => 'Functional Depreciation',
            'description' => 'The Functional Depreciation field',
            'type' => 'text',
        ),
        array('name' => 'e_depreciation',
            'title' => 'External Depreciation',
            'description' => 'The External Depreciation field',
            'type' => 'text',
        ),
        array('name' => 'economic_life',
            'title' => 'Economic Life',
            'description' => 'The Economic Life field',
            'type' => 'text',
        ),
        array('name' => 'r_economic_life',
            'title' => 'Remaining Economic Life',
            'description' => 'The Remaining Economic Life field',
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
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'cdi_costdata' => array('name' => 'cdi_costdata',
            'description' => 'Cost Group',
            'size' => 'large',
            'entity_name' => 'CostData',
            'entity_description' => 'Cost Data',
            'data_type' => 'sb_costdata',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'cdi_type' => array('name' => 'cdi_type',
            'description' => 'Improvement Type',
            'size' => 'large',
            'data_type' => 'sb_cditype',
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
            'data_type' => 'text',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'direct_cost' => array('name' => 'direct_cost',
            'description' => 'Total Direct Cost',
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
        'indirect_cost' => array('name' => 'indirect_cost',
            'description' => 'Total Indirect Cost',
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
        'p_depreciation' => array('name' => 'p_depreciation',
            'description' => 'Physical Depreciation',
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
        'f_depreciation' => array('name' => 'f_depreciation',
            'description' => 'Functional Depreciation',
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
        'e_depreciation' => array('name' => 'e_depreciation',
            'description' => 'External Depreciation',
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
        'economic_life' => array('name' => 'economic_life',
            'description' => 'Economic Life',
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
        'r_economic_life' => array('name' => 'r_economic_life',
            'description' => 'Remaining Economic Life',
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
       register_post_type('sb_cditemdata', 
            array(
                'label' => 'Cost Data Item',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Cost Data Item',
                'edit_item'         => 'Edit Cost Data Item',
                'new_item'          => 'New Cost Data Item',
                'view_item'         => 'View Cost Data Item',
                'search_items'      => 'Search Cost Data Item',
                'not_found'         => 'No Cost Data Item Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Cost Data Item',
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
        if ( $post->post_type == 'sb_cditemdata') 
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

    public static function sb_cditemdata_table_head($defaults){
        $defaults['cdi_costdata']  = 'Cost Group';
        $defaults['cdi_type']  = 'Improvement Type';
        $defaults['name']  = 'Name';
        $defaults['direct_cost']  = 'Total Direct Cost';
        $defaults['indirect_cost']  = 'Total Indirect Cost';
        $defaults['p_depreciation']  = 'Physical Depreciation';
        $defaults['f_depreciation']  = 'Functional Depreciation';
        $defaults['e_depreciation']  = 'External Depreciation';
        $defaults['economic_life']  = 'Economic Life';
        $defaults['r_economic_life']  = 'Remaining Economic Life';
        $defaults['effective_date']  = 'Effective Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_cditemdata_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'cdi_costdata') {
            $field_value = get_post_meta($post_id, 'cdi_costdata', true );
            echo $field_value;
        }
        if ($column_name == 'cdi_type') {
            $field_value = get_post_meta($post_id, 'cdi_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'direct_cost') {
            $field_value = get_post_meta($post_id, 'direct_cost', true );
            echo $field_value;
        }
        if ($column_name == 'indirect_cost') {
            $field_value = get_post_meta($post_id, 'indirect_cost', true );
            echo $field_value;
        }
        if ($column_name == 'p_depreciation') {
            $field_value = get_post_meta($post_id, 'p_depreciation', true );
            echo $field_value;
        }
        if ($column_name == 'f_depreciation') {
            $field_value = get_post_meta($post_id, 'f_depreciation', true );
            echo $field_value;
        }
        if ($column_name == 'e_depreciation') {
            $field_value = get_post_meta($post_id, 'e_depreciation', true );
            echo $field_value;
        }
        if ($column_name == 'economic_life') {
            $field_value = get_post_meta($post_id, 'economic_life', true );
            echo $field_value;
        }
        if ($column_name == 'r_economic_life') {
            $field_value = get_post_meta($post_id, 'r_economic_life', true );
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