<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class UIComponentRegistry { 

    public static $data = array(
    	'portal-header' => array(
    		'template' => 'portal-header.php',
    		'className' => 'PortalHeader',
    	),
    	'portal-footer' => array(
    		'template' => 'portal-footer.php',
    		'className' => 'PortalFooter',
    	),
    	'portal-menu' => array(
    		'template' => 'portal-menu.php',
    		'className' => 'PortalMenu',
    	),
    	'portal-menu-header' => array(
    		'template' => 'portal-menu-header.php',
    		'className' => 'PortalMenuHeader',
    	),
    	'portal-menu-main' => array(
    		'template' => 'portal-menu-main.php',
    		'className' => 'PortalMenuMain',
    	),
    	'dashboard-panel' => array(
    		'template' => 'dashboard-panel.php',
    		'className' => 'DashboardPanel',
    	),
    	'dashboard-metrics-table' => array(
    		'template' => 'dashboard-metrics-table.php',
    		'className' => 'DashboardMetricsTable',
    	),
    	'dashboard-metrics-chart' => array(
    		'template' => 'dashboard-metrics-chart.php',
    		'className' => 'DashboardMetricsChart',
    	),
    	'page-block-header' => array(
    		'template' => 'page-block-header.php',
    		'className' => 'PageBlockHeader',
    	),
    	'artifact-block-header' => array(
    		'template' => 'artifact-block-header.php',
    		'className' => 'ArtifactBlockHeader',
    	),
    	'entity-list-block' => array(
    		'template' => 'entity-list-block.php',
    		'className' => 'EntityListBlock',
    	),
    	'entity-list-panel' => array(
    		'template' => 'entity-list-panel.php',
    		'className' => 'EntityListPanel',
    	),
    	'entity-create-block' => array(
    		'template' => 'entity-create-block.php',
    		'className' => 'EntityCreateBlock',
    	),
    	'entity-create-panel' => array(
    		'template' => 'entity-create-panel.php',
    		'className' => 'EntityCreatePanel',
    	),
    	'entity-edit-block' => array(
    		'template' => 'entity-edit-block.php',
    		'className' => 'EntityEditBlock',
    	),
    	'entity-edit-panel' => array(
    		'template' => 'entity-edit-panel.php',
    		'className' => 'EntityEditPanel',
    	),
    	'entity-view-block' => array(
    		'template' => 'entity-view-block.php',
    		'className' => 'EntityViewBlock',
    	),
    	'entity-view-panel' => array(
    		'template' => 'entity-view-panel.php',
    		'className' => 'EntityViewPanel',
    	),
    	'entity-form-panel' => array(
    		'template' => 'entity-form-panel.php',
    		'className' => 'EntityFormPanel',
    	),
    	'entity-form-fields-panel' => array(
    		'template' => 'entity-form-fields-panel.php',
    		'className' => 'EntityFormFieldsPanel',
    	),
    	'ui-input-field-name' => array(
    		'template' => 'ui-input-field-name.php',
    		'className' => 'UIInputFieldName',
    	),
    	'ui-input-field-email' => array(
    		'template' => 'ui-input-field-email.php',
    		'className' => 'UIInputFieldEmail',
    	),
    	'ui-input-field-password' => array(
    		'template' => 'ui-input-field-password.php',
    		'className' => 'UIInputFieldPassword',
    	),
    	'ui-input-field-text-lg' => array(
    		'template' => 'ui-input-field-text-lg.php',
    		'className' => 'UIInputFieldTextLg',
    	),
    	'ui-input-field-text' => array(
    		'template' => 'ui-input-field-text.php',
    		'className' => 'UIInputFieldText',
    	),
    	'ui-input-field-alphanumeric' => array(
    		'template' => 'ui-input-field-alphanumeric.php',
    		'className' => 'UIInputFieldAlpha',
    	),
    	'ui-input-field-phone' => array(
    		'template' => 'ui-input-field-phone.php',
    		'className' => 'UIInputFieldPhone',
    	),
    	'ui-input-field-number' => array(
    		'template' => 'ui-input-field-number.php',
    		'className' => 'UIInputFieldNumber',
    	),
    	'ui-input-field-money' => array(
    		'template' => 'ui-input-field-money.php',
    		'className' => 'UIInputFieldMoney',
    	),
    	'ui-input-field-flag' => array(
    		'template' => 'ui-input-field-flag.php',
    		'className' => 'UIInputFieldFlag',
    	),
    	'ui-input-field-option' => array(
    		'template' => 'ui-input-field-option.php',
    		'className' => 'UIInputFieldOption',
    	),
    	'ui-input-field-date' => array(
    		'template' => 'ui-input-field-date.php',
    		'className' => 'UIInputFieldDate',
    	),
    	'ui-input-field-datetime' => array(
    		'template' => 'ui-input-field-datetime.php',
    		'className' => 'UIInputFieldDatetime',
    	),
    	'ui-input-field-hidden' => array(
    		'template' => 'ui-input-field-hidden.php',
    		'className' => 'UIInputFieldHidden',
    	),
    	'ui-input-field-relationship' => array(
    		'template' => 'ui-input-field-relationship.php',
    		'className' => 'UIInputFieldRelationship',
    	),
    );
}
?>