<?php
/*
Plugin Name: ${application.name}
Plugin URI: http://wordpress.org/plugins/shadow-banker/
Description: ${application.description}. 
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
include_once('${application.name}.php');

/*
 * Construct the plugin on WP load.
 */
add_action('init', '${application.name}::initialize');

/*EOF*/