<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ArtifactUtils {

    public static $pages = array(

    );
    public static $artifacts = array(
<#list menuBar.menuGroups as group>
    <#if group.type == "menu">
        <#if group.targetType == "page">
       '${group.name}' => array('name' => '${group.name}', 'description' => '${group.displayName}', 'artifact_type' => 'page'), 
        </#if>
    </#if>
    <#if group.type == "group">
        <#list group.menus as menu>
            <#if menu.targetType == "page">
       '${menu.name}' => array('name' => '${menu.name}', 'description' => '${menu.displayName}', 'artifact_type' => 'page'),
            </#if>
        </#list>
    </#if>
</#list>
<#list module.entities as entity>
        '${entity.name?lower_case}' => array('name' => '${entity.name}', 'description' => '${entity.description}', 'artifact_type' => 'entity'),
</#list>
    );
    
}

?>