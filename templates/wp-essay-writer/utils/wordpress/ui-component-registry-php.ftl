<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class UIComponentRegistry { 

    public static $data = array(
<#list module.uiComponents as uiComponent>
    	'${uiComponent.name}' => array(
    		'template' => '${uiComponent.name}.php',
    		'className' => '${uiComponent.className}',
    	),
</#list>
    );
}
?>