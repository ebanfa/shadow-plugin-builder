<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class List${entity.name}PageModel extends ListEntityPageModel { 

 	/**
     * Process the load the model for this artifact
     */
    public function process_model() {
    	parent::process_model();
    	$role_type = EntityAPI::get_by_code('roletype', $this->ui_component->get_role());
    	if($role_type['id']) {
    		$this->ui_component->page_name = $role_type['name'];
            $this->model = PartyRoleAPI::find_by_role($role_type['entity_code']);
    	}
        else {
            $this->model = EntityAPI::find_by_criteria('party', array());
        }
        $this->model = EntityStringUtils::encode_ids($this->model);
    }
    
}
?>