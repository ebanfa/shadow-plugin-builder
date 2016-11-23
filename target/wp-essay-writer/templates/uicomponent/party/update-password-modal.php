<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<!-- Modal -->
<div id="update-password-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Update Your Password</h4>
            </div>
            <form role="form" name="update-password-form" 
                id="update-password-form" action="" 
                method="POST" enctype="multipart/form-data" 
                data-bv-framework="bootstrap"
                data-bv-message="This value is not valid"
                data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input name="password" id="password" type="password" value="" 
                                       class="form-control" 
                                       placeholder="Password" 
                                       data-bv-notempty="true"
                                       data-bv-notempty-message="The password is required and cannot be empty"
                                       data-bv-identical="true"
                                       data-bv-identical-field="confirm_password"
                                       data-bv-identical-message="The password and its confirm are not the same"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input name="confirm_password" id="confirm_password" type="password" value="" 
                                       class="form-control" 
                                       placeholder="Confirm password"
                                       data-bv-notempty="true"
                                       data-bv-notempty-message="The confirm password is required and cannot be empty"
                                       data-bv-identical="true"
                                       data-bv-identical-field="password"
                                       data-bv-identical-message="The password and its confirm are not the same"/>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="btn-demo m-t-10">
                        <input type="hidden" name="edit_mode" value="edit" /> 
                        <input type="hidden" name="artifact" value="tutordisplay"> 
                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                        <input type="hidden" name="display_action" value="update_password" /> 
                        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="update-password-form-btn" type="submit" class="btn btn-primary waves-effect">
                        <?php _e('Submit', 'framework') ?>
                    </button>
                    <button type="button" class="done-btn btn btn-primary" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function ($)
    {   
        $('#update-password-form').bootstrapValidator().on('success.form.bv', function (e)
        {
            e.preventDefault();
            var $form = $(e.target), 
            formData = new FormData(), 
            params = $form.serializeArray();
            // Copy other params from the form into the formData
            $.each(params, function(i, val) {
                formData.append(val.name, val.value);
            });
            // As required by wordpress
            formData.append('action', 'edit_entity_ajax');
            swal({title: "Please wait!", text: "Your request is being processed", showConfirmButton: false });
            // Make the Ajax call
            $.ajax({
                url: '<?php echo admin_url('admin-ajax.php'); ?>',
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(responseData) {
                    if (responseData.success) {

                        swal({   
                            title: "Great Job!",   
                            text: "Your password has been updated. Click OK to proceed",   
                            showCancelButton: false,   
                            closeOnConfirm: true 
                        }, function(){   
                            location.reload();
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
    });
</script>