<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $entity_data;
    $current_user = wp_get_current_user();
    $profile_user_id = sanitize_text_field($_REQUEST['id']);
?>

<?php do_action('shadowbanker_before_main_content'); ?>
    <!-- Profile view -->
    <div class="card profile-view">
        <div class="pv-header">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/portal/profile-pics/1.jpg" class="pv-main" alt="">
        </div>
        
        <div class="pv-body">
            <h2><?php echo $current_user->user_firstname . ' ' . $current_user->user_lastname; ?></h2>
            <small>Praesent vitae justo purus. In hendrerit lorem nislac lacinia urnaunc vitae ante id magna </small>
        
            <ul class="pv-contact">
                <li><i class="md md-room"></i> Jupitor</li>
                <li><i class="md md-phone"></i> +11 55694785</li>
            </ul>

            <div class="rating-list">

                <div class="m-t-5">
                    Average Rating 3.0
                </div>
                
                <div class="clearfix"></div>
                
                <div class="rl-star">
                    <i class="md md-star active"></i>
                    <i class="md md-star active"></i>
                    <i class="md md-star active"></i>
                    <i class="md md-star"></i>
                    <i class="md md-star"></i>
                </div>
                
            </div>
            
            <ul class="pv-follow m-t-10">
                <li>589 Loans</li>
                <li>8545 Applications</li>
                <li>8545 Bids</li>
            </ul>
            
            <a href="#" class="pv-follow-btn">Follow</a>
            <?php if($profile_user_id == $current_user->ID) { ?>
                <a href="<?php echo get_site_url() . '/page?type=entity&artifact=partyprofile&id=' . $current_user->ID; ?>&page_action=edit" class="pv-follow-btn m-t-5">Edit</a>
            <?php } ?>
        </div>
    </div>
<?php do_action('shadowbanker_after_main_content'); ?>
