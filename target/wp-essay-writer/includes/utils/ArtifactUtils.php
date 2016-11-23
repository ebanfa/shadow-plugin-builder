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
        'signin' => array('name' => 'Signin', 'description' => 'Signin', 'artifact_type' => 'page'),
        'signup' => array('name' => 'Signup', 'description' => 'Signup', 'artifact_type' => 'page'),
        'password' => array('name' => 'Password', 'description' => 'Signin', 'artifact_type' => 'page'),
        'dashboard' => array('name' => 'Dashboard', 'description' => 'Dashboard', 'artifact_type' => 'page'),
        'homework' => array('name' => 'Homework', 'description' => 'Order', 'artifact_type' => 'page'),
        'studentlist' => array('name' => 'StudentList', 'description' => 'Student List', 'artifact_type' => 'page'),
        'studentdisplay' => array('name' => 'StudentDisplay', 'description' => 'Student Display', 'artifact_type' => 'page'),
        'studenteditor' => array('name' => 'StudentEditor', 'description' => 'Student Editor', 'artifact_type' => 'page'),
        'tutorlist' => array('name' => 'TutorList', 'description' => 'Tutor List', 'artifact_type' => 'page'),
        'tutordisplay' => array('name' => 'TutorDisplay', 'description' => 'Tutor', 'artifact_type' => 'page'),
        'tutoreditor' => array('name' => 'TutorEditor', 'description' => 'Tutor', 'artifact_type' => 'page'),
        'profiledisplay' => array('name' => 'ProfileDisplay', 'description' => 'Profile', 'artifact_type' => 'page'),
        'profileeditor' => array('name' => 'ProfileEditor', 'description' => 'Profile Editor', 'artifact_type' => 'page'),
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
        'partyimage' => array('name' => 'PartyImage', 'description' => 'Party Image', 'artifact_type' => 'entity', 'data_type' => 'sb_partyimage'),
        'partyfile' => array('name' => 'PartyFile', 'description' => 'Party File', 'artifact_type' => 'entity', 'data_type' => 'sb_partyfile'),
        'socialmediaaccounttype' => array('name' => 'SocialMediaAccountType', 'description' => 'Social Media Account Type', 'artifact_type' => 'entity', 'data_type' => 'sb_socmediaccttype'),
        'socialmediaaccount' => array('name' => 'SocialMediaAccount', 'description' => 'Social Media Account', 'artifact_type' => 'entity', 'data_type' => 'sb_socmediaacct'),
        'contactrequest' => array('name' => 'ContactRequest', 'description' => 'Contact Request', 'artifact_type' => 'entity', 'data_type' => 'sb_contactreq'),
        'qualificationtype' => array('name' => 'QualificationType', 'description' => 'Qualification Type', 'artifact_type' => 'entity', 'data_type' => 'sb_qualtype'),
        'academiclevel' => array('name' => 'AcademicLevel', 'description' => 'Academic Level', 'artifact_type' => 'entity', 'data_type' => 'sb_academiclevel'),
        'documenttype' => array('name' => 'DocumentType', 'description' => 'Document Type', 'artifact_type' => 'entity', 'data_type' => 'sb_documenttype'),
        'noofpages' => array('name' => 'NoOfPages', 'description' => 'No Of Pages', 'artifact_type' => 'entity', 'data_type' => 'sb_noofpages'),
        'urgency' => array('name' => 'Urgency', 'description' => 'Urgency', 'artifact_type' => 'entity', 'data_type' => 'sb_urgency'),
        'subjectarea' => array('name' => 'SubjectArea', 'description' => 'Subject Area', 'artifact_type' => 'entity', 'data_type' => 'sb_subjectarea'),
        'subjectareaimage' => array('name' => 'SubjectAreaImage', 'description' => 'Subject Area Image', 'artifact_type' => 'entity', 'data_type' => 'sb_subareaimage'),
        'subject' => array('name' => 'Subject', 'description' => 'Subject', 'artifact_type' => 'entity', 'data_type' => 'sb_subject'),
        'writingstyle' => array('name' => 'WritingStyle', 'description' => 'Writing Style', 'artifact_type' => 'entity', 'data_type' => 'sb_writingstyle'),
        'partyeducation' => array('name' => 'PartyEducation', 'description' => 'Party Education', 'artifact_type' => 'entity', 'data_type' => 'sb_partyeducation'),
        'partysubject' => array('name' => 'PartySubject', 'description' => 'Party Subject', 'artifact_type' => 'entity', 'data_type' => 'sb_partysubject'),
        'partyreview' => array('name' => 'PartyReview', 'description' => 'Party Review', 'artifact_type' => 'entity', 'data_type' => 'sb_partyreview'),
        'classificationtype' => array('name' => 'ClassificationType', 'description' => 'Classification Type', 'artifact_type' => 'entity', 'data_type' => 'sb_classtype'),
        'classification' => array('name' => 'Classification', 'description' => 'Classification', 'artifact_type' => 'entity', 'data_type' => 'sb_classification'),
        'contentcategory' => array('name' => 'ContentCategory', 'description' => 'Content Category', 'artifact_type' => 'entity', 'data_type' => 'sb_contentcat'),
        'contenttype' => array('name' => 'ContentType', 'description' => 'Content Type', 'artifact_type' => 'entity', 'data_type' => 'sb_contenttype'),
        'content' => array('name' => 'Content', 'description' => 'Content', 'artifact_type' => 'entity', 'data_type' => 'sb_content'),
        'contentfile' => array('name' => 'ContentFile', 'description' => 'Content File', 'artifact_type' => 'entity', 'data_type' => 'sb_contentfile'),
        'contentclassification' => array('name' => 'ContentClassification', 'description' => 'Content Classification', 'artifact_type' => 'entity', 'data_type' => 'sb_contentclass'),
        'contentordertype' => array('name' => 'ContentOrderType', 'description' => 'Content Order Type', 'artifact_type' => 'entity', 'data_type' => 'sb_cordertype'),
        'contentorderstatus' => array('name' => 'ContentOrderStatus', 'description' => 'Content Order Status', 'artifact_type' => 'entity', 'data_type' => 'sb_corderstatus'),
        'paymentstatus' => array('name' => 'PaymentStatus', 'description' => 'Payment Status', 'artifact_type' => 'entity', 'data_type' => 'sb_paymentstatus'),
        'contentorder' => array('name' => 'ContentOrder', 'description' => 'Content Order', 'artifact_type' => 'entity', 'data_type' => 'sb_contentorder'),
        'contentorderfile' => array('name' => 'ContentOrderFile', 'description' => 'Content Order File', 'artifact_type' => 'entity', 'data_type' => 'sb_corderfile'),
        'accounttransactiontype' => array('name' => 'AccountTransactionType', 'description' => 'Account Transaction Type', 'artifact_type' => 'entity', 'data_type' => 'sb_accttxntype'),
        'accounttransactionstatus' => array('name' => 'AccountTransactionStatus', 'description' => 'Account Transaction Status', 'artifact_type' => 'entity', 'data_type' => 'sb_accttxnstatus'),
        'accounttransaction' => array('name' => 'AccountTransaction', 'description' => 'Account Transaction', 'artifact_type' => 'entity', 'data_type' => 'sb_accttransaction'),
        'disputetype' => array('name' => 'DisputeType', 'description' => 'Dispute Type', 'artifact_type' => 'entity', 'data_type' => 'sb_disputtype'),
        'disputestatus' => array('name' => 'DisputeStatus', 'description' => 'Dispute Status', 'artifact_type' => 'entity', 'data_type' => 'sb_disputestatus'),
        'dispute' => array('name' => 'Dispute', 'description' => 'Dispute', 'artifact_type' => 'entity', 'data_type' => 'sb_dispute'),
    );
    
}

?>