<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProfileDisplayPageModel extends ViewPartyPageModel { 

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        $party_data = UserPartyAPI::get_current_user_party();

        if(isset($party_data['id'])){
            //$this->model = EntityAPI::get_by_id($this->ui_component->get_artifact(), $party_data['id']);
            $this->model = StudentAPI::get_by_id($party_data['id']);
            if(!isset($this->model['id'])) 
                ArtifactRequestProcessor::do_artifact_request_error('The requested record was not found');
            $this->model['id'] = EntityStringUtils::encode_id($this->model['id']);
        }
        else ArtifactRequestProcessor::do_artifact_request_error('Invalid record identifier provided');
    }
    /**
     * 
     */
    public function is_entity($artifact_name) {
        return true;
    }
}
?>