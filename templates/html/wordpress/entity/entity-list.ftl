<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_list_entity');
?>
        <form id="${entity.postName}-list-form">
            <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
            <input type="hidden" name="submitted" id="submitted" value="true" /> 
        </form>
        <div class="table-responsive">
            <table id="${entity.postName}-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
<#list entity.fields as field>
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
               <!--  <tfoot>
                    <tr>
                        <th>Invoice</th>
                        <th>Topic</th>
                        <th>Pages</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </tfoot> -->
                <tbody>
                </tbody>
            </table>
            
        </div>

    
<?php 
    do_action('shadowbanker_after_list_entity'); 
    
    do_action('shadowbanker_after_main_content');
?>
