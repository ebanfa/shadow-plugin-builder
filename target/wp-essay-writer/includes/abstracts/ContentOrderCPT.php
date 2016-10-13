<?php 

class ContentOrderCPT {

    public static $prefix = ''; 

    public static $post_name = 'sb_contentorder'; 
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
        array('name' => 'order_type',
            'title' => 'Type',
            'description' => 'The Type field',
            'type' => 'text',
        ),
        array('name' => 'order_status',
            'title' => 'Order Status',
            'description' => 'The Order Status field',
            'type' => 'text',
        ),
        array('name' => 'payment_status',
            'title' => 'Payment Status',
            'description' => 'The Payment Status field',
            'type' => 'text',
        ),
        array('name' => 'order_content',
            'title' => 'Content',
            'description' => 'The Content field',
            'type' => 'text',
        ),
        array('name' => 'order_party',
            'title' => 'Owner',
            'description' => 'The Owner field',
            'type' => 'text',
        ),
        array('name' => 'academic_level',
            'title' => 'Academic Level',
            'description' => 'The Academic Level field',
            'type' => 'text',
        ),
        array('name' => 'document_type',
            'title' => 'Document Type',
            'description' => 'The Document Type field',
            'type' => 'text',
        ),
        array('name' => 'numpages',
            'title' => 'Number Of Pages',
            'description' => 'The Number Of Pages field',
            'type' => 'text',
        ),
        array('name' => 'subject_area',
            'title' => 'Subject Area',
            'description' => 'The Subject Area field',
            'type' => 'text',
        ),
        array('name' => 'urgency',
            'title' => 'Urgency',
            'description' => 'The Urgency field',
            'type' => 'text',
        ),
        array('name' => 'writing_style',
            'title' => 'Writing Style',
            'description' => 'The Writing Style field',
            'type' => 'text',
        ),
        array('name' => 'order_date',
            'title' => 'Order Date',
            'description' => 'The Order Date field',
            'type' => 'text',
        ),
        array('name' => 'total',
            'title' => 'Total',
            'description' => 'The Total field',
            'type' => 'text',
        ),
        array('name' => 'post_question',
            'title' => 'Post Question',
            'description' => 'The Post Question field',
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
        'order_type' => array('name' => 'order_type',
            'description' => 'Type',
            'nick_name' => 'order_type',
            'size' => 'large',
            'entity_name' => 'ContentOrderType',
            'entity_description' => 'Content Order Type',
            'data_type' => 'sb_cordertype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_status' => array('name' => 'order_status',
            'description' => 'Order Status',
            'nick_name' => 'order_status',
            'size' => 'large',
            'entity_name' => 'ContentOrderStatus',
            'entity_description' => 'Content Order Status',
            'data_type' => 'sb_corderstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'payment_status' => array('name' => 'payment_status',
            'description' => 'Payment Status',
            'nick_name' => 'payment_status',
            'size' => 'large',
            'entity_name' => 'PaymentStatus',
            'entity_description' => 'Payment Status',
            'data_type' => 'sb_paymentstatus',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_content' => array('name' => 'order_content',
            'description' => 'Content',
            'nick_name' => 'order_content',
            'size' => 'large',
            'entity_name' => 'Content',
            'entity_description' => 'Content',
            'data_type' => 'sb_content',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_party' => array('name' => 'order_party',
            'description' => 'Owner',
            'nick_name' => 'order_party',
            'size' => 'large',
            'entity_name' => 'Party',
            'entity_description' => 'Party',
            'data_type' => 'sb_party',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'academic_level' => array('name' => 'academic_level',
            'description' => 'Academic Level',
            'nick_name' => 'academic_level',
            'size' => 'large',
            'entity_name' => 'AcademicLevel',
            'entity_description' => 'Academic Level',
            'data_type' => 'sb_academiclevel',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'document_type' => array('name' => 'document_type',
            'description' => 'Document Type',
            'nick_name' => 'document_type',
            'size' => 'large',
            'entity_name' => 'DocumentType',
            'entity_description' => 'Document Type',
            'data_type' => 'sb_documenttype',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => false,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'numpages' => array('name' => 'numpages',
            'description' => 'Number Of Pages',
            'nick_name' => 'numpages',
            'size' => 'large',
            'entity_name' => 'NoOfPages',
            'entity_description' => 'No Of Pages',
            'data_type' => 'sb_noofpages',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'subject_area' => array('name' => 'subject_area',
            'description' => 'Subject Area',
            'nick_name' => 'subject_area',
            'size' => 'large',
            'entity_name' => 'SubjectArea',
            'entity_description' => 'Subject Area',
            'data_type' => 'sb_subjectarea',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'urgency' => array('name' => 'urgency',
            'description' => 'Urgency',
            'nick_name' => 'urgency',
            'size' => 'large',
            'entity_name' => 'Urgency',
            'entity_description' => 'Urgency',
            'data_type' => 'sb_urgency',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'writing_style' => array('name' => 'writing_style',
            'description' => 'Writing Style',
            'nick_name' => 'writing_style',
            'size' => 'large',
            'entity_name' => 'WritingStyle',
            'entity_description' => 'Writing Style',
            'data_type' => 'sb_writingstyle',
            'is_required' => true,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => false,
            'is_form_field' => true,
            'is_relationship_field' => true,),
        'order_date' => array('name' => 'order_date',
            'description' => 'Order Date',
            'nick_name' => 'order_date',
            'size' => 'large',
            'data_type' => 'date',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => true,
            'is_form_field' => false,
            'is_relationship_field' => false,),
        'total' => array('name' => 'total',
            'description' => 'Total',
            'nick_name' => 'total',
            'size' => 'large',
            'data_type' => 'money',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => true,
            'is_edit_field' => true,
            'is_view_field' => true,
            'is_list_field' => true,
            'is_form_field' => true,
            'is_relationship_field' => false,),
        'post_question' => array('name' => 'post_question',
            'description' => 'Post Question',
            'nick_name' => 'post_question',
            'size' => 'large',
            'data_type' => 'number',
            'is_required' => false,
            'is_visible' => true,
            'is_create_field' => false,
            'is_edit_field' => false,
            'is_view_field' => false,
            'is_list_field' => false,
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
            'is_view_field' => false,
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
        'dispute_order' => array('name' => 'dispute_order',
            'entity_name' => 'Dispute',
            'data_type' => 'sb_dispute',
            'artifact_name' => 'dispute',
            'entity_description' => 'Dispute',
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
                'dispute_type' => array('name' => 'dispute_type',
                    'description' => 'Type',
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
            ),
        ),
        'file_content_order' => array('name' => 'file_content_order',
            'entity_name' => 'ContentOrderFile',
            'data_type' => 'sb_corderfile',
            'artifact_name' => 'contentorderfile',
            'entity_description' => 'Content Order File',
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
                'file_content_order' => array('name' => 'file_content_order',
                    'description' => 'Content Order',
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
                'file_url' => array('name' => 'file_url',
                    'description' => 'File URL',
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
                'file_size' => array('name' => 'file_size',
                    'description' => 'File Size',
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
       register_post_type('sb_contentorder', 
            array(
                'label' => 'Content Order',
                'labels' => array(
                'add_new'           => 'Add New',
                'add_new_item'      => 'Add New Content Order',
                'edit_item'         => 'Edit Content Order',
                'new_item'          => 'New Content Order',
                'view_item'         => 'View Content Order',
                'search_items'      => 'Search Content Order',
                'not_found'         => 'No Content Order Found ',
                'not_found_in_trash'=> 'Not Found in Trash',
                ),
                'description' => 'Reusable Content Order',
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
        if ( $post->post_type == 'sb_contentorder') 
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

    public static function sb_contentorder_table_head($defaults){
        $defaults['name']  = 'Name';
        $defaults['order_status']  = 'Order Status';
        $defaults['payment_status']  = 'Payment Status';
        $defaults['order_party']  = 'Owner';
        $defaults['academic_level']  = 'Academic Level';
        $defaults['numpages']  = 'Number Of Pages';
        $defaults['subject_area']  = 'Subject Area';
        $defaults['urgency']  = 'Urgency';
        $defaults['order_date']  = 'Order Date';
        $defaults['total']  = 'Total';
        return $defaults;
    }

    public static function sb_contentorder_table_content($column_name, $post_id){
        if ($column_name == 'entity_code') {
            $field_value = get_post_meta($post_id, 'entity_code', true );
            echo $field_value;
        }
        if ($column_name == 'name') {
            $field_value = get_post_meta($post_id, 'name', true );
            echo $field_value;
        }
        if ($column_name == 'order_type') {
            $field_value = get_post_meta($post_id, 'order_type', true );
            echo $field_value;
        }
        if ($column_name == 'order_status') {
            $field_value = get_post_meta($post_id, 'order_status', true );
            echo $field_value;
        }
        if ($column_name == 'payment_status') {
            $field_value = get_post_meta($post_id, 'payment_status', true );
            echo $field_value;
        }
        if ($column_name == 'order_content') {
            $field_value = get_post_meta($post_id, 'order_content', true );
            echo $field_value;
        }
        if ($column_name == 'order_party') {
            $field_value = get_post_meta($post_id, 'order_party', true );
            echo $field_value;
        }
        if ($column_name == 'academic_level') {
            $field_value = get_post_meta($post_id, 'academic_level', true );
            echo $field_value;
        }
        if ($column_name == 'document_type') {
            $field_value = get_post_meta($post_id, 'document_type', true );
            echo $field_value;
        }
        if ($column_name == 'numpages') {
            $field_value = get_post_meta($post_id, 'numpages', true );
            echo $field_value;
        }
        if ($column_name == 'subject_area') {
            $field_value = get_post_meta($post_id, 'subject_area', true );
            echo $field_value;
        }
        if ($column_name == 'urgency') {
            $field_value = get_post_meta($post_id, 'urgency', true );
            echo $field_value;
        }
        if ($column_name == 'writing_style') {
            $field_value = get_post_meta($post_id, 'writing_style', true );
            echo $field_value;
        }
        if ($column_name == 'order_date') {
            $field_value = get_post_meta($post_id, 'order_date', true );
            echo $field_value;
        }
        if ($column_name == 'total') {
            $field_value = get_post_meta($post_id, 'total', true );
            echo $field_value;
        }
        if ($column_name == 'post_question') {
            $field_value = get_post_meta($post_id, 'post_question', true );
            echo $field_value;
        }
        if ($column_name == 'description') {
            $field_value = get_post_meta($post_id, 'description', true );
            echo $field_value;
        }
    }

}

?>