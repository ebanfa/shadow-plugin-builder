<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ListPartyPageModel extends ListEntityPageModel { 

    private $default_image = '/images/user.png';
    
 	/**
     * Process the load the model for this artifact
     */
    public function process_model() {
    	parent::process_model();

        if(!in_array($this->get_role(), array('tutor', 'student')))
            ArtifactRequestProcessor::do_artifact_request_error('Invalid user classification');

    	$role_type = EntityAPI::get_by_code('roletype', $this->get_role());
    	if($role_type['id']) {
    		$this->ui_component->page_name = $role_type['name'];
            $this->model = PartyRoleAPI::find_by_role($role_type['entity_code']);
    	}
        else {
            $this->model = array();
        }
        $this->load_party_data();
        $this->model = EntityStringUtils::encode_ids($this->model);
    }

    /**
     * 
     */
    public function load_party_data() {
        foreach ($this->model as $key => $model_data) {
            $model_data['image_url'] =  WPEssayWriter::plugin_url() . $this->default_image;
            $image_data = EntityAPI::get_by_field('partyimage', 'file_party', $model_data['id']);
            if(isset($image_data['id'])) $model_data['image_url'] = $image_data['file_url'];

            $this->model[$key] = $model_data;
        }
    }

    /**
     * 
     */
    public function get_role() {
        return get_query_var('role');
    }
    
}
?>