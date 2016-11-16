<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class DashboardMetricsChart extends UIComponent { 

    public $template = 'dashboard-metrics-chart.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new DashboardMetricsChartModel($this);
    }
}
?>