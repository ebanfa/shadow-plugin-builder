<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    } 
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $tutor_data = array();
    if(isset($_REQUEST['tutor'])) $tutor_data = TutorAPI::get_by_id(sanitize_text_field($_REQUEST['tutor']));

    $current_user_party = UserPartyAPI::get_current_user_party();
?>

<form role="form" name="<?php echo $model['entity_post_name'];?>_form" 
    id="order-form" action="" 
    method="POST" enctype="multipart/form-data" 
    data-bv-framework="bootstrap"
    data-bv-excluded = ":disabled"
    data-bv-message="This value is not valid"
    data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
    data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
    data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
    <div class="row">
        <div class="col-xs-12 col-md-12">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control name" 
                        id="name" name="name" 
                        placeholder="Title" data-bv-message="The is not valid" 
                        data-bv-notempty-message="The is required and cannot be empty" required>
                </div>
            </div>
        </div>
    </div>
    <?php if (!is_user_logged_in()) { ?>
    <div class="row">
        <div class="col-xs-12 col-md-12">
            <div class="form-group">
                <div class="fg-line">
                    <input type="email" 
                        class="form-control email" 
                        id="email" name="email" 
                        placeholder="Your email address" data-bv-message="The email is not valid" 
                        data-bv-emailaddress-message="The input is not a valid email address" required>
                </div>
            </div>
        </div>
    </div>   
    <?php } ?>                     
    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="document_type" >
                    <?php $document_types = EntityAPI::find_by_criteria('contenttype', array('content_category' => 2));
                        foreach ($document_types as $document_type) { ?>
                        <option value="<?php echo $document_type['id']; ?>">
                            <?php echo $document_type['name']; ?>
                        </option>
                    <?php } ?>
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="urgency" >
                    <?php $urgencies = EntityAPI::find_by_criteria('urgency', array());
                    foreach ($urgencies as $urgency) { ?>
                        <option value="<?php echo $urgency['id']; ?>">
                            <?php echo $urgency['name'];  ?>
                        </option>
                    <?php } ?>
                </select>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="numpages" >
                    <?php
                        $noofpages = EntityAPI::find_by_criteria('noofpages', array());
                        foreach ($noofpages as $noofpage) { ?>
                        <option value="<?php echo $noofpage['id']; ?>">
                            <?php echo $noofpage['name']; ?>
                        </option>
                    <?php } ?>
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="academic_level" >
                    <?php
                        $academiclevels = EntityAPI::find_by_criteria('academiclevel', array());
                        foreach ($academiclevels as $academiclevel) { ?>
                            <option value="<?php echo $academiclevel['id']; ?>">
                                <?php echo $academiclevel['name']; ?>
                            </option>
                    <?php } ?>
                </select>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <div class="form-group">
                <label>
                    <input name="o_interval" class="inverted price_component" type="checkbox"> Single Spaced (if not checked it will be double spaced)<span id="num_pg_ord"></span>
                </label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="subject" >
                    <?php
                        $subjects = EntityAPI::find_by_criteria('subject', array());
                        foreach ($subjects as $subject) { ?>
                            <option value="<?php echo $subject['id']; ?>">
                                <?php echo $subject['name']; ?>
                            </option>
                    <?php } ?>
                </select>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="writing_style" >
                    <?php
                        $styles = EntityAPI::find_by_criteria('writingstyle', array());
                        foreach ($styles as $style) { ?>
                            <option value="<?php echo $style['id']; ?>">
                                <?php echo $style['name']; ?>
                            </option>
                    <?php } ?>
                </select>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-12">
            <div class="form-group">
                <div class="fg-line">
                    <div class="fileinput fileinput-new" data-provides="fileinput">
                        <span class="btn btn-primary btn-file m-r-10">
                            <span class="fileinput-new">Select file</span>
                            <span class="fileinput-exists">Change</span>
                            <input type="file" name='contentorder_files[]' multiple>
                        </span>
                        <span class="fileinput-filename"></span>
                        <a href="form-components.html#" class="close fileinput-exists" data-dismiss="fileinput">&times;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <textarea name="description" class="form-control" 
                        rows="5" placeholder="Please provide your instructions here">
                    </textarea>
                </div>
            </div>
        </div>
        <?php 
            if(isset($tutor_data['id'])) {
                // Load the profile image
                $tutor_data['image_url'] =  WPEssayWriter::plugin_url() . '/images/user.png';
                $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $tutor_data['id']);
                if(isset($tutor_image['id'])) $tutor_data['image_url'] = $tutor_image['file_url'];
        ?>
        <div class="contacts col-xs-12 col-md-3">
            <div class="c-item">
                <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=tutordisplay'.'&id='.$tutor_data['id'].'&page_action=view'; ?>" class="ci-avatar">
                    <img src="<?php echo $tutor_data['image_url']; ?>" alt="">
                </a>
                <div class="c-info">
                    <strong><?php echo $tutor_data['name']; ?></strong>
                </div>
            </div>
            <input id="order_tutor" type="hidden" name="order_tutor" value="<?php echo $tutor_data['id']; ?>" />
        </div>

        <?php } ?>
        <div class="col-xs-12 col-md-3">
            <div class="mini-charts-item bgm-orange">
                <div class="clearfix">
                    <div class="count">
                        <small>Total</small>
                        <h2><span id="total_price" class="pricing-plan-number">29</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="btn-demo m-t-10">
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
        <input type="hidden" name="artifact" id="artifact" value="contentorder" />   
        <input type="hidden" name="submitted" id="submitted" value="true" />  
        <input type="hidden" name="edit_mode" value="create" /> 

        <input id="subject_area_txt" type="hidden" name="subject_area_txt" value="" />  
        <input id="academic_level_txt" type="hidden" name="academic_level_txt" value="" />  
        <input id="urgency_txt" type="hidden" name="urgency_txt" value="" />  
        <input id="document_type_txt" type="hidden" name="document_type_txt" value="" />  
        <input id="curr_txt" type="hidden" name="curr_txt" value="" />   

        <input type="hidden" name="discount_h" value="" />  
        <input id="total" type="hidden" name="total" value="" />   
        <input id="is_portal" type="hidden" name="is_portal" value="true" />  
        <?php if (is_user_logged_in()) { ?>
        <input id="email" type="hidden" name="email" value="<?php echo $current_user_party['user_name'];?>" />   
        <?php } ?>                     
        <input type="hidden" name="lblCustomerSavings" value="" /> 
        <input type="hidden" name="submitted" id="submitted" value="true" />  
        <input id="costperpage" type="hidden" name="costperpage" value="" />
        <input id="cost_per_page" type="hidden" name="cost_per_page" value="" />
        <input type="hidden" name="discount_percent_h" class="discount_percent_h" value="" />
        <!--<label for="promo">Discount code:</label>!-->
        <input type="hidden" class="discount_code" name="discount_code" />
        <input type="hidden" name="0bb6c36d0203642ba42e79df168efa3a" value="MGJiNmMzNmQwMjAzNjQyYmE0MmU3OWRmMTY4ZWZhM2E=" />
        <input type="hidden" name="29cece43ba2d4bcaea8c78eb02aea395" value="MjljZWNlNDNiYTJkNGJjYWVhOGM3OGViMDJhZWEzOTU=" />
        <input type="hidden" name="ee52948c809e658a2e2bfd66f90aef6b" value="ZWU1Mjk0OGM4MDllNjU4YTJlMmJmZDY2ZjkwYWVmNmI=" />
        <input type="hidden" name="MTIuOTUYGREXGHNMKJGT23467GGFDSSSbbbbbIOK" value="" />
        <input type="hidden" name="MMNBGFREWQASCXZSOPJHGVNMTIuOTU" class="MMNBGFREWQASCXZSOPJHGVNMTIuOTU" value="" />
        <button id="contentorder-form-btn" type="submit" class="btn btn-primary waves-effect">
            <?php _e('Submit', 'framework') ?>
        </button>
    </div>

</form>


<script type="text/javascript">

jQuery(document).ready(function ($)
{   

    var files = [];
    BlitzDocument.doOrderFormCalculation();

    $('#order-form .price_component').on('change', function (e) {
        BlitzDocument.doOrderFormCalculation();
    });

    $('#contentorder_files').on('change', function (e) {
        BlitzDocument.doOrderFormFileSelection(this, files);
    });


    $('#order-form').bootstrapValidator().on('success.form.bv', function (e)
    {
        e.preventDefault();
        var $form = $(e.target), 
        formData = new FormData(), 
        params = $form.serializeArray(),
        files = $form.find('[name="contentorder_files[]"]')[0].files;
        // Copy other params from the form into the formData
        $.each(params, function(i, val) {
            formData.append(val.name, val.value);
        });
        // Copy other params from the form into the formData
        $.each(files, function(i, file) {
            formData.append('contentorder_files[]', file);
        });
        // As required by wordpress
        formData.append('action', 'create_entity_ajax');
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
                        text: "Your order has been successfully received",   
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

