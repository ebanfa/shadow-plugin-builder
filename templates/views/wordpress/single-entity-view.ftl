<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SingleEntityView extends BaseEntityView { 

	/**
     *
     */
    function __construct() {
        parent::__construct();
        if (isset($_REQUEST['id'])) {
        	
    	}
    }

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        $artifact_data = ArtifactUtils::$artifacts[$this->artifact];
        if($artifact_data['artifact_type'] == 'entity' && isset($_REQUEST['id'])) {
            $this->model = EntityAPI::get_by_id($this->get_artifact_name(), sanitize_text_field($_REQUEST['id']));
        }
    }

    /**
     * Render this view
     */
    public function render_impl() {
        // execute default render operation
        CloderiaUIDisplayAPI::display_single_entity($_REQUEST['page_info']);
    }
}

?>