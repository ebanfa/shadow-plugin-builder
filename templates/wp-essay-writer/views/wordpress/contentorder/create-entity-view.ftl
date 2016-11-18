<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Create${entity.name}Page extends CreateEntityPage { 

    public $template = 'entity/${entity.name?lower_case}/create-${entity.name?lower_case}-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new Create${entity.name}PageModel($this);
    }

}
?>