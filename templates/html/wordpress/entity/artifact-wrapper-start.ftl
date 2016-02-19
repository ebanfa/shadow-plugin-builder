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
                            <?php foreach ($view->get_action_links() as $link) { ?>
                            <li>
                                <a href="<?php echo $link['link']; ?>"><?php echo $link['name']; ?></a>
                            </li>
                            <?php } ?>
                        </ul>
                    </li>
                </ul>
			</div>

			<div class="card-body card-padding">
                <div class="row mg-btm-30">
                    <div class="col-sm-12">
                        <div class="body-section">
                            <div id="successaw"></div>
