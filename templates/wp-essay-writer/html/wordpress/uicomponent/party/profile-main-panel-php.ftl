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
        <?php if($view->can_edit_profile()) { ?>
        <li>
            <a href="#tab-education" aria-controls="tab-education" role="tab" data-toggle="tab">Education</a>
        </li>
        <li>
            <a href="#tab-subjects" aria-controls="tab-subjects" role="tab" data-toggle="tab">Subjects</a>
        </li>
        <?php } ?>
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
            <div class="pmb-block">
                <div class="pmbb-header">
                    <h2><i class="zmdi zmdi-graduation-cap m-r-10"></i> Education</h2>
                </div>
                <div class="pmbb-body p-l-30">
                    <div class="pmbb-view">
                        
                        <?php foreach ($model['education'] as $key => $education_data) { 
                                echo $education_data['name'] . ', ';
                        }?> 
                    </div>
                </div>
            </div>
            <div class="pmb-block">
                <div class="pmbb-header">
                    <h2><i class="zmdi zmdi-library m-r-10"></i> Subjects</h2>
                </div>
                <div class="pmbb-body p-l-30">
                    <div class="pmbb-view">
                        <?php foreach ($model['subjects'] as $key => $subject_data) { 
                                echo $subject_data['target_subject_txt'] . ', ';
                        }?> 
                    </div>
                </div>
            </div>
            <?php do_action('shadowbanker_do_render_component', 'profile-buttons-panel'); ?>
        </div> <!-- End tab -->
        <?php do_action('shadowbanker_do_render_component', 'profile-education-panel'); ?>
        <?php do_action('shadowbanker_do_render_component', 'profile-subjects-panel'); ?>

    </div> <!-- End tab content -->

</div>
<?php do_action('shadowbanker_do_render_component', 'rate-party-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'post-question-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'upload-image-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'update-password-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'party-education-modal'); ?>
<?php do_action('shadowbanker_do_render_component', 'party-subjects-modal'); ?>

