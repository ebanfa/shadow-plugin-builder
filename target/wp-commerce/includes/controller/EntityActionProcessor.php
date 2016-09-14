<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

global $wp_session;

class EntityActionProcessor {

    /**
     *
     */
    public static function init_hooks() {
        add_action('wp_ajax_create_entity_ajax', 'EntityActionProcessor::create_entity_ajax');
        add_action('wp_ajax_nopriv_create_entity_ajax', 'EntityActionProcessor::create_entity_ajax');

        add_action('wp_ajax_edit_entity_ajax', 'EntityActionProcessor::edit_entity_ajax');
        add_action('wp_ajax_nopriv_edit_entity_ajax', 'EntityActionProcessor::edit_entity_ajax');

        add_action('wp_ajax_view_entity_ajax', 'EntityActionProcessor::view_entity_ajax');
        add_action('wp_ajax_nopriv_view_entity_ajax', 'EntityActionProcessor::view_entity_ajax');

        add_action('wp_ajax_find_entity_ajax', 'EntityActionProcessor::find_entity_ajax');
        add_action('wp_ajax_nopriv_find_entity_ajax', 'EntityActionProcessor::find_entity_ajax');
        
        add_action('wp_ajax_find_child_entities_ajax', 'EntityActionProcessor::find_child_entities_ajax');
        add_action('wp_ajax_nopriv_find_child_entities_ajax', 'EntityActionProcessor::find_child_entities_ajax');
        
        add_action('wp_ajax_find_all_ajax', 'EntityActionProcessor::find_all_ajax');
        add_action('wp_ajax_nopriv_find_all_ajax', 'EntityActionProcessor::find_all_ajax');

        add_action('wp_ajax_delete_entity_ajax', 'EntityActionProcessor::delete_entity_ajax');
        add_action('wp_ajax_nopriv_delete_entity_ajax', 'EntityActionProcessor::delete_entity_ajax');

        add_action('wp_ajax_get_conversations_ajax', 'EntityActionProcessor::get_conversations_ajax');
        add_action('wp_ajax_nopriv_get_conversations_ajax', 'EntityActionProcessor::get_conversations_ajax');

        add_action('wp_ajax_send_message_ajax', 'EntityActionProcessor::send_message_ajax');
        add_action('wp_ajax_nopriv_send_message_ajax', 'EntityActionProcessor::send_message_ajax');

        add_action('wp_ajax_upload_product_category_images_file_ajax', 'EntityActionProcessor::upload_product_category_images_file_ajax');
        add_action('wp_ajax_nopriv_upload_product_category_images_file_ajax', 'EntityActionProcessor::upload_product_category_images_file_ajax');

        add_action('wp_ajax_upload_product_type_images_file_ajax', 'EntityActionProcessor::upload_product_type_images_file_ajax');
        add_action('wp_ajax_nopriv_upload_product_type_images_file_ajax', 'EntityActionProcessor::upload_product_type_images_file_ajax');

        add_action('wp_ajax_upload_product_images_file_ajax', 'EntityActionProcessor::upload_product_images_file_ajax');
        add_action('wp_ajax_nopriv_upload_product_images_file_ajax', 'EntityActionProcessor::upload_product_images_file_ajax');

        add_action('wp_ajax_add_product_to_cart_ajax', 'EntityActionProcessor::add_product_to_cart_ajax');
        add_action('wp_ajax_nopriv_add_product_to_cart_ajax', 'EntityActionProcessor::add_product_to_cart_ajax');

        add_action('wp_ajax_confirm_product_order_ajax', 'EntityActionProcessor::confirm_product_order_ajax');
        add_action('wp_ajax_nopriv_confirm_product_order_ajax', 'EntityActionProcessor::confirm_product_order_ajax');

    }

    /**
     *
     */
    public static function get_base_url() {
        return get_site_url() . '/page?';
    }
    
