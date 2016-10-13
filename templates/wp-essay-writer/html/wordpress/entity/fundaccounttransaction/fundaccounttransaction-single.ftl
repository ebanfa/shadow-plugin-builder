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
        <div class="btn-demo m-t-10">
            
            <a id="cancel-entity-btn" href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=' . $view->get_artifact_name() . '&page_action=list'?>" class="btn btn-warning waves-effect">
               <?php _e('Cancel', 'framework') ?>
            </a>
            <?php if(!is_null($view->get_parent_artifact_name())) { ?>
            <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=' . $view->get_parent_artifact_name() . '&id=' . $view->get_parent_id() . $view->get_parent_param(); ?>&page_action=view" 
               class="btn btn-primary waves-effect">
               <?php _e('Done', 'framework') ?>
            </a>
            <?php } ?>
            <?php if($model['status_txt'] == 'Pending') { ?>
            <form id="paypal-form" style="display:none" action="<?php echo get_option('cp_paypal_url'); ?>" method="post" target="_top">
                <input type="hidden" name="cmd" value="_xclick">
                <input type="hidden" name="business" value="<?php echo get_option('cp_paypal_id'); ?>">
                <input type="hidden" name="lc" value="US">
                <input type="hidden" name="invoice" id="invoice" value="<?php echo $model['entity_code']; ?>">
                <input type="hidden" name="item_name" value="<?php echo $model['name']; ?>">
                <input type="hidden" name="amount" value="<?php echo $model['amount']; ?>">
                <input type="hidden" name="currency_code" value="USD">
                <input type="hidden" name="button_subtype" value="services">
                <input type="hidden" name="no_note" value="0">
                <input type="hidden" name="cn" value="Add special instructions to the seller:">
                <input type="hidden" name="no_shipping" value="1">
                <input type="hidden" name="rm" value="1">
                <input type="hidden" name="return" value="<?php echo get_option('cp_paypal_return'); ?>">
                <input type="hidden" name="cancel_return" value="<?php echo get_option('cp_paypal_cancel'); ?>">
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>

            <a id="fund-account-btn" href="<?php echo $view->get_edit_url(); ?>" class="btn btn-primary waves-effect">
               <?php _e('Proceed to payment', 'framework') ?>
            </a>
            <?php } ?>
            <!-- <form id="delete-entity-form" style="display:none" action=""  method="POST">
                <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                <input type="hidden" name="artifact" value="<?php echo $view->get_artifact_name(); ?>">
                <?php //wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                <input type="hidden" name="submitted" id="submitted" value="true" />
            </form> -->
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
                    href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() ;?>artifact=<?php echo $child_artifact_name; ?>&page_action=create&parent_id=<?php echo $model['id']; ?>&parent_artifact=<?php echo $view->get_artifact_name(); ?>&parent_field=<?php echo $child_field_name; ?>" 
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

$('#fund-account-btn').click(function (e)
{
    e.preventDefault();
    $('#paypal-form').submit();

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