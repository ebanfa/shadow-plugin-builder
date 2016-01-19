<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CloderiaServiceUtils {

	// Function for basic field validation (present and neither empty nor only white space
	/**
	 *
	 */
	public static function is_invalid_string($string){
	    return (!isset($string) || trim($string)==='');
	}
}

?>