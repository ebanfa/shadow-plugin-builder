<?php 

class FinancialEventCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_fevent'; 
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
        array('name' => 'event_type',
            'title' => 'Financial Event Type',
            'description' => 'The Financial Event Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'amount',
            'title' => 'Amount',
            'description' => 'The Amount field',
            'type' => 'text',
        ),
        array('name' => 'event_date',
            'title' => 'Event Date',
            'description' => 'The Event Date field',
            'type' => 'text',
        ),
        array('name' => 'internal_org',
            'title' => 'Internal Organization',
            'description' => 'The Internal Organization field',
            'type' => 'text',
        ),
        array('name' => 'from_party',
            'title' => 'From Party',
            'description' => 'The From Party field',
            'type' => 'text',
        ),
        array('name' => 'to_party',
            'title' => 'To Party',
            'description' => 'The To Party field',
            'type' => 'text',
        ),
        array('name' => 'payment',
            'title' => 'To Payment',
            'description' => 'The To Payment field',
            'type' => 'text',
        ),
        array('name' => 'invoice',
            'title' => 'Invoice',
            'description' => 'The Invoice field',
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
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'event_type' => array('name' => 'event_type',
            'description' => 'Financial Event Type',
            'nick_name' => 'event_type',
            'size' => 'large',
            'entity_name' => 'FinancialEventType',
            'entity_description' => 'Financial Event Type',
            'data_type' => 'sb_feventtype',
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
        'amount' => array('name' => 'amount',
            'description' => 'Amount',
            'nick_name' => 'amount',
            'size' => 'large',
            'data_type' => 'money',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'event_date' => array('name' => 'event_date',
            'description' => 'Event Date',
            'nick_name' => 'event_date',
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
        'internal_org' => array('name' => 'internal_org',
            'description' => 'Internal Organization',
            'nick_name' => 'internal_org',
            'size' => 'large',
            'entity_name' => 'BusinessUnit',
            'entity_description' => 'Business Unit',
            'data_type' => 'sb_businessunit',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'from_party' => array('name' => 'from_party',
            'description' => 'From Party',
            'nick_name' => 'from_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'to_party' => array('name' => 'to_party',
            'description' => 'To Party',
            'nick_name' => 'to_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'payment' => array('name' => 'payment',
            'description' => 'To Payment',
            'nick_name' => 'payment',
            'size' => 'large',
            'entity_name' => 'Payment',
            'entity_description' => 'Payment',
            'data_type' => 'sb_payment',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
        'invoice' => array('name' => 'invoice',
            'description' => 'Invoice',
            'nick_name' => 'invoice',
            'size' => 'large',
            'entity_name' => 'Invoice',
            'entity_description' => 'Invoice',
            'data_type' => 'sb_invoice',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => true,),
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
       register_post_type('sb_fevent', 
            array(
                'label' => 'Financial EVent',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Financial EVent',
                'edit_item'         => 'Edit Financial EVent',
                'new_item'          => 'New Financial EVent',
                'view_item'         => 'View Financial EVent',
                'search_items'      => 'Search Financial EVent',
                'not_found'         => 'No Financial EVent Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Financial EVent',
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
        if ( $post->post_type == 'sb_fevent') 
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

    public static function sb_fevent_table_head($defaults){
        $defaults['event_type']  = 'Financial Event Type';
        $defaults['name']  = 'name';
        $defaults['amount']  = 'Amount';
        $defaults['event_date']  = 'Event Date';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_fevent_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'event_type') {
            $field_value = get_post_meta($post_id, 'event_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'amount') {
            $field_value = get_post_meta($post_id, 'amount', true );
            echo $field_value;
        }
        if ($column_name == 'event_date') {
            $field_value = get_post_meta($post_id, 'event_date', true );
            echo $field_value;
        }
        if ($column_name == 'internal_org') {
            $field_value = get_post_meta($post_id, 'internal_org', true );
            echo $field_value;
        }
        if ($column_name == 'from_party') {
            $field_value = get_post_meta($post_id, 'from_party', true );
            echo $field_value;
        }
        if ($column_name == 'to_party') {
            $field_value = get_post_meta($post_id, 'to_party', true );
            echo $field_value;
        }
        if ($column_name == 'payment') {
            $field_value = get_post_meta($post_id, 'payment', true );
            echo $field_value;
        }
        if ($column_name == 'invoice') {
            $field_value = get_post_meta($post_id, 'invoice', true );
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