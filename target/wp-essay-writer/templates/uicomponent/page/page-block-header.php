<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
?>
<div class="block-header">
    <h2><?php echo $view->get_page_name(); ?></h2>

    <ul class="actions ">
        <li>
            <a href="javascript:void(0);"> <i class="zmdi zmdi-trending-up"></i></a>
        </li>
        <li>
            <a href="javascript:void(0);"> <i class="zmdi zmdi-check-all"></i></a></li>
        <li class="dropdown">
            <a href="javascript:void(0);" data-toggle="dropdown"><i class="zmdi zmdi-more-vert"></i></a>
            <ul class="dropdown-menu dropdown-menu-right">
                <!-- <li><a href="#">Refresh</a></li>
                <li><a href="#">Manage Widgets</a></li>
                <li><a href="#">Widgets Settings</a></li> -->
            </ul>
        </li>
    </ul>
</div>