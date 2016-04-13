<?php 

class EmploymentApplicationCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_empapplication'; 
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
        array('name' => 'position',
            'title' => 'Position',
            'description' => 'The Position field',
            'type' => 'text',
        ),
        array('name' => 'status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'source',
            'title' => 'Application',
            'description' => 'The Application field',
            'type' => 'text',
        ),
        array('name' => 'referred_by',
            'title' => 'Person',
            'description' => 'The Person field',
            'type' => 'text',
        ),
        array('name' => 'applicant',
            'title' => 'Applicant',
            'description' => 'The Applicant field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'application_date',
            'title' => 'Application Date',
            'description' => 'The Application Date field',
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
        'position' => array('name' => 'position',
            'description' => 'Position',
            'size' => 'large',
            'entity_name' => 'Position',
            'entity_description' => 'Position',
            'data_type' => 'sb_position',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'status' => array('name' => 'status',
            'description' => 'Status',
            'size' => 'large',
            'entity_name' => 'EmploymentApplicationStatus',
            'entity_description' => 'Employment Application Status',
            'data_type' => 'sb_empappstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'source' => array('name' => 'source',
            'description' => 'Application',
            'size' => 'large',
            'entity_name' => 'EmploymentApplicationSourceType',
            'entity_description' => 'Employment Application Source Type',
            'data_type' => 'sb_empappsrctype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'referred_by' => array('name' => 'referred_by',
            'description' => 'Person',
            'size' => 'large',
            'entity_name' => 'Person',
            'entity_description' => 'Person',
            'data_type' => 'sb_person',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'applicant' => array('name' => 'applicant',
            'description' => 'Applicant',
            'size' => 'large',
            'entity_name' => 'Person',
            'entity_description' => 'Person',
            'data_type' => 'sb_person',
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
        'application_date' => array('name' => 'application_date',
            'description' => 'Application Date',
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
            'is_view_field' => true,
            'is_list_field' => true,
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
       register_post_type('sb_empapplication', 
            array(
                'label' => 'Employment Application Source Type',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Employment Application Source Type',
                'edit_item'         => 'Edit Employment Application Source Type',
                'new_item'          => 'New Employment Application Source Type',
                'view_item'         => 'View Employment Application Source Type',
                'search_items'      => 'Search Employment Application Source Type',
                'not_found'         => 'No Employment Application Source Type Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Employment Application Source Type',
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
        if ( $post->post_type == 'sb_empapplication') 
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

    public static function sb_empapplication_table_head($defaults){
        $defaults['position']  = 'Position';
        $defaults['status']  = 'Status';
        $defaults['source']  = 'Application';
        $defaults['referred_by']  = 'Person';
        $defaults['applicant']  = 'Applicant';
        $defaults['name']  = 'name';
        $defaults['application_date']  = 'Application Date';
        $defaults['description']  = 'Description';
        $defaults['business_unit']  = 'Business Unit';
        return $defaults;
    }

    public static function sb_empapplication_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'position') {
            $field_value = get_post_meta($post_id, 'position', true );
            echo $field_value;
        }
        if ($column_name == 'status') {
            $field_value = get_post_meta($post_id, 'status', true );
            echo $field_value;
        }
        if ($column_name == 'source') {
            $field_value = get_post_meta($post_id, 'source', true );
            echo $field_value;
        }
        if ($column_name == 'referred_by') {
            $field_value = get_post_meta($post_id, 'referred_by', true );
            echo $field_value;
        }
        if ($column_name == 'applicant') {
            $field_value = get_post_meta($post_id, 'applicant', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'application_date') {
            $field_value = get_post_meta($post_id, 'application_date', true );
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