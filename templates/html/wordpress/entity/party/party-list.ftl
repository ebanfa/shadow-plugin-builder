<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    if(isset($_REQUEST['party_role'])) { 
        $party_role = sanitize_tezt_field($_REQUEST['party_role']);
    }

   

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    //do_action('shadowbanker_before_list_entity');
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
                            <li>
        <a href="/page?type=entity&page_action=create&artifact=person<?php if(isset($party_role)){ echo '&party_role='. $party_role; } ?>">
                                    Add person
                                </a>
                            </li>
                            <li>
                                <a href="/page?type=entity&page_action=create&artifact=partygroup<?php if(isset($party_role)){ echo '&party_role='. $party_role; } ?>">Add organization</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="card-body card-padding">


                <form id="${entity.postName}-list-form">
                    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>

                    <?php  if(isset($party_role)){ ?>
                        <input type="hidden" name="party_role" id="party_role" value="<?php  echo $party_role; ?>" /> 
                    <?php  } ?>
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
                        <tbody>
                        </tbody>
                    </table>
                    
                </div>

    
<?php 
    do_action('shadowbanker_after_list_entity'); 
    
    do_action('shadowbanker_after_main_content');
?>
