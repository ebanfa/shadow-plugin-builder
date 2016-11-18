<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class AdminAPI {

    /**
     * Action function to setup Ajax
     */
    public static function do_ajax_setup() {
        /*wp_enqueue_script('${application.name?lower_case}_ajax', plugins_url('/js/init.js', __FILE__) . '/js/blitzdocument-ajax.js', array('jquery'), true);
        wp_localize_script('${application.name?lower_case}_ajax', '${application.name?lower_case}_ajax_script', 
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'factor'=> get_option('cp_price_factor'),
            )
        );*/
    }

    /**
     * Action function to remove the admin bar for
     * non admin users
     */
    public static function do_remove_admin_bar() {
        if (!current_user_can('administrator') && !is_admin()) {
            show_admin_bar(false);
        }
    }

}

