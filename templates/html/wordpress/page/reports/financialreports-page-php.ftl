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

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

?>
	<div class="card">
        <div class="card-header">
            <h2>Financial Report Query </h2>
            
            <ul class="actions">
                <li>
                    <a href="index.html">
                        <i class="md md-cached"></i>
                    </a>
                </li>
                <li>
                    <a href="index.html">
                        <i class="md md-file-download"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a href="index.html" data-toggle="dropdown">
                        <i class="md md-more-vert"></i>
                    </a>
                    
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a href="index.html">Change Date Range</a>
                        </li>
                        <li>
                            <a href="index.html">Change Graph Type</a>
                        </li>
                        <li>
                            <a href="index.html">Other Settings</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <div class="card-body">

	    	<form role="form" name="<?php echo $sb_post_type;?>_form" 
		      id="<?php echo $sb_post_type;?>_form" action="" 
		      method="POST" enctype="multipart/form-data" 
		      data-bv-framework="bootstrap"
		      data-bv-message="This value is not valid"
		      data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
		      data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
		      data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">

		    	<div class="col-xs-12">
                    <div class="form-group">
                        <div class="fg-line">
                            <input type="text" class="form-control name" 
                                id="" name="" 
                                placeholder="" 
                                data-bv-message="The  is not valid" 
                                data-bv-notempty-message="The  is required and cannot be empty" required>
                        </div>
                    </div>
                </div>
		    </form>

		    
        </div>
    </div>
                    
                    
                   
    
<?php  
    
    do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>
