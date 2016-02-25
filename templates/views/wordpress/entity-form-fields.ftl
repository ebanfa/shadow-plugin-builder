<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

        function do_entity_form_fields($model, $edit_mode) {
            foreach ($model['entity_fields'] as $field) {

                if ($edit_mode) {
                    if ($field['is_create_field'] && $field['is_form_field']) {
                        do_entity_form_field($model, $field);
                    }
                }
                else {

                    if ($field['is_edit_field'] && $field['is_form_field']) {
                        do_entity_form_field($model, $field);
                    }
                }
            }
        }

        function do_entity_form_field($model, $field) {
            // Typically this function is called within a view
            // but we pass null here since we are outside a view
            $field = ViewUtils::prepare_view_form_field(null, $field);
            do_action('shadowbanker_before_entity_form_field');
            if(!$field['is_relationship_field']) { 

                if($field['data_type'] == 'name') do_name_field($model, $field);
                if($field['data_type'] == 'email') do_email_field($model, $field);
                if($field['data_type'] == 'text-lg') do_textlg_field($model, $field);
                if($field['data_type'] == 'text') do_text_field($model, $field);
                if($field['data_type'] == 'alphanumeric') do_alphanumeric_field($model, $field);
                if($field['data_type'] == 'phone') do_phone_field($model, $field);
                if($field['data_type'] == 'number') do_number_field($model, $field);
                if($field['data_type'] == 'money') do_money_field($model, $field);
                if($field['data_type'] == 'flag') do_flag_field($model, $field);
                if($field['data_type'] == 'date') do_date_field($model, $field);
            }
            else {
                do_relationship_field($model, $field);

            }
            do_action('shadowbanker_after_entity_form_field');
        }

        function do_name_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control name" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']] . '" '; }?>
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
        
<?php  } 

        function do_email_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="email" class="form-control email" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-emailaddress-message="The value is not a valid email address" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
        
<?php  } 

        function do_textlg_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <textarea placeholder="<?php echo $field['description']; ?>" 
                        name="<?php echo $field['name'];?>" rows="7" cols="100" 
                        class="form-control text-lg" id="<?php echo $field['name'];?>">
                        <?php if(isset($model['id'])) { echo $model[$field['name']]; }?>
                    </textarea>
                </div>
            </div>
        </div>
<?php  } 

        function do_text_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control text" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_alphanumeric_field($model, $field) { ?>

         <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control alphanumeric" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_phone_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control phone" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_number_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control number" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_money_field($model, $field) { ?>

         <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control money" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_flag_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" class="form-control flag" 
                        id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                </div>
            </div>
        </div>
<?php  } 

        function do_date_field($model, $field) { ?>

        <div class="<?php echo $field['col_size']; ?>">
            <div class="form-group">
                <div class="fg-line">
                    <span class="input-group-addon"><i class="md md-event"></i></span>
                    <div class="dtp-container dropdown fg-line">
                        <input type='text' 
                            id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>" 
                            <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']] . '" '; }?> 
                            class="form-control date-picker" 
                            data-toggle="dropdown" placeholder="<?php echo $field['description']; ?>" 
                            data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                            data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty">
                    </div>
                </div>
            </div>
        </div>
<?php  } 

        function do_relationship_field($model, $field) { ?>
    
        <div class="col-xs-11">
            <div class="form-group">
                <div class="fg-line">
                    <input type="text" 
                        class="form-control text related-field-search-link" 
                        data-related-field-name="<?php echo $field['name'];?>"
                        id="<?php echo $field['name'];?>_txt" name="<?php echo $field['name'];?>_txt" 
                        <?php if(isset($model['id'])) { $value = $field['name'] . '_txt'; echo 'value="' . $model[$value] . '" '; }?>
                        placeholder="<?php echo $field['description']; ?>" 
                        data-bv-message="<?php echo $field['description']; ?> is not valid" 
                        data-bv-notempty-message="<?php echo $field['description']; ?> is required and cannot be empty">

                    <input type="hidden" id="<?php echo $field['name'];?>" 
                        name="<?php echo $field['name'];?>" 
                        <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?>>
                </div>
            </div>
        </div>
        <a data-related-field-name="<?php echo $field['name'];?>" 
            class="related-field-search-link" 
            style="font-size:20px" href="#<?php echo $field['name'];?>_modal">
            <i class="md md-trending-up"></i>
        </a>

<?php  } ?>


<?php  
    if(isset($_REQUEST['page_info'])) { 

        $view = $_REQUEST['page_info']['view'];

        if(!is_null($view->get_parent_field())) { ?>
        <input type="hidden" name="parent_id" value="<?php echo $view->get_parent_id(); ?>">
        <input type="hidden" name="parent_artifact" value="<?php echo $view->get_parent_artifact_name(); ?>">
        <input type="hidden" name="parent_field" value="<?php echo $view->get_parent_field(); ?>">
        <?php if(is_null($view->get_parent_param())){?>
        <input type="hidden" name="parent_param" value="<?php echo urlencode($view->get_parent_param()); ?>">
        <?php } ?>
<?php   }
    } ?>

