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
    
<div id="dashboard-metrics-table" class="card">
    <div class="card-header">
        <h2>Performance Table</h2>
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
    