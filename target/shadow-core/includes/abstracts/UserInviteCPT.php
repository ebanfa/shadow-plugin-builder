<?php 

class UserInviteCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_userinvite'; 
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
        array('name' => 'party',
            'title' => 'Party',
            'description' => 'The Party field',
            'type' => 'text',
        ),
        array('name' => 'status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'first_name',
            'title' => 'First Name',
            'description' => 'The First Name field',
            'type' => 'text',
        ),
        array('name' => 'last_name',
            'title' => 'Last Name',
            'description' => 'The Last Name field',
            'type' => 'text',
        ),
        array('name' => 'user_email',
            'title' => 'User Email',
            'description' => 'The User Email field',
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
        'party' => array('name' => 'party',
            'description' => 'Party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'status' => array('name' => 'status',
            'description' => 'Status',
            'size' => 'large',
            'entity_name' => 'UserInviteStatus',
            'entity_description' => 'User Invite Status',
            'data_type' => 'sb_invitestatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'first_name' => array('name' => 'first_name',
            'description' => 'First Name',
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
        'last_name' => array('name' => 'last_name',
            'description' => 'Last Name',
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
        'user_email' => array('name' => 'user_email',
            'description' => 'User Email',
            'size' => 'medium',
            'data_type' => 'email',
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
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
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
       register_post_type('sb_userinvite', 
            array(
                'label' => 'User Invite',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New User Invite',
                'edit_item'         => 'Edit User Invite',
                'new_item'          => 'New User Invite',
                'view_item'         => 'View User Invite',
                'search_items'      => 'Search User Invite',
                'not_found'         => 'No User Invite Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable User Invite',
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
        if ( $post->post_type == 'sb_userinvite') 
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

    public static function sb_userinvite_table_head($defaults){
        $defaults['status']  = 'Status';
        $defaults['first_name']  = 'First Name';
        $defaults['last_name']  = 'Last Name';
        $defaults['user_email']  = 'User Email';
        return $defaults;
    }

    public static function sb_userinvite_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'party') {
            $field_value = get_post_meta($post_id, 'party', true );
            echo $field_value;
        }
        if ($column_name == 'status') {
            $field_value = get_post_meta($post_id, 'status', true );
            echo $field_value;
        }
        if ($column_name == 'first_name') {
            $field_value = get_post_meta($post_id, 'first_name', true );
            echo $field_value;
        }
        if ($column_name == 'last_name') {
            $field_value = get_post_meta($post_id, 'last_name', true );
            echo $field_value;
        }
        if ($column_name == 'user_email') {
            $field_value = get_post_meta($post_id, 'user_email', true );
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