<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ListPartyPageModel extends ListEntityPageModel { 

 	/**
     * Process the load the model for this artifact
     */
    public function process_model() {
    	parent::process_model();
    	$role_type = EntityAPI::get_by_code('roletype', $this->ui_component->get_role());
    	if($role_type['id']) {
    		$this->ui_component->page_name = $role_type['name'];
    	}
    }
    
}
?>