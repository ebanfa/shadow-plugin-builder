<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    } 
    $view = $_REQUEST['page_info']['view'];
?>

<?php do_action('shadowbanker_do_render_component', 'portal-header'); ?>
<?php do_action('shadowbanker_do_render_component', 'portal-menu'); ?>
<section id="content">
    <div class="container">
        <?php do_action('shadowbanker_do_render_component', 'page-block-header'); ?>
        <div class="row">
            <div class="col-sm-12">
                <?php do_action('shadowbanker_do_render_component', 'tutor-view-panel'); ?>
            </div>
        </div>
    </div>
</section>
<?php do_action('shadowbanker_do_render_component', 'portal-footer'); ?>

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
                url: '<?php echo admin_url('admin-ajax.php'); ?>',
                data: ({action: 'delete_entity_ajax'}),
                success: function (responseData)
                {
                    var success_msg = '';
                    if (responseData.success) {
                        swal({   
                            title: "Deleted!",   
                            text: "The record has been deleted",   
                            type: "success",   
                            showCancelButton: false,   
                            confirmButtonText: "OK",   
                            closeOnConfirm: true 
                        }, function(){   
                            window.location=responseData.data.message;
                        });
                    }
                    else {
                        swal("Error!", responseData.data.message, "warning"); 
                    }
                }
            });
            
        });

        $('.done-btn').click(function(e){
            location.reload();
        });
    });
</script>