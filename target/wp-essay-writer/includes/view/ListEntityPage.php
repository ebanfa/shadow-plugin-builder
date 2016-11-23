<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ListEntityPage extends EntityPortalPage { 

    public $template = 'entity/list-entity-page.php';
    public $additional_search_options = '';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ListEntityPageModel($this);
    }

    /**
     * 
     */
    public function get_artifact_url(){
        return $this->get_view_artifact_url();
    }
}
?>