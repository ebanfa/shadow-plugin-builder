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
                <div class="card">
                    <?php do_action('shadowbanker_do_render_component', 'artifact-block-header'); ?>
                    <div class="card-body card-padding">
                        <div class="row mg-btm-30">
                            <div class="col-sm-12">
                                <div class="body-section">
                                    <div id="success"></div>
                                    <?php do_action('shadowbanker_do_render_component', 'tutor-edit-panel'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php do_action('shadowbanker_do_render_component', 'portal-footer'); ?>
