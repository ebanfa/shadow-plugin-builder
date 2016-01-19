<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentUserLoginAPI {

	public static function do_signin_user_ajax() {
	    if (!isset($_POST['signin_form_submitted']) && !isset($_POST['signin_form_nonce_field']) && !wp_verify_nonce($_POST['signin_form_nonce_field'], 'signin_form_submitted')) {
	        wp_send_json_error(array('message' => "Invalid form operation"));
	    }
	    if (!isset($_REQUEST['username']) || !isset($_REQUEST['password'])) {

	        wp_send_json_error(array('message' => "User name and password are required"));
	    }
	    $username = sanitize_text_field($_REQUEST['username']);
	    $password = sanitize_text_field($_REQUEST['password']);
	    // Attempt to sign the user in
	    $login_results = ContentUserLoginAPI::do_signin_user($username, $password);

	    if ($login_results['hasErrors']) {
	        wp_send_json_error(array('message' => $login_results['message']));
	    }
	    $content_user = $login_results['content_user'];
	    wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $content_user['redirect_url'] . "'</script>"));
	}
    
    /**
     *
     */
	public static function do_signup_user_ajax() {
	    if (isset($_POST['signup_form_submitted']) && isset($_POST['signup_form_nonce_field']) && wp_verify_nonce($_POST['signup_form_nonce_field'], 'signup_form_submitted')) {
	        //We shall sanitize all inputs  
	        $validation_errors = ContentUserLoginAPI::validate_signup_data();
	        if (!empty($upload_validation_errors)) {
	            wp_send_json_error(array('message' => $validation_errors));
	        }
	        $user_request_data = build_signup_data_from_request();

	        // Create the content user
	        $signin_results = ContentUserAPI::create_and_signin_user($user_request_data);
	        if ($signin_results['hasErrors']) {
	            wp_send_json_error(array('message' => $signin_results['message']));
	        }
	        $content_user = $signin_results['content_user'];
	        wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $content_user['redirect_url'] . "'</script>"));
	    }
	    else {
	        $message = "<span>Invalid form operation.</span>";
	        $return = array('message' => $message);
	        wp_send_json_error($return);
	    }
	}

	public static function validate_signup_data() {
	    $validation_errors = array();

	    if (!isset($_REQUEST['email']) || !isset($_REQUEST['password']) || !isset($_REQUEST['confirm_password']) || !isset($_REQUEST['user_class'])) {
	        $validation_errors['signup_info_error_msg'] = "Please provide all required information";
	        return $validation_errors;
	    }

	    $user_name = sanitize_text_field($_REQUEST['email']);
	    $password = sanitize_text_field($_REQUEST['password']);
	    $user_type = sanitize_text_field($_REQUEST['user_class']);
	    $confirm_password = sanitize_text_field($_REQUEST['confirm_password']);

	    if (($password != $confirm_password) || empty($password) || empty($confirm_password)) {
	        $validation_errors['signup_passwd_match_error_msg'] = 'Passwords do not match';
	    }
	    if (empty($user_name)) {
	        $validation_errors['signup_username_error_msg'] = 'Invalid username provided';
	    }
	    return $validation_errors;
	}

	public static function do_signin_user($username, $password) {
	    $login_data = array();
	    $login_data['user_login'] = $username;
	    $login_data['user_password'] = $password;

	    $user_verify = wp_signon($login_data, true);

	    if (is_wp_error($user_verify)) {
	        return array('hasErrors' => true,
	            'message' => "Invalid username or password. Please try again.");
	    } else {
	        wp_set_current_user($user_verify->ID);
	        wp_set_auth_cookie($user_verify->ID);
	        update_user_meta($user_verify->ID, 'online_status', 'ONLINE');
	        // Build the return
	        $content_user = array('user_login' => $username, 'user_password' => $password);
	        $content_user_type = get_user_meta($user_verify->ID, 'content_user_type', true);
	        // For those that somehow dont have a content_user_type
	        // we set the content user type to 'client'
	        if (empty($content_user_type) && current_user_can('administrator')) {
	            $content_user_type = 'client';
	            update_user_meta($user_verify->ID, 'content_user_type', $content_user_type);
	        }
	        $content_user['content_user_type'] = $content_user_type;
	        // Process redirect
	        if (isset($_POST['redirect_to'])) {
	            $content_user['redirect_url'] = $_POST['redirect_to'];
	        } else {
	            // Redirect to the relevant profile page based on user type
	            if ($content_user['content_user_type'] === 'client') {
	                $content_user['redirect_url'] = site_url() . '/content-user';
	            } else {
	                $content_user['redirect_url'] = site_url() . '/content-creator';
	            }
	        }
	        return array('hasErrors' => false, 'content_user' => $content_user);
	    }
	}
    

}
