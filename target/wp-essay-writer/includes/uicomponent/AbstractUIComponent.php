<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AbstractUIComponent { 

    public $name;
    public $template;
    public $ui_model;
    public $description;

    /**
     *
     */
    function __construct() {
        $this->ui_model = $this->init_model();
    }

    /**
     *Initialize the model for this component
     */
    public function init_model(){
        return new AbstractUIComponentModel($this);
    }
    
    /**
     * Get the name of this component
     */
    public function get_name(){
        return $this->name;
    }

    /**
     * Set the name for this component
     */
    public function set_name($name){
        $this->name = $name;
    }
    
    /**
     * Get the description of this component
     */
    public function get_description(){
        return $this->description;
    }

    /**
     * Set the description for this component
     */
    public function set_description($description){
        $this->description = $description;
    }

    /**
     * Get the ui model this component
     */
    public function get_model(){
        return $this->ui_model->get_model();
    }

    /**
     * Set the template for this component
     */
    public function set_template($template){
        return $this->template = $template;
    }

    /**
     */
    public function render(){
        do_action('shadowbanker_do_render_template', $this->template);
    }
}
?>