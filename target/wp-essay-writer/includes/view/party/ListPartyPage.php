<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ListPartyPage extends ListEntityPage { 

    public $template = 'entity/party/party-archive.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ListPartyPageModel($this);
    }

    /**
     * 
     */
    public function get_role(){
        return $this->ui_model->get_role();
    }
}
?>