<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EditContentOrderPage extends EditEntityPage { 

    public $template = 'entity/contentorder/edit-contentorder-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new EditContentOrderPageModel($this);
    }

}
?>