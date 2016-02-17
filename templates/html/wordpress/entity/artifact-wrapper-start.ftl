<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
?>

<div class="row">
	<div class="col-sm-12">
		<div class="card">
			<div class="card-header bgm-lightgreen">
				<h2>
					<?php echo $view->get_page_action_description(); ?> 
					<small><?php echo $view->get_page_action_txt(); ?></small>
				</h2>
				<ul class="actions actions-alt">
                    <li class="dropdown">
                        <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                            <i class="md md-more-vert"></i>
                        </a>
                        
                        <ul class="dropdown-menu dropdown-menu-right">
                            <?php if($view->get_page_action() == 'edit') { ?>
                            <li>
                                <a href="/page?type=entity&page_action=create&artifact=<?php echo $view->get_artifact_name(); ?>">Add a new record</a>
                            </li>
                            <?php } ?>
                            <li>
                                <a href="/page?type=entity&page_action=list&artifact=<?php echo $view->get_artifact_name(); ?>">View All</a>
                            </li>
                        </ul>
                    </li>
                </ul>
			</div>

			<div class="card-body card-padding">
                <div class="row mg-btm-30">
                    <div class="col-sm-12">
                        <div class="body-section">
                            <div id="success"></div>
