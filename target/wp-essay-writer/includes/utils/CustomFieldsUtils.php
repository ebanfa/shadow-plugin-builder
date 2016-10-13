<?php
/*------------------------------------------------------------------------------
These are helper functions
------------------------------------------------------------------------------*/
class CustomFieldsUtils
{
	public static $prefix = ''; 
	public static $page = 'custom-content';
	// Which types of content do we want to standardize?
	public static $content_types_array = array('sb_currency','sb_country','sb_business','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_partygroup','sb_person','sb_partyprofile','sb_billaccount','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_partyimage','sb_partyfile','sb_socmediaccttype','sb_socmediaacct','sb_contactreq','sb_qualtype','sb_partyqual','sb_academiclevel','sb_documenttype','sb_noofpages','sb_urgency','sb_subjectarea','sb_partysubarea','sb_writingstyle','sb_partyreview','sb_contentcat','sb_contenttype','sb_content','sb_contentfile','sb_cordertype','sb_corderstatus','sb_paymentstatus','sb_contentorder','sb_corderfile','sb_disputtype','sb_disputestatus','sb_dispute',);

	/*------------------------------------------------------------------------------
	SYNOPSIS: prints the value of a custom field from the current post.
	INPUT: 
		$field (str) Name of custom field; technically, this string appears in the 
			meta_key column of the wp_postmeta database table.
		$separator (str) optional separator used to join values if a post has more than
			one value for the field named in $field.
	OUTPUT: prints the value of that field for the current post OR an empty string
		If the $field contains an array of values, then they are joined by the separator.
	------------------------------------------------------------------------------*/
	static function get_custom_field($field, $separator=',')
	{
		// the_ID() function won't work because it prints its output
		$post_id = get_the_ID();
		$output_array = get_post_meta($post_id, $field);
		print implode($separator, $output_array);
	}

	/*------------------------------------------------------------------------------
	Adds a menu item inside the WordPress admin
	------------------------------------------------------------------------------*/
	static function add_menu_item()
	{
		add_submenu_page(
			'plugins.php', 							// Menu page to attach to
			'Custom Content',				 		// page title
			'Content Content', 						// menu title
			'manage_options', 						// permissions
			ContentRotator::$page,					// page-name (used in the URL)
			'ContentRotator::generate_admin_page'	// clicking callback function
		);
	}

	/*------------------------------------------------------------------------------
	Controller that generates admin page
	------------------------------------------------------------------------------*/
	static function generate_admin_page()
	{
		$msg = ''; // used to display a success message on updates
		// Maybe update... remember, the string used by check_admin_referer() must match the 
		// string used by wp_nonce_field();
		if ( !empty($_POST) && check_admin_referer('content_rotation_admin_options_update') )
		{
			
			update_option('content_rotation_content_separator', 
				stripslashes($_POST['separator']) );
			update_option('content_rotation_content_block', 
				stripslashes($_POST['content_block']) );	

			$msg = '<div class="updated"><p>Your settings have been <strong>updated</strong></p></div>';
		}
		// Show the page
		include('admin_page.php');
	}


	//! public Functions
	
