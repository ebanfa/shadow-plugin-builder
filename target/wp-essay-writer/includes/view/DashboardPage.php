<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class DashboardPage extends PortalPage { 
    public $name = 'Dashboard';
    public $description = 'Dashboard';
    public $template = 'page/dashboard-page.php';
}
?>