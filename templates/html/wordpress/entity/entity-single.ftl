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

    // Process the parent id, if any
    if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) {

        $parent_id = sanitize_text_field($_REQUEST['parent_id']);
        $parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
        $parent_field = sanitize_text_field($_REQUEST['parent_field']);
        $parent_param = '';
        if(isset($_REQUEST['parent_param'])) $parent_param = urldecode($_REQUEST['parent_param']);
    }

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>

                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="#tab-a" aria-controls="tab-a" role="tab" data-toggle="tab">
                                    ${entity.description}
                                </a>
                            </li>

                            <#list entity.relatedChildEntities?keys as key>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-${key_index}" aria-controls="tab-${key_index}" role="tab" data-toggle="tab">
                                    ${entity.relatedChildEntities[key].description}
                                </a>
                            </li>
                            </#list>
                        </ul>

                        <div class="tab-content p-20">
                            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-a">
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
                                    <?php if(isset($parent_artifact)) { ?>
                                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $parent_artifact . '&id=' . $parent_id.$parent_param; ?>&page_action=view" 
                                       class="btn btn-primary waves-effect">
                                       <?php _e('Done', 'framework') ?>
                                    </a>
                                    <?php } ?>
                                </div>

                            </div>

                            <#list entity.relatedChildEntities?keys as key>
                            <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-${key_index}">
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
