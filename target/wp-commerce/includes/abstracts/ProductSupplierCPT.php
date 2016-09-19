<?php 

class ProductSupplierCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_prodsupplier'; 
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
        array('name' => 'prod_supplier',
            'title' => 'Product',
            'description' => 'The Product field',
            'type' => 'text',
        ),
        array('name' => 'supplier_of_prod',
            'title' => 'Supplier',
            'description' => 'The Supplier field',
            'type' => 'text',
        ),
        array('name' => 'supplier_rating',
            'title' => 'Rating',
            'description' => 'The Rating field',
            'type' => 'text',
        ),
        array('name' => 'supplier_preference',
            'title' => 'Preference',
            'description' => 'The Preference field',
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
        'prod_supplier' => array('name' => 'prod_supplier',
            'description' => 'Product',
            'nick_name' => 'prod_supplier',
            'size' => 'large',
            'entity_name' => 'Product',
            'entity_description' => 'Product',
            'data_type' => 'sb_product',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'supplier_of_prod' => array('name' => 'supplier_of_prod',
            'description' => 'Supplier',
            'nick_name' => 'supplier_of_prod',
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
        'supplier_rating' => array('name' => 'supplier_rating',
            'description' => 'Rating',
            'nick_name' => 'supplier_rating',
            'size' => 'large',
            'entity_name' => 'SupplierRating',
            'entity_description' => 'Supplier Rating',
            'data_type' => 'sb_supprating',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'supplier_preference' => array('name' => 'supplier_preference',
            'description' => 'Preference',
            'nick_name' => 'supplier_preference',
            'size' => 'large',
            'entity_name' => 'SupplierPreference',
            'entity_description' => 'Supplier Preference',
            'data_type' => 'sb_supppref',
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
       register_post_type('sb_prodsupplier', 
            array(
                'label' => 'Product Supplier',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Product Supplier',
                'edit_item'         => 'Edit Product Supplier',
                'new_item'          => 'New Product Supplier',
                'view_item'         => 'View Product Supplier',
                'search_items'      => 'Search Product Supplier',
                'not_found'         => 'No Product Supplier Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Product Supplier',
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
        if ( $post->post_type == 'sb_prodsupplier') 
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

    public static function sb_prodsupplier_table_head($defaults){
        $defaults['prod_supplier']  = 'Product';
        $defaults['supplier_of_prod']  = 'Supplier';
        $defaults['supplier_rating']  = 'Rating';
        $defaults['supplier_preference']  = 'Preference';
        $defaults['name']  = 'Name';
        $defaults['description']  = 'Description';
        return $defaults;
    }

    public static function sb_prodsupplier_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'prod_supplier') {
            $field_value = get_post_meta($post_id, 'prod_supplier', true );
            echo $field_value;
        }
        if ($column_name == 'supplier_of_prod') {
            $field_value = get_post_meta($post_id, 'supplier_of_prod', true );
            echo $field_value;
        }
        if ($column_name == 'supplier_rating') {
            $field_value = get_post_meta($post_id, 'supplier_rating', true );
            echo $field_value;
        }
        if ($column_name == 'supplier_preference') {
            $field_value = get_post_meta($post_id, 'supplier_preference', true );
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
    }

}

?>