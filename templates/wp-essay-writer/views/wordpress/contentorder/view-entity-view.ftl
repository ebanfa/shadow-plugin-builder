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
    public function get_content_files(){
        return $this->ui_model->get_content_files();
    }

    /**
     * 
     */
    public function is_fully_paid(){
        return $this->ui_model->is_fully_paid();
    }
    
    /**
     * 
     */
    public function is_pending_payment(){
        return $this->ui_model->is_pending_payment();
    }
    
    /**
     * 
     */
    public function get_outstanding_amount(){
        return $this->ui_model->get_outstanding_amount();
    }
}
?>