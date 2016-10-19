<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $subject_areas = $view->get_subject_areas();


?>
    <div class="row">
        <?php if (!empty($subject_areas)) { foreach ($subject_areas as $subject_area) { ?>
        <div class="col-md-12 col-sm-12 col-xs-12 subject_area_container">
            <div class="subject_area_header">
                <h5><?php echo $subject_area['name']; ?></h5>
            </div>
            <div class="row">
                <?php if (isset($subject_area['subjects']) && !empty($subject_area['subjects'])) { 
                    foreach ($subject_area['subjects'] as $subject) { ?>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <a href="<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=content'.'&page_action=list&subject='.$subject['id']; ?>" class=""><?php echo $subject['name']; ?></a>
                </div>
                <?php }} else { ?>
                <div class="col-md-4 col-sm-6 col-xs-12"><div><h5>No subjects defined</h5></div></div>
                <?php } ?>
            </div>
        </div>
        <?php }} else { ?>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div><h5>No subjects areas defined</h5></div>
        </div>
        <?php } ?>
    </div>