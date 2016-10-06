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
<#list module.pages as page>
        '${page.name?lower_case}' => array('name' => '${page.name}', 'description' => '${page.description}', 'artifact_type' => 'page'),
</#list>
<#list module.entities as entity>
        '${entity.name?lower_case}' => array('name' => '${entity.name}', 'description' => '${entity.description}', 'artifact_type' => 'entity', 'data_type' => '${entity.postName}'),
</#list>
    );
    
}

?>