<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class LoanApplicationService {
    
    /**
     *
     */
    public static function init_ajax_hooks() {
        add_action('wp_ajax_publish_application_ajax', 'LoanApplicationService::publish_application_ajax');
        add_action('wp_ajax_nopriv_publish_application_ajax', 'LoanApplicationService::publish_application_ajax');
    }

	public static function publish_application_ajax(){
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
        $status = ApplicationAPI::get_status_by_code('PUBLISHED');

        if(empty($status)){
            wp_send_json_error(array('message' => "<span class='error'>Invalid status</span>"));
        }

        update_post_meta($post_obj->ID, 'status', $status->ID);
        $redirect_url = get_site_url() . '/page?type=entity&artifact=application&page_action=view&id='. $post_obj->ID;
        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));

    }

    /**
     *
     */
    public static function get_loan_feed(){
        // The username is currently not being used, but
        // in the ideal situation, the feed should be customized for 
        // the user, hence the username should act as a filter
        $current_user = wp_get_current_user();
        $current_user_login = $current_user->user_login;
         // Load all loans that are of status PUBLISHED
        $loan_feed = array();
        // First we load status with code PUBLISHED
        $status = ApplicationAPI::get_status_by_code('PUBLISHED');
        // Then find all applications with the status id
        $feedQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => 'sb_application',
            'meta_query' => array(array('key' => 'status', 'value' => $status['id'])));
        $feedQuery = new WP_Query($feedQueryArgs);
        while ($feedQuery->have_posts()) : $feedQuery->the_post();
            $application = $feedQuery->post;
            $entity_data = ApplicationAPI::entity_to_data($application, false);
            array_push($loan_feed, $entity_data);
        endwhile;
        return $loan_feed;
    }

}
?>
