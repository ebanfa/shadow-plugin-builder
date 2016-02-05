<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $sb_post_type;
    $sb_post_type = '${entity.postName}';
    
    function do_page_footer() {
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        wp_register_script('cp_entity_mask', plugins_url('/js/entity-input-mask.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_entity_mask');
    }
    // Add the action
    add_action('wp_footer', 'do_page_footer');

    // Load the entity with the specified id

    global $entity_data;
    if (isset($_REQUEST['id'])) {
        $entity_data = ${entity.name}API::get_by_id(sanitize_text_field($_REQUEST['id']));

        print_r($entity_data);
    }
  if(isset($_REQUEST['role'])) { 
        $role = sanitize_text_field($_REQUEST['role']);
    }
?>

<?php do_action('shadowbanker_before_main_content'); ?>
    
<?php

    $page_info = $_REQUEST['page_info'];
    $page_action = $page_info['page_action'];
    $artifact_name = sanitize_text_field($page_info['name']);
    $page_name = sanitize_text_field($page_info['display_name']);
    $page_action_description = sanitize_text_field($page_info['page_action_description']);
    // Temporary hold to ensure we dont deal with null values
    $page_action_txt = sanitize_text_field($page_info['page_action']);

    if($page_action == 'create')
        $page_action_txt = 'Create a new '. strtolower($page_name ) . ' by filling in the form below';
    if($page_action == 'edit')
        $page_action_txt = 'Edit the '. strtolower($page_name ) . ' by updating the form below';
    if($page_action == 'view')
        $page_action_txt = 'To update or delete the ' . strtolower($page_name ) . ', click on the control buttons below.';
    if($page_action == 'list')
        $page_action_txt = 'The '. strtolower($page_name ) . ' list. To view a single record, click on the highlighted column.';
?>

<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header bgm-lightgreen">
                <h2>
                    <?php echo $page_action_description; ?> 
                    <small><?php echo $page_action_txt; ?></small>
                </h2>
                <ul class="actions actions-alt">
                    <li class="dropdown">
                        <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                            <i class="md md-more-vert"></i>
                        </a>
                        
                        <ul class="dropdown-menu dropdown-menu-right">
                            <?php if($page_action == 'edit') { ?>
                            <li>
                                <a href="/page?type=entity&page_action=create&artifact=<?php echo $artifact_name . '&role=' . $role; ?>">Add a new record</a>
                            </li>
                            <?php } ?>
                            <li>
                                <a href="/page?type=entity&page_action=list&artifact=party<?php echo '&role=' . $role; ?>">View All</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="card-body card-padding">
                <div class="row mg-btm-30">
                    <div class="col-sm-12">
                        <div class="body-section">
                            <div id="success"></div>

<?php do_action('shadowbanker_entity_form_start');  ?>


<#list entity.fields as field>
    
    <#if field.isFormField == "Y" && field.editField == "Y">
        <#if field.isVisible == "Y">

            <#if field.relationshipField == "N">
                <#if field.dataType == "name">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control name" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>

                <#if field.dataType == "text">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control text" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>

                <#if field.dataType == "email">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="email" class="form-control email" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>" 
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-emailaddress-message="The value is not a valid email address" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>

                <#if field.dataType == "phone">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" 
                                        class="form-control phone" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>" 
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>

                <#if field.dataType == "text-lg">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <textarea placeholder="${field.description}" 
                                        name="${field.name}" rows="7" cols="100" 
                                        class="form-control text-lg" id="${field.name}">
                                        <?php echo $entity_data['${field.name}']; ?>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>

                <#if field.dataType == "flag">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control flag" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>

                <#if field.dataType == "alphanumeric">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control alphanumeric" 
                                        id="${field.name}" name="${field.name}" 
                                        value="<?php echo $entity_data['${field.name}']; ?>" 
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>
                <#if field.dataType == "number">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control number" 
                                        id="${field.name}" name="${field.name}"
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>

                <#if field.dataType == "double">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control double" 
                                        id="${field.name}" name="${field.name}"
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>

                <#if field.dataType == "money">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <input type="text" class="form-control money" 
                                        id="${field.name}" name="${field.name}"
                                        value="<?php echo $entity_data['${field.name}']; ?>"  
                                        placeholder="Enter ${field.description}" 
                                        data-bv-message="The ${field.description} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.description} is required and cannot be empty" required>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>
                
                <#if field.dataType == "date">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <span class="input-group-addon"><i class="md md-event"></i></span>
                                    <div class="dtp-container dropdown fg-line">
                                        <input type='text' 
                                            id="${field.name}" name="${field.name}" 
                                            class="form-control date-picker" 
                                            data-toggle="dropdown" placeholder="Click here..." 
                                            data-bv-message="The ${field.description} is not valid" 
                                            data-bv-notempty-message="The ${field.description} is required and cannot be empty">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>

                <#if field.dataType == "datetime">
                    <?php do_action('shadowbanker_before_entity_form_field'); ?>
                        <#if field.size == "small">
                        <div class="col-xs-4">
                        </#if>
                        <#if field.size == "medium">
                        <div class="col-xs-6">
                        </#if>
                        <#if field.size == "large">
                        <div class="col-xs-12">
                        </#if>
                            <div class="form-group">
                                <div class="fg-line">
                                    <span class="input-group-addon"><i class="md md-event"></i></span>
                                    <div class="dtp-container dropdown fg-line">
                                        <input type='text' 
                                            id="${field.name}" name="${field.name}"
                                            class="form-control time-picker"
                                            data-toggle="dropdown" 
                                            placeholder="Click here..." 
                                            data-bv-message="The ${field.description} is not valid" 
                                            data-bv-notempty-message="The ${field.description} is required and cannot be empty">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>

                </#if>
            </#if>



            <#if field.relationshipField == "Y">
                <?php do_action('shadowbanker_before_entity_form_field'); ?>
                    <#if field.size == "small">
                    <div class="col-xs-4">
                    </#if>
                    <#if field.size == "medium">
                    <div class="col-xs-6">
                    </#if>
                    <#if field.size == "large">
                    <div class="col-xs-12">
                    </#if>
                        <div class="form-group">
                            <div class="fg-line">
                                <div class="select">
                                    <select class="form-control" data-style="btn-success" id="${field.name}" name="${field.name}">
                                        <?php
                                        $saved_${field.name} = get_post_meta($entity_data['id'], '${field.name}', true);

                                        $${field.name}_list = get_posts(array('post_type' => '${field.dataType}', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                        foreach ($${field.name}_list as $${field.dataType}) { ?>
                                            <option value="<?php echo $${field.dataType}->ID; ?>" <?php if ($saved_${field.name} == $${field.dataType}->ID) echo 'selected="selected" '; ?>>
                                                <?php echo get_post_meta($${field.dataType}->ID, 'name', true); ?>
                                            </option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php do_action('shadowbanker_after_entity_form_field');?>
            </#if>
            

        </#if>
    </#if>
    
</#list>


<?php  if(isset($role)){ ?>
    <input type="hidden" name="role" id="role" value="<?php  echo $role; ?>" /> 
<?php  } ?>

    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
    <input type="hidden" name="submitted" id="submitted" value="true" />     
    <input type="hidden" name="edit_mode" value="edit" />  
    <input type="hidden" name="id" value="<?php echo $entity_data['id'];?>" />  
    <div class="btn-demo m-t-10">
        <button id="<?php echo $entity_name; ?>-form-btn" type="submit" class="btn btn-primary waves-effect">
            <?php _e('Update', 'framework') ?>
        </button>
        
        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=party&id=' . $entity_data['party']  . '&role=' . $role; ?>&page_action=view" 
           class="btn bgm-indigo waves-effect"><?php _e('Back', 'framework') ?>
        </a>
    </div>
    
</form>


    
<?php 
    //do_action('shadowbanker_entity_form_end'); 
    
    do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>
