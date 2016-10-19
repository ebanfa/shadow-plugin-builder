<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
    $view = $_REQUEST['page_info']['view'];
    $tutor_data = $view->tutor_data;
    $can_edit_profile = true; //$view->can_edit_tutor_profile();
?>

<div class="card" id="profile-main">
    <div class="pm-overview c-overflow">

        <div class="pmo-pic">
            <div class="p-relative">
                <a data-toggle="modal" href="#upload-image-modal">
                    <img class="img-responsive" src="<?php echo $tutor_data['image_url']; ?>" alt="">
                </a>

               <!--  <div class="dropdown pmop-message">
                    <a data-toggle="dropdown" href="profile-about.html" class="btn bgm-white btn-float z-depth-1">
                        <i class="zmdi zmdi-comment-text-alt"></i>
                    </a>

                    <div class="dropdown-menu">
                        <textarea placeholder="Write something..."></textarea>

                        <button class="btn bgm-green btn-float"><i class="zmdi zmdi-mail-send"></i>
                        </button>
                    </div>
                </div> -->

                <a data-toggle="modal" href="#upload-image-modal" class="pmop-edit">
                    <i class="zmdi zmdi-camera"></i> <span
                        class="hidden-xs">Update Profile Picture</span>
                </a>
            </div>


            <div class="pmo-stat">
                <h4 class="m-0 c-white"><?php echo $tutor_data['name'];?></h4>
            </div>
            <div class="pmo-block pmo-contact">
                <?php if($can_edit_profile) { ?>
                <div class="btn-demo m-t-20">
                    <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=tutoreditor'.'&id='.$tutor_data['id'].'&page_action=edit'; ?>" class="btn btn-primary btn-block waves-effect">
                       Edit
                    </a>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>

    <div class="pm-body clearfix">
        <ul class="tab-nav tn-justified">
            <li class="active"><a href="profile-about.html">About</a></li>
            <!-- <li><a href="profile-timeline.html">Timeline</a></li> -->
        </ul>


        <div class="pmb-block">
            <div class="pmbb-header">
                <h2><i class="zmdi zmdi-equalizer m-r-10"></i> Summary</h2>
            </div>
            <div class="pmbb-body p-l-30">
                <div class="pmbb-view">
                    <?php echo $tutor_data['description'];?>
                </div>
            </div>
        </div>
        <div class="pmb-block">
            <div class="pmbb-header">
                <h2><i class="zmdi zmdi-thumb-up m-r-10"></i> Rating</h2>
            </div>
            <div class="pmbb-body p-l-30">
                <div class="pmbb-view">
	                <div class="rating-list">
	                	<?php if($tutor_data['rating'] != 0 ) { ?>
	                    <div class="rl-star c-orange ">
	                        <?php for ($i=0; $i < $tutor_data['rating']; $i++) { echo '<i class="zmdi zmdi-star active"></i>'; }?>
	                    </div>
	                    <?php } else { $tutor_data['rating'] = 5; ?>
	                    <div class="rl-star">
	                        <?php for ($i=0; $i < $tutor_data['rating']; $i++) { echo '<i class="zmdi zmdi-star"></i>'; }?>
	                    </div>
	                    <div class="text-left">Not rated</div>
	                    <?php } ?>
	                </div>
                </div>
            </div>
        </div>
        <div class="pmb-block">
            <div class="pmbb-header">
                <h2><i class="zmdi zmdi-settings m-r-10"></i> Actions</h2>
            </div>
            
            <div class="pmbb-body p-l-30">
                <div class="pmbb-view">
                    <div class="row">
                        <?php if($view->can_rate_tutor()) { ?>
                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-5">
                            <a data-toggle="modal" href="#rate-tutor-modal" class="btn btn-block btn-primary waves-effect">
                               <?php _e('Rate This Tutor', 'framework') ?>
                            </a>
                        </div>
                        <?php } ?>
                        <?php if($can_edit_profile) { ?>
                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-5">
                            <a data-toggle="modal" href="#update-password-modal" class="btn btn-block btn-primary waves-effect">
                               <?php _e('Change Password', 'framework') ?>
                            </a>
                        </div>
                        <?php } ?>
                        <?php if($view->can_deactive_account()) { ?>
                        <div class="col-xs-12 col-sm-6 col-md-4 m-t-5">
                            <form id="deactivate-account-form" style="display:none" action=""  method="POST">
                                <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                <input type="hidden" name="edit_mode" value="edit" /> 
                                <input type="hidden" name="artifact" value="tutordisplay">
                                <input type="hidden" name="submitted" id="submitted" value="true" />
                                <input type="hidden" name="id" value="<?php echo $tutor_data['id']; ?>">
                                <input type="hidden" name="display_action" value="deactivate_account" /> 
                            </form>
                            <a id="deactivate-account-btn" href="" class="btn btn-block btn-warning waves-effect">
                               <?php _e('Deactivate', 'framework') ?>
                            </a>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<!-- Modal -->
<div id="rate-tutor-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Rate Tutor</h4>
            </div>
            <form role="form" name="rate-tutor-form" 
                id="rate-tutor-form" action="" 
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
                        <input type="hidden" name="id" value="<?php echo $tutor_data['id']; ?>">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="rate-tutor-form-btn" type="submit" class="btn btn-primary waves-effect">
                        <?php _e('Submit', 'framework') ?>
                    </button>
                    <button id="done-rating-btn" type="button" class="btn" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modal -->
<div id="upload-image-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Upload Profile Image</h4>
            </div>
            <div class="modal-body">
                <form id="upload-image-form" action=""  method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="edit_mode" value="edit" /> 
                    <input type="hidden" name="artifact" value="tutordisplay"> 
                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                    <input type="hidden" name="action" value="edit_entity_ajax" /> 
                    <input type="hidden" name="submitted" id="submitted" value="true" />
                    <input type="hidden" name="id" value="<?php echo $tutor_data['id']; ?>">
                    <input type="hidden" name="display_action" value="update_profile_image" /> 
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="f-500 c-black m-b-20">Select Image</p>
                            <span class="btn btn-success fileinput-button">
                                <i class="glyphicon glyphicon-plus"></i>
                                <span>Select files...</span>
                                <!-- The file input field used as target for the file upload widget -->
                                <input id="fileupload" type="file" name="party_images[]">
                            </span>
                            <br>
                            <br>
                            <!-- The global progress bar -->
                            <div id="progress" class="progress">
                                <div class="progress-bar progress-bar-success"></div>
                            </div>
                            <!-- The container for the uploaded files -->
                            <div id="files" class="files"></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="done-upload-btn" type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
        </div>
    </div>
</div>

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
                        <input type="hidden" name="id" value="<?php echo $tutor_data['id']; ?>">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="update-password-form-btn" type="submit" class="btn btn-primary waves-effect">
                        <?php _e('Submit', 'framework') ?>
                    </button>
                    <button id="done-password-btn" type="button" class="btn" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>


<script type="text/javascript">

jQuery(document).ready(function ($)
{   
    $('#rate-tutor-form').bootstrapValidator().on('success.form.bv', function (e)
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
$('#deactivate-account-btn').click(function(e){
    e.preventDefault();
    swal({   
        title: "Hold Up!",   
        text: "Are you sure you want to deactivate this account?",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "Yes, deactivate it!",   
        closeOnConfirm: false 
    }, function(){   
        var form = $('#deactivate-account-form').ajaxSubmit(
        {/* options */
            url: ${application.name?lower_case}_ajax_script.ajaxurl,
            data: ({action: 'edit_entity_ajax'}),
            success: function (response)
            {
                var success_msg = '';
                if (response.success) {
                    swal({   
                        title: "Deactivated!",   
                        text: "The account has been deactivated",   
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
/*jslint unparam: true */
/*global window, $ */
$(function () {
    'use strict';
    // Change this to the location of your server-side upload handler:
    /*var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : 'server/php/';*/
    $('#fileupload').fileupload({
        url: ${application.name?lower_case}_ajax_script.ajaxurl,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo('#files');
            });
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});


$('#done-upload-btn').click(function(e){
    location.reload();
});

</script>