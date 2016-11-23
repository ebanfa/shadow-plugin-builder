<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $tabs = $view->get_tabs();
    $can_edit_profile = $view->can_edit_profile();
?>
<div class="card" id="profile-main">
    <?php do_action('shadowbanker_do_render_component', 'profile-sidebar-panel'); ?>

    <?php do_action('shadowbanker_do_render_component', 'profile-main-panel'); ?>
</div>
      
