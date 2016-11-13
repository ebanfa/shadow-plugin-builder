<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EnqueueUtils {

    /**
     */
    public static function init_hooks() {
        add_action('wp_enqueue_scripts', 'EnqueueUtils::enqueue_resources');
    }

    /**
     */
    public static function enqueue_resources() {
        $page_type = get_query_var(ArtifactRequestProcessor::$page_type_query_var_key);
        if($page_type !== ArtifactRequestProcessor::$page_type_frontend) {
            EnqueueUtils::enqueue_portal_styles();
            EnqueueUtils::enqueue_portal_scripts();
        }
    }
    
    /**
     * Load plugin CSS stylesheets
     */
    public static function enqueue_portal_styles() {
        $js_path = WPEssayWriter::plugin_url() . '/js/';
        $css_path = WPEssayWriter::plugin_url() . '/css/';

        wp_register_style('fullcalendar_css', $js_path . 'vendors/bower_components/fullcalendar/dist/fullcalendar.min.css');
        wp_register_style('animate_css', $js_path . 'vendors/bower_components/animate.css/animate.min.css');
        wp_register_style('sweet_alert_css', $js_path . 'vendors/bower_components/bootstrap-sweetalert/lib/sweet-alert.css');
        wp_register_style('iconic_css', $js_path . 'vendors/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css');
        wp_register_style('mCustomScrollbar_css', $js_path . 'vendors/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css');  
        wp_register_style('datetimepicker_css', $js_path . 'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');      
        wp_register_style('app_one_css', $css_path . 'app.min.1.css');
        wp_register_style('app_two_css', $css_path . 'app.min.2.css');

        wp_enqueue_style('fullcalendar_css');
        wp_enqueue_style('animate_css');
        wp_enqueue_style('sweet_alert_css');
        wp_enqueue_style('iconic_css');
        wp_enqueue_style('mCustomScrollbar_css');
        wp_enqueue_style('datetimepicker_css');
        wp_enqueue_style('app_one_css');
        wp_enqueue_style('app_two_css');
    }

    /**
     * Load plugin Javascripts
     */
    public static function enqueue_portal_scripts() {
        $js_path = WPEssayWriter::plugin_url() . '/js/';

        wp_deregister_script('jquery');
        wp_register_script('jquery', $js_path . 'vendors/bower_components/jquery/dist/jquery.min.js', false, '2.1.4');

        wp_register_script('bootstrap_js', $js_path . 'vendors/bower_components/bootstrap/dist/js/bootstrap.min.js', array('jquery'), true);


        wp_register_script('jquery_form_js', $js_path . 'jquery.form.min.js', array('jquery'), true);
        wp_register_script('bootstrap_tabdrop_js', $js_path . 'bootstrap-tabdrop.js', array('jquery'), true);
        wp_register_script('datatables_core_js', $js_path . 'jquery.dataTables.min.js', array('jquery'), true);
        wp_register_script('datatables_bootstrap_js', $js_path . 'dataTables.bootstrap.js', array('jquery'), true);
        wp_register_script('bootstrap_validator_js', $js_path . 'bootstrapValidator.min.js', array('jquery'), true);
        //wp_register_script('datetimepicker_js', $js_path . 'vendors/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js', array('jquery'), true);



        wp_register_script('flot_js', $js_path . 'vendors/bower_components/flot/jquery.flot.js', array('jquery'), true);
        wp_register_script('flot_resize_js', $js_path . 'vendors/bower_components/flot/jquery.flot.resize.js', array('jquery'), true);
        wp_register_script('flot_pie_js', $js_path . '/vendors/bower_components/flot/jquery.flot.pie.js', array('jquery'), true);
        wp_register_script('curvedLines_js', $js_path . 'vendors/bower_components/flot.curvedlines/curvedLines.js', array('jquery'), true);
        wp_register_script('sparkline_js', $js_path . 'vendors/sparklines/jquery.sparkline.min.js', array('jquery'), true);
        wp_register_script('easy_js', $js_path . 'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js', array('jquery'), true);
        wp_register_script('moment_js', $js_path . 'vendors/bower_components/moment/min/moment.min.js', array('jquery'), true);
        wp_register_script('fullcalendar_js', $js_path . 'vendors/bower_components/fullcalendar/dist/fullcalendar.min.js', array('jquery'), true);
        wp_register_script('simpleWeather_js', $js_path . 'vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js', array('jquery'), true);
        wp_register_script('waves_js', $js_path . 'vendors/bower_components/Waves/dist/waves.min.js', array('jquery'), true);
        wp_register_script('bootstrap_growl_js', $js_path . 'vendors/bootstrap-growl/bootstrap-growl.min.js', array('jquery'), true);
        wp_register_script('sweet_alert_js', $js_path . 'vendors/bower_components/bootstrap-sweetalert/lib/sweet-alert.min.js', array('jquery'), true);
        wp_register_script('scrollbar_js', $js_path . 'vendors/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js', array('jquery'), true);
        wp_register_script('curved_line_js', $js_path . 'flot-charts/curved-line-chart.js', array('jquery'), true);
        wp_register_script('line_chart_js', $js_path . 'flot-charts/line-chart.js', array('jquery'), true);
        wp_register_script('charts_js', $js_path . 'charts.js', array('jquery'), true);
        wp_register_script('datetimepicker_js', $js_path . 'vendors/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', array('jquery'), true);
        wp_register_script('input_mask_js', $js_path . 'jquery.mask.min.js', array('jquery'), true);
        wp_register_script('entity_mask_js', $js_path . 'entity-input-mask.js', array('jquery'), true);

        wp_register_script('functions_js', $js_path . 'functions.js', array('jquery'), true);
        wp_register_script('demo_js', $js_path . 'demo.js', array('jquery'), true);

        // Enqueue our scripts
        wp_enqueue_script('bootstrap_js');
        wp_enqueue_script('jquery_form_js');
        wp_enqueue_script('bootstrap_tabdrop_js');
        wp_enqueue_script('datatables_core_js');
        wp_enqueue_script('datatables_bootstrap_js');
        wp_enqueue_script('bootstrap_validator_js');

        wp_enqueue_script('flot_js');
        wp_enqueue_script('flot_resize_js');
        wp_enqueue_script('flot_pie_js');
        wp_enqueue_script('curvedLines_js');
        wp_enqueue_script('sparkline_js');
        wp_enqueue_script('easy_js');
        wp_enqueue_script('moment_js');
        wp_enqueue_script('fullcalendar_js');
        wp_enqueue_script('simpleWeather_js');
        wp_enqueue_script('waves_js');
        wp_enqueue_script('bootstrap_growl_js');
        wp_enqueue_script('sweet_alert_js');
        wp_enqueue_script('scrollbar_js');
        wp_enqueue_script('curved_line_js');
        wp_enqueue_script('line_chart_js');
        wp_enqueue_script('charts_js');
        wp_enqueue_script('datetimepicker_js');
        wp_enqueue_script('input_mask_js');
        wp_enqueue_script('entity_mask_js');
        wp_enqueue_script('functions_js');
        wp_enqueue_script('demo_js');
    }
}

?>