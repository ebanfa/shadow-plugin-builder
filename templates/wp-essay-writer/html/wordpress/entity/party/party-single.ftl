<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }


    wp_register_style('fileupload_css', get_stylesheet_directory_uri() . '/css/portal/jquery.fileupload.css');
    wp_enqueue_style('fileupload_css');

    wp_register_script('widget_js', get_stylesheet_directory_uri() . '/js/portal/jquery.ui.widget.js', array('jquery'), true);
    wp_register_script('transport_js', get_stylesheet_directory_uri() . '/js/portal/jquery.iframe-transport.js', array('jquery'), true);
    wp_register_script('fileupload_js', get_stylesheet_directory_uri() . '/js/portal/jquery.fileupload.js', array('jquery'), true);

    wp_enqueue_script('widget_js');
    wp_enqueue_script('transport_js');
    wp_enqueue_script('fileupload_js');

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $tabs = $view->get_tabs();
    $party_rating = doubleval(TutorAPI::get_party_rating($model));

    
    $parent_param = '';
    if(isset($_REQUEST['parent_param'])) $parent_param = urldecode($_REQUEST['parent_param']);
    $content_files = EntityAPI::find_by_criteria('partyimage', array('file_party' =>  $model['id']));
    $image_url = get_stylesheet_directory_uri() . '/images/portal/profile-pics/' . $model['image'];

    if(!empty($content_files)) {
        $party_image_data = $content_files[0];
        $image_url = $party_image_data['file_url'];
    }

?>
<div class="c-overflow">
    <ul class="tab-nav" role="tablist" style="overflow: visible;">
        <li class="active">
            <a href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
                <?php echo $model['entity_description']; ?>
            </a>
        </li>

        <?php  $count = 1; foreach ($tabs as $tab) {  ?>
        <li>
            <a
                href="#tab-<?php echo $count; ?>" 
                aria-controls="tab-<?php echo $count; ?>" role="tab" data-toggle="tab">
                <?php echo $tab['description']; ?>
            </a>
        </li>
        <?php  $count++; } ?>
    </ul>
</div>

