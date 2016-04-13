<?php 

class BudgetScenarioRuleCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_bscenariorule'; 
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
        array('name' => 'bitem_type',
            'title' => 'Budget Item Type',
            'description' => 'The Budget Item Type field',
            'type' => 'text',
        ),
        array('name' => 'budget_scenario',
            'title' => 'Budget Scenario',
            'description' => 'The Budget Scenario field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'description',
            'title' => 'Description',
            'description' => 'The Description field',
            'type' => 'text',
        ),
        array('name' => 'amt_change',
            'title' => 'Amount Change',
            'description' => 'The Amount Change field',
            'type' => 'text',
        ),
        array('name' => 'percentage_change',
            'title' => 'Percentage Change',
            'description' => 'The Percentage Change field',
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
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'bitem_type' => array('name' => 'bitem_type',
            'description' => 'Budget Item Type',
            'size' => 'large',
            'entity_name' => 'BudgetItemType',
            'entity_description' => 'Budget Item Type',
            'data_type' => 'sb_bitemtype',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'budget_scenario' => array('name' => 'budget_scenario',
            'description' => 'Budget Scenario',
            'size' => 'large',
            'entity_name' => 'BudgetScenario',
            'entity_description' => 'Budget Scenario',
            'data_type' => 'sb_budgetscenario',
            'is_required' => false,
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
        'amt_change' => array('name' => 'amt_change',
            'description' => 'Amount Change',
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
        'percentage_change' => array('name' => 'percentage_change',
            'description' => 'Percentage Change',
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
       register_post_type('sb_bscenariorule', 
            array(
                'label' => 'Budget Scenario Rule',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Budget Scenario Rule',
                'edit_item'         => 'Edit Budget Scenario Rule',
                'new_item'          => 'New Budget Scenario Rule',
                'view_item'         => 'View Budget Scenario Rule',
                'search_items'      => 'Search Budget Scenario Rule',
                'not_found'         => 'No Budget Scenario Rule Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Budget Scenario Rule',
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
        if ( $post->post_type == 'sb_bscenariorule') 
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

    public static function sb_bscenariorule_table_head($defaults){
        $defaults['bitem_type']  = 'Budget Item Type';
        $defaults['budget_scenario']  = 'Budget Scenario';
        $defaults['name']  = 'Name';
        $defaults['description']  = 'Description';
        $defaults['amt_change']  = 'Amount Change';
        $defaults['percentage_change']  = 'Percentage Change';
        return $defaults;
    }

    public static function sb_bscenariorule_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'bitem_type') {
            $field_value = get_post_meta($post_id, 'bitem_type', true );
            echo $field_value;
        }
        if ($column_name == 'budget_scenario') {
            $field_value = get_post_meta($post_id, 'budget_scenario', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
        if ($column_name == 'amt_change') {
            $field_value = get_post_meta($post_id, 'amt_change', true );
            echo $field_value;
        }
        if ($column_name == 'percentage_change') {
            $field_value = get_post_meta($post_id, 'percentage_change', true );
            echo $field_value;
        }
        if ($column_name == 'business_unit') {
            $field_value = get_post_meta($post_id, 'business_unit', true );
            echo $field_value;
        }
    }

}

?>