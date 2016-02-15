<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ArtifactUtils {

    /**
     *
     */
    $entity_map = array(
<#list module.entities as entity>
    '${entity.name?lower_case}' => '${entity.name}',
</#list>   
    );
    
}

?>