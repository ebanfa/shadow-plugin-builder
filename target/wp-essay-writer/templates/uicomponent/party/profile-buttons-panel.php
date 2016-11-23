<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="pmb-block">
    <div class="pmbb-header">
        <h2><i class="zmdi zmdi-settings m-r-10"></i> Actions</h2>
    </div>
    <div class="pmbb-body p-l-30">
        <div class="pmbb-view">
            <div class="row">
                <?php if($view->can_rate_party()) { ?>
                <div class="col-xs-12 col-sm-6 col-md-4 m-t-5 p-r-5 p-l-5">
                    <a data-toggle="modal" href="#rate-party-modal" class="btn btn-block btn-primary waves-effect">
                       <?php _e('Rate Me', 'framework') ?>
                    </a>
                </div>
                <?php } ?>
                <?php if($view->can_edit_profile()) { ?>
                <div class="col-xs-12 col-sm-6 col-md-4 m-t-5 p-r-5 p-l-5">
                    <a data-toggle="modal" href="#update-password-modal" class="btn btn-block btn-primary waves-effect">
                       <?php _e('Change Password', 'framework') ?>
                    </a>
                </div>
                <?php } ?>
                <?php if($view->can_deactive_account()) { ?>
                <div class="col-xs-12 col-sm-6 col-md-4 m-t-5 p-r-5 p-l-5">
                    <form id="deactivate-account-form" style="display:none" action=""  method="POST">
                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                        <input type="hidden" name="edit_mode" value="edit" /> 
                        <input type="hidden" name="artifact" value="tutordisplay">
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
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