<div class="tab-content p-20">
    <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-0">
        <div id="success"></div>
        <div class="card" id="profile-main">
            <div class="pm-overview c-overflow">
                <div class="pmo-pic">
                    <div class="p-relative">
                        <a  data-toggle="modal" href="#upload-image-modal">
                            <img class="img-responsive" src="<?php echo $image_url; ?>" alt=""> 
                        </a>
                        
                        <div class="dropdown pmop-message">
                            <!-- <a data-toggle="dropdown" href="profile-about.html" class="btn bgm-white btn-float z-depth-1"> -->
                            <a href="profile-about.html" class="btn bgm-white btn-float z-depth-1">
                                <i class="zmdi zmdi-comment-text-alt"></i>
                            </a>
                            
                            <div class="dropdown-menu">
                                <textarea placeholder="Write something..."></textarea>
                                
                                <button class="btn bgm-green btn-float"><i class="zmdi zmdi-mail-send"></i></button>
                            </div>
                        </div>
                        
                        <a  data-toggle="modal" href="#upload-image-modal" class="pmop-edit">
                            <i class="zmdi zmdi-plus"></i> <span class="hidden-xs">Update Profile Image</span>
                        </a>
                    </div>
                    
                   
                    <div class="pmo-stat">
                        <h2 class="m-0 c-white">1562</h2>
                        Total Orders Completed
                    </div>
                    <div class="pmo-block pmo-contact hidden-xs">
                         <div class="btn-demo m-t-10">
                            <a href="<?php echo $view->get_edit_url(); ?>" class="btn btn-primary btn-block waves-effect">
                               <?php echo $model['name']; ?>
                            </a>
                        </div>
                        <div class="rating-list text-center">
                            <div class="rl-star c-orange ">
                                <?php for ($i=0; $i < $party_rating; $i++) { echo '<i class="zmdi zmdi-star active"></i>'; }?>
                            </div>
                        </div>
                    </div>
                    <div class="pmo-block pmo-contact hidden-xs">

                    </div>
                </div>
            </div>

            <div class="pm-body clearfix">

                <div class="pmb-block">
                    <div class="pmbb-header">
                        <h2><i class="zmdi zmdi-account m-r-5"></i> Basic Information</h2>
                        
                        <ul class="actions">
                            <li class="dropdown">
                                <a href="profile-about.html" data-toggle="dropdown">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a data-pmb-action="edit" href="<?php echo $view->get_edit_url(); ?>">Edit</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="pmbb-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                <tbody>
                                    <tr>
                                    <?php foreach ($model['entity_fields'] as $field_name => $field) { if($field['is_view_field']) {  ?>
                                        <th><?php echo $field['description']; ?></th>
                                    <?php } } ?>
                                    </tr>

                                    <tr>
                    <?php foreach ($model['entity_fields'] as $field) { if($field['is_view_field'] && !$field['is_relationship_field']) {  ?>
                                        <td><?php echo $model[$field['name']]; ?></td>
                        <?php } if ($field['is_view_field'] && $field['is_relationship_field']) { ?>
                                        <td><?php echo $model[$field['name'] . '_txt']; ?></td>
                    <?php } } ?>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
                <table id="<?php echo $tab['model']['entity_post_name'];?>_related-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
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
                </table> <?php ?>
            </div>
            <?php 
                $child_field_name = $tab['name'];
                $child_artifact_name = $tab['artifact_name'];
                $child_entity_description = strtolower($tab['model']['entity_description']);
                $child_parent_url = '&parent_id=' . $model['id'] . '&parent_artifact=' . $view->get_artifact_name() . '&parent_field=' . $child_field_name . '&parent_param=' . urlencode('&role='.$view->role);
            ?>
            <div class="btn-demo m-t-10">
                <a id="create-<?php echo $child_artifact_name; ?>-btn" 
                    href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() ;?>artifact=<?php echo $child_artifact_name; ?>&page_action=create<?php echo $child_parent_url; ?>" 
                    class="btn btn-success waves-effect">
                   <?php _e('Add ' . $child_entity_description, 'framework') ?>
                </a>
                <input type="hidden" 
                    id="<?php echo $child_artifact_name; ?>_parent_params" 
                    name="<?php echo $child_artifact_name; ?>_parent_params" 
                    value="<?php echo $child_parent_url; ?>" /> 
            </div>
        </div>    
        <script type="text/javascript">
            $(document).ready(function() { 
                // Setup - add a text input to each footer cell 
                $('#<?php echo $tab['model']['entity_post_name']; ?>_related-table tfoot th').each(function () { 
                    var title = $('#<?php echo $tab['model']['entity_post_name']; ?>_related-table thead th').eq($(this).index()).text(); 
                    $(this).html('<div class="form-group"><div class="fg-line"><input type="text" class="form-control" placeholder="Search '+title+'" /></div></div>'); 
                }); 

                // DataTable 
                var table = $('#<?php echo $tab['model']['entity_post_name']; ?>_related-table').DataTable({                
                    "processing": true, // for show processing bar
                    "serverSide": true, // for process on server side
                    "orderMulti": false, // for disable multi column order
                    //"dom": '<"top"i>rt<"bottom"lp><"clear">', // for hide default global search box // little confusion? don't worry I explained in the tutorial website
                    'ajax': {
                        'url':'<?php echo admin_url('admin-ajax.php'); ?>',
                        'type':'POST',
                        'datatype':'json',
                        'data': function(d){
                            d.action = 'find_child_entities_ajax';
                            d.parent_id = '<?php echo $model['id']; ?>';
                            d.artifact = '<?php echo $child_artifact_name; ?>';
                            d.parent_field_name = '<?php echo $child_field_name; ?>';
                        },
                    },
                    'columns': [
                        {'data': 'id' },
                    <?php 
                        foreach ($tab['model']['entity_fields'] as $field_name => $entity_field) { 
                            if($entity_field['is_list_field'] && !$entity_field['is_relationship_field']) { 
                                echo '{"data": "'.$entity_field['name'].'"},'; 
                            }
                            if($entity_field['is_list_field'] && $entity_field['is_relationship_field']) { 
                                echo '{"data": "'.$entity_field['name'].'_txt"},'; 
                            }
                        } 
                    ?>
                    ],
                    'columnDefs': [
                        { "visible": false,  "targets": 0 },
                        {
                            // The `data` parameter refers to the data for the cell (defined by the
                            // `data` option, which defaults to the column being worked with, in
                            // this case `data: 0`.
                            "render": function ( data, type, row ) {
                                var additional_seach_options = '';
                                if($('#additional_seach_options').length) { additional_seach_options = $('#additional_seach_options').val(); }

                                
                                return '<a class="data-table-link" href="' + '<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url(); ?>' + 'artifact=<?php echo strtolower($tab['model']['entity_name']); ?>&id=' + row.id + '&page_action=view' +  additional_seach_options +'&parent_id=<?php echo $model['id']; ?>&parent_artifact=<?php echo $view->get_artifact_name(); ?>&parent_field=<?php echo $child_field_name; ?>" data-related-artifact-name="<?php echo strtolower($tab['model']['entity_name']); ?>" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                            },
                            "targets": 1
                        }
                    ]
                }); 
                // Apply the search 
                table.columns().eq( 0 ).each( 
                    function ( colIdx ) { 
                        $('input', table.column(colIdx).footer()).on('keyup change', function () { 
                            table.column(colIdx).search(this.value).draw(); 
                        }); 
                    } 
                ); 
            });
        </script>    
    <?php $ifield_count++; } ?>
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
                    <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                    <input type="hidden" name="action" value="upload_party_images_file_ajax" /> 
                    <input type="hidden" name="artifact" value="<?php echo $view->get_artifact_name(); ?>"> 
                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                    <input type="hidden" name="submitted" id="submitted" value="true" />
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="f-500 c-black m-b-20">Select Image</p>
                            <!-- <div class="fileinput fileinput-new" data-provides="fileinput">
                                <span class="btn btn-primary btn-file m-r-10">
                                    <span class="fileinput-new">Select a file to upload</span>
                                    <span class="fileinput-exists">Change selected file</span>
                                    <input  name='order-upload-file[]' id="order-upload-file" type="file" multiple class="form-control file-control" >
                                </span>
                                <span class="fileinput-filename"></span>
                                <a href="form-components.html#" class="close fileinput-exists" data-dismiss="fileinput">&times;</a>
                            </div> -->
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
                <button id="upload-file-btn" type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
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
            data: ({action: 'delete_entity_ajax'}),
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

$('#upload-file-btn').click(function(e){
    location.reload();
});

</script>

<script>
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
</script>