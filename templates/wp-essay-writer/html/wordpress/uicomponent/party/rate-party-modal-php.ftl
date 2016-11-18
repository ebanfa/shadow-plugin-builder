<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<div id="rate-party-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Rate Tutor</h4>
            </div>
            <form role="form" name="rate-party-form" 
                id="rate-party-form" action="" 
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
                                    <input type="number" 
                                        class="form-control name" 
                                        id="rating" name="rating" value="" min="1" max="5"
                                        placeholder="Rating" data-bv-message="The rating name is not valid" 
                                        data-bv-notempty-message="The rating name is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <textarea name="description" class="form-control" 
                                        rows="5" placeholder="Describe your interaction with this tutor">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="btn-demo m-t-10">
                        <input type="hidden" name="edit_mode" value="edit" /> 
                        <input type="hidden" name="artifact" value="tutordisplay"> 
                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                        <input type="hidden" name="display_action" value="rate_tutor" /> 
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="rate-tutor-form-btn" type="submit" class="btn btn-primary waves-effect">
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
        $('#rate-party-form').bootstrapValidator().on('success.form.bv', function (e)
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
                            text: "Your rating was successfully submitted. Click OK to proceed",   
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