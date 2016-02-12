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
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);

        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_entity_form');
    }
    // Add the action
    add_action('wp_footer', 'do_page_footer');

    // Process the parent id, if any
    if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact'])) {

        $parent_id = sanitize_text_field($_REQUEST['parent_id']);
        $parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');

    //do_action('shadowbanker_show_entity_form', 'create', '${entity.name}');
?>

                
        <div class="form-wizard-basic fw-container">
            <ul class="tab-nav text-center">
                <li><a href="#tab0" data-toggle="tab">Agreement</a></li>
                <#list module.entities as modEntity>
                    <#if modEntity.name == "Unit" || modEntity.name == "Charge" || modEntity.name == "Term">
                <li><a href="#tab${modEntity_index}" data-toggle="tab">${modEntity.name}</a></li>
                    </#if>
                </#list>
            </ul>
            
            <div class="tab-content">
                <div class="tab-pane fade" id="tab0">  
                    <div class="row">
                        <div class="col-xs-11">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input class="form-control phone related-field-search-link" data-related-field-name="ta_tenant" id="ta_tenant_txt" name="ta_tenant_txt" placeholder="tenant" data-bv-message="The tenant is not valid" data-bv-notempty-message="The tenant is required and cannot be empty" type="text">

                                    <input id="ta_tenant" name="ta_tenant" value="" type="hidden">
                                </div>
                            </div>
                        </div>
                        <a data-related-field-name="ta_tenant" class="related-field-search-link" style="font-size:20px" href="#ta_tenant_modal"><i class="md  md-trending-up"></i></a>
                    </div>

                    <div class="row">
                        <div class="col-xs-11">
                            <div class="form-group">
                                <div class="fg-line">
                                    <input class="form-control phone related-field-search-link" data-related-field-name="ta_property" id="ta_property_txt" name="ta_property_txt" placeholder="property" data-bv-message="The property is not valid" data-bv-notempty-message="The property is required and cannot be empty" type="text">

                                    <input id="ta_property" name="ta_property" value="" type="hidden">
                                </div>
                            </div>
                        </div>
                        <a data-related-field-name="ta_property" class="related-field-search-link" style="font-size:20px" href="#ta_property_modal"><i class="md  md-trending-up"></i></a>
                    </div>        

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group has-feedback">
                                <div class="fg-line">
                                    <input data-bv-field="name" class="form-control name" id="name" name="name" placeholder="name" data-bv-message="The name is not valid" data-bv-notempty-message="The name is required and cannot be empty" required="" type="text"><i data-bv-icon-for="name" class="form-control-feedback" style="display: none; top: 0px;"></i>
                                </div>
                            <small data-bv-result="NOT_VALIDATED" data-bv-for="name" data-bv-validator="notEmpty" class="help-block" style="display: none;">The name is required and cannot be empty</small></div>
                        </div>
                    </div>
                                    
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <span class="input-group-addon"><i class="md md-event"></i></span>
                                    <div class="dtp-container dropdown fg-line">
                                        <input id="date_start" name="date_start" class="form-control date-picker" data-toggle="dropdown" placeholder="Click here..." data-bv-message="The start date is not valid" data-bv-notempty-message="The start date is required and cannot be empty" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="fg-line">
                                    <span class="input-group-addon"><i class="md md-event"></i></span>
                                    <div class="dtp-container dropdown fg-line">
                                        <input id="date_end" name="date_end" class="form-control date-picker" data-toggle="dropdown" placeholder="Click here..." data-bv-message="The date created is not valid" data-bv-notempty-message="The date created is required and cannot be empty" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <?php // If the parent field is set we dont display the field 
                        if(isset($parent_field)) { ?>
                    <input type="hidden" name="parent_id" value="<?php echo $parent_id; ?>">
                    <input type="hidden" name="parent_artifact" value="<?php echo $parent_artifact; ?>">
                    <input type="hidden" name="parent_field" value="<?php echo $parent_field; ?>">
                    <?php if(isset($_REQUEST['parent_param'])) {?>
                    <input type="hidden" name="parent_param" value="<?php echo urlencode($parent_param); ?>">
                    <?php } ?>
                    <?php } ?>
                    <input type="hidden" id="current-related-field" name="current-related-field" value="">
                    <input type="hidden" id="current-relationship-field-id" name="current-relationship-field-id" value="">
                    <input type="hidden" id="current-relationship-field-name" name="current-relationship-field-name" value="">
                    <input type="hidden" id="page-artifact-name" name="page-artifact-name" value="${entity.postName}">
                </div>

                <#list module.entities as modEntity>
                    <#if modEntity.name == "Unit" || modEntity.name == "Charge" || modEntity.name == "Term">
                <div class="tab-pane fade" id="tab${modEntity_index}">
                    <div class="col-sm-12 m-b-20 btn-demo">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">Select A ${modEntity.name} Type</button>
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <span class="caret"></span>
                                <span class="sr-only">Select ${modEntity.name} Type</span>
                            </button>
                            <ul class="dropdown-menu" role="menu">

                            <?php
                                $${modEntity.name?lower_case}_types = ${modEntity.name}TypeAPI::find_by_criteria(array());
                                foreach ($${modEntity.name?lower_case}_types as $${modEntity.name?lower_case}_type) { ?>
                                <li>
                                    <a data-dependent-field-name="ta_unit_building" 
                                        class="dependent-field-search-link" href="components.html#"><?php echo $${modEntity.name?lower_case}_type['description']; ?></a>
                                </li>
                            <?php  }  ?>
                            </ul>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="col-sm-12 m-b-20">
                        <div class="list-group">
                            <a href="other-components.html#" class="list-group-item active"><span class="badge">119</span> Selected Units</a>
                            <a href="other-components.html#" class="list-group-item">Dapibus ac facilisis in</a>
                        </div>
                    </div>
                </div>
                    </#if>
                </#list>
                    
                <ul class="fw-footer pagination wizard">
                    <li class="previous first"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-more-horiz"></i></a></li>
                    <li class="previous"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-chevron-left"></i></a></li>
                    <li class="next"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-chevron-right"></i></a></li>
                    <li class="next last"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-more-horiz"></i></a></li>
                </ul>
            </div>
        </div>

    