    /**
     *
     */
    public static function create_entity_ajax() {
        // Check the ajax request
        $entity_data = self::do_before_ajax_edit();
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) {
            $entity_data = EntityAPI::create_entity($entity_data);
        }
        // Run post edit hooks
        self::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function do_before_ajax_edit() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode'])) {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }
        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data = EntityRequestUtils::build_entity_data_from_post($entity_data);
        $entity_data = EntityAPIUtils::validate_entity_data($entity_data);
        return $entity_data;
    }
    
    /**
     *
     */
    public static function do_after_ajax_edit($entity_data) {
        // Process the results of the order creation
        if(!$entity_data['has_errors']) {

            if(isset($entity_data['redirect_url'])) {
                $redirect_url = $entity_data['redirect_url'];
            } else {
                $redirect_url = self::get_base_url() . 'artifact='. $entity_data['entity_artifact_name'] . '&id=' . $entity_data['id'] . '&page_action=view';
            }
            if(isset($entity_data['extra_url_params'])) {
                foreach ($entity_data['extra_url_params'] as $key => $value) {
                    $redirect_url = $redirect_url . '&' . $key . '=' . $value;
                }
               
            }
            //var_dump($entity_data);
            // Process the parent id, if any
            if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) 
            {
                $redirect_url = $redirect_url . '&parent_id=' . sanitize_text_field($_REQUEST['parent_id']);
                $redirect_url = $redirect_url . '&parent_artifact=' . sanitize_text_field($_REQUEST['parent_artifact']);
                $redirect_url = $redirect_url . '&parent_field=' . sanitize_text_field($_REQUEST['parent_field']);
                if(isset($_REQUEST['parent_param'])) $redirect_url = $redirect_url . '&parent_param=' .  $_REQUEST['parent_param'];
            }

            $redirect_url = $redirect_url;
            wp_send_json_success(array('message' => $redirect_url));
        } else {
            wp_send_json_error(array('message' => $entity_data['message']));
        }
    }

    /**
     *
     */
    public static function find_entity_ajax() {
        $entity_data = self::do_before_ajax_find();
        $search_results = EntityAPI::find_entity($entity_data);
        self::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function find_child_entities_ajax() {
        if(!isset($_POST['artifact']) || !isset($_POST['parent_id']) || !isset($_POST['parent_field_name'])) return array();

        $parent_id = EntityRequestUtils::get_query_string_field('parent_id');
        $artifact_name = EntityRequestUtils::get_query_string_field('artifact');
        $parent_field_name = EntityRequestUtils::get_query_string_field('parent_field_name');

        $search_results = EntityAPI::find_by_criteria($artifact_name, array($parent_field_name => $parent_id));
        self::do_after_ajax_find(EntityAPIUtils::init_entity_data($artifact_name), $search_results);
    }

    /**
     *
     */
    public static function find_all_ajax() {
        $entity_data = self::do_before_ajax_find();
        $search_results = EntityAPI::find_all($entity_data);
        self::do_after_ajax_find($entity_data, $search_results);
    }

    /**
     *
     */
    public static function do_before_ajax_find() {
        /*if(!isset($_POST['form'][2]) && 
            !isset($_POST['form'][0]) && 
            !wp_verify_nonce($_POST['form'][0]['name'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }*/
        $artifact_name = EntityRequestUtils::get_artifact_name();
        if(!$artifact_name) $artifact_name = EntityRequestUtils::get_query_form_field('artifact');
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        // This is to check if we are using the criteria name parameter to
        // restrict the search
        if(isset($_REQUEST['criteria_name'])) {
            $criteria_data = array(
                'criteria_name' => EntityRequestUtils::get_request_param('criteria_name'),
                'criteria_value' => EntityRequestUtils::get_request_param('criteria_value'),
            );
            $entity_data['criteria_data'] = $criteria_data;
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_find($entity_data, $search_results) {
        $json_data = array(
            "draw"            => intval(sanitize_text_field($_REQUEST['draw'])),   
            "recordsTotal"    => intval(count($search_results)),  
            "recordsFiltered" => intval(count($search_results)),
            "data"            => $search_results  // total data array
        ); 
        wp_send_json($json_data);
    }

    /**
     *
     */
    public static function delete_entity_ajax() {
        $entity_data = self::do_before_ajax_delete();
        $entity_data = EntityAPI::do_delete_entity($entity_data);
        self::do_after_ajax_delete($entity_data);
    }  

    /**
     *
     */
    public static function get_conversations_ajax() {
        wp_send_json_success(ConversationAPI::get_current_user_conversations());
    }

    /**
     *
     */
    public static function send_message_ajax() {
        wp_send_json_success(ConversationAPI::get_current_user_conversations());
    }

    /**
     *
     */
    public static function do_before_ajax_delete() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && 
            !isset($_POST['post_nonce_field']) && 
            !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) wp_send_json_error(array('message' => "Entity identifier missing"));

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_delete($entity_data) {
        if (!$entity_data['has_errors']) {
            $redirect_url = self::get_base_url() . 'artifact='. $entity_data['entity_artifact_name'] .'&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => 'Error deleting entity'));
        }
    }

    /**
     *
     */
    public static function upload_product_category_images_file_ajax() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode']) || !isset($_POST['id']) || empty($_FILES))
        {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data['id'] = sanitize_text_field($_POST['id']);
        //$entity_data['order_status'] = sanitize_text_field($_POST['order_status']);
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) $entity_data = ProductCategoryImageAPI::do_upload_images($entity_data, 'product_category_images');
        // Run post edit hooks
        self::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function upload_product_type_images_file_ajax() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode']) || !isset($_POST['id']) || empty($_FILES))
        {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data['id'] = sanitize_text_field($_POST['id']);
        //$entity_data['order_status'] = sanitize_text_field($_POST['order_status']);
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) $entity_data = ProductTypeImageAPI::do_upload_images($entity_data, 'product_type_images');
        // Run post edit hooks
        self::do_after_ajax_edit($entity_data);
    }

    /**
     *
     */
    public static function upload_product_images_file_ajax() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode']) || !isset($_POST['id']) || empty($_FILES))
        {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data['id'] = sanitize_text_field($_POST['id']);
        //$entity_data['order_status'] = sanitize_text_field($_POST['order_status']);
        // Create the entity of we have no errors
        if(!$entity_data['has_errors']) $entity_data = ProductImageAPI::do_upload_images($entity_data, 'product_images');
        // Run post edit hooks
        self::do_after_ajax_edit($entity_data);
    }
    
    /**
     *
     */
    public static function add_product_to_cart_ajax() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode']) || !isset($_POST['id']))
        {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        $entity_data['id'] = sanitize_text_field($_POST['id']);

        // Load the entity if we have no errors
        if(!$entity_data['has_errors']) $entity_data = EntityAPI::get_by_id('product', $entity_data['id']);

        if(isset($entity_data['id'])) {
            // Load the pricing information for the product
            $entity_data = ProductAPI::load_product_data($entity_data['entity_code']);

            $price = $entity_data['price'];
            $quantity = sanitize_text_field($_POST['product-quantity']);

            $item_data = array(
                'id' => $entity_data['id'], 
                'code' => $entity_data['entity_code'],
                'name' => $entity_data['name'],
                'price' => $entity_data['price'],
                'quantity' => $quantity
            );
            $item_data = ProductAPI::add_to_shopping_cart($item_data);
        }

        if(isset($_POST['_wp_http_referer']))
            $entity_data['redirect_url'] = sanitize_text_field($_POST['_wp_http_referer']);

        self::do_after_ajax_edit($entity_data);
    }


    /**
     *
     */
    public static function confirm_product_order_ajax() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode']) || !isset($_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['email']))
        {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }

        $user_data = array(
            'first_name' => sanitize_text_field($_POST['first_name']), 
            'last_name' => sanitize_text_field($_POST['last_name']),
            'email' => sanitize_text_field($_POST['email']),
        );
        $entity_data = ProductOrderAPI::do_confirm_user_order($user_data);
        $entity_data['redirect_url'] = site_url() . '/category-archive/';
        self::do_after_ajax_edit($entity_data);
    }

}
