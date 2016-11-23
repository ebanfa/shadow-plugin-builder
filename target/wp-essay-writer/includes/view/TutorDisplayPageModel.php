<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorDisplayPageModel extends ViewPartyPageModel { 

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
    }
    /**
     * 
     */
    public function is_entity($artifact_name) {
        return true;
    }
}
?>