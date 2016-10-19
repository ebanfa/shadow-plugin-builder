<?php

class CustomPostTypesUtils {

	/*
	This prefix helps ensure unique keys in the $_POST array. It is used only to 
	identify the form elements; this prefix is *not* used as part of the meta_key
	when saving the field names to the database. If you want your fields to be 
	hidden from built-in WordPress functions, you can name them individually 
	using "_" as the first character.
	
	If you omit a prefix entirely, your custom field names must steer clear of
	the built-in post field names (e.g. 'content').
	*/
	public static $prefix = ''; 

	// Which types of content do we want to standardize?
	public static $content_types_array = array('sb_currency','sb_country','sb_business','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_partygroup','sb_person','sb_partyprofile','sb_billaccount','sb_partyimage','sb_partyfile','sb_socmediaccttype','sb_socmediaacct','sb_contactreq','sb_qualtype','sb_partyqual','sb_academiclevel','sb_documenttype','sb_noofpages','sb_urgency','sb_subjectarea','sb_subject','sb_partysubarea','sb_writingstyle','sb_partyreview','sb_classtype','sb_classification','sb_contentcat','sb_contenttype','sb_content','sb_contentfile','sb_contentclass','sb_cordertype','sb_corderstatus','sb_paymentstatus','sb_contentorder','sb_corderfile','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_disputtype','sb_disputestatus','sb_dispute',);

	/**
	 * Register the custom post type so it shows up in menus
	 */
	public static function register_custom_post_type()
	{
        CurrencyCPT::register_custom_post_type();
        CountryCPT::register_custom_post_type();
        BusinessCPT::register_custom_post_type();
        PartyCategoryCPT::register_custom_post_type();
        PartyTypeCPT::register_custom_post_type();
        RoleTypeCPT::register_custom_post_type();
        PartyCPT::register_custom_post_type();
        PartyRoleCPT::register_custom_post_type();
        PartyGroupCPT::register_custom_post_type();
        PersonCPT::register_custom_post_type();
        PartyProfileCPT::register_custom_post_type();
        BillingAccountCPT::register_custom_post_type();
        PartyImageCPT::register_custom_post_type();
        PartyFileCPT::register_custom_post_type();
        SocialMediaAccountTypeCPT::register_custom_post_type();
        SocialMediaAccountCPT::register_custom_post_type();
        ContactRequestCPT::register_custom_post_type();
        QualificationTypeCPT::register_custom_post_type();
        PartyQualificationCPT::register_custom_post_type();
        AcademicLevelCPT::register_custom_post_type();
        DocumentTypeCPT::register_custom_post_type();
        NoOfPagesCPT::register_custom_post_type();
        UrgencyCPT::register_custom_post_type();
        SubjectAreaCPT::register_custom_post_type();
        SubjectCPT::register_custom_post_type();
        PartySubjectAreaCPT::register_custom_post_type();
        WritingStyleCPT::register_custom_post_type();
        PartyReviewCPT::register_custom_post_type();
        ClassificationTypeCPT::register_custom_post_type();
        ClassificationCPT::register_custom_post_type();
        ContentCategoryCPT::register_custom_post_type();
        ContentTypeCPT::register_custom_post_type();
        ContentCPT::register_custom_post_type();
        ContentFileCPT::register_custom_post_type();
        ContentClassificationCPT::register_custom_post_type();
        ContentOrderTypeCPT::register_custom_post_type();
        ContentOrderStatusCPT::register_custom_post_type();
        PaymentStatusCPT::register_custom_post_type();
        ContentOrderCPT::register_custom_post_type();
        ContentOrderFileCPT::register_custom_post_type();
        AccountTransactionTypeCPT::register_custom_post_type();
        AccountTransactionStatusCPT::register_custom_post_type();
        AccountTransactionCPT::register_custom_post_type();
        DisputeTypeCPT::register_custom_post_type();
        DisputeStatusCPT::register_custom_post_type();
        DisputeCPT::register_custom_post_type();
	}

