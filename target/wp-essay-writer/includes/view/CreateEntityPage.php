<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateEntityPage extends EntityPortalPage { 

    public $template = 'entity/create-entity-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new CreateEntityPageModel($this);
    }

    /**
     * 
     */
    public function get_artifact_url(){
        return $this->get_create_artifact_url();
    }

}
?>