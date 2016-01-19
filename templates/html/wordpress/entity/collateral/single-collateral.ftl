<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $entity_data = CollateralAPI::get_by_id(sanitize_text_field($_REQUEST['id']));
    }

    if(!isset($_REQUEST['artifact'])){
    }
    $entity_name = sanitize_text_field($_REQUEST['artifact']);

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>
                        <div class="row mg-btm-30">
                            <div class="col-sm-12">
                                <div class="body-section">
                   
                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="widgets.html#tab-1" aria-controls="tab-1" role="tab" data-toggle="tab">
                                    Collateral Details
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="widgets.html#tab-2" aria-controls="tab-2" role="tab" data-toggle="tab">
                                    Files & Documents
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content p-20">
                            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-1">
                                    <div id="success"></div>
                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                            <tbody>
                                                <th><h5 class="no-margin-bottom">Type</h5></th>
                                                <th><h5 class="no-margin-bottom">Status</h5></th>
                                                <th><h5 class="no-margin-bottom">Name</h5></th>
                                                <th><h5 class="no-margin-bottom">Market Value</h5></th>
                                                <th><h5 class="no-margin-bottom">Cost</h5></th>
                                                <th><h5 class="no-margin-bottom">Date Acquired</h5></th>
                                                <th><h5 class="no-margin-bottom">Description</h5></th>
                                                <tr>

                <td><?php echo $entity_data['type_txt']; ?></td>

                <td><?php echo $entity_data['status_txt']; ?></td>
                <td><?php echo $entity_data['name']; ?></td>

                <td><?php echo $entity_data['market_value']; ?></td>

                <td><?php echo $entity_data['cost']; ?></td>

                <td><?php echo $entity_data['date_acquired']; ?></td>

                <td><?php echo $entity_data['description']; ?></td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                <div class="btn-demo m-t-10">
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
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $entity_data['application']; ?>&page_action=view" 
                                       class="btn btn-primary waves-effect">
                                       <?php _e('Done', 'framework') ?>
                                    </a>

                                </div>
                             </div><!-- End tab -->

                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-2">
                                  
                                   <form id="sb_colfiles-list-form">
                                       <input type="hidden" name="collateral" value="<?php echo $entity_data['id']; ?>"/>
                                   </form>

        <div class="table-responsive">
            <table id="sb_colfiles-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
            <th>Name</th>


                        
            <th>Description</th>


                        
            <th>URL</th>


                        
            <th>Size</th>


                        
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

                           
                                <div class="btn-demo m-t-10">
                                    
                                    <a id="create-collateral-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=collateralfiles&page_action=create&collateral_id=<?php echo $entity_data['id']; ?>" class="btn btn-success waves-effect">
                                       <?php _e('Add Files', 'framework') ?>
                                    </a>
                                </div>
 


			    </div><!-- End tab -->
                             
			    </div> <!-- End tab-content -->
                                </div>
                            </div>
                        </div>

                           

<?php 
   // do_action('shadowbanker_after_single_entity'); 
    
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
                    data: ({action: 'delete_sb_collateral_ajax'}),
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
            

</script>
