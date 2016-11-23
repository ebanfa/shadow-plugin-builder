<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class UIComponentRegistry { 

    public static $data = array(
    	'portal-header' => array(
    		'template' => 'portal/portal-header.php',
    		'className' => 'PortalHeader',
    	),
    	'portal-footer' => array(
    		'template' => 'portal/portal-footer.php',
    		'className' => 'PortalFooter',
    	),
    	'portal-menu' => array(
    		'template' => 'portal/portal-menu.php',
    		'className' => 'PortalMenu',
    	),
    	'portal-menu-header' => array(
    		'template' => 'portal/portal-menu-header.php',
    		'className' => 'PortalMenuHeader',
    	),
    	'portal-menu-main' => array(
    		'template' => 'portal/portal-menu-main.php',
    		'className' => 'PortalMenuMain',
    	),
    	'dashboard-panel' => array(
    		'template' => 'dashboard/dashboard-panel.php',
    		'className' => 'DashboardPanel',
    	),
    	'dashboard-metrics-table' => array(
    		'template' => 'dashboard/dashboard-metrics-table.php',
    		'className' => 'DashboardMetricsTable',
    	),
    	'dashboard-metrics-chart' => array(
    		'template' => 'dashboard/dashboard-metrics-chart.php',
    		'className' => 'DashboardMetricsChart',
    	),
    	'page-block-header' => array(
    		'template' => 'page/page-block-header.php',
    		'className' => 'PageBlockHeader',
    	),
    	'artifact-block-header' => array(
    		'template' => 'artifact/artifact-block-header.php',
    		'className' => 'ArtifactBlockHeader',
    	),
    	'entity-list-block' => array(
    		'template' => 'entity/entity-list-block.php',
    		'className' => 'EntityListBlock',
    	),
    	'entity-list-panel' => array(
    		'template' => 'entity/entity-list-panel.php',
    		'className' => 'EntityListPanel',
    	),
    	'entity-create-block' => array(
    		'template' => 'entity/entity-create-block.php',
    		'className' => 'EntityCreateBlock',
    	),
    	'entity-create-panel' => array(
    		'template' => 'entity/entity-create-panel.php',
    		'className' => 'EntityCreatePanel',
    	),
    	'entity-edit-block' => array(
    		'template' => 'entity/entity-edit-block.php',
    		'className' => 'EntityEditBlock',
    	),
    	'entity-edit-panel' => array(
    		'template' => 'entity/entity-edit-panel.php',
    		'className' => 'EntityEditPanel',
    	),
    	'entity-view-block' => array(
    		'template' => 'entity/entity-view-block.php',
    		'className' => 'EntityViewBlock',
    	),
    	'entity-view-panel' => array(
    		'template' => 'entity/entity-view-panel.php',
    		'className' => 'EntityViewPanel',
    	),
    	'entity-form-panel' => array(
    		'template' => 'entity/entity-form-panel.php',
    		'className' => 'EntityFormPanel',
    	),
    	'entity-form-fields-panel' => array(
    		'template' => 'entity/entity-form-fields-panel.php',
    		'className' => 'EntityFormFieldsPanel',
    	),
    	'related-fields-modals' => array(
    		'template' => 'entity/related-fields-modals.php',
    		'className' => 'RelatedFieldsModals',
    	),
    	'party-list-panel' => array(
    		'template' => 'party/party-list-panel.php',
    		'className' => 'PartyListPanel',
    	),
    	'party-view-panel' => array(
    		'template' => 'party/party-view-panel.php',
    		'className' => 'PartyViewPanel',
    	),
    	'profile-sidebar-panel' => array(
    		'template' => 'party/profile-sidebar-panel.php',
    		'className' => 'ProfileSidebarPanel',
    	),
    	'profile-main-panel' => array(
    		'template' => 'party/profile-main-panel.php',
    		'className' => 'ProfileMainPanel',
    	),
    	'profile-buttons-panel' => array(
    		'template' => 'party/profile-buttons-panel.php',
    		'className' => 'ProfileBottonsPanel',
    	),
    	'upload-image-modal' => array(
    		'template' => 'party/upload-image-modal.php',
    		'className' => 'UploadImageModal',
    	),
    	'update-password-modal' => array(
    		'template' => 'party/update-password-modal.php',
    		'className' => 'UpdatePasswordModal',
    	),
    	'rate-party-modal' => array(
    		'template' => 'party/rate-party-modal.php',
    		'className' => 'RatePartyPanel',
    	),
    	'student-edit-panel' => array(
    		'template' => 'party/student-edit-panel.php',
    		'className' => 'StudentEditPanel',
    	),
    	'profile-edit-panel' => array(
    		'template' => 'party/profile-edit-panel.php',
    		'className' => 'ProfileEditPanel',
    	),
    	'tutor-sidebar-panel' => array(
    		'template' => 'party/tutor-sidebar-panel.php',
    		'className' => 'TutorSidebarPanel',
    	),
    	'tutor-main-panel' => array(
    		'template' => 'party/tutor-main-panel.php',
    		'className' => 'TutorMainPanel',
    	),
    	'tutor-view-panel' => array(
    		'template' => 'party/tutor-view-panel.php',
    		'className' => 'TutorViewPanel',
    	),
    	'tutor-edit-panel' => array(
    		'template' => 'party/tutor-edit-panel.php',
    		'className' => 'TutorEditPanel',
    	),
    	'tutor-buttons-panel' => array(
    		'template' => 'party/tutor-buttons-panel.php',
    		'className' => 'TutorBottonsPanel',
    	),
    	'tutor-education-panel' => array(
    		'template' => 'party/tutor-education-panel.php',
    		'className' => 'TutorEducationPanel',
    	),
    	'tutor-subjects-panel' => array(
    		'template' => 'party/tutor-subjects-panel.php',
    		'className' => 'TutorSubjectsPanel',
    	),
    	'post-question-modal' => array(
    		'template' => 'party/post-question-modal.php',
    		'className' => 'PostQuestionModal',
    	),
    	'tutor-education-modal' => array(
    		'template' => 'party/tutor-education-modal.php',
    		'className' => 'TutorEducationModal',
    	),
    	'tutor-subjects-modal' => array(
    		'template' => 'party/tutor-subjects-modal.php',
    		'className' => 'TutorSubjectsModal',
    	),
    	'contentorder-create-panel' => array(
    		'template' => 'contentorder/contentorder-create-panel.php',
    		'className' => 'ContentOrderCreatePanel',
    	),
    	'contentorder-view-panel' => array(
    		'template' => 'contentorder/contentorder-view-panel.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'contentorder-edit-panel' => array(
    		'template' => 'contentorder/contentorder-edit-panel.php',
    		'className' => 'ContentOrderEditPanel',
    	),
    	'contentorder-buttons-panel' => array(
    		'template' => 'contentorder/contentorder-buttons-panel.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'contentorder-question-panel' => array(
    		'template' => 'contentorder/contentorder-question-panel.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'contentorder-instructions-panel' => array(
    		'template' => 'contentorder/contentorder-instructions-panel.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'contentorder-files-panel' => array(
    		'template' => 'contentorder/contentorder-files-panel.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'contentorder-file-modal' => array(
    		'template' => 'contentorder/contentorder-file-modal.php',
    		'className' => 'ContentOrderViewPanel',
    	),
    	'ui-input-field-name' => array(
    		'template' => 'input/ui-input-field-name.php',
    		'className' => 'UIInputFieldName',
    	),
    	'ui-input-field-email' => array(
    		'template' => 'input/ui-input-field-email.php',
    		'className' => 'UIInputFieldEmail',
    	),
    	'ui-input-field-password' => array(
    		'template' => 'input/ui-input-field-password.php',
    		'className' => 'UIInputFieldPassword',
    	),
    	'ui-input-field-text-lg' => array(
    		'template' => 'input/ui-input-field-text-lg.php',
    		'className' => 'UIInputFieldTextLg',
    	),
    	'ui-input-field-text' => array(
    		'template' => 'input/ui-input-field-text.php',
    		'className' => 'UIInputFieldText',
    	),
    	'ui-input-field-alphanumeric' => array(
    		'template' => 'input/ui-input-field-alphanumeric.php',
    		'className' => 'UIInputFieldAlpha',
    	),
    	'ui-input-field-phone' => array(
    		'template' => 'input/ui-input-field-phone.php',
    		'className' => 'UIInputFieldPhone',
    	),
    	'ui-input-field-number' => array(
    		'template' => 'input/ui-input-field-number.php',
    		'className' => 'UIInputFieldNumber',
    	),
    	'ui-input-field-money' => array(
    		'template' => 'input/ui-input-field-money.php',
    		'className' => 'UIInputFieldMoney',
    	),
    	'ui-input-field-flag' => array(
    		'template' => 'input/ui-input-field-flag.php',
    		'className' => 'UIInputFieldFlag',
    	),
    	'ui-input-field-option' => array(
    		'template' => 'input/ui-input-field-option.php',
    		'className' => 'UIInputFieldOption',
    	),
    	'ui-input-field-date' => array(
    		'template' => 'input/ui-input-field-date.php',
    		'className' => 'UIInputFieldDate',
    	),
    	'ui-input-field-datetime' => array(
    		'template' => 'input/ui-input-field-datetime.php',
    		'className' => 'UIInputFieldDatetime',
    	),
    	'ui-input-field-hidden' => array(
    		'template' => 'input/ui-input-field-hidden.php',
    		'className' => 'UIInputFieldHidden',
    	),
    	'ui-input-field-relationship' => array(
    		'template' => 'input/ui-input-field-relationship.php',
    		'className' => 'UIInputFieldRelationship',
    	),
    );
}
?>