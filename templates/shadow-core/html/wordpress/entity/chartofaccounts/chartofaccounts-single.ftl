<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $tabs = $view->get_tabs();

    
    $parent_param = '';
    if(isset($_REQUEST['parent_param'])) $parent_param = urldecode($_REQUEST['parent_param']);

?>
<ul class="tab-nav tn-justified tn-icon" role="tablist">
    <li role="presentation" class="active">
        <a class="col-sx-4" href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
            <?php echo $model['entity_description']; ?>
        </a>
    </li>

    <?php  $count = 1; foreach ($tabs as $tab) {  ?>
    <li role="presentation">
        <a class="col-xs-4" 
            href="#tab-<?php echo $count; ?>" 
            aria-controls="tab-<?php echo $count; ?>" role="tab" data-toggle="tab">
            <?php echo $tab['description']; ?>
        </a>
    </li>
    <?php  $count++; } ?>
</ul>

<div class="tab-content p-20">
    <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-0">
        <div id="success"></div>

        <div class="m-20">
            <div id="jstree_demo_div"> </div>
        </div>
        
        <div class="btn-demo m-t-10">
            <?php if($view->is_pending()) { ?>
            <a href="<?php echo $view->get_edit_url(); ?>" class="btn btn-primary waves-effect">
               <?php _e('Edit', 'framework') ?>
            </a>
            <form id="generate-coa-form" style="display:none" action=""  method="POST">
                <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                <input type="hidden" name="artifact" value="<?php echo $view->get_artifact_name(); ?>">
                <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                <input type="hidden" name="submitted" id="submitted" value="true" />
            </form>
            <a id="generate-coa-btn" href="<?php echo EntityActionProcessor::get_base_url() . 'artifact=' . $view->get_parent_artifact_name() . '&id=' . $view->get_parent_id() . $view->get_parent_param(); ?>&page_action=view" 
               class="btn btn-primary waves-effect">
               <?php _e('Generate COA', 'framework') ?>
            </a>
            <form id="delete-entity-form" style="display:none" action=""  method="POST">
                <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                <input type="hidden" name="artifact" value="<?php echo $view->get_artifact_name(); ?>">
                <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                <input type="hidden" name="submitted" id="submitted" value="true" />
            </form>
            <a id="delete-entity-btn" href="<?php echo $view->get_delete_url(); ?>" class="btn btn-warning waves-effect">
               <?php _e('Delete', 'framework') ?>
            </a>
            <?php } ?>

            <?php if(!is_null($view->get_parent_artifact_name())) { ?>
            <a href="<?php echo EntityActionProcessor::get_base_url() . 'artifact=' . $view->get_parent_artifact_name() . '&id=' . $view->get_parent_id() . $view->get_parent_param(); ?>&page_action=view" 
               class="btn btn-primary waves-effect">
               <?php _e('Done', 'framework') ?>
            </a>
            <?php } ?>
        </div>
    </div>

    <?php $ifield_count = 1; foreach ($tabs as $tab) { ?>
        <div role="tabpanel" class="tab-pane animated fadeIn" id="tab-<?php echo $ifield_count; ?>">
            <!-- <div id="success"></div> -->
            <form id="<?php echo $tab['model']['entity_post_name'];?>-list-form">
                <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                <input type="hidden" name="submitted" id="submitted" value="true" /> 
                <input type="hidden" name="<?php echo $tab['name'];?>" value="<?php echo $model['id']; ?>"/>
            </form>
            <div class="table-responsive">
                <table id="<?php echo $tab['model']['entity_post_name'];?>-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                        <?php foreach ($tab['model']['entity_fields'] as $child_field) { if($child_field['is_list_field']) {?>
                            <th><?php echo $child_field['description']; ?></th>
                        <?php } } ?>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <?php 
                $child_field_name = $tab['name'];
                $child_artifact_name = $tab['artifact_name'];
                $child_entity_description = strtolower($tab['model']['entity_description']);
                $child_parent_url = '&parent_id=' . $model['id'] . '&parent_artifact=' . $view->get_artifact_name() . '&parent_field=' . $child_field_name;
            ?>
            <div class="btn-demo m-t-10">
                <a id="create-<?php echo $child_artifact_name; ?>-btn" 
                    href="<?php echo EntityActionProcessor::get_base_url() ;?>artifact=<?php echo $child_artifact_name; ?>&page_action=create&parent_id=<?php echo $model['id']; ?>&parent_artifact=<?php echo $view->get_artifact_name(); ?>&parent_field=<?php echo $child_field_name; ?>" 
                    class="btn btn-success waves-effect">
                   <?php _e('Add ' . $child_entity_description, 'framework') ?>
                </a>
                <input type="hidden" 
                    id="<?php echo $child_artifact_name; ?>_parent_params" 
                    name="<?php echo $child_artifact_name; ?>_parent_params" 
                    value="<?php echo $child_parent_url; ?>" /> 
            </div>
        </div>        
    <?php $ifield_count++; } ?>
</div>
<script type="text/javascript">

$(document).ready(function () {

    $('#jstree_demo_div').jstree({
        'core' : {
            'data' : {
                'url' : ${application.name?lower_case}_ajax_script.ajaxurl,
                'type' : 'POST',
                'data' : {action: 'load_coa_ajax', id: '<?php echo $model['id']; ?>'}
            }
        }
    });
});

$('#generate-coa-btn').click(function(e){
    e.preventDefault();
    var formData = new FormData(), params = $('#generate-coa-form').serializeArray();
    // Copy other params from the form into the formData
    $.each(params, function(i, val) {
        formData.append(val.name, val.value);
    });
    // As required by wordpress
    formData.append('action', 'generate_coa_ajax');
    swal({title: "Please wait!", text: "Your request is being processed", showConfirmButton: false });
    // Make the Ajax call
    $.ajax({
        url: ${application.name?lower_case}_ajax_script.ajaxurl,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(responseData) {
            if (responseData.success) {
                swal({   
                    title: "Great Job!",   
                    text: "The data operation completed successfully",   
                    type: "success",   
                    showCancelButton: false,   
                    closeOnConfirm: true 
                }, function(){   
                    window.location.reload();
                });
            }
            else {
                swal({   
                    title: "Oops!",   
                    text: responseData.data.message,   
                    type: "warning",   
                    showCancelButton: false,   
                    closeOnConfirm: true 
                });
            }
        }
    });
});

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
            data: ({action: 'delete_<?php echo $model['entity_post_name']; ?>_ajax'}),
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