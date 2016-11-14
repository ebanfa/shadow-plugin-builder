<?php
/*
Plugin Name: WPEssayWriter
Plugin URI: http://wordpress.org/plugins/shadow-banker/
Description: WP Essay Writer. 
Author: Edward Banfa
Version: 0.5.0
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
 * Construct the plugin on WP load.
 */
add_action('init', 'WPEssayWriter::initialize');

/*EOF*/