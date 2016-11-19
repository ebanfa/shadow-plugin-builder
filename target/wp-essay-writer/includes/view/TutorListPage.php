<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorListPage extends ListPartyPage { 

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new TutorListPageModel($this);
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
    public function get_view_artifact_url() {
        return ArtifactRequestProcessorUtils::get_view_artifact_url('tutordisplay');
    }
}
?>