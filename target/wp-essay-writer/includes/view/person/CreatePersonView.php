<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePersonView extends MultiEntityCreateView {


    /**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     *
     */
    function get_tabs() {
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            if($role == 'tutor') return self::get_tutor_tabs();
            if($role == 'student') return self::get_student_tabs();
        }
        else {
            return self::get_default_tabs();
        }
    }

    /**
     *
     */
    function get_tutor_tabs() {
        $default_tabs = self::get_default_tabs();
        return $default_tabs;
    }
    
    /**
     *
     */
    function get_student_tabs() {
        $default_tabs = self::get_default_tabs();
        return $default_tabs;
    }

    /**
     *
     */
    function get_default_tabs() {
        return array();
    }


}

?>