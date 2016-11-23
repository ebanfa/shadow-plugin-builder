<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProfileEditorPage extends EditEntityPage { 

    public $template = 'page/profileeditor-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ProfileEditorPageModel($this);
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
    public function get_view_artifact_url(){
        $model = $this->get_model();
        return ArtifactRequestProcessorUtils::get_view_artifact_url('profiledisplay') . $model['id'];
    }
}
?>