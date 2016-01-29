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

    $party_role_query_parm = '';
    if(isset($_REQUEST['party_role'])) { 
        $party_role_query_parm  = '&party_role=' . sanitize_text_field($_REQUEST['party_role']);
    }

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    //do_action('shadowbanker_before_single_entity');
?>
<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header bgm-lightgreen">
                <h2>
                    <?php echo $page_action_description; ?> 
                    <small><?php echo $page_action_txt; ?></small>
                </h2>
                <ul class="actions actions-alt">
                    <li class="dropdown">
                        <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                            <i class="md md-more-vert"></i>
                        </a>
                        
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="/page?type=entity&page_action=create&artifact=<?php echo $artifact_name; ?><?php echo $party_role_query_parm; ?>">Add a new record</a>
                            </li>
                            <li>
                                <a href="/page?type=entity&page_action=list&artifact=party<?php echo $party_role_query_parm; ?>">View All</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="card-body card-padding">

                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
                                    ${entity.description}
                                </a>
                            </li>
                            <#list entity.relatedChildEntities?keys as key>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
                                    ${entity.relatedChildEntities[key].description}
                                </a>
                            </li>
                            </#list>
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
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=${entity.name?lower_case}&id=' . $entity_data['id']; ?>&page_action=edit" 
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

                            <#list entity.relatedChildEntities?keys as key>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-0">
                                <div id="success"></div>

                                <form id="${entity.relatedChildEntities[key].postName}-list-form">
                                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <input type="hidden" name="${entity.name?lower_case}" value="<?php echo $entity_data['id']; ?>"/>
                                </form>
                                <div class="table-responsive">
                                    <table id="${entity.relatedChildEntities[key].postName}-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <#list entity.relatedChildEntities[key].fields as field>
                                                    <#if field.listField == "Y">
                                                        <#if field.relationshipField == "N">
                                                            <th>${field.description}</th>
                                                        </#if>

                                                        <#if field.relationshipField == "Y">
                                                            <th>${field.description}</th>
                                                        </#if>
                                                    </#if>
                                                </#list>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="btn-demo m-t-10">
                                    <a id="create-${entity.relatedChildEntities[key].name?lower_case}-btn" href="<?php echo get_site_url();?>/page?type=entity&artifact=${entity.relatedChildEntities[key].name?lower_case}&page_action=create&parent_id=<?php echo $entity_data['id']; ?>&parent_artifact=${entity.name?lower_case}" class="btn btn-success waves-effect">
                                       <?php _e('Add ${entity.relatedChildEntities[key].description}', 'framework') ?>
                                    </a>
                                </div>
                            </div>
                            </#list>


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
