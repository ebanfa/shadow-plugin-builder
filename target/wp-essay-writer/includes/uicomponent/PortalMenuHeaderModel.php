<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalMenuHeaderModel extends UIComponentModel { 

    /**
     * Process the model
     */
    public function process_model(){
    	$this->model = MenuAPI::get_header_data();
    }
}
?>