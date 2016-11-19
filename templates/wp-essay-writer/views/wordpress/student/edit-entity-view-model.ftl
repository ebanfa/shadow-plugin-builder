<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class StudentEditorPageModel extends EditEntityPageModel { 

     /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        $id = EntityStringUtils::decode_id($this->model['id']);
        $this->model = StudentAPI::get_by_id($id);
        $this->model['id'] = EntityStringUtils::encode_id($this->model['id']);
    }

    /**
     * 
     */
    public function is_entity($artifact_name) {
        return true;
    }
}
?>