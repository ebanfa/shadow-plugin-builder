<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${uiComponent.className}Model extends UIComponentModel { 

    /**
     * Process the model
     */
    public function process_model(){
    	$this->model = MenuAPI::get_menu_groups();
    }
}
?>