<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $entity_data = ${entity.name}API::get_by_id(sanitize_text_field($_REQUEST['id']));
    }

    $entity_name = sanitize_text_field($_REQUEST['artifact']);
    
    $is_active = false;
    if($entity_data['status_code'] == 'ACTIVE'){
        $is_active = true;
     }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>
                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="widgets.html#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab">
                                    Loan Details
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="widgets.html#tab-2" aria-controls="tab-2" role="tab" data-toggle="tab">
                                    Schedule
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="widgets.html#tab-3" aria-controls="tab-3" role="tab" data-toggle="tab">
                                    Repayments
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="widgets.html#tab-4" aria-controls="tab-4" role="tab" data-toggle="tab">
                                    Disputes
                                </a>
                            </li>

                        </ul>



                        <div class="tab-content p-20">
                            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-1">
                                <div id="success"></div>
                                
                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                            <tbody>
    <#list entity.fields as field>
        <#if field.listField == "Y">
                                                <th><h5 class="no-margin-bottom">${field.description}</h5></th>
        </#if>
    </#list>
                                                <tr>
    <#list entity.fields as field>
        <#if field.listField == "Y">
            <#if field.relationshipField == "N">
                <td><?php echo $entity_data['${field.name}']; ?></td>
            </#if>

            <#if field.relationshipField == "Y">
                <td><?php echo $entity_data['${field.name}_txt']; ?></td>
            </#if>
        </#if>
    </#list>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                <div class="btn-demo m-t-10">
                                    <?php if(LoanAPI::can_repay_loan($entity_data['id'])) { ?>
                                    
                                    <form id="repay-loan-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="repay-loan-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Repay Loan', 'framework') ?>
                                    </a>
                                    <?php } ?>

                                </div>

                            </div>

                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-2">
                                <div class="table-responsive">             
                                   <form id="sb_loanschedule-list-form">
                                        <input type="hidden" name="loan" value="<?php echo $entity_data['id']; ?>"/>
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                   </form>
                                 
                                    <table id="sb_loanschedule-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
          
                <thead>
                    <tr>
                        <th>ID</th>
            <th>Name</th>


                        
            <th>Description</th>


                        
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

                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-3">
                                <div class="table-responsive">             
                                   <form id="sb_loanpayment-list-form">
                                        <input type="hidden" name="loan" value="<?php echo $entity_data['id']; ?>"/>
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                   </form>
                                 
                                    <table id="sb_loanpayment-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                             
               I			 <thead>
                   			     <tr>
                       			          <th>ID</th>
           					  <th>Name</th>


                       <th>Amount</th> 
            <th>Description</th>


                        
            <th>Date</th>


                        
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

                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-4">
                                <div class="table-responsive">             
                                   <form id="sb_dispute-list-form">
                                        <input type="hidden" name="loan" value="<?php echo $entity_data['id']; ?>"/>
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                   </form>
                                 
                                    <table id="sb_dispute-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                             
                			<thead>
                   			 <tr>
                       			      <th>ID</th>
           				      <th>Type</th>
           				      <th>Owner</th>
           				      <th>Application</th>
           				      <th>Status</th>
					      <th>Name</th>
            				      <th>Description</th>
                   			 </tr>
			                </thead>
                			<tbody>
               			        </tbody>

                                    </table>
                   
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-dispute-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=dispute&page_action=create&loan_id=<?php echo $entity_data['id']; ?>" class="btn btn-success waves-effect">
                                       <?php _e('Dispute', 'framework') ?>
                                    </a>
                                </div>
                            </div>                

			  </div><!-- En tab container-->


<?php 
//    do_action('shadowbanker_after_single_entity'); 
    
    do_action('shadowbanker_after_main_content');
?>
<script type="text/javascript">
            
        /*
         * Dialogs
         */
        //Warning Message
        $('#delete-entity-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Are you sure?",   
                text: "You will not be able to undo this action!",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Yes, delete it!",   
                closeOnConfirm: false 
            }, function(){   
                var form = $('#delete-entity-form').ajaxSubmit(
                {/* options */
                    url: ${application.name?lower_case}_ajax_script.ajaxurl,
                    data: ({action: 'delete_${entity.postName}_ajax'}),
                    success: function (response)
                    {
                        var success_msg = '';
                        if (response.success) {
                            swal({   
                                title: "Deleted!",   
                                text: "The record has been deleted",   
                                type: "success",   
                                showCancelButton: false,   
                                confirmButtonText: "OK",   
                                closeOnConfirm: true 
                            }, function(){   
                                $('#success').html(response.data.message);
                            });
                        }
                        else {
                            swal("Error!", response.data.message, "warning"); 
                        }
                    }
                });
                
            });
        });
            

        // Repay loan
        $('#repay-loan-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Transferring Funds",   
                text: "One moment please...",   
                showConfirmButton: false ,
            });
            var form = $('#repay-loan-form').ajaxSubmit(
            { /* options */ 
                url: ${application.name?lower_case}_ajax_script.ajaxurl,
                data: ({action : 'repay_loan_ajax'}),  
                success: function(responseData)
                {
                    if(responseData.success) {
                        $('#success').html(responseData.data.message);
                    }
                    else {
                        var error_type = responseData.data.error_type;
                        if(error_type === 'business_error'){
                            swal({   
                                title: "Opps!",   
                                text: responseData.data.message,   
                                type: "error",   
                                showCancelButton: false, 
                                showConfirmButton: false ,
                            });
                        }
                        else{
                            swal({   
                                title: "Opps!",   
                                text: "Hold up, something wrong happened, please refresh this page and try again",   
                                type: "warning",   
                                showCancelButton: false, 
                                showConfirmButton: false ,
                            });
		        }
                        //$('.page-panel').hidePageLoader();
                    }
                }  
            });

        });


</script>
