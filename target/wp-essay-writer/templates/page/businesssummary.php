<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
    $view = $_REQUEST['page_info']['view'];
    $summary_data = $view->get_business_summary_data();
    $metrics_data = $summary_data['metrics'];
?>

<div class="row">
    <div class="col-sm-12 col-md-6">
        <div class="card">
            <div class="card-header">
                <h2>Metrics</h2>

                <ul class="actions">
                    <li class="dropdown">
                        <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                            <i class="zmdi zmdi-more-vert"></i>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="widget-templates.html">Refresh</a>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="card-body card-padding">
                <div class="table-responsive">
                    <table class="table table-inner table-vmiddle table-striped">
                        <tbody>
                            <tr>
                                <td class="c-cyan" colspan="6">Orders Created</td>
                                <td class="c-cyan text-right" colspan="6"><?php echo $metrics_data['total']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Orders Pending</td>
                                <td class="c-cyan text-right" colspan="6"><?php echo $metrics_data['pending']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Orders Completed</td>
                                <td class="c-cyan text-right" colspan="6"><?php echo $metrics_data['completed']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Orders In Progress</td>
                                <td class="c-cyan text-right" colspan="6"><?php echo $metrics_data['in_progress']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Total Order Amount</td>
                                <td class="c-cyan text-right" colspan="6">$<?php echo $metrics_data['total_amount']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Total Amount Paid</td>
                                <td class="c-cyan text-right" colspan="6">$<?php echo $metrics_data['amount_paid']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6">Total Amount Due</td>
                                <td class="c-cyan text-right" colspan="6">$<?php echo $metrics_data['amount_due']; ?></td>
                            </tr>
                            <tr>
                                <td class="c-cyan" colspan="6"> </td>
                                <td class="c-cyan text-right" colspan="6"></td>
                            </tr>
                        </tbody><!-- /table body -->  
                    </table><!-- /basic table -->
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-6">
        <div class="card">
            <div class="card-header">
                <h2>Performance</h2>

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
    </div>
</div>
<!-- <div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h2>Performance over time</h2>
            </div>
            
            <div class="card-body">
                <div class="chart-edge">
                    <div id="income-expense-chart" class="flot-chart"></div>
                </div>
            </div>
        </div>
    </div>
</div> -->

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