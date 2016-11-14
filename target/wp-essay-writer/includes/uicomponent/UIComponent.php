<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class UIComponent extends AbstractUIComponent { 

    public $view;

    /**
     *
     */
    function __construct($view) {
        $this->view = $view;
        parent::__construct();
    }

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new UIComponentModel($this);
    }

    /**
     * Initialize the model for this component
     */
    public function get_view(){
        return $this->view;
    }

    /**
     */
    public function render(){
        $this->view->set_context_item($this->name . '-data', $this->get_model());
        do_action('shadowbanker_do_render_template', 'uicomponent/' . $this->template);
    }
}
?>