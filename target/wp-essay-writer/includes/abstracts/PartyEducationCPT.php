<?php 

class PartyEducationCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_partyeducation'; 
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
        array('name' => 'education_party',
            'title' => 'Party',
            'description' => 'The Party field',
            'type' => 'text',
        ),
        array('name' => 'qualification_type',
            'title' => 'Qualification Type',
            'description' => 'The Qualification Type field',
            'type' => 'text',
        ),
        array('name' => 'qualification_sub',
            'title' => 'Subject',
            'description' => 'The Subject field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'qualification_date',
            'title' => 'Qualification Date',
            'description' => 'The Qualification Date field',
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
        'education_party' => array('name' => 'education_party',
            'description' => 'Party',
            'nick_name' => 'education_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'qualification_type' => array('name' => 'qualification_type',
            'description' => 'Qualification Type',
            'nick_name' => 'qualification_type',
            'size' => 'large',
            'entity_name' => 'QualificationType',
            'entity_description' => 'Qualification Type',
            'data_type' => 'sb_qualtype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'qualification_sub' => array('name' => 'qualification_sub',
            'description' => 'Subject',
            'nick_name' => 'qualification_sub',
            'size' => 'large',
            'entity_name' => 'Subject',
            'entity_description' => 'Subject',
            'data_type' => 'sb_subject',
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
        'qualification_date' => array('name' => 'qualification_date',
            'description' => 'Qualification Date',
            'nick_name' => 'qualification_date',
            'size' => 'large',
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
       register_post_type('sb_partyeducation', 
            array(
                'label' => 'Party Education',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Party Education',
                'edit_item'         => 'Edit Party Education',
                'new_item'          => 'New Party Education',
                'view_item'         => 'View Party Education',
                'search_items'      => 'Search Party Education',
                'not_found'         => 'No Party Education Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Party Education',
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
        if ( $post->post_type == 'sb_partyeducation') 
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

    public static function sb_partyeducation_table_head($defaults){
        $defaults['qualification_type']  = 'Qualification Type';
        $defaults['qualification_sub']  = 'Subject';
        $defaults['name']  = 'Name';
        $defaults['qualification_date']  = 'Qualification Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_partyeducation_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'education_party') {
            $field_value = get_post_meta($post_id, 'education_party', true );
            echo $field_value;
        }
        if ($column_name == 'qualification_type') {
            $field_value = get_post_meta($post_id, 'qualification_type', true );
            echo $field_value;
        }
        if ($column_name == 'qualification_sub') {
            $field_value = get_post_meta($post_id, 'qualification_sub', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'qualification_date') {
            $field_value = get_post_meta($post_id, 'qualification_date', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>