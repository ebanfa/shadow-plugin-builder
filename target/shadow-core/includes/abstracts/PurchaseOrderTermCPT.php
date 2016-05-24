<?php 

class PurchaseOrderTermCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_porderterm'; 
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
        array('name' => 'pot_porder',
            'title' => 'Purchase Order',
            'description' => 'The Purchase Order field',
            'type' => 'text',
        ),
        array('name' => 'po_term',
            'title' => 'Term',
            'description' => 'The Term field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'value',
            'title' => 'Value',
            'description' => 'The Value field',
            'type' => 'text',
        ),
        array('name' => 'from_start',
            'title' => 'From Date',
            'description' => 'The From Date field',
            'type' => 'text',
        ),
        array('name' => 'thru_end',
            'title' => 'To Date',
            'description' => 'The To Date field',
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
        'pot_porder' => array('name' => 'pot_porder',
            'description' => 'Purchase Order',
            'size' => 'large',
            'entity_name' => 'PurchaseOrder',
            'entity_description' => 'Purchase Order',
            'data_type' => 'sb_porder',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'po_term' => array('name' => 'po_term',
            'description' => 'Term',
            'size' => 'large',
            'entity_name' => 'Term',
            'entity_description' => 'Term',
            'data_type' => 'sb_term',
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
        'value' => array('name' => 'value',
            'description' => 'Value',
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
        'from_start' => array('name' => 'from_start',
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
        'thru_end' => array('name' => 'thru_end',
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
       register_post_type('sb_porderterm', 
            array(
                'label' => 'Purchase Order Term',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Purchase Order Term',
                'edit_item'         => 'Edit Purchase Order Term',
                'new_item'          => 'New Purchase Order Term',
                'view_item'         => 'View Purchase Order Term',
                'search_items'      => 'Search Purchase Order Term',
                'not_found'         => 'No Purchase Order Term Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Purchase Order Term',
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
        if ( $post->post_type == 'sb_porderterm') 
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

    public static function sb_porderterm_table_head($defaults){
        $defaults['pot_porder']  = 'Purchase Order';
        $defaults['po_term']  = 'Term';
        $defaults['name']  = 'name';
        $defaults['value']  = 'Value';
        $defaults['from_start']  = 'From Date';
        $defaults['thru_end']  = 'To Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_porderterm_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'pot_porder') {
            $field_value = get_post_meta($post_id, 'pot_porder', true );
            echo $field_value;
        }
        if ($column_name == 'po_term') {
            $field_value = get_post_meta($post_id, 'po_term', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'value') {
            $field_value = get_post_meta($post_id, 'value', true );
            echo $field_value;
        }
        if ($column_name == 'from_start') {
            $field_value = get_post_meta($post_id, 'from_start', true );
            echo $field_value;
        }
        if ($column_name == 'thru_end') {
            $field_value = get_post_meta($post_id, 'thru_end', true );
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