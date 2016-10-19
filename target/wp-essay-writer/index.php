<?php
/*
Plugin Name: WPEssayWriter
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
include_once('WPEssayWriter.php');

/*
 * Actions
 */
// Construct the plugin on WP load.
add_action('init', 'WPEssayWriter::initialize');
// Add custom meta boxes
add_action('admin_menu', 'CustomPostTypesUtils::create_meta_box' );
// Register new post type 'content_order'
add_action('init', 'CustomPostTypesUtils::register_custom_post_type');
// Register action to save custom fields
add_action('save_post', 'CustomPostTypesUtils::save_custom_fields', 1, 2 );
// Remove WordPress default custom field handling
add_action('do_meta_boxes', 'CustomPostTypesUtils::remove_default_custom_fields', 10, 3 );
// Register action to create the admin menu
add_action('admin_menu', 'MenuUtils::create_admin_menu');
// Register action to create the admin settings page link
add_filter('plugin_action_links_wp-essay-writer/index.php', 'MenuUtils::add_plugin_settings_link', 10, 2 );

/* -------------- Shadow Email filters --------------- */
add_filter('wp_mail_from_name', 'new_mail_from_name');
add_filter('wp_mail_content_type', 'set_html_content_type' );

function set_html_content_type() {return 'text/html'; }
function new_mail_from_name($old) { return get_bloginfo('name'); }
/*EOF*/