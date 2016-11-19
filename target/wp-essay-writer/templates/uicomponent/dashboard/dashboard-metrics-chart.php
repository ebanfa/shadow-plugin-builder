<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $page_context = $view->get_context();
    $metrics_data = $page_context['dashboard-metrics-table-data']['metrics'];
?>
<div id="dashboard-metrics-chart" class="card">
    <div class="card-header">
        <h2>Performance Chart</h2>
        <ul class="actions">
            <li class="dropdown">
                <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                    <i class="zmdi zmdi-more-vert"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a href="widget-templates.html">Refresh</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="card-body card-padding">
        <div class="chart-edge">
            <div id="pie-placeholder" class="flot-chart"></div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function() {
        var data = [
            { label: "In Progress",  data: <?php echo $metrics_data['in_progress']; ?>},
            { label: "Completed",  data: <?php echo $metrics_data['completed']; ?>},
            { label: "Pending",  data: <?php echo $metrics_data['pending']; ?>},
        ];
        var placeholder = $("#pie-placeholder");
        $("#title").text("Performance");
        $("#description").text("Order performace chart");

        $.plot(placeholder, data, {
            series: {
                pie: { 
                    show: true
                }
            }
        });

        /*var histogram_data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

        $.plot("#income-expense-chart", [ histogram_data ], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.6,
                    align: "center"
                }
            },
            xaxis: {
                mode: "categories",
                tickLength: 0
            }
        });
*/
        // Add the Flot version string to the footer

        $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
    });
</script>