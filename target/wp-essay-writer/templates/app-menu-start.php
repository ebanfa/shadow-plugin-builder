<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $menu_header_data = MenuAPI::do_get_menu_header_data();
?>
<aside id="sidebar" class="sidebar c-overflow">
    <div class="sidebar-inner">
        <div class="si-inner">
            <div class="profile-menu">
                <a href="index.html" style="<?php echo $menu_header_data['menu_image']; ?>">
                    <div class="profile-pic">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/portal/profile-pics/1.jpg" alt="">
                    </div>

                    <div class="profile-info">
                        <?php echo $menu_header_data['user_name'];?>
                        <i class="md md-arrow-drop-down"></i>
                    </div>
                </a>
                <ul class="main-menu">
                </ul>
            </div>