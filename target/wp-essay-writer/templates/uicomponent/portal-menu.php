<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
?>
<aside id="sidebar" class="sidebar c-overflow">
    <div class="sidebar-inner">
        <div class="si-inner">
            <?php do_action('shadowbanker_do_render_component', 'portal-menu-header'); ?>
            <?php do_action('shadowbanker_do_render_component', 'portal-menu-main'); ?>
        </div>
    </div>
</aside>