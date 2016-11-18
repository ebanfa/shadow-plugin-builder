<?php
	// Framework API
	include_once('includes/api/AdminAPI.php');
	include_once('includes/api/MailAPI.php');
	include_once('includes/api/SecurityAPI.php');
	include_once('includes/api/UIDisplayAPI.php');
	// Party API
	include_once('includes/api/PartyAPI.php');
	include_once('includes/api/PartyEditAPI.php');
	include_once('includes/api/PartyCreateAPI.php');
	include_once('includes/api/PersonAPI.php');
	include_once('includes/api/PartyGroupAPI.php');
	include_once('includes/api/ContentUserAPI.php');
	include_once('includes/api/UserPartyAPI.php');
	include_once('includes/api/UserLoginAPI.php');
	// File management API
	include_once('includes/api/FileAPI.php');
	include_once('includes/api/FileUploadValidatorAPI.php');
	// Controllers
	include_once('includes/controller/URLRewriteProcessor.php');
	include_once('includes/controller/ArtifactRequestProcessor.php');
	include_once('includes/controller/ArtifactAjaxRequestProcessor.php');
	// Utility Classes
	include_once('includes/utils/PageUtils.php');
	include_once('includes/utils/LogUtils.php');
	include_once('includes/utils/UserUtils.php');
	include_once('includes/utils/MenuUtils.php');
	include_once('includes/utils/DateUtils.php');
	include_once('includes/utils/EnqueueUtils.php');
	include_once('includes/utils/ArtifactUtils.php');
	include_once('includes/utils/EntityAPIUtils.php');
	include_once('includes/utils/EntityStringUtils.php');
	include_once('includes/utils/EntityRequestUtils.php');
	include_once('includes/utils/CustomFieldsUtils.php');
	include_once('includes/utils/CustomPostTypesUtils.php');
	include_once('includes/utils/TemplateFunctions.php');
	include_once('includes/utils/UIComponentRegistry.php');
	include_once('includes/utils/ArtifactRequestProcessorUtils.php');
	include_once('includes/utils/ArtifactAjaxRequestProcessorUtils.php');
	// UI Components
	include_once('includes/uicomponent/AbstractUIComponentModel.php');
	include_once('includes/uicomponent/AbstractUIComponent.php');
	include_once('includes/uicomponent/UIComponentModel.php');
	include_once('includes/uicomponent/UIComponent.php');
	// View
	include_once('includes/view/AbstractPage.php');
	include_once('includes/view/AbstractPageModel.php');
	include_once('includes/view/PortalPage.php');
	include_once('includes/view/PortalPageModel.php');
	include_once('includes/view/PortalErrorPage.php');
	include_once('includes/view/PortalErrorPageModel.php');
	include_once('includes/view/EntityPortalPage.php');
	include_once('includes/view/EntityPortalPageModel.php');
	include_once('includes/view/ListEntityPage.php');
	include_once('includes/view/ListEntityPageModel.php');
	include_once('includes/view/CreateEntityPage.php');
	include_once('includes/view/CreateEntityPageModel.php');
	include_once('includes/view/EditEntityPage.php');
	include_once('includes/view/EditEntityPageModel.php');
	include_once('includes/view/ViewEntityPage.php');
	include_once('includes/view/ViewEntityPageModel.php');
	include_once('includes/view/FrontendPage.php');
	include_once('includes/view/ViewActionsController.php');

        // Model
<#list module.entities as entity>
        include_once('includes/abstracts/${entity.name}CPT.php');
        include_once('includes/abstracts/${entity.name}.php');
</#list>
        // Entity API
        include_once('includes/api/EntityAPI.php');
        include_once('includes/api/EntityPersistenceAPI.php');

        // API
<#list module.entities as entity>
        <#if entity.apiTemplate ??>
        include_once('includes/api/${entity.name}API.php');
        </#if>
</#list>
<#list module.apis as api>
        include_once('includes/api/${api.name}.php');
</#list>
<#list module.pages as page>
    <#if page.ajaxRequestProcessorTemplate ??>
        include_once('includes/controller/${page.name}AjaxRequestProcessor.php');
    </#if>
</#list>
<#list module.entities as entity>
        <#if entity.ajaxRequestProcessorTemplate ??>
        include_once('includes/controller/${entity.name}AjaxRequestProcessor.php');
        </#if>
</#list>
	// Pages
<#list module.pages as page>
    <#if page.viewTemplate ??>
        include_once('includes/view/${page.name}Page.php');
    </#if>
    <#if page.viewFilterTemplate ??>
    include_once('includes/view/${page.name}ViewFilter.php');
    </#if>
</#list>
	// UI Components
<#list module.uiComponents as uiComponent>
    <#if uiComponent.classTemplate ??>
    include_once('includes/uicomponent/${uiComponent.className}.php');
    </#if>
    <#if uiComponent.uiComponentModel ??>
    include_once('includes/uicomponent/${uiComponent.className}Model.php');
    </#if>
</#list>
	// View
<#list module.entities as entity>
    <#if entity.createViewTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/Create${entity.name}Page.php');
    </#if>
    <#if entity.createViewModelTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/Create${entity.name}PageModel.php');
    </#if>
    <#if entity.editViewTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/Edit${entity.name}Page.php');
    </#if>
    <#if entity.editViewModelTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/Edit${entity.name}PageModel.php');
    </#if>
    <#if entity.singleViewTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/View${entity.name}Page.php');
    </#if>
    <#if entity.singleViewModelTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/View${entity.name}PageModel.php');
    </#if>
    <#if entity.listViewTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/List${entity.name}Page.php');
    </#if>
    <#if entity.listViewModelTemplate ??>
    include_once('includes/view/${entity.name?lower_case}/List${entity.name}PageModel.php');
    </#if>
</#list>


?>