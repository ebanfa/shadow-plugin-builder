<?php 

class UomConversionCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_uomconversion'; 
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
        array('name' => 'from_uom',
            'title' => 'From Uom',
            'description' => 'The From Uom field',
            'type' => 'text',
        ),
        array('name' => 'to_uom',
            'title' => 'To Uom',
            'description' => 'The To Uom field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'conversion_factor',
            'title' => 'Conversion Factor',
            'description' => 'The Conversion Factor field',
            'type' => 'text',
        ),
        array('name' => 'description',
            'title' => 'Description',
            'description' => 'The Description field',
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
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'from_uom' => array('name' => 'from_uom',
            'description' => 'From Uom',
            'size' => 'large',
            'entity_name' => 'Uom',
            'entity_description' => 'Unit Of Measure',
            'data_type' => 'sb_uom',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'to_uom' => array('name' => 'to_uom',
            'description' => 'To Uom',
            'size' => 'large',
            'entity_name' => 'Uom',
            'entity_description' => 'Unit Of Measure',
            'data_type' => 'sb_uom',
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
        'conversion_factor' => array('name' => 'conversion_factor',
            'description' => 'Conversion Factor',
            'size' => 'medium',
            'data_type' => 'alphanumeric',
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
       register_post_type('sb_uomconversion', 
            array(
                'label' => 'Uom Conversion',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Uom Conversion',
                'edit_item'         => 'Edit Uom Conversion',
                'new_item'          => 'New Uom Conversion',
                'view_item'         => 'View Uom Conversion',
                'search_items'      => 'Search Uom Conversion',
                'not_found'         => 'No Uom Conversion Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Uom Conversion',
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
        if ( $post->post_type == 'sb_uomconversion') 
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

    public static function sb_uomconversion_table_head($defaults){
        $defaults['entity_code']  = 'Code';
        $defaults['from_uom']  = 'From Uom';
        $defaults['to_uom']  = 'To Uom';
        $defaults['name']  = 'Name';
        $defaults['conversion_factor']  = 'Conversion Factor';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_uomconversion_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'from_uom') {
            $field_value = get_post_meta($post_id, 'from_uom', true );
            echo $field_value;
        }
        if ($column_name == 'to_uom') {
            $field_value = get_post_meta($post_id, 'to_uom', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'conversion_factor') {
            $field_value = get_post_meta($post_id, 'conversion_factor', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>