<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class DashboardMetricsTable extends UIComponent { 

    public $template = 'dashboard-metrics-table.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new DashboardMetricsTableModel($this);
    }
}
?>