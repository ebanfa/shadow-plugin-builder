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
        wp_register_script('cp_date_picker', plugins_url('/js/vendors/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        wp_register_script('cp_input_mask', plugins_url('/js/vendors/input-mask/input-mask.min.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        
        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_date_picker');
        wp_enqueue_script('cp_entity_form');
    }
    // Add the action
    add_action('wp_footer', 'do_page_footer');

    // Load the entity with the specified id

    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $entity_data = CollateralAPI::find_by_id(sanitize_text_field($_REQUEST['id']));
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');
?>

    
    
    
    
    




                <?php do_action('shadowbanker_before_entity_form_field'); ?>
                    <div class="col-xs-12">
                        <div class="form-group">
                            <div class="fg-line">
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="type" name="type">
                                        <?php
                                        $saved_type = get_post_meta($entity_data['id'], 'type', true);

                                        $type_list = get_posts(array('post_type' => 'sb_colltype', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($type_list as $sb_colltype) { ?>
                                            <option value="<?php echo $sb_colltype->ID; ?>" <?php if ($saved_type == $sb_colltype->ID) echo 'selected="selected" '; ?>>
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
                                        value="<?php echo $entity_data['name']; ?>"  
                                        placeholder="Enter Name" 
                                        data-bv-message="The Name is not valid" 
                                        data-bv-notempty-message="The Name is required and cannot be empty" required>
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
                                        value="<?php echo $entity_data['market_value']; ?>" 
                                        placeholder="Enter Market Value" 
                                        data-bv-message="The Market Value is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The Market Value is required and cannot be empty" required>
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
                                        value="<?php echo $entity_data['cost']; ?>" 
                                        placeholder="Enter Cost" 
                                        data-bv-message="The Cost is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The Cost is required and cannot be empty" required>
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
                                            data-bv-message="The Date Acquired is not valid" 
                                            data-bv-notempty-message="The Date Acquired is required and cannot be empty">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>





            

    
    




                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-12">
                            <div class="form-group">
                                <div class="fg-line">
                                    <textarea placeholder="Description" 
                                        name="description" rows="7" cols="100" 
                                        class="form-control" id="description">
                                        <?php echo $entity_data['description']; ?>
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