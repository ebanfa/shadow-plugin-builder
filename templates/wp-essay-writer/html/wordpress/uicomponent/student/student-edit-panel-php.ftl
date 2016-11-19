<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    } 
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $current_user_party = UserPartyAPI::get_current_user_party();
?>

<form role="form" id="studenteditor-form" name="studenteditor-form" action="" 
    method="POST" enctype="multipart/form-data" 
    data-bv-framework="bootstrap"
    data-bv-excluded = ":disabled"
    data-bv-message="This value is not valid"
    data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
    data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
    data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control name" 
                        id="first_name" name="first_name" value="<?php if(isset($model['id'])) echo $model['first_name'];?>" 
                        placeholder="First name" data-bv-message="The first name is not valid" 
                        data-bv-notempty-message="The first name is required and cannot be empty" required>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control name" 
                        id="last_name" name="last_name" value="<?php if(isset($model['id'])) echo $model['last_name'];?>" 
                        placeholder="Last name" data-bv-message="The last name is not valid" 
                        data-bv-notempty-message="The last name is required and cannot be empty" required>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control name" 
                        id="display_name" name="display_name" value="<?php if(isset($model['id'])) echo $model['display_name'];?>" 
                        placeholder="Display Name" data-bv-message="The display name is not valid" 
                        data-bv-notempty-message="The display name is required and cannot be empty" required>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="email" 
                        class="form-control name" 
                        id="email" name="email" value="<?php if(isset($model['id'])) echo $model['user_name'];?>" 
                        placeholder="Email" data-bv-message="The email is not valid" 
                        data-bv-notempty-message="The email is required and cannot be empty" required 
                        <?php if(isset($model['id'])) echo 'disabled';?>>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-12">
            <div class="form-group">
                <div class="fg-line">
                    <textarea name="description" class="form-control" 
                        rows="5" placeholder="Please provide a tag line or description here">
                        <?php if(isset($model['id'])) echo $model['description'];?>
                    </textarea>
                </div>
            </div>
        </div>
    </div>



    <div class="btn-demo m-t-10">
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>  
        <input type="hidden" name="edit_mode" value="create" />
        <input type="hidden" name="submitted" id="submitted" value="true" />  
        <input type="hidden" name="artifact" id="artifact" value="studenteditor" /> 
        <?php if(isset($model['id'])) {?>
        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
        <?php } ?>
        <button id="studenteditor-form-btn" type="submit" class="btn btn-primary waves-effect">
            <?php _e('Submit', 'framework') ?>
        </button> 
        <?php if(isset($model['id'])) {?>
        <a href="javascript:void(0);" class="data-table-link btn btn-info" data-link="<?php echo $view->get_view_artifact_url(); ?>" >Cancel</a>
        <?php } ?>
    </div>
</form>

<!-- Put this out side the form to prevent illegal nested forms -->
<?php //do_action('shadowbanker_render_related_entity_field_modals'); ?>


<script type="text/javascript">
    jQuery(document).ready(function ($)
    {   
        $('#studenteditor-form').bootstrapValidator().on('success.form.bv', function (e)
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
            <?php if(isset($model['id'])) {?>
            formData.append('action', 'edit_entity_ajax');
            <?php } else { ?>
            formData.append('action', 'create_entity_ajax');
            <?php } ?>
            swal({title: "Please wait!", text: "Your request is being processed", showConfirmButton: false });
            // Make the Ajax call
            $.ajax({
                url: wpessaywriter_ajax_script.ajaxurl,
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(responseData) {
                    if (responseData.success) {

                        swal({   
                            title: "Great Job!",   
                            text: "Your request has been successfully processed",   
                            showCancelButton: false,   
                            closeOnConfirm: true 
                        }, function(){   
                            //$("#success").html(responseData.data.message);
                            document.location.href=responseData.data.message;
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
