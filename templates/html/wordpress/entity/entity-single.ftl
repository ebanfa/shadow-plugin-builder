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

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_single_entity');
?>

                        <ul class="tab-nav tn-justified tn-icon" role="tablist">
                            <li role="presentation" class="active">
                                <a class="col-sx-4" href="widgets.html#tab-1" aria-controls="tab-0" role="tab" data-toggle="tab">
                                    ${entity.description}
                                </a>
                            </li>
                            <#list entity.relatedChildEntities as child>
                            <li role="presentation">
                                <a class="col-xs-4" href="#tab-${child_index}" aria-controls="tab-${child_index}" role="tab" data-toggle="tab">
                                    ${child.description}
                                </a>
                            </li>
                            </#list>
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
                            </div>

                            <#list entity.relatedChildEntities as child>
                            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-${child_index}">
                                <div id="success"></div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                        <tbody>
    <#list child.fields as field>
        <#if field.listField == "Y">
                                            <th><h5 class="no-margin-bottom">${field.description}</h5></th>
        </#if>
    </#list>
                                            <tr>
    <#list child.fields as field>
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
                            </div>
                            </#list>



                        </div>

<?php 
    do_action('shadowbanker_after_single_entity'); 
    
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
