<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $page_context = $view->get_context();
    $menu_data = $page_context['portal-menu-header-data'];
?>
<div class="profile-menu">
    <a href="index.html" style="<?php echo $menu_data['menu_image']; ?>">
        <div class="profile-pic">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/portal/profile-pics/1.jpg" alt="">
        </div>
        <div class="profile-info">
            <?php echo $menu_data['user_name'];?>
            <i class="md md-arrow-drop-down"></i>
        </div>
    </a>
    <ul class="main-menu">
    </ul>
</div>