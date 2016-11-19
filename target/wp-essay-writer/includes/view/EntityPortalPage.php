<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EntityPortalPage extends PortalPage { 
	
    /**
     * 
     */
    public function get_related_form_field_model($artifact_name) {
        return $this->ui_model->get_related_form_field_model($artifact_name);
    }
	
}
?>