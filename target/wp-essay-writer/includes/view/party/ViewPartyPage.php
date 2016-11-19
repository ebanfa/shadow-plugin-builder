<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ViewPartyPage extends ViewEntityPage { 

    public $template = 'entity/party/single-party-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ViewPartyPageModel($this);
    }

    /**
     * 
     */
    public function can_edit_profile() {
        return $this->ui_model->can_edit_profile();
    }

    /**
     * 
     */
    public function can_rate_party() {
        return $this->ui_model->can_rate_party();
    }

    /**
     * 
     */
    public function can_deactive_account() {
        return $this->ui_model->can_deactive_account();
    }
}
?>