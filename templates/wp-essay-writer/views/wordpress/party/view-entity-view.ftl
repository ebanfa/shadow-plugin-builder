<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class View${entity.name}Page extends ViewEntityPage { 

    public $template = 'entity/${entity.name?lower_case}/single-${entity.name?lower_case}-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new View${entity.name}PageModel($this);
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