<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AbstractUIComponentModel { 

    public $model;
    public $ui_component;

    /**
     *
     */
    function __construct($ui_component) {
        $this->ui_component = $ui_component;
        $this->process_model();
    }

    /**
     * Process the model
     */
    public function process_model(){}

    /**
     * Get the model this component
     */
    public function get_model(){
        return $this->model;
    }

    /**
     * Set the model for this component
     */
    public function set_model($model){
        $this->model = $model;
    }

    /**
     * Get the ui component this component
     */
    public function get_ui_component(){
        return $this->ui_component;
    }

    /**
     * Set the ui component for this component
     */
    public function set_ui_component($model){
        $this->ui_component = $ui_component;
    }
}
?>