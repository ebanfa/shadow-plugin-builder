<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $sb_post_type;
    $sb_post_type = 'sb_bid';

    
    function do_page_footer() {
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);

        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_entity_form');
    }
    // Add the action
    add_action('wp_footer', 'do_page_footer');

    if(isset($_REQUEST['application_id'])){
     $application_id = $_REQUEST['application_id'];
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');
?>

                <input type='hidden' name='application' value="<?php echo $application_id;?>"/>
    
    
    
    
    
    
    
    
    
    
    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="name" name="name" 
                                        placeholder="title" 
                                        data-bv-message="The title is not valid" 
                                        data-bv-notempty-message="The title is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="amount" name="amount" 
                                        placeholder="amount" 
                                        data-bv-message="The amount is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The amount is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-4">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="term" name="term" 
                                        placeholder="term" 
                                        data-bv-message="The term is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The term is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="rate" name="rate" 
                                        placeholder="interest rate" 
                                        data-bv-message="The interest rate is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The interest rate is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <textarea placeholder="description" 
                                        name="description" rows="7" cols="100" 
                                        class="form-control" id="description">
                                        <?php echo '' ?>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    
    
    
    
<?php 
    do_action('shadowbanker_entity_form_end'); 
    
    do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>
