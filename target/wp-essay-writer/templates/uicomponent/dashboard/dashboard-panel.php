<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
?>

<div class="row">
    <div class="col-sm-12 col-md-6">
        <?php do_action('shadowbanker_do_render_component', 'dashboard-metrics-table'); ?>
    </div>
    <div class="col-sm-12 col-md-6">
        <?php do_action('shadowbanker_do_render_component', 'dashboard-metrics-chart'); ?>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $('#dashboard-metrics-chart').height($('#dashboard-metrics-table').height());
    });
</script>