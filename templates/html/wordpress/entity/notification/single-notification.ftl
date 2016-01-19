<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $entity_data = ${entity.name}API::get_by_id(sanitize_text_field($_REQUEST['id']));
        if(isset($entity_data['id'])){
	    $status = ${entity.name}API::get_status_by_code('VIEWED');
            $entity_data['status'] = $status['id'];
            $entity_data['edit_mode'] = false;
            ${entity.name}API::do_create_entity($entity_data);
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
                            </div>
                        </div>

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
            

</script>
