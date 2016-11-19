<?php
/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
} ?>

<?php do_action('shadowbanker_do_render_component', 'portal-header'); ?>
<?php do_action('shadowbanker_do_render_component', 'portal-menu'); ?>
<?php do_action('shadowbanker_do_render_component', 'portal-footer'); ?>