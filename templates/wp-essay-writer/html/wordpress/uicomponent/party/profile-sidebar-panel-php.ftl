<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="pm-overview c-overflow">
    <div class="pmo-pic">
        <div class="p-relative">
            <a data-toggle="modal" href="#upload-image-modal">
                <img class="img-responsive" src="<?php echo $model['image_url']; ?>" alt="">
            </a>
            <a data-toggle="modal" href="#upload-image-modal" class="pmop-edit">
                <i class="zmdi zmdi-camera"></i> 
                <span class="hidden-xs">Update Profile Picture</span>
            </a>
        </div>

        <div class="pmo-stat">
            <h4 class="m-0 c-white"><?php echo $model['name'];?></h4>
        </div>

        <div class="pmo-block pmo-contact">
            <div class="rating-list">
                <?php if($model['rating'] != 0 ) { ?>
                <div class="rl-star c-orange ">
                    <?php for ($i=0; $i < $model['rating']; $i++) { echo '<i class="zmdi zmdi-star active"></i>'; }?>
                </div>
                <?php } else { $model['rating'] = 5; ?>
                <div class="rl-star">
                    <?php for ($i=0; $i < $model['rating']; $i++) { echo '<i class="zmdi zmdi-star"></i>'; }?>
                </div>
                <div class="text-left">Not rated</div>
                <?php } ?>
            </div>
            <?php if($view->can_edit_profile()) { ?>
            <div class="btn-demo m-t-10">
                <a  href="javascript:void(0);" 
                    class="data-table-link btn btn-primary btn-block waves-effect" 
                    data-link="<?php echo $view->get_edit_artifact_url(); ?>" >
                   Edit
                </a>
            </div>
            <?php } ?>
        </div>
    </div>
</div>
