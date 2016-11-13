<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${page.name}Page extends PortalPage { 
    public $name = '${page.name}';
    public $description = '${page.description}';
    public $template = 'page/${page.name?lower_case}-page.php';
}
?>