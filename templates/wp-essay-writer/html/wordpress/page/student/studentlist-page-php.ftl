<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
    $view = $_REQUEST['page_info']['view'];
    $students = $view->get_students();
?>

<div class="contacts clearfix row">
    <?php if(!empty($students)) { foreach ($students as $student) { ?>
    <div class="col-md-2 col-sm-4 col-xs-6">
        <div class="c-item">
            <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studentdisplay'.'&id='.$student['id'].'&page_action=view'; ?>" class="ci-avatar">
                <img src="<?php echo $student['image_url']; ?>" alt="">
            </a>
            <div class="c-info">
                <strong><?php echo $student['name']; ?></strong>
                <small><?php echo $student['description']; ?></small>
            </div>
            <div class="c-footer">
                <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studentdisplay'.'&id='.$student['id'].'&page_action=view'; ?>" class="btn btn-primary btn-block"><i class="zmdi zmdi-person-add"></i>View Profile</a>
            </div>
        </div>
    </div>
    <?php }} else { ?>
    <div class="col-md-12">
        <div class="c-item">
            <div class="c-info">
                <strong>Sorry no students found</strong>
            </div>
        </div>
    </div>
    <?php } ?>
</div>

<script type="text/javascript">
   
</script>