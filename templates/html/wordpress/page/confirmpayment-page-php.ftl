
<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>

<?php do_action('shadowbanker_before_main_content'); ?>
<div class="card">
            <div class="card-header bgm-cyan">
                <h2>Review your order <small>Take a moment to review the details of your order before proceeding to payment</small></h2>
            </div>

            <div class="card-body card-padding">
                <div role="tabpanel">
                    <ul class="tab-nav" role="tablist">
                        <li class="active">
                            <a href="#billing" aria-controls="billing" role="tab" data-toggle="tab">Billing</a>
                        </li>
                        <li>
                            <a href="#instructions" aria-controls="instructions" role="tab" data-toggle="tab">Instructions and files</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="billing">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h4>Order No: <?php echo $order_code; ?></h4>
                                </div>
                                <div class="col-xs-6 text-right p-t-10">
                                    <strong>Date: <?php echo $order_data['date']; ?></strong><br>
                                </div>   
                            </div>

                            <div class="row m-b-20">
                                <div class="col-xs-6">
                                    <h4>Name: <?php echo $order_data['cust_display_name']; ?></h4>
                                </div>
                                <div class="col-xs-6 text-right p-t-10">
                                    <strong>Due date: <?php echo $order_data['due_date']; ?></strong>
                                </div>   
                            </div>

                            <div class="clearfix"></div>
                            <div class="table-responsive">

                                <table class="table table-striped m-top-md table-bordered" id="dataTable">

                                    <thead>
                                        <tr>
                                            <th>Topic</th>
                                            <th>Type</th>
                                            <th>Subject</th>
                                            <th>Pages</th>
                                            <th>Term</th>
                                            <th>Level</th>
                                            <?php if (is_client()) { ?>
                                                <th>Order Status</th>
                                            <?php } else { ?>
                                                <th>Bid Status</th>
                                            <?php } ?>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><?php echo $order_data['topic']; ?></td>
                                            <td><?php echo $order_data['doc_type']; ?></td>
                                            <td><?php echo $order_data['subject']; ?></td>
                                            <td><?php echo $order_data['quantity']; ?></td>
                                            <td><?php echo $order_data['urgency']; ?></td>
                                            <td><?php echo $order_data['academic_levels']; ?></td>
                                            <!-- Client see order status, while writer sees bid status -->
                                            <?php if (is_client()) { ?>
                                                <td><?php echo $order_data['status_text']; ?></td>
                                            <?php } else { ?>
                                                <td><?php echo $order_bid_status_txt[$order_data['bid_status']]; ?></td>
                                            <?php } ?>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">

                                </div>
                                <div class="col-xs-6">
                                    <?php if (is_client()) { ?>
                                        <div class="pull-right">
                                            <h3 class="m-t-20 m-b-20"><strong>Total: </strong><span class="text-danger">$<?php echo $order_data['cost']; ?></span></h3>
                                        </div>
                                    <?php } else { ?>
                                        <table class="table m-top-md table-striped table-bordered">	
                                            <tbody>
                                                <tr class="no-border">
                                                    <td class="no-border"></td>
                                                    <td class="no-border"></td>
                                                    <td class="no-border"></td>
                                                    <td class="text-right no-border"><strong>List Price</strong></td>
                                                    <td><strong class="text-danger">$<?php echo $order_data['bid_price']; ?></strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    <?php } ?>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <?php
                                    $edit_link = '/edit-academic-order/';
                                    if ($order_data['bid_status'] == 'OPEN' && is_client() && $current_user_login == $order_data['user_name']) {
                                        ?>
                                        <a href="<?php echo get_site_url() . $edit_link; ?>?order=<?php echo $order_code; ?>" 
                                           class="btn btn-lg btn-info"> Edit Order</a>
                                       <?php } ?>

                                    <?php if ($order_data['bid_status'] == 'OPEN' && !is_client() && $canBidForThisOrder) { ?>
                                        <a  id="bid-link-btn" href="#" 
                                            data-order-client="<?php echo $order_data['user_name']; ?>"
                                            data-order-writer="<?php echo $current_user_login; ?>"
                                            data-order-price="<?php echo $order_data['bid_price']; ?>"
                                            data-order-code="<?php echo $order_code; ?>" 
                                            class="bid_link btn btn-lg btn-primary"> Bid For This Job Now
                                        </a>
                                    <?php } ?>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <?php if (is_client()) { ?>

                                        <form id="paypal-form" style="display:none" action="<?php echo get_option('cp_paypal_url'); ?>" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_xclick">
                                            <input type="hidden" name="business" value="<?php echo get_option('cp_paypal_id'); ?>">
                                            <input type="hidden" name="lc" value="US">
                                            <input type="hidden" name="invoice" id="invoice" value="<?php echo $order_data['code']; ?>">
                                            <input type="hidden" name="item_name" value="<?php echo $order_data['topic']; ?>">
                                            <input type="hidden" name="amount" value="<?php echo $order_data['cost']; ?>">
                                            <input type="hidden" name="currency_code" value="USD">
                                            <input type="hidden" name="button_subtype" value="services">
                                            <input type="hidden" name="no_note" value="0">
                                            <input type="hidden" name="cn" value="Add special instructions to the seller:">
                                            <input type="hidden" name="no_shipping" value="1">
                                            <input type="hidden" name="rm" value="1">
                                            <input type="hidden" name="return" value="<?php echo get_option('cp_paypal_return'); ?>">
                                            <input type="hidden" name="cancel_return" value="<?php echo get_option('cp_paypal_cancel'); ?>">
                                            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                                        </form>
                                        <a id="pay-invoice-btn" class="btn btn-success btn-lg pull-right"><i class="fa fa-usd"></i> Proceed to Payment</a>
                                    <?php } else { ?>
                                        <table class="table m-top-md table-striped table-bordered">	
                                            <tbody>
                                                <tr class="no-border">
                                                    <td class="no-border"></td>
                                                    <td class="no-border"></td>
                                                    <td class="no-border"></td>
                                                    <td class="text-right no-border"><strong>List Price</strong></td>
                                                    <td><strong class="text-danger">$<?php echo $order_data['bid_price']; ?></strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>

                        <div role="tabpanel" class="tab-pane" id="instructions">
                            <div id="file-resources-container" class="table-responsive invoice-resources-section">
                                <h2>Files</h2>
                                <table id="order-files-table" class="table table-striped table-bordered table-large" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Size</th>
                                        </tr>
                                    </thead>
                                    <?php
                                    if (!empty($order_data['files'])) {
                                        foreach ($order_data['files'] as $content_file) {
                                            ?>

                                            <tr>
                                                <td><a href="<?php echo $content_file['file_url']; ?>"><?php echo $content_file['file_name']; ?></a> </td>
                                                <td>
                                                    <?php
                                                    if ($content_file['file_size'] > 1024) {
                                                        echo $content_file['file_size'] . " MB";
                                                    } else {
                                                        echo $content_file['file_size'] . " KB";
                                                    }
                                                    ?> 
                                                </td>
                                            </tr>

                                            <?php
                                        }
                                    } else {
                                        ?>
                                        <tr><td>There are no files for this order</td></tr>
                                    <?php } ?>
                                    <tbody>


                                    </tbody>
                                </table>

                            </div>
                            <?php if (isset($order_data['question_content'])) { ?>
                            <div>
                                <div class="">
                                    <div class="controls vertical-align-b">
                                        <a id="question-details-btn" class="btn btn-info"  data-toggle="modal" data-target="#question-details-modal">
                                            View Question
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>
                            <div id="text-resources-container" class="invoice-resources-section">
                                <h2>Instructions</h2>
                                <p>
                                    <?php
                                    if (empty($order_data['instructions'])) {
                                        echo "<span>No order instructions were provided.</span>";
                                    } else {
                                        echo $order_data['instructions'];
                                    }
                                    ?>
                                </p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php do_action('shadowbanker_after_main_content'); ?>