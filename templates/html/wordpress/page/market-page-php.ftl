<?php

    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $loan_feed = LoanApplicationService::get_loan_feed();

?>

<?php  do_action('shadowbanker_before_main_content'); ?>

<div class="card">
    <div class="card-header bgm-lightgreen">
        <h2>Loans Feed <small>Currently published loans. This list is updated every minute.</small></h2>
    
        <ul class="actions">
            <li class="dropdown action-show">
                <a href="other-components.html" data-toggle="dropdown">
                    <i class="md md-more-vert"></i>
                </a>

                <div class="dropdown-menu pull-right">
                    <p class="p-20">
                        You can put anything here
                    </p>
                </div>
            </li>
        </ul>
    </div>
    
    <div class="card-body card-padding">
        
        <div class="media-demo">
        <?php if(empty($loan_feed)) { ?>

            <div class="alert alert-info alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                Opps. Your feed is empty today
            </div>
            <br/>

        <?php 
            } else { 
                foreach ($loan_feed as $feed_entry) { 
        ?>
            <div class="media" style="border: 1px solid #F0F0F0; padding:5px">
                <div class="pull-left">
                    <a href="#">
                        <img class="media-object" src="<?php echo get_stylesheet_directory_uri(); ?>/images/portal/profile-pics/1.jpg" alt="">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading"><?php echo $feed_entry['owner_name']; ?></h4>
                    <p><?php echo $feed_entry['name']; ?></p>
                    <div class="btn-colors btn-demo"> <!-- Optional container for demo porpose only -->
                        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $feed_entry['id']; ?>&page_action=view" class="btn btn-info btn-sm"><strong>Amount:</strong> <?php echo get_option('cp_currency_symbol');?>  <?php echo $feed_entry['amount']; ?></a>
                        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $feed_entry['id']; ?>&page_action=view"  class="btn btn-primary btn-sm"><strong>Term (Days):</strong> <?php echo $feed_entry['term']; ?></a>
                        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $feed_entry['id']; ?>&page_action=view"  class="btn btn-success btn-sm"><strong>Loan Type:</strong> <?php echo $feed_entry['type_txt']; ?></a>
                        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=application&id=' . $feed_entry['id']; ?>&page_action=view"  class="btn btn-warning btn-sm"><strong>Collateral Type:</strong> <?php echo $feed_entry['collateral_type_txt']; ?></a>
                    </div>
                </div>
            </div>
            <br/>
        <?php   }
            } 
        ?>
        </div>
    </div>
</div>
                    


<?php do_action('shadowbanker_after_main_content'); ?>
