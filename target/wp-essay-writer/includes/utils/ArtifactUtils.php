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
        'signin' => array('name' => 'Signin', 'description' => 'Sign In', 'artifact_type' => 'page'),
        'signup' => array('name' => 'Signup', 'description' => 'Sign Up', 'artifact_type' => 'page'),
        'password' => array('name' => 'Password', 'description' => 'Password', 'artifact_type' => 'page'),
        'dashboard' => array('name' => 'Dashboard', 'description' => 'Dashboard', 'artifact_type' => 'page'),
        'question' => array('name' => 'Question', 'description' => 'Post Question', 'artifact_type' => 'page'),
        'currency' => array('name' => 'Currency', 'description' => 'Currency', 'artifact_type' => 'entity', 'data_type' => 'sb_currency'),
        'country' => array('name' => 'Country', 'description' => 'Country', 'artifact_type' => 'entity', 'data_type' => 'sb_country'),
        'business' => array('name' => 'Business', 'description' => 'Business', 'artifact_type' => 'entity', 'data_type' => 'sb_business'),
        'partycategory' => array('name' => 'PartyCategory', 'description' => 'Party Category', 'artifact_type' => 'entity', 'data_type' => 'sb_partycat'),
        'partytype' => array('name' => 'PartyType', 'description' => 'Party Type', 'artifact_type' => 'entity', 'data_type' => 'sb_partytype'),
        'roletype' => array('name' => 'RoleType', 'description' => 'Role Type', 'artifact_type' => 'entity', 'data_type' => 'sb_roletype'),
        'party' => array('name' => 'Party', 'description' => 'Party', 'artifact_type' => 'entity', 'data_type' => 'sb_party'),
        'partyrole' => array('name' => 'PartyRole', 'description' => 'Party Role', 'artifact_type' => 'entity', 'data_type' => 'sb_partyrole'),
        'partygroup' => array('name' => 'PartyGroup', 'description' => 'Party Group', 'artifact_type' => 'entity', 'data_type' => 'sb_partygroup'),
        'person' => array('name' => 'Person', 'description' => 'Person', 'artifact_type' => 'entity', 'data_type' => 'sb_person'),
        'partyprofile' => array('name' => 'PartyProfile', 'description' => 'Party Profile', 'artifact_type' => 'entity', 'data_type' => 'sb_partyprofile'),
        'billingaccount' => array('name' => 'BillingAccount', 'description' => 'Billing Account', 'artifact_type' => 'entity', 'data_type' => 'sb_billaccount'),
        'accounttransactiontype' => array('name' => 'AccountTransactionType', 'description' => 'Account Transaction Type', 'artifact_type' => 'entity', 'data_type' => 'sb_accttxntype'),
        'accounttransactionstatus' => array('name' => 'AccountTransactionStatus', 'description' => 'Account Transaction Status', 'artifact_type' => 'entity', 'data_type' => 'sb_accttxnstatus'),
        'accounttransaction' => array('name' => 'AccountTransaction', 'description' => 'Account Transaction', 'artifact_type' => 'entity', 'data_type' => 'sb_accttransaction'),
        'partyimage' => array('name' => 'PartyImage', 'description' => 'Party Image', 'artifact_type' => 'entity', 'data_type' => 'sb_partyimage'),
        'partyfile' => array('name' => 'PartyFile', 'description' => 'Party File', 'artifact_type' => 'entity', 'data_type' => 'sb_partyfile'),
        'socialmediaaccounttype' => array('name' => 'SocialMediaAccountType', 'description' => 'Social Media Account Type', 'artifact_type' => 'entity', 'data_type' => 'sb_socmediaccttype'),
        'socialmediaaccount' => array('name' => 'SocialMediaAccount', 'description' => 'Social Media Account', 'artifact_type' => 'entity', 'data_type' => 'sb_socmediaacct'),
        'contactrequest' => array('name' => 'ContactRequest', 'description' => 'Contact Request', 'artifact_type' => 'entity', 'data_type' => 'sb_contactreq'),
        'qualificationtype' => array('name' => 'QualificationType', 'description' => 'Qualification Type', 'artifact_type' => 'entity', 'data_type' => 'sb_qualtype'),
        'partyqualification' => array('name' => 'PartyQualification', 'description' => 'Party Qualification', 'artifact_type' => 'entity', 'data_type' => 'sb_partyqual'),
        'academiclevel' => array('name' => 'AcademicLevel', 'description' => 'Academic Level', 'artifact_type' => 'entity', 'data_type' => 'sb_academiclevel'),
        'documenttype' => array('name' => 'DocumentType', 'description' => 'Document Type', 'artifact_type' => 'entity', 'data_type' => 'sb_documenttype'),
        'noofpages' => array('name' => 'NoOfPages', 'description' => 'No Of Pages', 'artifact_type' => 'entity', 'data_type' => 'sb_noofpages'),
        'urgency' => array('name' => 'Urgency', 'description' => 'Urgency', 'artifact_type' => 'entity', 'data_type' => 'sb_urgency'),
        'subjectarea' => array('name' => 'SubjectArea', 'description' => 'Subject Area', 'artifact_type' => 'entity', 'data_type' => 'sb_subjectarea'),
        'partysubjectarea' => array('name' => 'PartySubjectArea', 'description' => 'Party Subject Area', 'artifact_type' => 'entity', 'data_type' => 'sb_partysubarea'),
        'writingstyle' => array('name' => 'WritingStyle', 'description' => 'Writing Style', 'artifact_type' => 'entity', 'data_type' => 'sb_writingstyle'),
        'partyreview' => array('name' => 'PartyReview', 'description' => 'Party Review', 'artifact_type' => 'entity', 'data_type' => 'sb_partyreview'),
        'contentcategory' => array('name' => 'ContentCategory', 'description' => 'Content Category', 'artifact_type' => 'entity', 'data_type' => 'sb_contentcat'),
        'contenttype' => array('name' => 'ContentType', 'description' => 'Content Type', 'artifact_type' => 'entity', 'data_type' => 'sb_contenttype'),
        'content' => array('name' => 'Content', 'description' => 'Content', 'artifact_type' => 'entity', 'data_type' => 'sb_content'),
        'contentfile' => array('name' => 'ContentFile', 'description' => 'Content File', 'artifact_type' => 'entity', 'data_type' => 'sb_contentfile'),
        'contentordertype' => array('name' => 'ContentOrderType', 'description' => 'Content Order Type', 'artifact_type' => 'entity', 'data_type' => 'sb_cordertype'),
        'contentorderstatus' => array('name' => 'ContentOrderStatus', 'description' => 'Content Order Status', 'artifact_type' => 'entity', 'data_type' => 'sb_corderstatus'),
        'paymentstatus' => array('name' => 'PaymentStatus', 'description' => 'Payment Status', 'artifact_type' => 'entity', 'data_type' => 'sb_paymentstatus'),
        'contentorder' => array('name' => 'ContentOrder', 'description' => 'Content Order', 'artifact_type' => 'entity', 'data_type' => 'sb_contentorder'),
        'contentorderfile' => array('name' => 'ContentOrderFile', 'description' => 'Content Order File', 'artifact_type' => 'entity', 'data_type' => 'sb_corderfile'),
        'disputetype' => array('name' => 'DisputeType', 'description' => 'Dispute Type', 'artifact_type' => 'entity', 'data_type' => 'sb_disputtype'),
        'disputestatus' => array('name' => 'DisputeStatus', 'description' => 'Dispute Status', 'artifact_type' => 'entity', 'data_type' => 'sb_disputestatus'),
        'dispute' => array('name' => 'Dispute', 'description' => 'Dispute', 'artifact_type' => 'entity', 'data_type' => 'sb_dispute'),
    );
    
}

?>