	/*------------------------------------------------------------------------------
	Get custom fields for this content type.
	INPUT: $content_type (str) the name of the content type, e.g. post, page.
	OUTPUT: array of associative arrays where each associative array describes 
		a custom field to be used for the $content_type specified.
	FUTURE: read these arrays from the database.
	------------------------------------------------------------------------------*/
	public static function get_custom_fields($content_type)
	{
		$custom_fields = '';
		switch ($content_type) 
		{
        case 'sb_currency':
				$custom_fields = CurrencyCPT::$custom_fields;
				break;
        case 'sb_country':
				$custom_fields = CountryCPT::$custom_fields;
				break;
        case 'sb_business':
				$custom_fields = BusinessCPT::$custom_fields;
				break;
        case 'sb_partycat':
				$custom_fields = PartyCategoryCPT::$custom_fields;
				break;
        case 'sb_partytype':
				$custom_fields = PartyTypeCPT::$custom_fields;
				break;
        case 'sb_roletype':
				$custom_fields = RoleTypeCPT::$custom_fields;
				break;
        case 'sb_party':
				$custom_fields = PartyCPT::$custom_fields;
				break;
        case 'sb_partyrole':
				$custom_fields = PartyRoleCPT::$custom_fields;
				break;
        case 'sb_partygroup':
				$custom_fields = PartyGroupCPT::$custom_fields;
				break;
        case 'sb_person':
				$custom_fields = PersonCPT::$custom_fields;
				break;
        case 'sb_partyprofile':
				$custom_fields = PartyProfileCPT::$custom_fields;
				break;
        case 'sb_billaccount':
				$custom_fields = BillingAccountCPT::$custom_fields;
				break;
        case 'sb_accttxntype':
				$custom_fields = AccountTransactionTypeCPT::$custom_fields;
				break;
        case 'sb_accttxnstatus':
				$custom_fields = AccountTransactionStatusCPT::$custom_fields;
				break;
        case 'sb_accttransaction':
				$custom_fields = AccountTransactionCPT::$custom_fields;
				break;
        case 'sb_partyimage':
				$custom_fields = PartyImageCPT::$custom_fields;
				break;
        case 'sb_partyfile':
				$custom_fields = PartyFileCPT::$custom_fields;
				break;
        case 'sb_socmediaccttype':
				$custom_fields = SocialMediaAccountTypeCPT::$custom_fields;
				break;
        case 'sb_socmediaacct':
				$custom_fields = SocialMediaAccountCPT::$custom_fields;
				break;
        case 'sb_contactreq':
				$custom_fields = ContactRequestCPT::$custom_fields;
				break;
        case 'sb_qualtype':
				$custom_fields = QualificationTypeCPT::$custom_fields;
				break;
        case 'sb_partyqual':
				$custom_fields = PartyQualificationCPT::$custom_fields;
				break;
        case 'sb_academiclevel':
				$custom_fields = AcademicLevelCPT::$custom_fields;
				break;
        case 'sb_documenttype':
				$custom_fields = DocumentTypeCPT::$custom_fields;
				break;
        case 'sb_noofpages':
				$custom_fields = NoOfPagesCPT::$custom_fields;
				break;
        case 'sb_urgency':
				$custom_fields = UrgencyCPT::$custom_fields;
				break;
        case 'sb_subjectarea':
				$custom_fields = SubjectAreaCPT::$custom_fields;
				break;
        case 'sb_partysubarea':
				$custom_fields = PartySubjectAreaCPT::$custom_fields;
				break;
        case 'sb_writingstyle':
				$custom_fields = WritingStyleCPT::$custom_fields;
				break;
        case 'sb_partyreview':
				$custom_fields = PartyReviewCPT::$custom_fields;
				break;
        case 'sb_contentcat':
				$custom_fields = ContentCategoryCPT::$custom_fields;
				break;
        case 'sb_contenttype':
				$custom_fields = ContentTypeCPT::$custom_fields;
				break;
        case 'sb_content':
				$custom_fields = ContentCPT::$custom_fields;
				break;
        case 'sb_contentfile':
				$custom_fields = ContentFileCPT::$custom_fields;
				break;
        case 'sb_cordertype':
				$custom_fields = ContentOrderTypeCPT::$custom_fields;
				break;
        case 'sb_corderstatus':
				$custom_fields = ContentOrderStatusCPT::$custom_fields;
				break;
        case 'sb_paymentstatus':
				$custom_fields = PaymentStatusCPT::$custom_fields;
				break;
        case 'sb_contentorder':
				$custom_fields = ContentOrderCPT::$custom_fields;
				break;
        case 'sb_corderfile':
				$custom_fields = ContentOrderFileCPT::$custom_fields;
				break;
        case 'sb_disputtype':
				$custom_fields = DisputeTypeCPT::$custom_fields;
				break;
        case 'sb_disputestatus':
				$custom_fields = DisputeStatusCPT::$custom_fields;
				break;
        case 'sb_dispute':
				$custom_fields = DisputeCPT::$custom_fields;
				break;
			default:
				;
				break;
		}
		return $custom_fields;
	}

