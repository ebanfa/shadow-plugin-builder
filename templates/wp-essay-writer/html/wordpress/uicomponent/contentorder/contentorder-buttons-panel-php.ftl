<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="btn-demo m-t-10">
    <a href="javascript:void(0);" data-link="<?php echo $view->get_edit_artifact_url(); ?>" class="data-table-link btn btn-primary waves-effect">
       <?php _e('Edit', 'framework') ?>
    </a>
    <form id="delete-entity-form" style="display:none" action=""  method="POST">
        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
        <input type="hidden" name="artifact" value="<?php echo $view->get_artifact(); ?>">
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
        <input type="hidden" name="submitted" id="submitted" value="true" />
    </form>
    <a id="delete-entity-btn" href="javascript:void(0);" class="btn btn-warning waves-effect">
       <?php _e('Delete', 'framework') ?>
    </a>
    <form id="paypal-form" style="display:none" 
        action="<?php echo get_option('cp_paypal_url'); ?>" method="post" target="_top">
            <input type="hidden" name="cmd" value="_xclick">
            <input type="hidden" name="business" value="<?php echo get_option('cp_paypal_id'); ?>">
            <input type="hidden" name="lc" value="US">
            <input type="hidden" name="invoice" id="invoice" value="<?php echo $model['entity_code']; ?>">
            <input type="hidden" name="item_name" value="<?php echo $model['name']; ?>">
            <input type="hidden" name="amount" value="<?php echo $view->get_outstanding_amount(); ?>">
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
    <?php if(!$view->is_fully_paid()){ ?>

        <a id="pay-invoice-btn" href="javascript:void(0);" class="btn btn-primary waves-effect pull-right">
           <?php _e('Make Down Payment', 'framework') ?>
           <?php //_e('Make Down Payment', 'framework') ?>
        </a>
    <?php } ?>
</div>