	/*------------------------------------------------------------------------------
	Save the new Custom Fields values
	INPUT:
		$post_id (int) id of the post these custom fields are associated with
		$post (obj) the post object
	------------------------------------------------------------------------------*/
	public static function save_custom_fields( $post_id, $post ) 
	{
		switch ($post->post_type) 
		{
			case 'sb_currency':
				CurrencyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_country':
				CountryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_business':
				BusinessCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partycat':
				PartyCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partytype':
				PartyTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_roletype':
				RoleTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_party':
				PartyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyrole':
				PartyRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partygroup':
				PartyGroupCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_person':
				PersonCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyprofile':
				PartyProfileCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_billaccount':
				BillingAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyimage':
				PartyImageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyfile':
				PartyFileCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_socmediaccttype':
				SocialMediaAccountTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_socmediaacct':
				SocialMediaAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contactreq':
				ContactRequestCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_qualtype':
				QualificationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyqual':
				PartyQualificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_academiclevel':
				AcademicLevelCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_documenttype':
				DocumentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_noofpages':
				NoOfPagesCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_urgency':
				UrgencyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_subjectarea':
				SubjectAreaCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_subject':
				SubjectCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partysubarea':
				PartySubjectAreaCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_writingstyle':
				WritingStyleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyreview':
				PartyReviewCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_classtype':
				ClassificationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_classification':
				ClassificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contentcat':
				ContentCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contenttype':
				ContentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_content':
				ContentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contentfile':
				ContentFileCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contentclass':
				ContentClassificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_cordertype':
				ContentOrderTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_corderstatus':
				ContentOrderStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paymentstatus':
				PaymentStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contentorder':
				ContentOrderCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_corderfile':
				ContentOrderFileCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttxntype':
				AccountTransactionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttxnstatus':
				AccountTransactionStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttransaction':
				AccountTransactionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disputtype':
				DisputeTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disputestatus':
				DisputeStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_dispute':
				DisputeCPT::save_custom_fields($post_id, $post);
				break;
			default:
				;
				break;
		}
	}

	/*------------------------------------------------------------------------------
	This plugin is meant to be configured so it acts on a specified list of content
	types, e.g. post, page, or any custom content types that is registered.
	FUTURE: read this from the database.
	------------------------------------------------------------------------------*/
	public static function get_active_content_types()
	{
		return self::$content_types_array;
	}

	//! Public Functions	
	/*------------------------------------------------------------------------------
	* Create the new Custom Fields meta box
	------------------------------------------------------------------------------*/
	public static function create_meta_box() {
		$content_types_array = self::get_active_content_types();
		foreach ($content_types_array as $content_type) {
			add_meta_box( 'my-custom-fields'
				, 'Custom Fields'
				, 'CustomPostTypesUtils::print_custom_fields'
				, $content_type
				, 'normal'
				, 'high'
				, $content_type 
			);
		}
	}

	/**
	 * Display the new Custom Fields meta box
	 * INPUT:
	 * $post (the post object is always passed to this callback function). 
	 * $callback_args will always have a copy of this object passed (I'm not sure why),
	 * but in $callback_args['args'] will be the 7th parameter from the add_meta_box() function.
	 *  We are using this argument to pass the content_type.
	 * @param	post $post - The post.
	 * @param	string	$callback_args 	- The names of call backs
	 */
	public static function print_custom_fields($post, $callback_args='') {
		$content_type = $callback_args['args']; // the 7th arg from add_meta_box()
		$custom_fields = CloderiaCustomFieldsUtils::get_custom_fields($content_type);
		$output = '';		
		
		foreach ( $custom_fields as $field ) 
		{
			$output_this_field = '';
			$field['name'] = self::$prefix . $field['name']; // this ensures unique keys in $_POST
			
			$field['value'] = htmlspecialchars( get_post_meta( $post->ID, $field['name'], true ) );
			// This will eventually delegate to each CPT to load the correct field value
			$field['value'] = CloderiaCustomFieldsUtils::get_field_value($content_type, $post->ID, $field);
			switch ( $field['type'] ) 
			{
				case 'checkbox':
					$output_this_field .= CloderiaCustomFieldsUtils::get_checkbox_element($field);
					break;
				case 'dropdown':
					$output_this_field .= CloderiaCustomFieldsUtils::get_dropdown_element($field);
					break;
				case 'textarea':
					$output_this_field .= CloderiaCustomFieldsUtils::get_textarea_element($field);
					break;
				case 'wysiwyg':
					$output_this_field .= CloderiaCustomFieldsUtils::get_wysiwyg_element($field);
					break;
				case 'text':
				default:
					$output_this_field .= CloderiaCustomFieldsUtils::get_text_element($field);
					break;
			}
			// optionally add description
			if ( $field['description'] ) 
			{
				$output_this_field .= '<p>'.$field['description'].'</p>';
			}
			$output .= '<div class="form-field form-required">'.$output_this_field.'</div>';
		}
 		// Print the form
 		print '<div class="form-wrap">';
	 	wp_nonce_field('update_custom_content_fields','custom_content_fields_nonce');
	 	print $output;
	 	print '</div>';
	}
	
	/*------------------------------------------------------------------------------
	Remove the default Custom Fields meta box. Only affects the content types that
	have been activated.
	INPUTS: sent from WordPress
	------------------------------------------------------------------------------*/
	public static function remove_default_custom_fields( $type, $context, $post ) {
		$content_types_array = self::get_active_content_types();
		foreach ( array( 'normal', 'advanced', 'side' ) as $context ) {
			foreach ( $content_types_array as $content_type )
			{
				remove_meta_box( 'postcustom', $content_type, $context );
			}
		}
	}
}
?>