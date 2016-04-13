<?php 

class IncomeDataCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_incomedata'; 
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
        array('name' => 'id_assessment',
            'title' => 'Assessment',
            'description' => 'The Assessment field',
            'type' => 'text',
        ),
        array('name' => 'id_type',
            'title' => 'Data Type',
            'description' => 'The Data Type field',
            'type' => 'text',
        ),
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'pgi',
            'title' => 'Potential Gross Income',
            'description' => 'The Potential Gross Income field',
            'type' => 'text',
        ),
        array('name' => 'additional_income',
            'title' => 'Additional Income',
            'description' => 'The Additional Income field',
            'type' => 'text',
        ),
        array('name' => 'vacancy_allowance',
            'title' => 'Vacancy Allowance (%)',
            'description' => 'The Vacancy Allowance (%) field',
            'type' => 'text',
        ),
        array('name' => 'credit_loss',
            'title' => 'Credit Loss Allowance (%)',
            'description' => 'The Credit Loss Allowance (%) field',
            'type' => 'text',
        ),
        array('name' => 'cap_rate',
            'title' => 'Capitalization Rate',
            'description' => 'The Capitalization Rate field',
            'type' => 'text',
        ),
        array('name' => 'effective_date',
            'title' => 'Effective Date',
            'description' => 'The Effective Date field',
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
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'id_assessment' => array('name' => 'id_assessment',
            'description' => 'Assessment',
            'size' => 'large',
            'entity_name' => 'Assessment',
            'entity_description' => 'Assessment',
            'data_type' => 'sb_assessment',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'id_type' => array('name' => 'id_type',
            'description' => 'Data Type',
            'size' => 'large',
            'entity_name' => 'IncomeDataType',
            'entity_description' => 'Income Data Type',
            'data_type' => 'sb_idtype',
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
            'data_type' => 'text',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'pgi' => array('name' => 'pgi',
            'description' => 'Potential Gross Income',
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
        'additional_income' => array('name' => 'additional_income',
            'description' => 'Additional Income',
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
        'vacancy_allowance' => array('name' => 'vacancy_allowance',
            'description' => 'Vacancy Allowance (%)',
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
        'credit_loss' => array('name' => 'credit_loss',
            'description' => 'Credit Loss Allowance (%)',
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
        'cap_rate' => array('name' => 'cap_rate',
            'description' => 'Capitalization Rate',
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
        'effective_date' => array('name' => 'effective_date',
            'description' => 'Effective Date',
            'size' => 'medium',
            'data_type' => 'date',
            'is_required' => false,
            'is_visible' => false,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => false,
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
        'income_data' => array('name' => 'income_data',
            'entity_name' => 'IncomeDataExpense',
            'data_type' => 'sb_idexpense',
            'artifact_name' => 'incomedataexpense',
            'entity_description' => 'Income Data Expense',
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
                'ide_type' => array('name' => 'ide_type',
                    'description' => 'Expense Type',
                    'size' => 'large',
                    'entity_name' => 'IncomeDataExpenseType',
                    'entity_description' => 'Income Data Expense Type',
                    'data_type' => 'sb_idetype',
                    'is_required' => true,
                    'is_visible' => true,
                    'is_create_field' => true,
                    'is_edit_field' => true,
                    'is_view_field' => false,
                    'is_list_field' => false,
                    'is_form_field' => true,
                    'is_relationship_field' => true,),
                'income_data' => array('name' => 'income_data',
                    'description' => 'Income Data',
                    'size' => 'large',
                    'entity_name' => 'IncomeData',
                    'entity_description' => 'Income Data',
                    'data_type' => 'sb_incomedata',
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
                'amount' => array('name' => 'amount',
                    'description' => 'Amount',
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
            ),
        ),
   );
 
    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('sb_incomedata', 
            array(
                'label' => 'Income Data',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Income Data',
                'edit_item'         => 'Edit Income Data',
                'new_item'          => 'New Income Data',
                'view_item'         => 'View Income Data',
                'search_items'      => 'Search Income Data',
                'not_found'         => 'No Income Data Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Income Data',
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
        if ( $post->post_type == 'sb_incomedata') 
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

    public static function sb_incomedata_table_head($defaults){
        $defaults['name']  = 'Name';
        $defaults['pgi']  = 'Potential Gross Income';
        $defaults['additional_income']  = 'Additional Income';
        $defaults['vacancy_allowance']  = 'Vacancy Allowance (%)';
        $defaults['credit_loss']  = 'Credit Loss Allowance (%)';
        $defaults['cap_rate']  = 'Capitalization Rate';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_incomedata_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'id_assessment') {
            $field_value = get_post_meta($post_id, 'id_assessment', true );
            echo $field_value;
        }
        if ($column_name == 'id_type') {
            $field_value = get_post_meta($post_id, 'id_type', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'pgi') {
            $field_value = get_post_meta($post_id, 'pgi', true );
            echo $field_value;
        }
        if ($column_name == 'additional_income') {
            $field_value = get_post_meta($post_id, 'additional_income', true );
            echo $field_value;
        }
        if ($column_name == 'vacancy_allowance') {
            $field_value = get_post_meta($post_id, 'vacancy_allowance', true );
            echo $field_value;
        }
        if ($column_name == 'credit_loss') {
            $field_value = get_post_meta($post_id, 'credit_loss', true );
            echo $field_value;
        }
        if ($column_name == 'cap_rate') {
            $field_value = get_post_meta($post_id, 'cap_rate', true );
            echo $field_value;
        }
        if ($column_name == 'effective_date') {
            $field_value = get_post_meta($post_id, 'effective_date', true );
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