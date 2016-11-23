<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PasswordPage extends AbstractPage { 
    public $name = 'Password';
    public $description = 'Signin';
    public $template = 'page/password-page.php';
}
?>