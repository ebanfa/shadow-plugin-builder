<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalMenuMainModel extends UIComponentModel { 

    /**
     * Process the model
     */
    public function process_model(){
    	if (is_user_logged_in()) {
    		$this->model = MenuAPI::get_menu_groups();
    	}
    }
}
?>