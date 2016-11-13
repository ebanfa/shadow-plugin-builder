<?php 

class DisputeCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_dispute'; 
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
        array('name' => 'dispute_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'dispute_status',
            'title' => 'Status',
            'description' => 'The Status field',
            'type' => 'text',
        ),
        array('name' => 'dispute_order',
            'title' => 'Order',
            'description' => 'The Order field',
            'type' => 'text',
        ),
        array('name' => 'dispute_owner',
            'title' => 'Owner',
            'description' => 'The Owner field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'created_date',
            'title' => 'Created Date',
            'description' => 'The Created Date field',
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
            'is_required' => false,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'dispute_type' => array('name' => 'dispute_type',
            'description' => 'Type',
            'nick_name' => 'dispute_type',
            'size' => 'large',
            'data_type' => 'sb_disputetype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'dispute_status' => array('name' => 'dispute_status',
            'description' => 'Status',
            'nick_name' => 'dispute_status',
            'size' => 'large',
            'entity_name' => 'DisputeStatus',
            'entity_description' => 'Dispute Status',
            'data_type' => 'sb_disputestatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'dispute_order' => array('name' => 'dispute_order',
            'description' => 'Order',
            'nick_name' => 'dispute_order',
            'size' => 'large',
            'entity_name' => 'ContentOrder',
            'entity_description' => 'Content Order',
            'data_type' => 'sb_contentorder',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'dispute_owner' => array('name' => 'dispute_owner',
            'description' => 'Owner',
            'nick_name' => 'dispute_owner',
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
        'created_date' => array('name' => 'created_date',
            'description' => 'Created Date',
            'nick_name' => 'created_date',
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
       register_post_type('sb_dispute', 
            array(
                'label' => 'Dispute',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Dispute',
                'edit_item'         => 'Edit Dispute',
                'new_item'          => 'New Dispute',
                'view_item'         => 'View Dispute',
                'search_items'      => 'Search Dispute',
                'not_found'         => 'No Dispute Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Dispute',
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
        if ( $post->post_type == 'sb_dispute') 
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

    public static function sb_dispute_table_head($defaults){
        $defaults['dispute_type']  = 'Type';
        $defaults['dispute_status']  = 'Status';
        $defaults['dispute_order']  = 'Order';
        $defaults['dispute_owner']  = 'Owner';
        $defaults['name']  = 'Name';
        $defaults['created_date']  = 'Created Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_dispute_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'dispute_type') {
            $field_value = get_post_meta($post_id, 'dispute_type', true );
            echo $field_value;
        }
        if ($column_name == 'dispute_status') {
            $field_value = get_post_meta($post_id, 'dispute_status', true );
            echo $field_value;
        }
        if ($column_name == 'dispute_order') {
            $field_value = get_post_meta($post_id, 'dispute_order', true );
            echo $field_value;
        }
        if ($column_name == 'dispute_owner') {
            $field_value = get_post_meta($post_id, 'dispute_owner', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'created_date') {
            $field_value = get_post_meta($post_id, 'created_date', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>