<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class FundsService {
	/**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_withdraw_funds_ajax', 'FundsService::withdraw_funds_ajax');
        add_action('wp_ajax_nopriv_withdraw_funds_ajax', 'FundsService::withdraw_funds_ajax');

        add_action('wp_ajax_add_funds_ajax', 'FundsService::add_funds_ajax');
        add_action('wp_ajax_nopriv_add_funds_ajax', 'FundsService::add_funds_ajax');

        add_action('wp_ajax_send_funds_ajax', 'FundsService::send_funds_ajax');
        add_action('wp_ajax_nopriv_send_funds_ajax', 'FundsService::send_funds_ajax');
    }

    public static function withdraw_funds_ajax(){
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
        $post_obj = get_post(sanitize_text_field($_POST['id']));
        $status = WithdrawalAPI::get_status_by_code('PROCESSING');

        if(empty($status)){
            wp_send_json_error(array('message' => "<span class='error'>Invalid status</span>"));
        }

        update_post_meta($post_obj->ID, 'status', $status->ID);
        $redirect_url = get_site_url() . '/page?type=entity&artifact=withdrawal&page_action=view&id='. $post_obj->ID;
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));

    }

    public static function add_funds_ajax(){
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
        $post_obj = get_post(sanitize_text_field($_POST['id']));
        $status = DepositAPI::get_status_by_code('PROCESSING');

        if(empty($status)){
            wp_send_json_error(array('message' => "<span class='error'>Invalid status</span>"));
        }

        update_post_meta($post_obj->ID, 'status', $status->ID);
        $redirect_url = get_site_url() . '/page?type=entity&artifact=deposit&page_action=view&id='. $post_obj->ID;
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));

    }

    public static function send_funds_ajax(){
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
        $post_obj = get_post(sanitize_text_field($_POST['id']));
        $status = PaymentAPI::get_status_by_code('PROCESSING');

        if(empty($status)){
            wp_send_json_error(array('message' => "<span class='error'>Invalid status</span>"));
        }

        update_post_meta($post_obj->ID, 'status', $status->ID);
        $redirect_url = get_site_url() . '/page?type=entity&artifact=payment&page_action=view&id='. $post_obj->ID;
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));

    }
}
?>