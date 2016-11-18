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
<div id="contentorder-file-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">File Upload</h4>
            </div>
            <div class="modal-body">
                <form id="upload-file-form" action=""  method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="edit_mode" value="edit" /> 
                    <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                    <input type="hidden" name="action" value="edit_entity_ajax" /> 
                    <input type="hidden" name="artifact" value="contentorderfile"> 
                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                    <input type="hidden" name="submitted" id="submitted" value="true" />
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="f-500 c-black m-b-20">Add files to your order</p>
                            <span class="btn btn-success fileinput-button">
                                <i class="glyphicon glyphicon-plus"></i>
                                <span>Select files...</span>
                                <!-- The file input field used as target for the file upload widget -->
                                <input id="fileupload" type="file" name="contentorder_files[]" multiple>
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
                <button id="upload-file-btn" type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
        </div>
    </div>
</div>
<script>
    /*jslint unparam: true */
    /*global window, $ */
    $(function () {
        'use strict';
        $('#fileupload').fileupload({
            url: '<?php echo admin_url('admin-ajax.php'); ?>',
            dataType: 'json',
            singleFileUploads: false,
            maxFileSize: 1999000,
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

    $('#upload-file-btn').click(function(e){
        location.reload();
    });
</script>