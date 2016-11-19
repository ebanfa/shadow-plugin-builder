<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="pm-body clearfix">
    <ul role="tablist" class="tab-nav tn-justified">
        <li class="active">
            <a href="#tab-about" aria-controls="tab-instructions" role="tab" data-toggle="tab">About</a>
        </li>
    </ul>

    <div class="tab-content p-20">
        <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-about">

            <div class="pmb-block">
                <div class="pmbb-header">
                    <h2><i class="zmdi zmdi-equalizer m-r-10"></i> Summary</h2>
                </div>
                <div class="pmbb-body p-l-30">
                    <div class="pmbb-view">
                        <?php echo $model['description'];?>
                    </div>
                </div>
            </div>
            <?php do_action('shadowbanker_do_render_component', 'profile-buttons-panel'); ?>
        </div> <!-- End tab -->

    </div> <!-- End tab content -->
</div>
<?php do_action('shadowbanker_do_render_component', 'rate-party-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'upload-image-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'update-password-modal'); ?>

