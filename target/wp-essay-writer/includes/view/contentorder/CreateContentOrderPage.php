<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateContentOrderPage extends CreateEntityPage { 

    public $template = 'entity/contentorder/create-contentorder-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new CreateContentOrderPageModel($this);
    }

}
?>