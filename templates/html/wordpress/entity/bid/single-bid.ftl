<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    global $entity_data;
    $entity_name = sanitize_text_field($_REQUEST['artifact']);
    $current_user = wp_get_current_user();
    $current_user_party = PartyAPI::get_user_party($current_user->ID);

    if (isset($_REQUEST['id'])) {
        $entity_data = ${entity.name}API::get_by_id(sanitize_text_field($_REQUEST['id']));
        $is_pending = false;
        if($entity_data['status_code'] == 'PENDING'){
            $is_pending = true;
        }

        $is_published = false;
        if($entity_data['status_code'] == 'PUBLISHED'){
            $is_published = true;
        }
        $is_accepted = false;
        if($entity_data['status_code'] == 'ACCEPTED'){
            $is_accepted = true;
        }
        $is_declined = false;
        if($entity_data['status_code'] == 'DECLINED'){
            $is_declined = true;
        }
        $is_holding = false;
        if($entity_data['status_code'] == 'HOLDING'){
            $is_holding = true;
        }
        $is_completed = false;
        if($entity_data['status_code'] == 'COMPLETED'){
            $is_completed = true;
        }

    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>
                        <div class="row mg-btm-30">
                            <div class="col-sm-12">
                                <div class="body-section">
                                    <div id="success"></div>
                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                            <tbody>
                                                <th><h5 class="no-margin-bottom">Amount</h5></th>
                                                <th><h5 class="no-margin-bottom">Term</h5></th>
                                                <th><h5 class="no-margin-bottom">Interest Rate</h5></th>
                                                <th><h5 class="no-margin-bottom">Status</h5></th>
                                                <tr>
                <td><?php echo $entity_data['amount']; ?></td>

                <td><?php echo $entity_data['term']; ?></td>

                <td><?php echo $entity_data['rate']; ?></td>


                <td><?php echo $entity_data['status_txt']; ?></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                <div class="btn-demo m-t-10">
                                    <?php if($is_pending) { ?>
                                    <form id="publish-bid-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="publish-bid-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-success waves-effect">
                                       <?php _e('Publish', 'framework') ?>
                                    </a>
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=edit" 
                                       class="btn btn-primary waves-effect">
                                       <?php _e('Edit', 'framework') ?>
                                    </a>
                                    
                                    <form id="delete-entity-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="delete-entity-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Delete', 'framework') ?>
                                    </a>
                                    <?php } ?>
                                    <?php if(${entity.name}API::can_accept_bid($entity_data['id'])) { ?>
                                    <form id="accept-bid-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="accept-bid-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Accept This Bid', 'framework') ?>
                                    </a>

                                    <?php } ?>

                                     <?php if($is_accepted  && ${entity.name}API::can_disburse_to_client($entity_data['id'], $current_user_party['id'])) { ?>
                                    <form id="hold-funds-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="hold-funds-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Release funds to holding account', 'framework') ?>
                                    </a>

                                    <?php } ?>
          			    <?php if($is_holding && ${entity.name}API::can_disburse_to_client($entity_data['id'], $current_user_party['id'])) { ?>
                                    <form id="release-funds-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="release-funds-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Release funds to client', 'framework') ?>
                                    </a>

                                    <?php } ?>
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $entity_data['application']; ?>&page_action=view" 
                                       class="btn btn-primary waves-effect">
                                       <?php _e('Done', 'framework') ?>
                                    </a>

                                </div>

                                </div>
                            </div>
                        </div>

<?php 
    //do_action('shadowbanker_after_single_entity'); 
    
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
                    url: shadowcore_ajax_script.ajaxurl,
                    data: ({action: 'delete_sb_bid_ajax'}),
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
            

        //Publish Message
        $('#publish-bid-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Great job!",   
                text: "Please wait a moment while we publish your loan bid...",   
                type: "success",   
                showCancelButton: false, 
                showConfirmButton: false ,
            });
            var form = $('#publish-bid-form').ajaxSubmit(
            { /* options */ 
                url: ${application.name?lower_case}_ajax_script.ajaxurl,
                data: ({action : 'publish_bid_ajax'}),  
                success: function(responseData)
                {
                    if(responseData.success) {
                        $('#success').html(responseData.data.message);
                    }
                    else {
                        swal({   
                            title: "Opps!",   
                            text: "Hold up, something wrong happened, please refresh this page and try again",   
                            type: "warning",   
                            showCancelButton: false, 
                            showConfirmButton: false ,
                        });
                        //$('.page-panel').hidePageLoader();
                    }
                }  
            });

        });

        //Accept Bid
        $('#accept-bid-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Accepting Bid!",   
                text: "One moment please...",   
                type: "success",   
                showCancelButton: false, 
                showConfirmButton: false ,
            });
            var form = $('#accept-bid-form').ajaxSubmit(
            { /* options */ 
                url: ${application.name?lower_case}_ajax_script.ajaxurl,
                data: ({action : 'accept_bid_ajax'}),  
                success: function(responseData)
                {
                    if(responseData.success) {
                        $('#success').html(responseData.data.message);
                    }
                    else {
                        swal({   
                            title: "Opps!",   
                            text: "Hold up, something wrong happened, please refresh this page and try again",   
                            type: "warning",   
                            showCancelButton: false, 
                            showConfirmButton: false ,
                        });
                        //$('.page-panel').hidePageLoader();
                    }
                }  
            });

        });
        
        //Hold funds
        $('#hold-funds-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Transfering Funds To Holding Account",   
                text: "One moment please...",   
                showConfirmButton: false ,
            });
            var form = $('#hold-funds-form').ajaxSubmit(
            { /* options */ 
                url: ${application.name?lower_case}_ajax_script.ajaxurl,
                data: ({action : 'hold_funds_ajax'}),  
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

        //Release funds
        $('#release-funds-btn').click(function(e){
            e.preventDefault();
            swal({   
                title: "Transferring Funds To Client Account",   
                text: "One moment please...",   
                showConfirmButton: false ,
            });
            var form = $('#release-funds-form').ajaxSubmit(
            { /* options */ 
                url: ${application.name?lower_case}_ajax_script.ajaxurl,
                data: ({action : 'release_funds_ajax'}),  
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
