<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
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

    $entity_action_links = array();
    // The create entit link
    $entity_action_links['create_entity_link'] = '/page?type=entity&page_action=create&artifact=' . $artifact_name;
    // The name of the filter that modifies the create link for this artifact
    $modify_entity_action_link_filter = 'shadowbanker_modify_entity_action_links';

    echo '>>>>>>>>>>>>>>>>>>>>>>>' . 'shadowbanker_modify_entity_action_links';
    // Call the filter to modify the create entity link
    if(has_filter('shadowbanker_modify_entity_action_links')) {
        echo '>>>>>>>>>>>>>>>>>>>>>>>' . 'shadowbanker_modify_entity_action_links';
        $entity_action_links = apply_filters('shadowbanker_modify_entity_action_links', $entity_action_links);
    }

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
                                <a href="<?php echo $entity_action_links['create_entity_link']; ?>">Add a new record</a>
                            </li>
                        </ul>
                    </li>
                </ul>
			</div>

			<div class="card-body card-padding">