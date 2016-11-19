<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class StudentDisplayPage extends ViewPartyPage { 

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new StudentDisplayPageModel($this);
    }
    
    /**
     * 
     */
    public function get_artifact(){
        return 'party';
    }

    /**
     * 
     */
    public function get_edit_artifact_url(){
        $model = $this->get_model();
        return ArtifactRequestProcessorUtils::get_edit_artifact_url('studenteditor') . $model['id'];
    }
}
?>