
<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $current_user = wp_get_current_user();
    $current_user_party = PartyAPI::get_user_party($current_user->ID);
    $latest_user_conversation = ConversationAPI::get_latest_user_conversation($current_user_party['id']);
?>

                            <div class="listview lv-message">
                                <div class="lv-header-alt bgm-white">
                                    <div id="ms-menu-trigger">
                                        <div class="line-wrap">
                                            <div class="line top"></div>
                                            <div class="line center"></div>
                                            <div class="line bottom"></div>
                                        </div>
                                    </div>

                                    <div class="lvh-label hidden-xs">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <span class="c-black">
					<?php if(isset($latest_user_conversation['id'])){
					          echo $latest_user_conversation['owner_user_name'];
                                               } else{ 
						  echo 'No messages'; 
					}?>
					</span>
                                    </div>
                                    
                                    <ul class="lv-actions actions">
                                        <li>
                                            <a href="#">
                                                <i class="md md-delete"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="md md-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="md md-access-time"></i>
                                            </a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown" aria-expanded="true">
                                                <i class="md md-sort"></i>
                                            </a>
                                
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="#">Latest</a>
                                                </li>
                                                <li>
                                                    <a href="#">Oldest</a>
                                                </li>
                                            </ul>
                                        </li>                             
                                        <li class="dropdown">
                                            <a href="#" data-toggle="dropdown" aria-expanded="true">
                                                <i class="md md-more-vert"></i>
                                            </a>
                                
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="#">Refresh</a>
                                                </li>
                                                <li>
                                                    <a href="#">Message Settings</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="lv-body">                                    
                                   <?php if(isset($latest_user_conversation['messages'])) {
                                             foreach($latest_user_conversation['messages'] as $message) {
                                                 if($message['owner'] == $current_user_party['id']) {
                                   ?> 
                                    <div class="lv-item media">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                                            </div>
                                            <small class="ms-date"><i class="md md-access-time"></i> 20/02/2015 at 09:00</small>
                                        </div>
                                    </div>
                                    
                                    <div class="lv-item media right">
                                        <div class="lv-avatar pull-right">
                                            <img src="img/profile-pics/8.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                                            </div>
                                            <small class="ms-date"><i class="md md-access-time"></i> 20/02/2015 at 09:30</small>
                                        </div>
                                    </div>
                                    <?php }}} else { ?>
                                    <div class="lv-item media">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                                            </div>
                                            <small class="ms-date"><i class="md md-access-time"></i> 20/02/2015 at 09:00</small>
                                        </div>
                                    </div>

 				    <?php } ?>
                                </div>
                                
                                <div class="lv-footer ms-reply">
                                    <textarea placeholder="What's on your mind..."></textarea>
                                    
                                    <button><i class="md md-send"></i></button>
                                </div>
                            </div>
