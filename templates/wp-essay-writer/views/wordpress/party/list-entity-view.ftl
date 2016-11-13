<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ListPartyPage extends EntityPortalPage { 

    public $template = 'entity/party/party-archive.php';
    public $additional_search_options = '';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ListPartyPageModel($this);
    }

    /**
     * Initialize the model for this component
     */
    public function get_role(){
        return get_query_var('role');
    }
}
?>