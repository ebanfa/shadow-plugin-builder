<?php

/**
 * 
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class UIDisplayAPI {


    public static function sb_get_template($template_name) {
        cp_get_template($template_name);
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
            cp_get_template('entity/single.php');
        }
    }
        
    public static function display_entity_create_form($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-create-form.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/create-form.php');
        }
    }

    public static function display_entity_edit_form($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-edit-form.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/edit-form.php');
        }
    }

    public static function display_entity_archive($page_info) {
        $artifact = sanitize_text_field($page_info['artifact']);
        $custom_artifact_template = 'entity/' . $artifact . '/'. $artifact. '-archive.php';

        if(cp_template_exists($custom_artifact_template)){
            cp_get_template($custom_artifact_template);
        } else {
            cp_get_template('entity/list.php');
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

    public static function render_entity_form_fields() {
        cp_get_template('entity/entity-form-fields.php');
    }

    public static function before_entity_form_field() {
        cp_get_template('entity/field-wrapper-start.php');
    }
    
    public static function after_entity_form_field() {
        cp_get_template('entity/field-wrapper-end.php');
    }

    public static function render_related_entity_field_modals() {
        cp_get_template('entity/related-entity-field-modals.php');
    }

    public static function render_multi_entity_create_view() {
        cp_get_template('entity/multi-entity-create-form.php');
    }


}