	public static function get_field_value($content_type, $post_id, $field) {

		$field_value = $field['value'];
		switch ($content_type) {
        case 'sb_currency':
				$field_value = CurrencyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_country':
				$field_value = CountryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_business':
				$field_value = BusinessCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partycat':
				$field_value = PartyCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partytype':
				$field_value = PartyTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_roletype':
				$field_value = RoleTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_party':
				$field_value = PartyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyrole':
				$field_value = PartyRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partygroup':
				$field_value = PartyGroupCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_person':
				$field_value = PersonCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyprofile':
				$field_value = PartyProfileCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_billaccount':
				$field_value = BillingAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttxntype':
				$field_value = AccountTransactionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttxnstatus':
				$field_value = AccountTransactionStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttransaction':
				$field_value = AccountTransactionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyimage':
				$field_value = PartyImageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyfile':
				$field_value = PartyFileCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_socmediaccttype':
				$field_value = SocialMediaAccountTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_socmediaacct':
				$field_value = SocialMediaAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contactreq':
				$field_value = ContactRequestCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_qualtype':
				$field_value = QualificationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyqual':
				$field_value = PartyQualificationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_academiclevel':
				$field_value = AcademicLevelCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_documenttype':
				$field_value = DocumentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_noofpages':
				$field_value = NoOfPagesCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_urgency':
				$field_value = UrgencyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_subjectarea':
				$field_value = SubjectAreaCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partysubarea':
				$field_value = PartySubjectAreaCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_writingstyle':
				$field_value = WritingStyleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyreview':
				$field_value = PartyReviewCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contentcat':
				$field_value = ContentCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contenttype':
				$field_value = ContentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_content':
				$field_value = ContentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contentfile':
				$field_value = ContentFileCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_cordertype':
				$field_value = ContentOrderTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_corderstatus':
				$field_value = ContentOrderStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paymentstatus':
				$field_value = PaymentStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contentorder':
				$field_value = ContentOrderCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_corderfile':
				$field_value = ContentOrderFileCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disputtype':
				$field_value = DisputeTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disputestatus':
				$field_value = DisputeStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_dispute':
				$field_value = DisputeCPT::get_field_value($content_type, $post_id, $field);
				break;
			default:
				$field_value =  $field['value'];
				break;
		}
		return $field_value;
		

	}

	/*------------------------------------------------------------------------------
    Save the new Custom Fields values
    INPUT:
        $post_id (int) id of the post these custom fields are associated with
        $post (obj) the post object
  ------------------------------------------------------------------------------*/
    public static function save_custom_fields($post_id, $post, $custom_fields) 
    {
        // Loop through all the fields
        foreach ( $custom_fields as $field ) 
        {
            // Processing all fields apart except attachment field here
            if (isset( $_POST[ self::$prefix . $field['name'] ] ) ) 
            {
                $value = trim($_POST[ self::$prefix . $field['name'] ]);
                // Auto-paragraphs for any WYSIWYG
                if ( $field['type'] == 'wysiwyg' ) 
                {
                    $value = wpautop( $value );
                }
                update_post_meta($post_id, $field[ 'name' ], $value);
            }
            // if not set, then it's an unchecked checkbox, so blank out the value.
            else {
                //update_post_meta( $post_id, $field[ 'name' ], '' );
            }
        }
    }


