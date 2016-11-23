<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ViewContentOrderPage extends ViewEntityPage { 

    public $template = 'entity/contentorder/single-contentorder-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ViewContentOrderPageModel($this);
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