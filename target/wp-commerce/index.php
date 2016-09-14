<?php
/*
Plugin Name: WPCommerce
Plugin URI: http://wordpress.org/plugins/shadow-banker/
Description: WP Commerce Plugin. 
Author: Edward Banfa
Version: 0.9
Author URI: 
*/
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
// For composer dependencies
require 'vendor/autoload.php';
// Main Plugin Class
include_once('WPCommerce.php');

/*
 * Actions
 */
// Construct the plugin on WP load.
add_action('init', 'WPCommerce::initialize');
// Add custom meta boxes
add_action('admin_menu', 'CloderiaCustomPostTypesUtils::create_meta_box' );
// Register new post type 'content_order'
add_action('init', 'CloderiaCustomPostTypesUtils::register_custom_post_type');
// Register action to save custom fields
add_action('save_post', 'CloderiaCustomPostTypesUtils::save_custom_fields', 1, 2 );
// Remove WordPress default custom field handling
add_action('do_meta_boxes', 'CloderiaCustomPostTypesUtils::remove_default_custom_fields', 10, 3 );
// Register action to create the admin menu
add_action('admin_menu', 'CloderiaMenuUtils::create_admin_menu');
// Register action to create the admin settings page link
add_filter('plugin_action_links_wp-commerce/index.php', 'CloderiaMenuUtils::add_plugin_settings_link', 10, 2 );

/* -------------- Shadow Email filters --------------- */
add_filter('wp_mail_from', 'new_mail_from');
add_filter('wp_mail_from_name', 'new_mail_from_name');
add_filter('wp_mail_content_type', 'set_html_content_type' );

function new_mail_from($old) {
 return get_option('cp_notify_accounts');
}

function new_mail_from_name($old) {
 return get_bloginfo('name');
}

function set_html_content_type() {
return 'text/html';
}
/*EOF*/