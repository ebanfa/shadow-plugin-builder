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

    // Process the parent id, if any
    if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact'])) {

        $parent_id = sanitize_text_field($_REQUEST['parent_id']);
        $parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
    }
    
    if(isset($_REQUEST['party_role'])) { 
        $party_role = sanitize_text_field($_REQUEST['party_role']);
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');
?>


<#list entity.fields as field>
    
    <#if field.isFormField == "Y" && field.createField == "Y">
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-emailaddress-message="The value is not a valid email address" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                    <textarea placeholder="${field.displayName?lower_case}" 
                                        name="${field.name}" rows="7" cols="100" 
                                        class="form-control text-lg" id="${field.name}">
                                        <?php echo '' ?>
                                    </textarea>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                        placeholder="${field.displayName?lower_case}" 
                                        data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                        data-bv-numeric-message="Only numbers permitted here" 
                                        data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty" required>
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
                                            data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                            data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty">
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
                                        <input id="${field.name}" name="${field.name}" type='text' 
                                            class="form-control time-picker" data-toggle="dropdown" placeholder="Click here..." 
                                            data-bv-message="The ${field.displayName?lower_case} is not valid" 
                                            data-bv-notempty-message="The ${field.displayName?lower_case} is required and cannot be empty">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php do_action('shadowbanker_after_entity_form_field');?>
                </#if>
            </#if>
            <#if field.relationshipField == "Y">
                <?php // If the parent field is set we dont display the field 
                    if(isset($parent_artifact) && $parent_artifact === "${field.name}") { ?>
                <?php } else { ?>
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
                                        <select id="${field.name}" name="${field.name}" class="form-control">
                                            <option>Select a ${field.displayName?lower_case}</option>
                                            <?php
                                                $${field.name}_list = get_posts(array('post_type' => '${field.dataType}', 'posts_per_page' => -1, 'orderby' => 'ID', 'order' => 'ASC'));
                                                foreach ($${field.name}_list as $${field.dataType}) { ?>
                                                <option value="<?php echo $${field.dataType}->ID; ?>">
                                                    <?php echo get_post_meta($${field.dataType}->ID, 'name', true); ?>
                                                </option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                <?php do_action('shadowbanker_after_entity_form_field');?>
                <?php }  ?>
            </#if>




        </#if>
    </#if>
    
    
</#list>
                        <?php  if(isset($party_role)){ ?>
                            <input type="hidden" name="party_role" id="party_role" value="<?php  echo $party_role; ?>" /> 
                        <?php  } ?>
    
<?php 
    do_action('shadowbanker_entity_form_end'); 
    
    do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>