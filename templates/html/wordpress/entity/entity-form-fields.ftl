<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<?php   foreach ($view->get_form_fields() as $field) { 
            do_action('shadowbanker_before_entity_form_field');
            // Non relationship field 
            if(!$field['is_relationship_field']) { 
                if($field['data_type'] == 'name') { 
?>
                    <div class="<?php echo $field['col_size']; ?>">
                        <div class="form-group">
                            <div class="fg-line">
                                <input type="text" class="form-control name" 
                                    id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                                    placeholder="<?php echo $field['description']; ?>" 
                                    data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                                    data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                            </div>
                        </div>
                    </div>

        <?php       // Alphanumeric field
                }  if($field['data_type'] == 'alphanumeric') { ?>
                    <div class="<?php echo $field['col_size']; ?>">
                        <div class="form-group">
                            <div class="fg-line">
                                <input type="text" class="form-control alphanumeric" 
                                    id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                                    placeholder="<?php echo $field['description']; ?>" 
                                    data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                                    data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                            </div>
                        </div>
                    </div>
        <?php       // Number field
                }   if($field['data_type'] == 'number') { ?>
                    <div class="<?php echo $field['col_size']; ?>">
                        <div class="form-group">
                            <div class="fg-line">
                                <input type="text" class="form-control number" 
                                    id="<?php echo $field['name'];?>" name="<?php echo $field['name']; ?>" 
                                    placeholder="<?php echo $field['description']; ?>" 
                                    data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                                    data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
                            </div>
                        </div>
                    </div>
        <?php       // Date field
                }   if($field['data_type'] == 'date') { ?>
                    <div class="<?php echo $field['col_size']; ?>">
                        <div class="form-group">
                            <div class="fg-line">
                                <span class="input-group-addon"><i class="md md-event"></i></span>
                                <div class="dtp-container dropdown fg-line">
                                    <input type='text' 
                                        id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>"
                                        class="form-control date-picker" 
                                        data-toggle="dropdown" placeholder="Click here..." 
                                        data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                                        data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty">
                                </div>
                            </div>
                        </div>
                    </div>
        <?php   }  ?>

<?php       } else { // Relationship field 

            }
            do_action('shadowbanker_after_entity_form_field');
        } 
?>