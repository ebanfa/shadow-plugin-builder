<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class WithdrawalAPI {
    
    /**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_create_sb_withdrawal_ajax', 'WithdrawalAPI::create_sb_withdrawal_ajax');
        add_action('wp_ajax_nopriv_create_sb_withdrawal_ajax', 'WithdrawalAPI::create_sb_withdrawal_ajax');

        add_action('wp_ajax_edit_sb_withdrawal_ajax', 'WithdrawalAPI::edit_sb_withdrawal_ajax');
        add_action('wp_ajax_nopriv_edit_sb_withdrawal_ajax', 'WithdrawalAPI::edit_sb_withdrawal_ajax');

        add_action('wp_ajax_view_sb_withdrawal_ajax', 'WithdrawalAPI::view_sb_withdrawal_ajax');
        add_action('wp_ajax_nopriv_view_sb_withdrawal_ajax', 'WithdrawalAPI::view_sb_withdrawal_ajax');

        add_action('wp_ajax_find_sb_withdrawal_ajax', 'WithdrawalAPI::find_sb_withdrawal_ajax');
        add_action('wp_ajax_nopriv_find_sb_withdrawal_ajax', 'WithdrawalAPI::find_sb_withdrawal_ajax');

        add_action('wp_ajax_delete_sb_withdrawal_ajax', 'WithdrawalAPI::delete_sb_withdrawal_ajax');
        add_action('wp_ajax_nopriv_delete_sb_withdrawal_ajax', 'WithdrawalAPI::delete_sb_withdrawal_ajax');
    }
    
    /**
     *
     */
    public static function create_sb_withdrawal_ajax() {
        // Ensure we have a valid form
        if(!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure the edit mode has also bee set before we proceed
        if(!isset($_POST['edit_mode'])) {
           wp_send_json_error(array('message' => "<span class='error'>Invalid artifact operation!</span>"));
        }
        // Build the entity data form $_POST
        $entity_data = WithdrawalAPI::build_entity_data_from_post();
        // Validate the posted data
        $entity_data = WithdrawalAPI::validate_entity_data($entity_data);

        if($entity_data['has_errors']) {
            // Form did not validate
            wp_send_json_error(array('message' => $entity_data['error_message']));
        }
        // Form has validated so we create the order
        $entity_data = WithdrawalAPI::do_create_entity($entity_data);
        // Process the results of the order creation
        if(!$entity_data['has_errors']) {
            // If the user is not logged in we
            // will redirect to the login page
            // else we redirect to the order details page
            if ($entity_data['requires_redirect']) {
                $redirect_url = $entity_data['redirect_url'];
            } else {
                $redirect_url = get_site_url() . '/page?type=entity&artifact=withdrawal&id=' . $entity_data['id'] . '&page_action=view';
            }
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => '<span>' . $entity_data['message'] . '</span>'));
        }
    }

    /**
     *
     */
    public static function build_entity_data_from_post(){
        $entity_data = array();
        // Process redirect
        $entity_data['requires_redirect'] = true;
        if (is_user_logged_in()) { 
            $entity_data['requires_redirect'] = false;
        } 
        // Extract the edit mode
        $entity_data['edit_mode'] = true;
        if (sanitize_text_field($_POST['edit_mode']) == 'edit') {
            $entity_data['edit_mode'] = false;
        }
        if($entity_data['edit_mode']){
            if (isset($_POST['entity_code']))
                $entity_data['entity_code'] = sanitize_text_field($_POST['entity_code']);
            if (isset($_POST['payment_service']))
                $entity_data['payment_service'] = sanitize_text_field($_POST['payment_service']);
            if (isset($_POST['amount']))
                $entity_data['amount'] = sanitize_text_field($_POST['amount']);
            if (isset($_POST['description']))
                $entity_data['description'] = sanitize_text_field($_POST['description']);
        }
        else {
            if (isset($_POST['id']))
                $entity_data['id'] = sanitize_text_field($_POST['id']);
            if (isset($_POST['entity_code']))
                $entity_data['entity_code'] = sanitize_text_field($_POST['entity_code']);
            if (isset($_POST['payment_service']))
                $entity_data['payment_service'] = sanitize_text_field($_POST['payment_service']);
            if (isset($_POST['amount']))
                $entity_data['amount'] = sanitize_text_field($_POST['amount']);
            if (isset($_POST['description']))
                $entity_data['description'] = sanitize_text_field($_POST['description']);
        }
        return $entity_data;
    }


    /**
     *
     */
    public static function validate_entity_data($entity_data) {
        if($entity_data['edit_mode']) {
            if (empty($entity_data['entity_code']) || empty($entity_data['payment_service']) || empty($entity_data['amount']) || empty($entity_data['description'])) {
                $entity_data['has_errors'] = true;
                $entity_data['error_message'] = 'Please provide all the information required to create this record';
            }
        }
        else {
            if (empty($entity_data['id'])  || empty($entity_data['entity_code']) || empty($entity_data['payment_service']) || empty($entity_data['amount']) || empty($entity_data['description'])) {
                $entity_data['has_errors'] = true;
                $entity_data['error_message'] = 'Please provide all the information required to update this record';
            }
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_entity($entity_data){

        if ($entity_data['edit_mode']) {
            // Create the order
            if(CloderiaServiceUtils::is_invalid_string($entity_data['entity_code'])) {
                $entity_data['entity_code'] = ContentSecurityAPI::get_token(8);
            }

            $status = ${entity.name}API::get_status_by_code('PENDING');
            $entity_data['status'] = $status->ID;
            
            WithdrawalAPI::copy_fields_to_post($entity_data);
            // Post information
            $post_information = array('post_title' => $entity_data['name'], 
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => 'sb_withdrawal', 'post_status' => 'publish');
            // Insert the entity into the database
            $entity_data['id'] = wp_insert_post($post_information, true);
            
        } else {
            WithdrawalAPI::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $post_information = array('ID' => $entity_data['id'], 
                'post_title' => $entity_data['name'],
                'post_content' => esc_attr($entity_data['name']), 
                'post_type' => 'sb_withdrawal', 'post_status' => 'publish');
            // Update the entity
            $entity_data['id'] = wp_update_post($post_information, true);
        }

        if(is_wp_error($entity_data['id'])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = $post_id->get_error_message();
        }
        return $entity_data;
    }



    /**
     *
     */
    public static function find_sb_withdrawal_ajax() {
        $current_user = wp_get_current_user();

        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => 'sb_withdrawal', 'meta_query' => array(array()));
        $count = 0;
        $searchResults = array();
        $entityQuery = new WP_Query($queryArgs);

        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            array_push($searchResults, WithdrawalAPI::entity_to_data($entity, false));
            $count++;
        endwhile;
        wp_reset_postdata();

        wp_send_json_success($searchResults);
    }

    /**
     *
     */
    public static function delete_sb_withdrawal_ajax() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && !isset($_POST['post_nonce_field']) && !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Invalid form operation!</span>"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "<span class='error'>Entity identifier missing</span>"));
        }
        $id = sanitize_text_field($_POST['id']);
        $post_obj = wp_delete_post($id);
       
        // Process the results of the order creation
        if ($post_obj) {
            $redirect_url = get_site_url() . '/page?type=entity&artifact=withdrawal&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => '<span>Error deleting entity</span>'));
        }
    }

    public static function get_status_by_code($status_code){
        // Load the status
        $status = array();
        $statusQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => 'sb_paystatus',
            'meta_query' => array(array('key' => 'entity_code', 'value' => $status_code)));
        $statusQuery = new WP_Query($statusQueryArgs);
        while ($statusQuery->have_posts()) : $statusQuery->the_post();
            $status = $statusQuery->post;
        endwhile;
        return $status;
    }

    /**
     *
     */
    public static function find_by_id($id){
        $entity_data = array();
        $post_obj = get_post($id);
        return WithdrawalAPI::entity_to_data($post_obj, false);
    }

    /**
     *
     */
    public static function entity_to_data($entity, $load_deps) {
        $entity_data = array();
        $entity_data['id'] = $entity->ID;
        $entity_data['entity_code'] = get_post_meta($entity->ID, 'entity_code', true);


        $related_entity_id = get_post_meta($entity->ID, 'owner', true);
        $entity_data['owner'] = $related_entity_id;
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['owner_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['owner_code'] = get_post_meta($related_entity->ID, 'entity_code', true);

        $related_entity_id = get_post_meta($entity->ID, 'payment_service', true);
        $entity_data['payment_service'] = $related_entity_id;
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['payment_service_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['payment_service_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
        $entity_data['name'] = get_post_meta($entity->ID, 'name', true);

        $entity_data['amount'] = get_post_meta($entity->ID, 'amount', true);

        $entity_data['withdrawal_date'] = get_post_meta($entity->ID, 'withdrawal_date', true);


        $related_entity_id = get_post_meta($entity->ID, 'payment_status', true);
        $entity_data['payment_status'] = get_post_meta($related_entity_id, 'payment_status', true);
        // Get the related post
        $related_entity = get_post($related_entity_id);
        $entity_data['payment_status_txt'] = get_post_meta($related_entity->ID, 'name', true);
        $entity_data['payment_status_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
        $entity_data['description'] = get_post_meta($entity->ID, 'description', true);

        return $entity_data;
        
    }

    /**
     *
     */
    public static function copy_fields_to_post($entity_data){
        // Add each array element into the POST array
        // This is required the custom post type persistence manager
        foreach ($entity_data as $field_name => $field_value) {
            $_POST[$field_name] = $field_value;
        }
    }

}
