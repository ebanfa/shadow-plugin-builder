<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ArtifactUtils {

    public static $pages = array(
<#list menuBar.menuGroups as group>
    <#if group.type == "menu">
        <#if group.targetType == "page">
       '${group.name}' => '${group.displayName}',
        </#if>
    </#if>
    <#if group.type == "group">
        <#list group.menus as menu>
            <#if menu.targetType == "page">
       '${menu.name}' => '${menu.displayName}',
            </#if>
        </#list>
    </#if>
</#list>
    );
    public static $entities = array(
<#list module.entities as entity>
        '${entity.name?lower_case}' => array('name' => '${entity.name}', 'description' => '${entity.description}'),
</#list>
    );
    
}

?>