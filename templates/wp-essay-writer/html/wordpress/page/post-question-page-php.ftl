<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>
    <?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    wp_register_style('bootstrap-select_css', get_stylesheet_directory_uri() . 
        '/vendors/bower_components/bootstrap-select/dist/css/bootstrap-select.css');
    wp_enqueue_style('bootstrap-select_css');
   
    wp_register_script('bootstrap-select_js', get_stylesheet_directory_uri() . 
        '/vendors/bower_components/bootstrap-select/dist/js/bootstrap-select.js', array('jquery'), true);
    wp_enqueue_script('bootstrap-select_js');

    $view = $_REQUEST['page_info']['view'];
    $content_order_view = ArtifactRequestProcessor::get_entity_view_instance('contentorder', $_REQUEST['page_info']);
    if($content_order_view) $model = $content_order_view->get_model();

    //$current_user_party = PartyAPI::get_current_user_party();
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
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control name" 
                        id="name" name="name" 
                        placeholder="Title" data-bv-message="The title is not valid" 
                        data-bv-notempty-message="The title is required and cannot be empty" required>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control" 
                        id="email" name="email" 
                        placeholder="Email" data-bv-message="The email is not valid" 
                        data-bv-notempty-message="The email is required and cannot be empty" required>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-6">
            <div class="form-group">
                <select class="form-control price_component" name="document_type" >
                    <?php $document_types = EntityAPI::find_by_criteria('documenttype', array());
                        foreach ($document_types as $document_type) { 
                            $document_type_code = $document_type['entity_code']; ?>
                        <option value="<?php echo $document_type_code; ?>">
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
                    foreach ($urgencies as $urgency) {
                        $urgency_code = $urgency['entity_code'];
                        ?>
                        <option value="<?php echo $urgency_code; ?>">
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
                        foreach ($noofpages as $noofpage) { $noofpages_code = $noofpage['entity_code']; ?>
                        <option value="<?php echo $noofpages_code; ?>">
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
                        foreach ($academiclevels as $academiclevel) {
                            $academiclevel_code = $academiclevel['entity_code'];
                            ?>
                            <option value="<?php echo $academiclevel_code; ?>">
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
                <select class="form-control price_component" name="subject_area" >
                    <?php
                        $subjectareas = EntityAPI::find_by_criteria('subjectarea', array());
                        foreach ($subjectareas as $subjectarea) {
                            $subjectarea_code = $subjectarea['entity_code'];
                            ?>
                            <option value="<?php echo $subjectarea_code; ?>">
                                <?php echo $subjectarea['name']; ?>
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
                        foreach ($styles as $style) {
                            $style_code = $style['entity_code'];  ?>
                            <option value="<?php echo $style_code; ?>">
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
                            <input type="file" name='order_attachment[]' multiple>
                        </span>
                        <span class="fileinput-filename"></span>
                        <a href="form-components.html#" class="close fileinput-exists" data-dismiss="fileinput">&times;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-md-9">
            <div class="form-group">
                <div class="fg-line">
                    <textarea name="description" class="form-control" 
                        rows="5" placeholder="Please provide your instructions here">
                    </textarea>
                </div>
            </div>
        </div>
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

    <?php 
        $view_options = '';
        foreach ($view->get_form_fields() as $field) { 
            if(isset($field['view_criteria'])) { 
                foreach ($field['view_criteria'] as $criteria_name => $criteria_value) { 
                    $view_options = $view_options . '&' . $criteria_name . '=' . $criteria_value;
                }
            }
        } 
    ?>
    <!-- This fields are used by the relationship field selection routine -->
    <input type="hidden" id="current-related-field" name="current-related-field" value="">
    <input type="hidden" id="current-relationship-field-id" name="current-relationship-field-id" value="">
    <input type="hidden" id="current-relationship-field-name" name="current-relationship-field-name" value="">
    <?php if(!EntityStringUtils::is_invalid_string($view_options)){ ?>
    <input type="hidden" id="view_options" name="view_options" value="<?php echo $view_options; ?>">
    <?php } ?>


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

<!-- Put this out side the form to prevent illegal nested forms -->
<?php //do_action('shadowbanker_render_related_entity_field_modals'); ?>


<script type="text/javascript">
    jQuery(document).ready(function ($)
    {   

        var files = [];
        BlitzDocument.doOrderFormCalculation();

        $('#order-form .price_component').on('change', function (e) {
            BlitzDocument.doOrderFormCalculation();
        });

        $('#order_attachment').on('change', function (e) {
            BlitzDocument.doOrderFormFileSelection(this, files);
        });
        
        $('#selected_files_list').on('click', '.selected-file-entry', function(e){
            e.preventDefault();
            BlitzDocument.doRemoveOrderFormFile($(this), files);
        });


        $('#order-form').bootstrapValidator().on('success.form.bv', function (e)
        {
            e.preventDefault();
            var $form = $(e.target), 
            formData = new FormData(), 
            params = $form.serializeArray(),
            files = $form.find('[name="order_attachment[]"]')[0].files;
            // Copy other params from the form into the formData
            $.each(params, function(i, val) {
                formData.append(val.name, val.value);
            });
            // Copy other params from the form into the formData
            $.each(files, function(i, file) {
                formData.append('order_attachment[]', file);
            });
            // As required by wordpress
            formData.append('action', 'create_contentorder_ajax');
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
