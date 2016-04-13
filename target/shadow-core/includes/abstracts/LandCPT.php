<?php 

class LandCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_land'; 
    public static $is_global_entity = false; 


    public static $is_virtual_entity = false; 
    


    /**
     * These are the wordpress custom post type 
     * specific fields
     */
    public static $custom_fields =  array(
        array('name' => 'entity_code',
            'title' => 'Title Code',
            'description' => 'The Title Code field',
            'type' => 'text',
        ),
        array('name' => 'li_type',
            'title' => 'Land Type',
            'description' => 'The Land Type field',
            'type' => 'text',
        ),
        array('name' => 'li_soiltype',
            'title' => 'Soil Type',
            'description' => 'The Soil Type field',
            'type' => 'text',
        ),
        array('name' => 'li_property',
            'title' => 'Property',
            'description' => 'The Property field',
            'type' => 'text',
        ),
        array('name' => 'li_accessibility',
            'title' => 'Accessibility',
            'description' => 'The Accessibility field',
            'type' => 'text',
        ),
        array('name' => 'li_topography',
            'title' => 'Topography',
            'description' => 'The Topography field',
            'type' => 'text',
        ),
        array('name' => 'li_owner',
            'title' => 'Owner',
            'description' => 'The Owner field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'land_size',
            'title' => 'Land Size',
            'description' => 'The Land Size field',
            'type' => 'text',
        ),
        array('name' => 'land_shape',
            'title' => 'Land Shape',
            'description' => 'The Land Shape field',
            'type' => 'text',
        ),
        array('name' => 'uom',
            'title' => 'Unit Of Measure',
            'description' => 'The Unit Of Measure field',
            'type' => 'text',
        ),
        array('name' => 'purchase_price',
            'title' => 'Purchase Price',
            'description' => 'The Purchase Price field',
            'type' => 'text',
        ),
        array('name' => 'purchase_date',
            'title' => 'Purchase Date',
            'description' => 'The Purchase Date field',
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
            'description' => 'Title Code',
            'size' => 'medium',
            'data_type' => 'alphanumeric',
            'is_required' => false,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'li_type' => array('name' => 'li_type',
            'description' => 'Land Type',
            'size' => 'large',
            'entity_name' => 'LandType',
            'entity_description' => 'Land Type',
            'data_type' => 'sb_landtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'li_soiltype' => array('name' => 'li_soiltype',
            'description' => 'Soil Type',
            'size' => 'large',
            'entity_name' => 'Property',
            'entity_description' => 'Property',
            'data_type' => 'sb_property',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'li_property' => array('name' => 'li_property',
            'description' => 'Property',
            'size' => 'large',
            'entity_name' => 'Property',
            'entity_description' => 'Property',
            'data_type' => 'sb_property',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'li_accessibility' => array('name' => 'li_accessibility',
            'description' => 'Accessibility',
            'size' => 'large',
            'entity_name' => 'LandAccessibility',
            'entity_description' => 'Land Accessibility',
            'data_type' => 'sb_laccessibility',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'li_topography' => array('name' => 'li_topography',
            'description' => 'Topography',
            'size' => 'large',
            'entity_name' => 'LandTopography',
            'entity_description' => 'Land Topography',
            'data_type' => 'sb_ltopography',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'li_owner' => array('name' => 'li_owner',
            'description' => 'Owner',
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
        'land_size' => array('name' => 'land_size',
            'description' => 'Land Size',
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
        'land_shape' => array('name' => 'land_shape',
            'description' => 'Land Shape',
            'size' => 'medium',
            'entity_name' => 'LandShape',
            'entity_description' => 'Land Shape',
            'data_type' => 'sb_lshape',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'uom' => array('name' => 'uom',
            'description' => 'Unit Of Measure',
            'size' => 'medium',
            'entity_name' => 'UnitOfMeasure',
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
        'purchase_price' => array('name' => 'purchase_price',
            'description' => 'Purchase Price',
            'size' => 'medium',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'purchase_date' => array('name' => 'purchase_date',
            'description' => 'Purchase Date',
            'size' => 'medium',
            'data_type' => 'date',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
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
        'p_land' => array('name' => 'p_land',
            'entity_name' => 'Plot',
            'data_type' => 'sb_plot',
            'artifact_name' => 'plot',
            'entity_description' => 'Plot',
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
                'p_land' => array('name' => 'p_land',
                    'description' => 'Land',
                    'size' => 'large',
                    'entity_name' => 'Land',
                    'entity_description' => 'Land',
                    'data_type' => 'sb_land',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => false,
                    'is_edit_field' => false,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => false,
                    'is_relationship_field' => true,),
                'p_type' => array('name' => 'p_type',
                    'description' => 'Plot Type',
                    'size' => 'large',
                    'entity_name' => 'PlotType',
                    'entity_description' => 'Plot Type',
                    'data_type' => 'sb_plottype',
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
        'a_land' => array('name' => 'a_land',
            'entity_name' => 'Assessment',
            'data_type' => 'sb_assessment',
            'artifact_name' => 'assessment',
            'entity_description' => 'Assessment',
            'is_relationship_field' => true,
            'fields' => array(
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
                'a_party' => array('name' => 'a_party',
                    'description' => 'Assessor',
                    'size' => 'large',
                    'entity_name' => 'Party',
                    'entity_description' => 'Party',
                    'data_type' => 'sb_party',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'a_property' => array('name' => 'a_property',
                    'description' => 'Property',
                    'size' => 'large',
                    'entity_name' => 'Property',
                    'entity_description' => 'Property',
                    'data_type' => 'sb_property',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => false,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'a_building' => array('name' => 'a_building',
                    'description' => 'Building',
                    'size' => 'large',
                    'entity_name' => 'Building',
                    'entity_description' => 'Building',
                    'data_type' => 'sb_building',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'a_land' => array('name' => 'a_land',
                    'description' => 'Land',
                    'size' => 'large',
                    'entity_name' => 'Land',
                    'entity_description' => 'Land',
                    'data_type' => 'sb_land',
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
                'assmt_created' => array('name' => 'assmt_created',
                    'description' => 'Assessment Date',
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
            ),
        ),
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_land', 
            array(
                'label' => 'Land',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Land',
                'edit_item'         => 'Edit Land',
                'new_item'          => 'New Land',
                'view_item'         => 'View Land',
                'search_items'      => 'Search Land',
                'not_found'         => 'No Land Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Land',
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
        if ( $post->post_type == 'sb_land') 
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

    public static function sb_land_table_head($defaults){
        $defaults['entity_code']  = 'Title Code';
        $defaults['li_type']  = 'Land Type';
        $defaults['li_accessibility']  = 'Accessibility';
        $defaults['li_topography']  = 'Topography';
        $defaults['li_owner']  = 'Owner';
        $defaults['name']  = 'Name';
        $defaults['land_size']  = 'Land Size';
        $defaults['land_shape']  = 'Land Shape';
        $defaults['uom']  = 'Unit Of Measure';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_land_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'li_type') {
            $field_value = get_post_meta($post_id, 'li_type', true );
            echo $field_value;
        }
        if ($column_name == 'li_soiltype') {
            $field_value = get_post_meta($post_id, 'li_soiltype', true );
            echo $field_value;
        }
        if ($column_name == 'li_property') {
            $field_value = get_post_meta($post_id, 'li_property', true );
            echo $field_value;
        }
        if ($column_name == 'li_accessibility') {
            $field_value = get_post_meta($post_id, 'li_accessibility', true );
            echo $field_value;
        }
        if ($column_name == 'li_topography') {
            $field_value = get_post_meta($post_id, 'li_topography', true );
            echo $field_value;
        }
        if ($column_name == 'li_owner') {
            $field_value = get_post_meta($post_id, 'li_owner', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'land_size') {
            $field_value = get_post_meta($post_id, 'land_size', true );
            echo $field_value;
        }
        if ($column_name == 'land_shape') {
            $field_value = get_post_meta($post_id, 'land_shape', true );
            echo $field_value;
        }
        if ($column_name == 'uom') {
            $field_value = get_post_meta($post_id, 'uom', true );
            echo $field_value;
        }
        if ($column_name == 'purchase_price') {
            $field_value = get_post_meta($post_id, 'purchase_price', true );
            echo $field_value;
        }
        if ($column_name == 'purchase_date') {
            $field_value = get_post_meta($post_id, 'purchase_date', true );
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