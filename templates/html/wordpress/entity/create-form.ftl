<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
    <form role="form" name="<?php echo $sb_post_type;?>_form" 
      id="<?php echo $sb_post_type;?>_form" action="" 
      method="POST" enctype="multipart/form-data" 
      data-bv-framework="bootstrap"
      data-bv-excluded = ":disabled"
      data-bv-message="This value is not valid"
      data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
      data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
      data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">

    <?php do_action('shadowbanker_render_entity_form_fields'); ?>

    </form>
