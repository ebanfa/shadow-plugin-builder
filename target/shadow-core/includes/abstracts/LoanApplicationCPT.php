<?php 

class LoanApplicationCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_loanapp'; 
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
        array('name' => 'name',
            'title' => 'Name',
            'description' => 'The Name field',
            'type' => 'text',
        ),
        array('name' => 'b_name',
            'title' => 'Business Name',
            'description' => 'The Business Name field',
            'type' => 'text',
        ),
        array('name' => 'tax_id',
            'title' => 'Tax ID',
            'description' => 'The Tax ID field',
            'type' => 'text',
        ),
        array('name' => 'b_phone',
            'title' => 'Business Phone',
            'description' => 'The Business Phone field',
            'type' => 'text',
        ),
        array('name' => 'email',
            'title' => 'Business Email',
            'description' => 'The Business Email field',
            'type' => 'text',
        ),
        array('name' => 'b_address',
            'title' => 'Business Address',
            'description' => 'The Business Address field',
            'type' => 'text',
        ),
        array('name' => 'city',
            'title' => 'City',
            'description' => 'The City field',
            'type' => 'text',
        ),
        array('name' => 'state',
            'title' => 'State',
            'description' => 'The State field',
            'type' => 'text',
        ),
        array('name' => 'country',
            'title' => 'Country',
            'description' => 'The Country field',
            'type' => 'text',
        ),
        array('name' => 'industry',
            'title' => 'Industry',
            'description' => 'The Industry field',
            'type' => 'text',
        ),
        array('name' => 'sale',
            'title' => 'Gross Sales',
            'description' => 'The Gross Sales field',
            'type' => 'text',
        ),
        array('name' => 'c_sale',
            'title' => 'Card Sales',
            'description' => 'The Card Sales field',
            'type' => 'text',
        ),
        array('name' => 'r_date',
            'title' => 'Registration Date',
            'description' => 'The Registration Date field',
            'type' => 'text',
        ),
        array('name' => 'ln_amt',
            'title' => 'Loan Amount',
            'description' => 'The Loan Amount field',
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
            'size' => 'medium',
            'data_type' => 'alphanumeric',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
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
        'b_name' => array('name' => 'b_name',
            'description' => 'Business Name',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'tax_id' => array('name' => 'tax_id',
            'description' => 'Tax ID',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'b_phone' => array('name' => 'b_phone',
            'description' => 'Business Phone',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'email' => array('name' => 'email',
            'description' => 'Business Email',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'b_address' => array('name' => 'b_address',
            'description' => 'Business Address',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'city' => array('name' => 'city',
            'description' => 'City',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'state' => array('name' => 'state',
            'description' => 'State',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'country' => array('name' => 'country',
            'description' => 'Country',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'industry' => array('name' => 'industry',
            'description' => 'Industry',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'sale' => array('name' => 'sale',
            'description' => 'Gross Sales',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'c_sale' => array('name' => 'c_sale',
            'description' => 'Card Sales',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'r_date' => array('name' => 'r_date',
            'description' => 'Registration Date',
            'size' => 'medium',
            'data_type' => 'name',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'ln_amt' => array('name' => 'ln_amt',
            'description' => 'Loan Amount',
            'size' => 'medium',
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
            'is_list_field' => false,
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
       register_post_type('sb_loanapp', 
            array(
                'label' => 'Loan Application',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Loan Application',
                'edit_item'         => 'Edit Loan Application',
                'new_item'          => 'New Loan Application',
                'view_item'         => 'View Loan Application',
                'search_items'      => 'Search Loan Application',
                'not_found'         => 'No Loan Application Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Loan Application',
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
        if ( $post->post_type == 'sb_loanapp') 
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

    public static function sb_loanapp_table_head($defaults){
        $defaults['name']  = 'name';
        $defaults['b_name']  = 'Business Name';
        $defaults['b_phone']  = 'Business Phone';
        $defaults['email']  = 'Business Email';
        $defaults['state']  = 'State';
        $defaults['industry']  = 'Industry';
        $defaults['ln_amt']  = 'Loan Amount';
        return $defaults;
    }

    public static function sb_loanapp_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'b_name') {
            $field_value = get_post_meta($post_id, 'b_name', true );
            echo $field_value;
        }
        if ($column_name == 'tax_id') {
            $field_value = get_post_meta($post_id, 'tax_id', true );
            echo $field_value;
        }
        if ($column_name == 'b_phone') {
            $field_value = get_post_meta($post_id, 'b_phone', true );
            echo $field_value;
        }
        if ($column_name == 'email') {
            $field_value = get_post_meta($post_id, 'email', true );
            echo $field_value;
        }
        if ($column_name == 'b_address') {
            $field_value = get_post_meta($post_id, 'b_address', true );
            echo $field_value;
        }
        if ($column_name == 'city') {
            $field_value = get_post_meta($post_id, 'city', true );
            echo $field_value;
        }
        if ($column_name == 'state') {
            $field_value = get_post_meta($post_id, 'state', true );
            echo $field_value;
        }
        if ($column_name == 'country') {
            $field_value = get_post_meta($post_id, 'country', true );
            echo $field_value;
        }
        if ($column_name == 'industry') {
            $field_value = get_post_meta($post_id, 'industry', true );
            echo $field_value;
        }
        if ($column_name == 'sale') {
            $field_value = get_post_meta($post_id, 'sale', true );
            echo $field_value;
        }
        if ($column_name == 'c_sale') {
            $field_value = get_post_meta($post_id, 'c_sale', true );
            echo $field_value;
        }
        if ($column_name == 'r_date') {
            $field_value = get_post_meta($post_id, 'r_date', true );
            echo $field_value;
        }
        if ($column_name == 'ln_amt') {
            $field_value = get_post_meta($post_id, 'ln_amt', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>