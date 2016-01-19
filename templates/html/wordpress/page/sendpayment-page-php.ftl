<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
?>

<?php do_action('shadowbanker_before_main_content'); ?>

<div class="card">
    <div class="card-header">
        <h2>Send Money <small>Simply fill out the form below to send money to any user.
</small></h2>
    </div>
    
    <div class="card-body card-padding">
        <form role="form">
            <div class="form-group fg-line">
                <input type="email" class="form-control input-sm" id="exampleInputEmail1" placeholder="Enter the user email">
            </div>
            <div class="form-group fg-line">
                <input type="text" class="form-control input-sm" id="amount" placeholder="Enter the amount">
            </div>
            <div class="form-group">
                <div class="fg-line">
                    <div class="select">
                        <select class="form-control">
                            <option>Select a currency</option>
                            <?php 
	                            $currencies = get_posts(array('post_type'=> 'sb_currency', 'posts_per_page'=> -1, 'orderby'=>'ID', 'order'=>'ASC'));
	                            foreach( $currencies as $currency ) {
                            ?>
                            <option value="<?php echo $currency->ID;?>">
                                <?php echo get_post_meta($currency->ID, 'name', true);?>
                            </option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary btn-sm m-t-10">Continue</button>
        </form>
    </div>
</div>


<?php do_action('shadowbanker_after_main_content'); ?>