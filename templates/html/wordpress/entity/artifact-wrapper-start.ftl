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
                        <a id="action-link-viewer" href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
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
                <?php if($view->get_page_action() == 'list') { ?>
                <a id="action-link-trigger" class="btn bgm-cyan btn-float waves-effect" style="border: 2px solid white;" data-toggle="dropdown" aria-expanded="false"><i class="zmdi zmdi-plus" style="line-height: 37px"></i></a>
                <?php } ?>
                
			</div>

			<div class="card-body card-padding">
                <div class="row mg-btm-30">
                    <div class="col-sm-12">
                        <div class="body-section">
                            <div id="success"></div>
<script type="text/javascript">
    
        jQuery(document).ready(function($)
        {
            $('#action-link-trigger').on('click', function (e) {
                e.stopPropagation();
                $(this).prev().find('[data-toggle=dropdown]').dropdown('toggle');
            });
        });
    
</script>