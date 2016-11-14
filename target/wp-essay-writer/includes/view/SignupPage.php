<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class SignupPage extends AbstractPage { 
    public $name = 'Signup';
    public $description = 'Signup';
    public $template = 'page/signup-page.php';
}
?>