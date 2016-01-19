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
        $entity_data = BidAPI::find_by_id(sanitize_text_field($_REQUEST['id']));
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');
?>

    

                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control" 
                                        id="entity_code" name="entity_code" 
                                        value="<?php echo $entity_data['entity_code']; ?>"  
                                        placeholder="Enter Code" 
                                        data-bv-message="The Code is not valid" 
                                        data-bv-notempty-message="The Code is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>





                




            

    
    




                <?php do_action('shadowbanker_before_entity_form_field'); ?>
                    <div class="col-xs-12">
                        <div class="form-group">
                            <div class="fg-line">
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="owner" name="owner">
                                        <?php
                                        $saved_owner = get_post_meta($entity_data['id'], 'owner', true);

                                        $owner_list = get_posts(array('post_type' => 'sb_party', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($owner_list as $sb_party) { ?>
                                            <option value="<?php echo $sb_party->ID; ?>" <?php if ($saved_owner == $sb_party->ID) echo 'selected="selected" '; ?>>
                                                <?php echo get_post_meta($sb_party->ID, 'name', true); ?>
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
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="counter_party" name="counter_party">
                                        <?php
                                        $saved_counter_party = get_post_meta($entity_data['id'], 'counter_party', true);

                                        $counter_party_list = get_posts(array('post_type' => 'sb_party', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($counter_party_list as $sb_party) { ?>
                                            <option value="<?php echo $sb_party->ID; ?>" <?php if ($saved_counter_party == $sb_party->ID) echo 'selected="selected" '; ?>>
                                                <?php echo get_post_meta($sb_party->ID, 'name', true); ?>
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
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="application" name="application">
                                        <?php
                                        $saved_application = get_post_meta($entity_data['id'], 'application', true);

                                        $application_list = get_posts(array('post_type' => 'sb_application', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($application_list as $sb_application) { ?>
                                            <option value="<?php echo $sb_application->ID; ?>" <?php if ($saved_application == $sb_application->ID) echo 'selected="selected" '; ?>>
                                                <?php echo get_post_meta($sb_application->ID, 'name', true); ?>
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
                                        id="amount" name="amount" 
                                        value="<?php echo $entity_data['amount']; ?>" 
                                        placeholder="Enter Amount" 
                                        data-bv-message="The Amount is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The Amount is required and cannot be empty" required>
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
                                        value="<?php echo $entity_data['term']; ?>"  
                                        placeholder="Enter Term" 
                                        data-bv-message="The Term is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The Term is required and cannot be empty" required>
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
                                        value="<?php echo $entity_data['rate']; ?>" 
                                        placeholder="Enter Interest Rate" 
                                        data-bv-message="The Interest Rate is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The Interest Rate is required and cannot be empty" required>
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


                




            

    
    




                <?php do_action('shadowbanker_before_entity_form_field'); ?>
                    <div class="col-xs-12">
                        <div class="form-group">
                            <div class="fg-line">
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="status" name="status">
                                        <?php
                                        $saved_status = get_post_meta($entity_data['id'], 'status', true);

                                        $status_list = get_posts(array('post_type' => 'sb_bidstatus', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($status_list as $sb_bidstatus) { ?>
                                            <option value="<?php echo $sb_bidstatus->ID; ?>" <?php if ($saved_status == $sb_bidstatus->ID) echo 'selected="selected" '; ?>>
                                                <?php echo get_post_meta($sb_bidstatus->ID, 'name', true); ?>
                                            </option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php do_action('shadowbanker_after_entity_form_field');?>
            

    

    
<?php 
    do_action('shadowbanker_entity_form_end'); 
    
    do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>