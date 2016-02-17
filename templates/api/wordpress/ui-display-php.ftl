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

    public static function display_page($page_info){
        cp_get_template('page/'. $page_info['artifact'] .'.php');
    }

    public static function display_entity_page(){
        cp_get_template('entity/entity-page.php');
    }

    public static function display_single_entity($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/single-'. $artifact .'.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/single-entity-form.php');
        }
    }
        
    public static function display_entity_create_form($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-create-form.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/entity-create-form.php');
        }
    }

    public static function display_entity_edit_form($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-edit-form.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/entity-edit-form.php');
        }
    }

    public static function display_entity_archive($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-archive.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/entity-archive.php');
        }
    }

    public static function before_artifact_content() {
        cp_get_template('entity/artifact-wrapper-start.php');
    }
    
    public static function the_artifact_content($view) {
        $view->render();
    }
    
    public static function after_artifact_content() {
        cp_get_template('entity/artifact-wrapper-end.php');
    }


    public static function render_create_form() {
        cp_get_template('entity/create-form.php');
    }

    public static function render_edit_form() {
        cp_get_template('entity/edit-form.php');
    }

    public static function render_single() {
        cp_get_template('entity/single.php');
    }

    public static function render_list() {
        cp_get_template('entity/list.php');
    }
    
    

}

