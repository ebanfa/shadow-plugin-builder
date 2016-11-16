<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EditEntityPage extends EntityPortalPage { 

    public $template = 'entity/edit-entity-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new EditEntityPageModel($this);
    }

    /**
     * 
     */
    public function get_artifact_url(){
    	$model = $this->get_model();
        return $this->get_edit_artifact_url() . $model['id'];
    }
}
?>