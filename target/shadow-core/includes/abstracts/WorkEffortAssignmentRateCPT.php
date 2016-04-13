<?php 

class WorkEffortAssignmentRateCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_wearate'; 
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
        array('name' => 'weassignment',
            'title' => 'Work Effort Assignment',
            'description' => 'The Work Effort Assignment field',
            'type' => 'text',
        ),
        array('name' => 'rate_type',
            'title' => 'Rate Type',
            'description' => 'The Rate Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'from_date',
            'title' => 'From Date',
            'description' => 'The From Date field',
            'type' => 'text',
        ),
        array('name' => 'to_date',
            'title' => 'To Date',
            'description' => 'The To Date field',
            'type' => 'text',
        ),
        array('name' => 'rate',
            'title' => 'Rate',
            'description' => 'The Rate field',
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
        'weassignment' => array('name' => 'weassignment',
            'description' => 'Work Effort Assignment',
            'size' => 'large',
            'entity_name' => 'WorkEffortPartyAssignment',
            'entity_description' => 'Work Effort Party Assignment',
            'data_type' => 'sb_wepatyassign',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'rate_type' => array('name' => 'rate_type',
            'description' => 'Rate Type',
            'size' => 'large',
            'entity_name' => 'RateType',
            'entity_description' => 'Rate Type',
            'data_type' => 'sb_ratetype',
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
        'from_date' => array('name' => 'from_date',
            'description' => 'From Date',
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
        'to_date' => array('name' => 'to_date',
            'description' => 'To Date',
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
        'rate' => array('name' => 'rate',
            'description' => 'Rate',
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
       register_post_type('sb_wearate', 
            array(
                'label' => 'Work Effort Assignment Rate',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Work Effort Assignment Rate',
                'edit_item'         => 'Edit Work Effort Assignment Rate',
                'new_item'          => 'New Work Effort Assignment Rate',
                'view_item'         => 'View Work Effort Assignment Rate',
                'search_items'      => 'Search Work Effort Assignment Rate',
                'not_found'         => 'No Work Effort Assignment Rate Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Work Effort Assignment Rate',
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
        if ( $post->post_type == 'sb_wearate') 
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

    public static function sb_wearate_table_head($defaults){
        $defaults['weassignment']  = 'Work Effort Assignment';
        $defaults['rate_type']  = 'Rate Type';
        $defaults['name']  = 'Name';
        $defaults['from_date']  = 'From Date';
        $defaults['to_date']  = 'To Date';
        $defaults['rate']  = 'Rate';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_wearate_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'weassignment') {
            $field_value = get_post_meta($post_id, 'weassignment', true );
            echo $field_value;
        }
        if ($column_name == 'rate_type') {
            $field_value = get_post_meta($post_id, 'rate_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'from_date') {
            $field_value = get_post_meta($post_id, 'from_date', true );
            echo $field_value;
        }
        if ($column_name == 'to_date') {
            $field_value = get_post_meta($post_id, 'to_date', true );
            echo $field_value;
        }
        if ($column_name == 'rate') {
            $field_value = get_post_meta($post_id, 'rate', true );
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