<?php 
    do_action('shadowbanker_entity_form_end'); 
    
   do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>

<#list entity.fields as field>
    <#if field.relationshipField == "Y" && field.isFormField == "Y" && field.createField == "Y">
        <#list module.entities as modEntity>
            <#if field.dataType == modEntity.postName>
                <!-- Modal Default -->  
                <div class="modal fade" id="${field.name}_modal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <div class="card">
                                    <div class="card-header bgm-lightgreen">
                                        <h2>
                                            Select ${modEntity.name}
                                        </h2>
                                        <ul class="actions actions-alt">
                                            <li class="dropdown">
                                                <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="md md-more-vert"></i>
                                                </a>
                                                
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="/page?type=entity&page_action=create&artifact=${modEntity.name?lower_case}">Add a new record</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="card-body card-padding">

                                        <form id="${modEntity.postName}-list-form">
                                            <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                                            <input type="hidden" name="submitted" id="submitted" value="true" /> 
                                        </form>
                                        <div class="table-responsive">
                                            <table id="${modEntity.postName}-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <#list modEntity.fields as field>
                                                            <#if field.listField == "Y">
                                                                <#if field.relationshipField == "N">
                                                        <th>${field.description}</th>
                                                                </#if>

                                                                <#if field.relationshipField == "Y">
                                                        <th>${field.description}</th>
                                                                </#if>
                                                            </#if>
                                                        </#list>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </#if>
        </#list>
    </#if>
</#list>

<#list module.entities as modEntity>
<#if modEntity.name == "Unit">
<!-- Modal Default -->  
<div class="modal fade" id="ta_unit_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="card">
                    <div class="card-header bgm-lightgreen">
                        <h2>
                            Select a ${modEntity.name}
                        </h2>
                        <ul class="actions actions-alt">
                            <li class="dropdown">
                                <a href="widget-templates.html" data-toggle="dropdown" aria-expanded="false">
                                    <i class="md md-more-vert"></i>
                                </a>
                                
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a href="/page?type=entity&page_action=create&artifact=${modEntity.name?lower_case}">Add a new record</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body card-padding">
                        <form id="${modEntity.postName}-list-form">
                            <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                            <input type="hidden" name="submitted" id="submitted" value="true" />
                            <!-- <input type="hidden" name="u_property" id="u_property" value="" />  -->
                        </form>
                        <div class="table-responsive">
                            <table id="${modEntity.postName}-list-table" class="table table-striped table-bordered" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th><input name="select_all" value="1" type="checkbox"></th>
                                        <#list modEntity.fields as field>
                                            <#if field.listField == "Y">
                                                <#if field.relationshipField == "N">
                                        <th>${field.description}</th>
                                                </#if>

                                                <#if field.relationshipField == "Y">
                                        <th>${field.description}</th>
                                                </#if>
                                            </#if>
                                        </#list>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <a id="add-selected-${modEntity.name?lower_case}-list-btn" type="button" data-dismiss="modal" class="btn btn-primary">Add to agreement</a>
            </div>
        </div>
    </div>
</div>
</#if>
</#list>



<script type="text/javascript">
    
    jQuery(document).ready(function($)
    {
        $('body').on('click', '.data-table-link', function(e){
            e.preventDefault();
            var currentRelatedFieldName = $('#current-related-field').val();
            var currentRelatedInstanceId = $(this).data('related-instance-id');
            var currentRelatedInstanceName = $(this).data('related-instance-name');               
            var currentRelatedArtifactName = $(this).data('related-artifact-name');
            // Set the value of the hidden relationship field. 
            $('#' + currentRelatedArtifactName).val(currentRelatedInstanceId);
            // Set the value of the text field for the relationship field.
            $('#' + currentRelatedFieldName + '_txt').val(currentRelatedInstanceName);
            $('.modal').modal('hide');
        });

        $('body').on('click', '.related-field-search-link', function(e){
            e.preventDefault();
            var currentRelatedFieldName = $(this).data('related-field-name');
            $('#u_property').val(currentRelatedFieldName);
            $('#current-related-field').val(currentRelatedFieldName);
            $('#' + currentRelatedFieldName + '_modal').modal('show');
        });

        $('body').on('click', '.dependent-field-search-link', function(e){
            e.preventDefault();
            var currentRelatedFieldName = $(this).data('dependent-field-name');
            $('#ta_unit_modal').modal('show');
        });





    });

</script>