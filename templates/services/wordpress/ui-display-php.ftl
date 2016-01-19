<?php

/**
 * 
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CloderiaUIDisplayAPI {

    public static function before_main_content() {
        cp_get_template('wrapper-start.php');
    }
    
    public static function after_main_content() {
        cp_get_template('wrapper-end.php');
    }


    public static function display_app_menu() {
        cp_get_template('app-menu.php');
    }
    
    public static function before_app_menu() {
        cp_get_template('app-menu-start.php');
    }

    public static function after_app_menu() {
        cp_get_template('app-menu-end.php');
    }
    
    public static function show_notification_items() {
        cp_get_template('page/notification-items.php');
    }
    
    public static function show_user_conversations() {
        cp_get_template('page/user-conversations.php');
    }

    public static function show_latest_user_conversation(){
	cp_get_template('page/latest-user-conversation.php');
    }

    public static function display_page($page_name){
        cp_get_template('page/'. $page_name .'.php');
    }

    public static function display_entity_page(){
        cp_get_template('entity/entity-page.php');
    }

    public static function display_single_entity($post_type) {
        cp_get_template('entity/' . $post_type . '/single-'. $post_type .'.php');
    }
        
    public static function display_entity_create_form($post_type) {
        cp_get_template('entity/' . $post_type . '/'. $post_type. '-create-form.php');
    }

    public static function display_entity_edit_form($post_type) {
        cp_get_template('entity/' . $post_type . '/'. $post_type. '-edit-form.php');
    }

    public static function display_entity_archive($post_type) {
        cp_get_template('entity/' . $post_type . '/'. $post_type. '-archive.php');
    }

    public static function before_entity_form() {
        cp_get_template('entity/form-wrapper-start.php');
    }
    
    public static function after_entity_form() {
        cp_get_template('entity/form-wrapper-end.php');
    }
    
    public static function entity_form_start() {
        cp_get_template('entity/entity-form-start.php');
    }
    
    public static function entity_form_end() {
        cp_get_template('entity/entity-form-end.php');
    }
    
    public static function before_entity_form_field() {
        cp_get_template('entity/field-wrapper-start.php');
    }
    
    public static function after_entity_form_field() {
        cp_get_template('entity/field-wrapper-end.php');
    }

    public static function before_single_entity() {
        cp_get_template('entity/entity-single-start.php');
    }
    
    public static function after_single_entity() {
        cp_get_template('entity/entity-single-end.php');
    }

    public static function before_list_entity() {
        cp_get_template('entity/entity-list-start.php');
    }
    
    public static function after_list_entity() {
        cp_get_template('entity/entity-list-end.php');
    }
    

}

