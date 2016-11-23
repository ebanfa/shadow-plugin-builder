<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ViewEntityPage extends EntityPortalPage { 

    public $template = 'entity/view-entity-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ViewEntityPageModel($this);
    }

    /**
     * Get the action links for this page
     */
    public function get_edit_artifact_url(){
        $model = $this->get_model();
        return parent::get_edit_artifact_url() . $model['id'];
    }

    /**
     * 
     */
    public function get_artifact_url(){
        $model = $this->get_model();
        return $this->get_view_artifact_url() . $model['id'];
    }
}
?>