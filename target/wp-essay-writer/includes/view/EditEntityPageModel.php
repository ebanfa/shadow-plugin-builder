<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class EditEntityPageModel extends EntityPortalPageModel { 

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        $entity_id = get_query_var(ArtifactRequestProcessor::$entity_id_query_var_key);

        if(null !== $entity_id){
            $this->model = EntityAPI::get_by_id($this->ui_component->get_artifact(), EntityStringUtils::decode_id($entity_id));
            if(!isset($this->model['id'])) 
                ArtifactRequestProcessor::do_artifact_request_error('The requested record was not found');
            $this->model['id'] = EntityStringUtils::encode_id($this->model['id']);
        }
        else ArtifactRequestProcessor::do_artifact_request_error('Invalid record identifier provided');
    }
    
}
?>