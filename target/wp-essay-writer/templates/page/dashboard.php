<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

    $view = $_REQUEST['page_info']['view'];
    if(PartyAPI::is_current_user_portal_admin()) {
        $dashboard_stats = AdminDashboardService::get_admin_dashboard_stats();
?>

    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h2>Income & Expenses </h2>
                </div>
                
                <div class="card-body">
                    <div class="chart-edge">
                        <div id="income-expense-chart" class="flot-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12 col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Cash & Bank Balance</h2>

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
                                    <td class="c-cyan" colspan="6">Petty Cash</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">Savings Account</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td colspan="6">Total</td>
                                    <td class="text-right" colspan="6">$0.00</td>
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
                    <h2>Net Income</h2>

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
                    <div class="table-responsive">
                        <table class="table table-inner table-vmiddle table-striped">
                            <tbody>
                                <tr>
                                    <td class="c-cyan" colspan="6">Income</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">Expense</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td colspan="6">Net Income</td>
                                    <td class="text-right" colspan="6">$0.00</td>
                                </tr>
                            </tbody><!-- /table body -->  
                        </table><!-- /basic table -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12 col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Invoice payable to you</h2>

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
                                    <td class="c-cyan" colspan="6">Coming Due</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">1-30 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">31-60 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">61-90 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">> 90 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
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
                    <h2>Bills you need to pay</h2>

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
                    <div class="table-responsive">
                        <table class="table table-inner table-vmiddle table-striped">
                            <tbody>
                                <tr>
                                    <td class="c-cyan" colspan="6">Coming Due</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">1-30 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">31-60 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">61-90 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                                <tr>
                                    <td class="c-cyan" colspan="6">> 90 days overdue</td>
                                    <td class="c-cyan text-right" colspan="6">$0.00</td>
                                </tr>
                            </tbody><!-- /table body -->  
                        </table><!-- /basic table -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(function() {

            var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

            $.plot("#income-expense-chart", [ data ], {
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

            // Add the Flot version string to the footer

            $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
        });
    </script>
<?php } ?>