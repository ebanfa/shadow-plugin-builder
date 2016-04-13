<?php 

class SalesDataItemCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_salesdataitem'; 
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
        array('name' => 'sdi_salesdata',
            'title' => 'Sales Data',
            'description' => 'The Sales Data field',
            'type' => 'text',
        ),
        array('name' => 'sdi_type',
            'title' => 'Item Type',
            'description' => 'The Item Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'construction_date',
            'title' => 'Construction Date',
            'description' => 'The Construction Date field',
            'type' => 'text',
        ),
        array('name' => 'proximity',
            'title' => 'Proximity',
            'description' => 'The Proximity field',
            'type' => 'text',
        ),
        array('name' => 'address_1',
            'title' => 'Address',
            'description' => 'The Address field',
            'type' => 'text',
        ),
        array('name' => 'sdi_location',
            'title' => 'Location',
            'description' => 'The Location field',
            'type' => 'text',
        ),
        array('name' => 'sales_date',
            'title' => 'Sales Date',
            'description' => 'The Sales Date field',
            'type' => 'text',
        ),
        array('name' => 'sales_price',
            'title' => 'Sales Price',
            'description' => 'The Sales Price field',
            'type' => 'text',
        ),
        array('name' => 'size',
            'title' => 'Size',
            'description' => 'The Size field',
            'type' => 'text',
        ),
        array('name' => 'sdi_shape',
            'title' => 'Shape',
            'description' => 'The Shape field',
            'type' => 'text',
        ),
        array('name' => 'financing_type',
            'title' => 'Financing Type',
            'description' => 'The Financing Type field',
            'type' => 'text',
        ),
        array('name' => 'land_tenure',
            'title' => 'Land Tenure',
            'description' => 'The Land Tenure field',
            'type' => 'text',
        ),
        array('name' => 'p_adjustment',
            'title' => 'Physical Adjustments',
            'description' => 'The Physical Adjustments field',
            'type' => 'text',
        ),
        array('name' => 't_adjustment',
            'title' => 'Time Adjustments',
            'description' => 'The Time Adjustments field',
            'type' => 'text',
        ),
        array('name' => 'l_adjustment',
            'title' => 'Location Adjustments',
            'description' => 'The Location Adjustments field',
            'type' => 'text',
        ),
        array('name' => 'zone_code',
            'title' => 'Zoning Code',
            'description' => 'The Zoning Code field',
            'type' => 'text',
        ),
        array('name' => 'zone_description',
            'title' => 'Zone Description',
            'description' => 'The Zone Description field',
            'type' => 'text',
        ),
        array('name' => 'zone_compliant_fg',
            'title' => 'Is Compliant',
            'description' => 'The Is Compliant field',
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
        'sdi_salesdata' => array('name' => 'sdi_salesdata',
            'description' => 'Sales Data',
            'size' => 'large',
            'entity_name' => 'SalesData',
            'entity_description' => 'Sales Data',
            'data_type' => 'sb_salesdata',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'sdi_type' => array('name' => 'sdi_type',
            'description' => 'Item Type',
            'size' => 'large',
            'entity_name' => 'SalesDataItemType',
            'entity_description' => 'Sales Data Item Type',
            'data_type' => 'sb_sditemtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
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
        'construction_date' => array('name' => 'construction_date',
            'description' => 'Construction Date',
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
        'proximity' => array('name' => 'proximity',
            'description' => 'Proximity',
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
        'address_1' => array('name' => 'address_1',
            'description' => 'Address',
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
        'sdi_location' => array('name' => 'sdi_location',
            'description' => 'Location',
            'size' => 'large',
            'entity_name' => 'Location',
            'entity_description' => 'Location',
            'data_type' => 'sb_location',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'sales_date' => array('name' => 'sales_date',
            'description' => 'Sales Date',
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
        'sales_price' => array('name' => 'sales_price',
            'description' => 'Sales Price',
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
        'size' => array('name' => 'size',
            'description' => 'Size',
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
        'sdi_shape' => array('name' => 'sdi_shape',
            'description' => 'Shape',
            'size' => 'large',
            'entity_name' => 'LandShape',
            'entity_description' => 'Land Shape',
            'data_type' => 'sb_lshape',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
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
        'land_tenure' => array('name' => 'land_tenure',
            'description' => 'Land Tenure',
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
        'p_adjustment' => array('name' => 'p_adjustment',
            'description' => 'Physical Adjustments',
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
        't_adjustment' => array('name' => 't_adjustment',
            'description' => 'Time Adjustments',
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
        'l_adjustment' => array('name' => 'l_adjustment',
            'description' => 'Location Adjustments',
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
        'zone_code' => array('name' => 'zone_code',
            'description' => 'Zoning Code',
            'size' => 'large',
            'data_type' => 'alphanumeric',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'zone_description' => array('name' => 'zone_description',
            'description' => 'Zone Description',
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
        'zone_compliant_fg' => array('name' => 'zone_compliant_fg',
            'description' => 'Is Compliant',
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
       register_post_type('sb_salesdataitem', 
            array(
                'label' => 'Sales Data Item',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Sales Data Item',
                'edit_item'         => 'Edit Sales Data Item',
                'new_item'          => 'New Sales Data Item',
                'view_item'         => 'View Sales Data Item',
                'search_items'      => 'Search Sales Data Item',
                'not_found'         => 'No Sales Data Item Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Sales Data Item',
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
        if ( $post->post_type == 'sb_salesdataitem') 
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

    public static function sb_salesdataitem_table_head($defaults){
        $defaults['name']  = 'Name';
        $defaults['construction_date']  = 'Construction Date';
        $defaults['proximity']  = 'Proximity';
        $defaults['address_1']  = 'Address';
        $defaults['sales_date']  = 'Sales Date';
        $defaults['sales_price']  = 'Sales Price';
        $defaults['size']  = 'Size';
        $defaults['financing_type']  = 'Financing Type';
        $defaults['land_tenure']  = 'Land Tenure';
        $defaults['p_adjustment']  = 'Physical Adjustments';
        $defaults['t_adjustment']  = 'Time Adjustments';
        $defaults['l_adjustment']  = 'Location Adjustments';
        $defaults['zone_code']  = 'Zoning Code';
        $defaults['zone_description']  = 'Zone Description';
        $defaults['zone_compliant_fg']  = 'Is Compliant';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_salesdataitem_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'sdi_salesdata') {
            $field_value = get_post_meta($post_id, 'sdi_salesdata', true );
            echo $field_value;
        }
        if ($column_name == 'sdi_type') {
            $field_value = get_post_meta($post_id, 'sdi_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'construction_date') {
            $field_value = get_post_meta($post_id, 'construction_date', true );
            echo $field_value;
        }
        if ($column_name == 'proximity') {
            $field_value = get_post_meta($post_id, 'proximity', true );
            echo $field_value;
        }
        if ($column_name == 'address_1') {
            $field_value = get_post_meta($post_id, 'address_1', true );
            echo $field_value;
        }
        if ($column_name == 'sdi_location') {
            $field_value = get_post_meta($post_id, 'sdi_location', true );
            echo $field_value;
        }
        if ($column_name == 'sales_date') {
            $field_value = get_post_meta($post_id, 'sales_date', true );
            echo $field_value;
        }
        if ($column_name == 'sales_price') {
            $field_value = get_post_meta($post_id, 'sales_price', true );
            echo $field_value;
        }
        if ($column_name == 'size') {
            $field_value = get_post_meta($post_id, 'size', true );
            echo $field_value;
        }
        if ($column_name == 'sdi_shape') {
            $field_value = get_post_meta($post_id, 'sdi_shape', true );
            echo $field_value;
        }
        if ($column_name == 'financing_type') {
            $field_value = get_post_meta($post_id, 'financing_type', true );
            echo $field_value;
        }
        if ($column_name == 'land_tenure') {
            $field_value = get_post_meta($post_id, 'land_tenure', true );
            echo $field_value;
        }
        if ($column_name == 'p_adjustment') {
            $field_value = get_post_meta($post_id, 'p_adjustment', true );
            echo $field_value;
        }
        if ($column_name == 't_adjustment') {
            $field_value = get_post_meta($post_id, 't_adjustment', true );
            echo $field_value;
        }
        if ($column_name == 'l_adjustment') {
            $field_value = get_post_meta($post_id, 'l_adjustment', true );
            echo $field_value;
        }
        if ($column_name == 'zone_code') {
            $field_value = get_post_meta($post_id, 'zone_code', true );
            echo $field_value;
        }
        if ($column_name == 'zone_description') {
            $field_value = get_post_meta($post_id, 'zone_description', true );
            echo $field_value;
        }
        if ($column_name == 'zone_compliant_fg') {
            $field_value = get_post_meta($post_id, 'zone_compliant_fg', true );
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