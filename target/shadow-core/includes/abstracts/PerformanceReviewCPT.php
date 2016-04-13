<?php 

class PerformanceReviewCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_perfreview'; 
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
        array('name' => 'from_role',
            'title' => 'From',
            'description' => 'The From field',
            'type' => 'text',
        ),
        array('name' => 'for_role',
            'title' => 'For',
            'description' => 'The For field',
            'type' => 'text',
        ),
        array('name' => 'position',
            'title' => 'Position Influenced',
            'description' => 'The Position Influenced field',
            'type' => 'text',
        ),
        array('name' => 'payment',
            'title' => 'Bonus Arising',
            'description' => 'The Bonus Arising field',
            'type' => 'text',
        ),
        array('name' => 'pay_history',
            'title' => 'Affecting Pay History',
            'description' => 'The Affecting Pay History field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'from_date',
            'title' => 'From Date',
            'description' => 'The From Date field',
            'type' => 'text',
        ),
        array('name' => 'to_date',
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
        'from_role' => array('name' => 'from_role',
            'description' => 'From',
            'size' => 'large',
            'entity_name' => 'PartyRole',
            'entity_description' => 'Party Role',
            'data_type' => 'sb_partyrole',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'for_role' => array('name' => 'for_role',
            'description' => 'For',
            'size' => 'large',
            'entity_name' => 'PartyRole',
            'entity_description' => 'Party Role',
            'data_type' => 'sb_partyrole',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'position' => array('name' => 'position',
            'description' => 'Position Influenced',
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
        'payment' => array('name' => 'payment',
            'description' => 'Bonus Arising',
            'size' => 'large',
            'entity_name' => 'Payment',
            'entity_description' => 'Payment',
            'data_type' => 'sb_payment',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'pay_history' => array('name' => 'pay_history',
            'description' => 'Affecting Pay History',
            'size' => 'large',
            'entity_name' => 'PayHistory',
            'entity_description' => 'Pay History',
            'data_type' => 'sb_payhistory',
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
        'from_date' => array('name' => 'from_date',
            'description' => 'From Date',
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
        'to_date' => array('name' => 'to_date',
            'description' => 'To Date',
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
        'perf_review' => array('name' => 'perf_review',
            'entity_name' => 'PerformanceReviewItem',
            'data_type' => 'sb_perfreviewitem',
            'artifact_name' => 'performancereviewitem',
            'entity_description' => 'Performance Review Item',
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
                'perf_review' => array('name' => 'perf_review',
                    'description' => 'Performance Review',
                    'size' => 'large',
                    'entity_name' => 'PerformanceReview',
                    'entity_description' => 'Performance Review',
                    'data_type' => 'sb_perfreview',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'item_type' => array('name' => 'item_type',
                    'description' => 'Item Type',
                    'size' => 'large',
                    'entity_name' => 'PerfReviewItemType',
                    'entity_description' => 'Performance Review Item Type',
                    'data_type' => 'sb_previtemtype',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => true,
                    'is_list_field' => true,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'rating_type' => array('name' => 'rating_type',
                    'description' => 'Rating Type',
                    'size' => 'large',
                    'entity_name' => 'RatingType',
                    'entity_description' => 'Rating Type',
                    'data_type' => 'sb_ratingtype',
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
                    'is_view_field' => true,
                    'is_list_field' => true,
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
       register_post_type('sb_perfreview', 
            array(
                'label' => 'Performance Review',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Performance Review',
                'edit_item'         => 'Edit Performance Review',
                'new_item'          => 'New Performance Review',
                'view_item'         => 'View Performance Review',
                'search_items'      => 'Search Performance Review',
                'not_found'         => 'No Performance Review Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Performance Review',
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
        if ( $post->post_type == 'sb_perfreview') 
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

    public static function sb_perfreview_table_head($defaults){
        $defaults['from_role']  = 'From';
        $defaults['for_role']  = 'For';
        $defaults['position']  = 'Position Influenced';
        $defaults['payment']  = 'Bonus Arising';
        $defaults['pay_history']  = 'Affecting Pay History';
        $defaults['name']  = 'name';
        $defaults['from_date']  = 'From Date';
        $defaults['to_date']  = 'To Date';
        $defaults['description']  = 'Description';
        $defaults['business_unit']  = 'Business Unit';
        return $defaults;
    }

    public static function sb_perfreview_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'from_role') {
            $field_value = get_post_meta($post_id, 'from_role', true );
            echo $field_value;
        }
        if ($column_name == 'for_role') {
            $field_value = get_post_meta($post_id, 'for_role', true );
            echo $field_value;
        }
        if ($column_name == 'position') {
            $field_value = get_post_meta($post_id, 'position', true );
            echo $field_value;
        }
        if ($column_name == 'payment') {
            $field_value = get_post_meta($post_id, 'payment', true );
            echo $field_value;
        }
        if ($column_name == 'pay_history') {
            $field_value = get_post_meta($post_id, 'pay_history', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'from_date') {
            $field_value = get_post_meta($post_id, 'from_date', true );
            echo $field_value;
        }
        if ($column_name == 'to_date') {
            $field_value = get_post_meta($post_id, 'to_date', true );
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