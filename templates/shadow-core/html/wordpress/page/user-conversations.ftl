<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
    $current_user = wp_get_current_user();
    $current_user_party = PartyAPI::get_user_party($current_user->ID);


?>
    
    <div class="lv-item media active">
        <div class="lv-avatar pull-left">
        </div>
        <div class="media-body">
            <div class="lv-title">No conversations yet</div>
            <div class="lv-small"></div>
        </div>
    </div>
   
    <div class="lv-item media active">
        <div class="lv-avatar pull-left">
            <img src="img/profile-pics/1.jpg" alt="">
        </div>
        <div class="media-body">
            <div class="lv-title"></div>
            <div class="lv-small"></div>
        </div>
    </div>

    
