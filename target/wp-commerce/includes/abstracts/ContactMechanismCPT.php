<?php 

class ContactMechanismCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_contactmech'; 
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
        array('name' => 'cm_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Line 1',
            'description' => 'The Line 1 field',
            'type' => 'text',
        ),
        array('name' => 'address_1',
            'title' => 'Line 2',
            'description' => 'The Line 2 field',
            'type' => 'text',
        ),
        array('name' => 'address_2',
            'title' => 'Line 2',
            'description' => 'The Line 2 field',
            'type' => 'text',
        ),
        array('name' => 'area_code',
            'title' => 'Area Code',
            'description' => 'The Area Code field',
            'type' => 'text',
        ),
        array('name' => 'contact_number',
            'title' => 'Contact Number',
            'description' => 'The Contact Number field',
            'type' => 'text',
        ),
        array('name' => 'country_code',
            'title' => 'Country Code',
            'description' => 'The Country Code field',
            'type' => 'text',
        ),
        array('name' => 'address_string',
            'title' => 'Address',
            'description' => 'The Address field',
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
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'cm_type' => array('name' => 'cm_type',
            'description' => 'Type',
            'nick_name' => 'cm_type',
            'size' => 'large',
            'entity_name' => 'ContactMechanismType',
            'entity_description' => 'Contact Mechanism Type',
            'data_type' => 'sb_cmechtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'name' => array('name' => 'name',
            'description' => 'Line 1',
            'nick_name' => 'name',
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
        'address_1' => array('name' => 'address_1',
            'description' => 'Line 2',
            'nick_name' => 'address_1',
            'size' => 'large',
            'data_type' => 'text',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'address_2' => array('name' => 'address_2',
            'description' => 'Line 2',
            'nick_name' => 'address_2',
            'size' => 'large',
            'data_type' => 'text',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'area_code' => array('name' => 'area_code',
            'description' => 'Area Code',
            'nick_name' => 'area_code',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'contact_number' => array('name' => 'contact_number',
            'description' => 'Contact Number',
            'nick_name' => 'contact_number',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'country_code' => array('name' => 'country_code',
            'description' => 'Country Code',
            'nick_name' => 'country_code',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'address_string' => array('name' => 'address_string',
            'description' => 'Address',
            'nick_name' => 'address_string',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => false,
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
        'contact_mech' => array('name' => 'contact_mech',
            'entity_name' => 'PartyContactMechanism',
            'data_type' => 'sb_partycmech',
            'artifact_name' => 'partycontactmechanism',
            'entity_description' => 'Party Contact Mechanism',
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
                'party' => array('name' => 'party',
                    'description' => 'Party',
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
                'contact_mech' => array('name' => 'contact_mech',
                    'description' => 'Contact Mechanism',
                    'size' => 'large',
                    'entity_name' => 'ContactMechanism',
                    'entity_description' => 'Contact Mechanism',
                    'data_type' => 'sb_contactmech',
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
       register_post_type('sb_contactmech', 
            array(
                'label' => 'Contact Mechanism',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Contact Mechanism',
                'edit_item'         => 'Edit Contact Mechanism',
                'new_item'          => 'New Contact Mechanism',
                'view_item'         => 'View Contact Mechanism',
                'search_items'      => 'Search Contact Mechanism',
                'not_found'         => 'No Contact Mechanism Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Contact Mechanism',
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
        if ( $post->post_type == 'sb_contactmech') 
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

    public static function sb_contactmech_table_head($defaults){
        $defaults['name']  = 'Line 2';
        $defaults['address_1']  = 'Line 2';
        $defaults['address_2']  = 'Line 2';
        $defaults['area_code']  = 'Area Code';
        $defaults['contact_number']  = 'Contact Number';
        $defaults['country_code']  = 'Country Code';
        $defaults['address_string']  = 'Address';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_contactmech_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'cm_type') {
            $field_value = get_post_meta($post_id, 'cm_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'address_1') {
            $field_value = get_post_meta($post_id, 'address_1', true );
            echo $field_value;
        }
        if ($column_name == 'address_2') {
            $field_value = get_post_meta($post_id, 'address_2', true );
            echo $field_value;
        }
        if ($column_name == 'area_code') {
            $field_value = get_post_meta($post_id, 'area_code', true );
            echo $field_value;
        }
        if ($column_name == 'contact_number') {
            $field_value = get_post_meta($post_id, 'contact_number', true );
            echo $field_value;
        }
        if ($column_name == 'country_code') {
            $field_value = get_post_meta($post_id, 'country_code', true );
            echo $field_value;
        }
        if ($column_name == 'address_string') {
            $field_value = get_post_meta($post_id, 'address_string', true );
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