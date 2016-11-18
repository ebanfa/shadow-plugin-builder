<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Edit${entity.name}Page extends EditEntityPage { 

    public $template = 'entity/${entity.name?lower_case}/edit-${entity.name?lower_case}-page.php';
    
    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new Edit${entity.name}PageModel($this);
    }

}
?>