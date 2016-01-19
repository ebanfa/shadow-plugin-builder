<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $current_user = wp_get_current_user();
    $current_user_party = PartyAPI::get_user_party($current_user->ID);
    if(isset($_REQUEST['start_with_user'])){
	$start_with_user = sanitize_text_field($_REQUEST['start_with_user']);
    }
?>

<?php 
//    do_action('shadowbanker_before_main_content');
    
  //  do_action('shadowbanker_before_list_entity');
?>
<script>
	$(document).ready(function(){ $('#content').showUserConversations()});
</script>
            <section id="content">
                <div class="container">
                    <div class="block-header">
                        <h2>Messages</h2>
                    </div>
                                   <form id="get-user-conversations-form">
                                        <input type="hidden" name="party_id" value="<?php echo $current_user_party['id']; ?>"/>
                                        <?php  if(isset($_REQUEST['start_with_user'])){ ?>
                                        <input type="hidden" name="start_with_user" value="<?php echo $start_with_user; ?>"/>
 					<?php } ?>
					<?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                        <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                   </form>
                
                    <div class="card m-b-0" id="messages-main">
                        
                        <div class="ms-menu">
                            <div class="ms-block">
                                <div class="ms-user">
                                    <img src="img/profile-pics/1.jpg" alt="">
                                    <div>Signed in as <br/> <?php echo $current_user_party['user_name']; ?></div>
                                </div>
                            </div>
                            
                            <div class="ms-block">
                                <div class="dropdown" data-animation="flipInX,flipOutX">
                                    <a class="btn btn-primary btn-block" href="messages.html" data-toggle="dropdown">Messages <i class="caret m-l-5"></i></a>

                                    <ul class="dropdown-menu dm-icon w-100">
                                        <li><a href="messages.html"><i class="md md-mail"></i> Messages</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div id="conversation-list" class="listview lv-user m-t-20">
                            </div> 
                        </div>
                        
                        <div class="ms-body">
                           

                            <div id="conversation-message-list" class="listview lv-message">
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
                                        <span id="conversation-message-list-header" class="c-black">
				            Noo Messages
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
                                
                                <div id="conversation-message-list-body" class="lv-body">                                    
                                </div>
                                <form id="send-user-conversation-message-form">
                                    <input type="hidden" name="party_id" value="<?php echo $current_user_party['id']; ?>"/>
                                    <input type="hidden" id="conversation-id" name="conversation_id" value=""/>
                                    <input type="hidden" id="counter-party-id" name="counter_party_id" value=""/>
				    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                    <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                    <div class="lv-footer ms-reply">
                                    	<textarea name="message" placeholder="What's on your mind..."></textarea>
                                    	<button id="send-message-btn"><i class="md md-send"></i></button>
                               	    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
<?php 
    //do_action('shadowbanker_after_list_entity'); 
    
    //do_action('shadowbanker_after_main_content');
?>
