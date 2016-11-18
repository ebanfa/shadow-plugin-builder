<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }


    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<div class="c-overflow">
    <?php if($view->is_pending_payment()) {?>
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        Your order has been received, please make a payment of $<?php echo intval($view->get_outstanding_amount()); ?> to get your work started. The balance will be paid once the work has been completed.
        <!-- Your order has been received, please make a down payment of 50% ($</?php //echo intval($view->get_outstanding_amount()); ?>) to get your work started. The balance will be paid once the work has been completed -->.
    </div>
    <?php } ?>
    <ul class="tab-nav" role="tablist" style="overflow: visible;">
        <li class="active"><a href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">Order Details</a></li>
        <li><a href="#tab-question" aria-controls="tab-question" role="tab" data-toggle="tab">Question</a></li>
        <li><a href="#tab-instructions" aria-controls="tab-instructions" role="tab" data-toggle="tab">Instructions</a></li>
        <li><a href="#tab-files" aria-controls="tab-files" role="tab" data-toggle="tab">Files</a></li>
    </ul>
</div>

<div class="tab-content p-20">
    <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-0">
        <div id="success"></div>
        <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                <tbody>
                    <tr>
                    <?php foreach ($model['entity_fields'] as $field_name => $field) { 
                            if($field['is_view_field']) {  ?>
                        <th><?php echo $field['description']; ?></th>
                    <?php   } } ?>
                    </tr>

                    <tr>
                        <?php foreach ($model['entity_fields'] as $field) { 
                            if($field['is_view_field'] && !$field['is_relationship_field']) {  
                        ?>
                        <td><?php echo $model[$field['name']]; ?></td>
                        <?php } if ($field['is_view_field'] && $field['is_relationship_field']) { ?>
                        <td><?php echo $model[$field['name'] . '_txt']; ?></td>
                        
                        <?php } } ?>
                    </tr>
                </tbody>
            </table>
        </div>
        <?php do_action('shadowbanker_do_render_component', 'contentorder-buttons-panel'); ?>
    </div>

    <?php do_action('shadowbanker_do_render_component', 'contentorder-question-panel'); ?>
    <?php do_action('shadowbanker_do_render_component', 'contentorder-instructions-panel'); ?>
    <?php do_action('shadowbanker_do_render_component', 'contentorder-files-panel'); ?>
</div>
<?php do_action('shadowbanker_do_render_component', 'contentorder-file-modal'); ?>

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

    $('#pay-invoice-btn').click(function (e)
    {
        e.preventDefault();
        $('#paypal-form').submit();
    });
</script>

