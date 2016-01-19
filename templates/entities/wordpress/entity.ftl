<?php 

class ${entity.name}CPT {

    public static $prefix = ''; 

    public static $custom_fields =  array(
<#list entity.fields as field>
        array('name' => '${field.name}',
            'title' => '${field.description}',
            'description' => 'The ${field.description} field',
            'type' => 'text',
        ),
</#list>
    );


    /**
     * Register the custom post type so it shows up in menus
     */
    public static function register_custom_post_type()
    {
       register_post_type('${entity.postName}', 
            array(
                'label' => '${entity.description}',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New ${entity.description}',
                'edit_item'         => 'Edit ${entity.description}',
                'new_item'          => 'New ${entity.description}',
                'view_item'         => 'View ${entity.description}',
                'search_items'      => 'Search ${entity.description}',
                'not_found'         => 'No ${entity.description} Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable ${entity.description}',
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
        if ( $post->post_type == '${entity.postName}') 
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

    public static function ${entity.postName}_table_head($defaults){
<#list entity.fields as field>
    <#if field.listField == "Y">
        $defaults['${field.name}']  = '${field.displayName}';
    </#if>
</#list>
        return $defaults;
    }

    public static function ${entity.postName}_table_content($column_name, $post_id){
<#list entity.fields as field>
        if ($column_name == '${field.name}') {
            $field_value = get_post_meta($post_id, '${field.name}', true );
            echo $field_value;
        }
</#list>
    }

}

?>