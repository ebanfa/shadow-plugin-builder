<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
$current_user = wp_get_current_user();
$current_user_party = PartyAPI::get_user_party($current_user->ID);
?>

<?php do_action('shadowbanker_before_main_content'); ?>

	<!-- Tabs -->
    <div class="card">
        <div class="card-header">
            <h2>Loan, loan applications and bids <small>Click on any of the colored columns to view additional information </small></h2>
        </div>
        
        <div class="card-body">
            <ul class="tab-nav tn-justified tn-icon" role="tablist">
                <li role="presentation" class="active">
                    <a class="col-sx-4" href="widgets.html#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab">
                        LOANS 
                    </a>
                </li>
                <li role="presentation">
                    <a class="col-xs-4" href="widgets.html#tab-2" aria-controls="tab-2" role="tab" data-toggle="tab">
                        LOAN APPLICATIONS 
                    </a>
                </li>
                <li role="presentation">
                    <a class="col-xs-4" href="widgets.html#tab-3" aria-controls="tab-3" role="tab" data-toggle="tab">
                        MY BIDS 
                    </a>
                </li>
            </ul>
            
            <div class="tab-content p-20">
                <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-1">
        <form id="sb_loan-list-form">
            <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
            <input type="hidden" name="submitted" id="submitted" value="true" /> 
        </form>
        <div class="table-responsive">
            <table id="sb_loan-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>

            <th>Owner</th>

                        

            <th>Client</th>

                        

            <th>Status</th>

                        
            <th>Term</th>


                        
            <th>Amount</th>


                        
            <th>Balance</th>


                        
            <th>Created</th>


                        
                    </tr>
                </thead>
               <!--  <tfoot>
                    <tr>
                        <th>Invoice</th>
                        <th>Topic</th>
                        <th>Pages</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </tfoot> -->
                <tbody>
                </tbody>
            </table>
            
        </div>

                    
                </div>
                
                <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-2">
                   <form id="sb_application-list-form">
                      <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                      <input type="hidden" name="submitted" id="submitted" value="true" />
                      <input type="hidden" name="owner" id="" value="<?php echo $current_user_party['id']; ?>"/>           
                   </form>
                    <div class="table-responsive">
                        <table id="sb_application-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Loan Purpose</th>
                                    <th>Amount</th>
                                    <th>Term</th>
                                    <th>Credit Type</th>
                                    <th>Collateral Type</th>
                                    <th>Status</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-3">
                    <form id="sb_bid-list-form">
                      <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                      <input type="hidden" name="submitted" id="submitted" value="true" /> 
                      <input type="hidden" name="owner" id="" value="<?php echo $current_user_party['id']; ?>"/>           
                    </form>
                    <div class="table-responsive">

                                    <table id="sb_bid-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                       

                <thead>
                    <tr>
                        <th>ID</th>
            <th>Amount</th>


                        
            <th>Term</th>


                        
            <th>Interest Rate</th>


                        

            <th>Status</th>

                        
                    </tr>
                </thead>
               <!--  <tfoot>
                    <tr>
                        <th>Invoice</th>
                        <th>Topic</th>
                        <th>Pages</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </tfoot> -->
                <tbody>
                </tbody>



                                    </table>
                         </div>
                </div>
            </div>
        </div>
    </div>




<?php do_action('shadowbanker_after_main_content'); ?>
