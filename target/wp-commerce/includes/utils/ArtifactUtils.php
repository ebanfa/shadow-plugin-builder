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
        'dashboard' => array('name' => 'Dashboard', 'description' => 'Dashboard', 'artifact_type' => 'page'),
        'accountstatement' => array('name' => 'AccountStatement', 'description' => 'Account Statement', 'artifact_type' => 'page'),
        'notificationitems' => array('name' => 'NotificationItems', 'description' => 'Notification Items', 'artifact_type' => 'page'),
        'currency' => array('name' => 'Currency', 'description' => 'Currency', 'artifact_type' => 'entity', 'data_type' => 'sb_currency'),
        'locationtype' => array('name' => 'LocationType', 'description' => 'Location Type', 'artifact_type' => 'entity', 'data_type' => 'sb_loctype'),
        'location' => array('name' => 'Location', 'description' => 'Location', 'artifact_type' => 'entity', 'data_type' => 'sb_location'),
        'business' => array('name' => 'Business', 'description' => 'Business', 'artifact_type' => 'entity', 'data_type' => 'sb_business'),
        'businessunit' => array('name' => 'BusinessUnit', 'description' => 'Business Unit', 'artifact_type' => 'entity', 'data_type' => 'sb_businessunit'),
        'partycategory' => array('name' => 'PartyCategory', 'description' => 'Party Category', 'artifact_type' => 'entity', 'data_type' => 'sb_partycat'),
        'partytype' => array('name' => 'PartyType', 'description' => 'Party Type', 'artifact_type' => 'entity', 'data_type' => 'sb_partytype'),
        'roletype' => array('name' => 'RoleType', 'description' => 'Role Type', 'artifact_type' => 'entity', 'data_type' => 'sb_roletype'),
        'party' => array('name' => 'Party', 'description' => 'Party', 'artifact_type' => 'entity', 'data_type' => 'sb_party'),
        'partyrole' => array('name' => 'PartyRole', 'description' => 'Party Role', 'artifact_type' => 'entity', 'data_type' => 'sb_partyrole'),
        'relationshiptype' => array('name' => 'RelationshipType', 'description' => 'Relationship Type', 'artifact_type' => 'entity', 'data_type' => 'sb_reltype'),
        'relationshipstatus' => array('name' => 'RelationshipStatus', 'description' => 'Relationship Status', 'artifact_type' => 'entity', 'data_type' => 'sb_relstatus'),
        'partyrelationship' => array('name' => 'PartyRelationship', 'description' => 'Party Relationship', 'artifact_type' => 'entity', 'data_type' => 'sb_partyrel'),
        'partygroup' => array('name' => 'PartyGroup', 'description' => 'Party Group', 'artifact_type' => 'entity', 'data_type' => 'sb_partygroup'),
        'person' => array('name' => 'Person', 'description' => 'Person', 'artifact_type' => 'entity', 'data_type' => 'sb_person'),
        'partyprofile' => array('name' => 'PartyProfile', 'description' => 'Party Profile', 'artifact_type' => 'entity', 'data_type' => 'sb_partyprofile'),
        'contactmechanismtype' => array('name' => 'ContactMechanismType', 'description' => 'Contact Mechanism Type', 'artifact_type' => 'entity', 'data_type' => 'sb_cmechtype'),
        'contactmechanism' => array('name' => 'ContactMechanism', 'description' => 'Contact Mechanism', 'artifact_type' => 'entity', 'data_type' => 'sb_contactmech'),
        'partycontactmechanismpurposetype' => array('name' => 'PartyContactMechanismPurposeType', 'description' => 'Party Contact Mechanism Purpose Type', 'artifact_type' => 'entity', 'data_type' => 'sb_pcmpurposetype'),
        'partycontactmechanism' => array('name' => 'PartyContactMechanism', 'description' => 'Party Contact Mechanism', 'artifact_type' => 'entity', 'data_type' => 'sb_partycmech'),
        'partycontactmechanismpurpose' => array('name' => 'PartyContactMechanismPurpose', 'description' => 'Party Contact Mechanism Purpose', 'artifact_type' => 'entity', 'data_type' => 'sb_pcmpurpose'),
        'billingaccount' => array('name' => 'BillingAccount', 'description' => 'Billing Account', 'artifact_type' => 'entity', 'data_type' => 'sb_billaccount'),
        'conversation' => array('name' => 'Conversation', 'description' => 'Conversation', 'artifact_type' => 'entity', 'data_type' => 'sb_conversation'),
        'conversationuser' => array('name' => 'ConversationUser', 'description' => 'Conversation User', 'artifact_type' => 'entity', 'data_type' => 'sb_conuser'),
        'message' => array('name' => 'Message', 'description' => 'Message', 'artifact_type' => 'entity', 'data_type' => 'sb_message'),
        'messagefiles' => array('name' => 'MessageFiles', 'description' => 'Message Files', 'artifact_type' => 'entity', 'data_type' => 'sb_messagesfiles'),
        'notificationtype' => array('name' => 'NotificationType', 'description' => 'Notification Type', 'artifact_type' => 'entity', 'data_type' => 'sb_notifytype'),
        'notificationstatus' => array('name' => 'NotificationStatus', 'description' => 'Notification Status', 'artifact_type' => 'entity', 'data_type' => 'sb_notifystatus'),
        'notificationlevel' => array('name' => 'NotificationLevel', 'description' => 'Notification Level', 'artifact_type' => 'entity', 'data_type' => 'sb_notifylevel'),
        'notification' => array('name' => 'Notification', 'description' => 'Notification', 'artifact_type' => 'entity', 'data_type' => 'sb_notification'),
        'contactus' => array('name' => 'ContactUs', 'description' => 'Contact Us', 'artifact_type' => 'entity', 'data_type' => 'sb_contactus'),
        'uom' => array('name' => 'Uom', 'description' => 'Unit Of Measure', 'artifact_type' => 'entity', 'data_type' => 'sb_uom'),
        'uomconversion' => array('name' => 'UomConversion', 'description' => 'Uom Conversion', 'artifact_type' => 'entity', 'data_type' => 'sb_uomconversion'),
        'productcategory' => array('name' => 'ProductCategory', 'description' => 'Product Category', 'artifact_type' => 'entity', 'data_type' => 'sb_prodcat'),
        'productclassification' => array('name' => 'ProductClassification', 'description' => 'Product Classification', 'artifact_type' => 'entity', 'data_type' => 'sb_prodclass'),
        'producttype' => array('name' => 'ProductType', 'description' => 'Product Type', 'artifact_type' => 'entity', 'data_type' => 'sb_prodtype'),
        'product' => array('name' => 'Product', 'description' => 'Product', 'artifact_type' => 'entity', 'data_type' => 'sb_product'),
        'productclassificationlink' => array('name' => 'ProductClassificationLink', 'description' => 'Product Classification Link', 'artifact_type' => 'entity', 'data_type' => 'sb_prodclasslink'),
        'productcategoryimage' => array('name' => 'ProductCategoryImage', 'description' => 'Product Category Image', 'artifact_type' => 'entity', 'data_type' => 'sb_prodcatimage'),
        'producttypeimage' => array('name' => 'ProductTypeImage', 'description' => 'Product Type Image', 'artifact_type' => 'entity', 'data_type' => 'sb_prodtyimage'),
        'productimage' => array('name' => 'ProductImage', 'description' => 'Product Image', 'artifact_type' => 'entity', 'data_type' => 'sb_prodimage'),
        'productfeaturecategory' => array('name' => 'ProductFeatureCategory', 'description' => 'Product Feature Category', 'artifact_type' => 'entity', 'data_type' => 'sb_prodfeatcat'),
        'productfeaturetype' => array('name' => 'ProductFeatureType', 'description' => 'Product Feature Type', 'artifact_type' => 'entity', 'data_type' => 'sb_prodfeattype'),
        'productfeature' => array('name' => 'ProductFeature', 'description' => 'Product Feature', 'artifact_type' => 'entity', 'data_type' => 'sb_prodfeature'),
        'featureapplicabilitytype' => array('name' => 'FeatureApplicabilityType', 'description' => 'Feature Applicability Type', 'artifact_type' => 'entity', 'data_type' => 'sb_featappltype'),
        'productfeatureapplicability' => array('name' => 'ProductFeatureApplicability', 'description' => 'Product Feature Applicability', 'artifact_type' => 'entity', 'data_type' => 'sb_featappl'),
        'featureinteractiontype' => array('name' => 'FeatureInteractionType', 'description' => 'Feature Interaction Type', 'artifact_type' => 'entity', 'data_type' => 'sb_featinttype'),
        'productfeatureinteraction' => array('name' => 'ProductFeatureInteraction', 'description' => 'Product Feature Interaction', 'artifact_type' => 'entity', 'data_type' => 'sb_featinteraction'),
        'pricecomponenttype' => array('name' => 'PriceComponentType', 'description' => 'Price Component Type', 'artifact_type' => 'entity', 'data_type' => 'sb_pricecomptype'),
        'pricecomponent' => array('name' => 'PriceComponent', 'description' => 'Price Component', 'artifact_type' => 'entity', 'data_type' => 'sb_pricecomp'),
        'costcomponenttype' => array('name' => 'CostComponentType', 'description' => 'Cost Component Type', 'artifact_type' => 'entity', 'data_type' => 'sb_costcomptype'),
        'costcomponent' => array('name' => 'CostComponent', 'description' => 'Cost Component', 'artifact_type' => 'entity', 'data_type' => 'sb_costcomp'),
        'supplierrating' => array('name' => 'SupplierRating', 'description' => 'Supplier Rating', 'artifact_type' => 'entity', 'data_type' => 'sb_supprating'),
        'supplierpreference' => array('name' => 'SupplierPreference', 'description' => 'Supplier Preference', 'artifact_type' => 'entity', 'data_type' => 'sb_supppref'),
        'productsupplier' => array('name' => 'ProductSupplier', 'description' => 'Product Supplier', 'artifact_type' => 'entity', 'data_type' => 'sb_prodsupplier'),
        'facilitytype' => array('name' => 'FacilityType', 'description' => 'Facility Type', 'artifact_type' => 'entity', 'data_type' => 'sb_facilitytype'),
        'facility' => array('name' => 'Facility', 'description' => 'Facility', 'artifact_type' => 'entity', 'data_type' => 'sb_facility'),
        'containertype' => array('name' => 'ContainerType', 'description' => 'Container Type', 'artifact_type' => 'entity', 'data_type' => 'sb_containertype'),
        'container' => array('name' => 'Container', 'description' => 'Container', 'artifact_type' => 'entity', 'data_type' => 'sb_container'),
        'lot' => array('name' => 'Lot', 'description' => 'Lot', 'artifact_type' => 'entity', 'data_type' => 'sb_lot'),
        'inventoryitemtype' => array('name' => 'InventoryItemType', 'description' => 'Inventory Item Type', 'artifact_type' => 'entity', 'data_type' => 'sb_invitemtype'),
        'inventoryitemstatus' => array('name' => 'InventoryItemStatus', 'description' => 'Inventory Item Status', 'artifact_type' => 'entity', 'data_type' => 'sb_invitemstat'),
        'inventoryitem' => array('name' => 'InventoryItem', 'description' => 'Inventory Item', 'artifact_type' => 'entity', 'data_type' => 'sb_inventoryitem'),
        'productordertype' => array('name' => 'ProductOrderType', 'description' => 'Product Order Type', 'artifact_type' => 'entity', 'data_type' => 'sb_prodordertype'),
        'productorderstatus' => array('name' => 'ProductOrderStatus', 'description' => 'Product Order Status', 'artifact_type' => 'entity', 'data_type' => 'sb_prodorderstatus'),
        'productorder' => array('name' => 'ProductOrder', 'description' => 'Product Order', 'artifact_type' => 'entity', 'data_type' => 'sb_prodorder'),
        'productorderitemtype' => array('name' => 'ProductOrderItemType', 'description' => 'Product Order Item Type', 'artifact_type' => 'entity', 'data_type' => 'sb_prodorderitype'),
        'productorderitemstatus' => array('name' => 'ProductOrderItemStatus', 'description' => 'Product Order Item Status', 'artifact_type' => 'entity', 'data_type' => 'sb_prodorderistatus'),
        'productorderitem' => array('name' => 'ProductOrderItem', 'description' => 'Product Order Item', 'artifact_type' => 'entity', 'data_type' => 'sb_prodorderitem'),
        'invoicetype' => array('name' => 'InvoiceType', 'description' => 'Invoice Type', 'artifact_type' => 'entity', 'data_type' => 'sb_invoicetype'),
        'invoicestatus' => array('name' => 'InvoiceStatus', 'description' => 'Invoice Status', 'artifact_type' => 'entity', 'data_type' => 'sb_invoicestatus'),
        'invoice' => array('name' => 'Invoice', 'description' => 'Invoice', 'artifact_type' => 'entity', 'data_type' => 'sb_invoice'),
        'invoicerole' => array('name' => 'InvoiceRole', 'description' => 'Invoice Role', 'artifact_type' => 'entity', 'data_type' => 'sb_invoicerole'),
        'invoiceitemtype' => array('name' => 'InvoiceItemType', 'description' => 'Invoice Item Type', 'artifact_type' => 'entity', 'data_type' => 'sb_invoiceitemtype'),
        'invoiceitem' => array('name' => 'InvoiceItem', 'description' => 'Invoice Item', 'artifact_type' => 'entity', 'data_type' => 'sb_invoiceitem'),
        'invoiceterm' => array('name' => 'InvoiceTerm', 'description' => 'Invoice Term', 'artifact_type' => 'entity', 'data_type' => 'sb_invoiceterm'),
    );
    
}

?>