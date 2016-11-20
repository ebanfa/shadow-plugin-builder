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
     * 
     */
    public static function init_hooks(){
        add_filter('wp_mail_from_name', array('AdminAPI', 'filter_from_name'));
        add_filter('wp_mail_content_type', array('AdminAPI', 'filter_content_type'));
    }

    /**
     * 
     */
    public static function filter_from_name($old_name){
        return get_bloginfo('name');
    }

    /**
     * 
     */
    public static function filter_content_type(){
        return 'text/html';
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