	/*------------------------------------------------------------------------------
	The following '_get_xxx_element' functions each generate a single form element.
	INPUT: $data (array) contains an associative array describing how the element
	should look with keys for name, title, description, and type.
	------------------------------------------------------------------------------*/
	/*------------------------------------------------------------------------------
	Note: the checked value is hard-coded to 'yes' for simplicity.
	------------------------------------------------------------------------------*/
	public static function get_checkbox_element($data)
	{
		$tpl ='<input type="checkbox" name="[+name+]" id="[+name+]" value="yes" [+is_checked+] style="width: auto;"/> 
		<label for="[+name+]" style="display:inline;"><strong>[+title+]</strong></label>';
		// Special handling to see if the box is checked.
		if ( $data['value'] == "yes" )
		{
			$data['is_checked'] = 'checked="checked"';
		}
		else
		{
			$data['is_checked'] = '';
		}
	
		return self::parse($tpl, $data);
	}

	
	/*------------------------------------------------------------------------------
	The dropdown is special: it requires that you supply an array of options in its
	'options' key.
	The $tpl used internally here uses a custom [+options+] placeholder.
	------------------------------------------------------------------------------*/
	public static function get_dropdown_element($data)
	{
		// Some error messaging.
		if ( !isset($data['options']) || !is_array($data['options']) )
		{
			return '<p><strong>Custom Content Error:</strong> No options supplied for '.$data['name'].'</p>';
		}
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
			     <select name="[+name+]" id="[+name+]">[+options+]</select>';

		$option_str = '<option value="">Pick One</option>';
		foreach ( $data['options'] as $option )
		{
			$option = htmlspecialchars($option); // Filter the values
			$is_selected = '';
			if ( $data['value'] == $option )
			{
				$is_selected = 'selected="selected"';
			}
			$option_str .= '<option value="'.$option.'" '.$is_selected.'>'.$option.'</option>';
		}
		
		unset($data['options']); // the parse function req's a simple hash.
		$data['options'] = $option_str; // prep for parsing
		
		return self::parse($tpl, $data);
	}
	
	//------------------------------------------------------------------------------
	public static function get_text_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
				<input type="text" name="[+name+]" id="[+name+]" value="[+value+]" /><br/>';
		return self::parse($tpl, $data);
	}
	
	//------------------------------------------------------------------------------
	public static function get_textarea_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
			<textarea name="[+name+]" id="[+name+]" columns="30" rows="3">[+value+]</textarea>';
		return self::parse($tpl, $data);	
	}

	//------------------------------------------------------------------------------
	public static function get_wysiwyg_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label>
			<textarea name="[+name+]" id="[+name+]" columns="30" rows="3">[+value+]</textarea>
			<script type="text/javascript">
				jQuery( document ).ready( function() {
					jQuery( "[+name+]" ).addClass( "mceEditor" );
					if ( typeof( tinyMCE ) == "object" && typeof( tinyMCE.execCommand ) == "function" ) {
						tinyMCE.execCommand( "mceAddControl", false, "[+name+]" );
					}
				});
			</script>
			';	
		return self::parse($tpl, $data);
	}

	/*------------------------------------------------------------------------------
	SYNOPSIS: a simple parsing function for basic templating.
	INPUT:
		$tpl (str): a string containing [+placeholders+]
		$hash (array): an associative array('key' => 'value');
	OUTPUT
		string; placeholders corresponding to the keys of the hash will be replaced
		with the values and the string will be returned.
	------------------------------------------------------------------------------*/
	public static function parse($tpl, $hash) {
	
	    foreach ($hash as $key => $value) {
	        $tpl = str_replace('[+'.$key.'+]', $value, $tpl);
	    }
	    return $tpl;
	}


	/*------------------------------------------------------------------------------
	Test if a variable is null or an empty string
	------------------------------------------------------------------------------*/
	static function isNullOrEmptyString($variable){
	    return (!isset($variable) || trim($variable)==='');
	}
}
/*EOF*/
?>