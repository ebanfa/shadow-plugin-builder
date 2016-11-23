<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AbstractPage extends AbstractUIComponent { 

    public $tabs;
    public $context;
    public $page_name;
    public $page_description;
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new AbstractPageModel($this);
    }
    
    /**
     * Get the page name
     */
    public function get_page_name() {
       return $this->page_name;
    }

    /**
     * Get the page description
     */
    public function get_page_description() {
       return $this->page_description;
    }

    /**
     * Get the ui context of this component
     */
    public function get_context(){
        return $this->context;
    }

    /**
     * Set the ui context for this component
     */
    public function set_context($context){
        $this->context = $context;
    }

    /**
     * Get a context item for this component
     */
    public function get_context_item($key){
        if(isset($this->context[$key]))
            return $this->context[$key];
        return null;
    }

    /**
     * Set a context item for this component
     */
    public function set_context_item($key, $value){
        $this->context[$key] = $value;
    }

    /**
     * Get the action links for this page
     */
    public function get_tabs(){
        return $this->tabs;
    }
}
?>