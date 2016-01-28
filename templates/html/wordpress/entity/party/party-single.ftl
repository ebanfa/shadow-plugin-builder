<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $is_organization = false;
        $entity_data = ${entity.name}API::get_by_id(sanitize_text_field($_REQUEST['id']));
        if(isset($entity_data['id'])) {
            if($entity_data['party_type_code'] === 'ORGANIZATION') { 
                $is_organization = true;
                $group_data = PartyGroupAPI::get_by_party_id($entity_data['id']);
                $artifact = 'partygroup';
                $entity_id = $group_data['id'];

            } 
            else {
                $person_data = PersonAPI::get_by_party_id($entity_data['id']);
                $artifact = 'person';
                $entity_id = $person_data['id'];
            }
        }
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>

                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
                                    ${entity.description}
                                </a>
                            </li>
                             <li role="presentation">
                                <a class="col-xs-4" href="#tab-5" aria-controls="tab-5" role="tab" data-toggle="tab">
                                    Address
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-6" aria-controls="tab-6" role="tab" data-toggle="tab">
                                    Files
                                </a>
                            </li>
                            <?php if($is_organization) { ?>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-7" aria-controls="tab-7" role="tab" data-toggle="tab">
                                    Business Unit
                                </a>
                            </li>
                            <?php } ?>
                            <?php 
                                foreach ($entity_data['roles'] as $role) {
                                    if($role['entity_code'] === 'CLIENT') {
                            ?>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-8" aria-controls="tab-8" role="tab" data-toggle="tab">
                                    Properties
                                </a>
                            </li>
                            <?php  } if($role['entity_code'] === 'TENANT') { ?>

                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-10" aria-controls="tab-10" role="tab" data-toggle="tab">
                                    Agreement
                                </a>
                            </li>

                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-11" aria-controls="tab-11" role="tab" data-toggle="tab">
                                    Rent
                                </a>
                            </li>

                            <?php  } if($role['entity_code'] === 'SERVICE_PROVIDER') { ?>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-12" aria-controls="tab-12" role="tab" data-toggle="tab">
                                    Inspection
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-13" aria-controls="tab-13" role="tab" data-toggle="tab">
                                    Maintenance
                                </a>
                            </li>
                            <?php  } } ?>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-16" aria-controls="tab-16" role="tab" data-toggle="tab">
                                    Payments
                                </a>
                            </li>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-17" aria-controls="tab-17" role="tab" data-toggle="tab">
                                    Disputes
                                </a>
                            </li>
                            
                        </ul>

                        <div class="tab-content p-20">
                            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-0">
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
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $artifact . '&id=' . $entity_id; ?>&page_action=edit" 
                                       class="btn btn-primary waves-effect">
                                       <?php _e('Edit', 'framework') ?>
                                    </a>
                                    <form id="delete-entity-form" style="display:none" action=""  method="POST">
                                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" />
                                    </form>
                                    <a id="delete-entity-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                                       <?php _e('Delete', 'framework') ?>
                                    </a>
                                </div>

                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-5">
                                <div id="success"></div>

                                <form id="sb_partyaddress-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_partyaddress-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                            <th>Line 1</th>

                                                            <th>Line 2</th>


                                                            <th>Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-partyaddress-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=partyaddress&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Party Address', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-6">
                                <div id="success"></div>

                                <form id="sb_partyfiles-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_partyfiles-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                            <th>Name</th>

                                                            <th>Description</th>

                                                            <th>File Type</th>

                                                            <th>URL</th>

                                                            <th>Size</th>

                                                            <th>Mime Type</th>

                                                            <th>Date</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-partyfiles-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=partyfiles&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Party Files', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-7">
                                <div id="success"></div>

                                <form id="sb_businessunit-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_businessunit-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Party</th>
                                                            <th>Name</th>

                                                            <th>Address Line 1</th>

                                                            <th>Address Line 2</th>


                                                            <th>Location</th>
                                                            <th>Description</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-businessunit-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=businessunit&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Business Unit', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-8">
                                <div id="success"></div>

                                <form id="sb_property-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_property-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Type</th>

                                                            <th>Status</th>
                                                            <th>Name</th>

                                                            <th>Line 1</th>

                                                            <th>Line 2</th>


                                                            <th>Location</th>
                                                            <th>Date Acquired</th>

                                                            <th>Construction Date</th>

                                                            <th>Property Code</th>

                                                            <th>Title Number</th>

                                                            <th>Land Size</th>

                                                            <th>Description</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-property-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=property&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Property', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-10">
                                <div id="success"></div>

                                <form id="sb_agreement-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_agreement-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                            <th>Code</th>


                                                            <th>Tenant</th>

                                                            <th>Floor</th>
                                                            <th>Name</th>

                                                            <th>Units</th>

                                                            <th>Amount</th>

                                                            <th>Description</th>

                                                            <th>Start Date</th>

                                                            <th>Date Created</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-agreement-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=agreement&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Agreement', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-11">
                                <div id="success"></div>

                                <form id="sb_rent-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_rent-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                            <th>Code</th>

                                                            <th>Name</th>

                                                            <th>Amount</th>

                                                            <th>Date Due</th>

                                                            <th>Description</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-rent-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=rent&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Rent', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-12">
                                <div id="success"></div>

                                <form id="sb_inspection-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_inspection-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Type</th>
                                                            <th>Status</th>

                                                            <th>Description</th>

                                                            <th>Inspection Result</th>

                                                            <th>Date Created</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-inspection-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=inspection&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Inspection', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-13">
                                <div id="success"></div>

                                <form id="sb_maintenance-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_maintenance-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Type</th>
                                                            <th>Status</th>

                                                            <th>Description</th>

                                                            <th>Date Created</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-maintenance-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=maintenance&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Maintenance', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-16">
                                <div id="success"></div>

                                <form id="sb_payment-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_payment-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Method</th>

                                                            <th>Type</th>
                                                            <th>Amount</th>

                                                            <th>Date</th>


                                                            <th>Status</th>
                                                            <th>Description</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-payment-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=payment&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Payment', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-17">
                                <div id="success"></div>

                                <form id="sb_dispute-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="party" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="sb_dispute-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>

                                                            <th>Type</th>

                                                            <th>Owner</th>

                                                            <th>Agreement</th>

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
                                    <a id="create-dispute-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=dispute&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=party" class="btn btn-success waves-effect">
                                       <?php _e('Add Dispute', 'framework') ?>
                                    </a>
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
            

</script>
