<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $party_list = $view->get_model();
?>
<div class="card-body card-padding">
    
	<div class="contacts clearfix row">
	    <?php if(!empty($party_list)) { foreach ($party_list as $party_data) { ?>
	    <div class="col-md-2 col-sm-4 col-xs-6">
	        <div class="c-item">
	            <a 	href="javascript:void(0);" class="data-table-link ci-avatar" data-link="<?php echo $view->get_view_artifact_url() . $party_data['id']; ?>">
	                <img src="<?php echo $party_data['image_url']; ?>" alt="">
	            </a>
	            <div class="c-info">
	                <strong><?php echo $party_data['name']; ?></strong>
	                <small><?php echo $party_data['description']; ?></small>
	            </div>
	            <div class="c-footer">
	                <a  href="javascript:void(0);" class="data-table-link btn btn-primary btn-block" data-link="<?php echo $view->get_view_artifact_url() . $party_data['id']; ?>">
	                	<i class="zmdi zmdi-person-add"></i>View Profile
	                </a>
	            </div>
	        </div>
	    </div>
	    <?php }} else { ?>
	    <div class="col-md-12">
	        <div class="c-item">
	            <div class="c-info">
	                <strong>Sorry no <?php echo $view->get_role(); ?>s found</strong>
	            </div>
	        </div>
	    </div>
	    <?php } ?>
	</div>
</div>