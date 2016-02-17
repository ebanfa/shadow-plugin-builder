<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ViewController {

    /**
     *
     */
    public static function init_hooks() {
        
    }

    /**
     *
     */
    public static function filter_form_fields($form_fields) {
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_title($title) {
        return $title;
    }

    /**
     *
     */
    public static function filter_view_action_title($title) {
        return $title;
    }

    /**
     *
     */
    public static function filter_view_action_description($description) {
        return $description;
    }

}

?>