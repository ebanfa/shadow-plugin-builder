<?php 

class BusinessCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_business'; 
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
        array('name' => 'currency',
            'title' => 'Currency',
            'description' => 'The Currency field',
            'type' => 'text',
        ),
        array('name' => 'user_name',
            'title' => 'User Name',
            'description' => 'The User Name field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'pin',
            'title' => 'Pin',
            'description' => 'The Pin field',
            'type' => 'text',
        ),
        array('name' => 'tel_no',
            'title' => 'Telephone',
            'description' => 'The Telephone field',
            'type' => 'text',
        ),
        array('name' => 'account_notify_email',
            'title' => 'New Accounts Email',
            'description' => 'The New Accounts Email field',
            'type' => 'text',
        ),
        array('name' => 'orders_notify_email',
            'title' => 'New Orders Email',
            'description' => 'The New Orders Email field',
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
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'currency' => array('name' => 'currency',
            'description' => 'Currency',
            'nick_name' => 'currency',
            'size' => 'large',
            'entity_name' => 'Currency',
            'entity_description' => 'Currency',
            'data_type' => 'sb_currency',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'user_name' => array('name' => 'user_name',
            'description' => 'User Name',
            'nick_name' => 'user_name',
            'size' => 'medium',
            'data_type' => 'text',
            'is_required' => true,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
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
        'pin' => array('name' => 'pin',
            'description' => 'Pin',
            'nick_name' => 'pin',
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
        'tel_no' => array('name' => 'tel_no',
            'description' => 'Telephone',
            'nick_name' => 'tel_no',
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
        'account_notify_email' => array('name' => 'account_notify_email',
            'description' => 'New Accounts Email',
            'nick_name' => 'account_notify_email',
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
        'orders_notify_email' => array('name' => 'orders_notify_email',
            'description' => 'New Orders Email',
            'nick_name' => 'orders_notify_email',
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
       register_post_type('sb_business', 
            array(
                'label' => 'Business',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Business',
                'edit_item'         => 'Edit Business',
                'new_item'          => 'New Business',
                'view_item'         => 'View Business',
                'search_items'      => 'Search Business',
                'not_found'         => 'No Business Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Business',
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
        if ( $post->post_type == 'sb_business') 
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

    public static function sb_business_table_head($defaults){
        $defaults['entity_code']  = 'Code';
        $defaults['currency']  = 'Currency';
        $defaults['name']  = 'Name';
        $defaults['pin']  = 'Pin';
        $defaults['tel_no']  = 'Telephone';
        $defaults['account_notify_email']  = 'New Accounts Email';
        $defaults['orders_notify_email']  = 'New Orders Email';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_business_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'currency') {
            $field_value = get_post_meta($post_id, 'currency', true );
            echo $field_value;
        }
        if ($column_name == 'user_name') {
            $field_value = get_post_meta($post_id, 'user_name', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'pin') {
            $field_value = get_post_meta($post_id, 'pin', true );
            echo $field_value;
        }
        if ($column_name == 'tel_no') {
            $field_value = get_post_meta($post_id, 'tel_no', true );
            echo $field_value;
        }
        if ($column_name == 'account_notify_email') {
            $field_value = get_post_meta($post_id, 'account_notify_email', true );
            echo $field_value;
        }
        if ($column_name == 'orders_notify_email') {
            $field_value = get_post_meta($post_id, 'orders_notify_email', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>