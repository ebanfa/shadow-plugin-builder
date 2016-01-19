<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $sb_post_type;
    $sb_post_type = 'sb_collateral';

    
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
                                    <div class="select">
                                        <select id="type" name="type" class="form-control">
                                            <option>Select a type</option>
                                            <?php
                                                $type_list = get_posts(array('post_type' => 'sb_colltype', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                                foreach ($type_list as $sb_colltype) { ?>
                                                <option value="<?php echo $sb_colltype->ID; ?>">
                                                    <?php echo get_post_meta($sb_colltype->ID, 'name', true); ?>
                                                </option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    
    
   
    
    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="name" name="name" 
                                        placeholder="name" 
                                        data-bv-message="The name is not valid" 
                                        data-bv-notempty-message="The name is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="market_value" name="market_value" 
                                        placeholder="market value" 
                                        data-bv-message="The market value is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The market value is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="cost" name="cost" 
                                        placeholder="cost" 
                                        data-bv-message="The cost is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The cost is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>




    
    
    



                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <span class="input-group-addon"><i class="md md-event"></i></span>
                                    <div class="dtp-container dropdown fg-line">
                                        <input type='text' 
                                            id="date_acquired" name="date_acquired"
                                            class="form-control date-picker" 
                                            data-toggle="dropdown" placeholder="Click here..." 
                                            data-bv-message="The date acquired is not valid" 
                                            data-bv-notempty-message="The date acquired is required and cannot be empty">
                                    </div>
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
