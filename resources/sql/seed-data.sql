/* Insert statement for Currency */
INSERT INTO currency (id, entity_code, symbol, name, description) VALUES (1, 'USD', '$', 'US Dollar', 'US Dollar');

/* Insert statement for Location Type */
INSERT INTO locationtype (id, entity_code, name, description) VALUES (1, 'COUNTRY', 'Country', 'Country');
INSERT INTO locationtype (id, entity_code, name, description) VALUES (2, 'STATE', 'State', 'State');
INSERT INTO locationtype (id, entity_code, name, description) VALUES (3, 'CITY', 'City', 'City');

/* Insert statement for Location */
INSERT INTO location (location_type, entity_code, name, description) VALUES (1, 'KENYA', 'Kenya', 'Kenya');
INSERT INTO location (location_type, location, entity_code, name, description) VALUES (2, 1, 'NAIROBI', 'Nairobi', 'Nairobi');
INSERT INTO location (location_type, location, entity_code, name, description) VALUES (3, 2, 'NBO', 'Nairobi', 'Nairobi');

/* Insert statement for Party Category */
INSERT INTO partycategory (id, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partycategory (id, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Party Type */
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Role Type */
INSERT INTO roletype (entity_code, name, description) VALUES ('TENANT', 'Tenant', 'Tenant');
INSERT INTO roletype (entity_code, name, description) VALUES ('LANDLORD', 'Landlord', 'Landlord');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS', 'Business', 'Business');
INSERT INTO roletype (entity_code, name, description) VALUES ('PROPERTY', 'Property', 'Property');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_USER', 'Business User', 'Business User');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_OWNER', 'Business Owner', 'Business Owner');
INSERT INTO roletype (entity_code, name, description) VALUES ('UTILITY_COMPANY', 'Utility Company', 'Utility Company');
INSERT INTO roletype (entity_code, name, description) VALUES ('SERVICE_PROVIDER', 'Service Provider', 'Service Provider');
INSERT INTO roletype (entity_code, name, description) VALUES ('PROSPECTIVE_TENANT', 'Prospective Tenant', 'Prospective Tenant');
INSERT INTO roletype (entity_code, name, description) VALUES ('PROPERTY_PERSONNEL', 'Property Personnel', 'Property Personnel');

/* Insert statement for User Invite Status */
INSERT INTO userinvitestatus (entity_code, name, description) VALUES ('PENDING', 'Pending', 'Pending');
INSERT INTO userinvitestatus (entity_code, name, description) VALUES ('SENT', 'Sent', 'Sent');
INSERT INTO userinvitestatus (entity_code, name, description) VALUES ('ACCEPTED', 'Accepted', 'Accepted');
INSERT INTO userinvitestatus (entity_code, name, description) VALUES ('REJECTED', 'Rejected', 'Rejected');

/* Insert statement for Business Category */
INSERT INTO businesscategory (id, entity_code, name, description) VALUES (1, 'BUSINESS', 'Business', 'Business');
INSERT INTO businesscategory (id, entity_code, name, description) VALUES (2, 'PROPERTY', 'Property', 'Property');

/* Insert statement for Facility Category */
INSERT INTO facilitycategory (id, entity_code, name, description) VALUES (1, 'PROPERTY', 'Property', 'Property');

/* Insert statement for Facility Type */
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'PROPERTY', 'Property', 'Property');
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'BUILDING', 'Building', 'Building');
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'ROOM', 'Room', 'Room');
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'FLOOR', 'Floor', 'Floor');
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'OFFICE', 'Office', 'Office');
INSERT INTO facilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'WAREHOUSE', 'Warehouse', 'Warehouse');

/* Insert statement for Property Type */
INSERT INTO propertytype (entity_code, name, description) VALUES ('COMMERCIAL', 'Commercial Property', 'Commercial Property');
INSERT INTO propertytype (entity_code, name, description) VALUES ('INDUSTRIAL', 'Industrial Property', 'Industrial Property');
INSERT INTO propertytype (entity_code, name, description) VALUES ('RESIDENTIAL', 'Residential Property', 'Residential Property');

/* Insert statement for Property Status */
INSERT INTO propertystatus (entity_code, name, description) VALUES ('PENDING', 'Pending', 'Pending');

/* Insert statement for Building Type */
INSERT INTO buildingtype (entity_code, name, description) VALUES ('CONDO', 'Condominium', 'Condominium');

/* Insert statement for Allocation Unit */
INSERT INTO allocationunit (entity_code, name, description) VALUES ('APARTMENT_UNITS', 'Apartment Units', 'Apartment Units');

/* Insert statement for Template Type */
INSERT INTO templatetype (id, entity_code, name, description) VALUES (1, 'INVOICE_TEMPLATE', 'Invoice Template', 'Invoice Template');

/* Insert statement for Invoice Type */
INSERT INTO invoicetype (business_category, entity_code, name, description) VALUES (2, 'RENT', 'Rent Invoice', 'Rent Invoice');
INSERT INTO invoicetype (business_category, entity_code, name, description) VALUES (1, 'UTILITY', 'Utility Invoice', 'Utility Invoice');

/* Insert statement for Invoice Status */
INSERT INTO invoicestatus (entity_code, name, description) VALUES ('PENDING', 'Pending', 'Pending');

/* Insert statement for Invoice Item Type */
INSERT INTO invoiceitemtype (entity_code, name, description) VALUES ('SERVICE', 'Service', 'Service');

/* Insert statement for purchase Order Type */
INSERT INTO purchaseordertype (business_category, entity_code, name, description) VALUES (1, 'INVENTORY', 'Inventory Purchase Order', 'Inventory Purchase Order');
INSERT INTO purchaseordertype (business_category, entity_code, name, description) VALUES (2, 'INVENTORY', 'Inventory Purchase Order', 'Inventory Purchase Order');

/* Insert statement for Purchase order Status */
INSERT INTO purchaseorderstatus (entity_code, name, description) VALUES ('PENDING', 'Pending', 'Pending');

/* Insert statement for Purchase order Item Type */
INSERT INTO purchaseorderitemtype (entity_code, name, description) VALUES ('SERVICE', 'Service', 'Service');

/* Insert statement for Work Effort Category */
INSERT INTO workeffortcategory (id, entity_code, name, description) VALUES (1, 'INSPECTION', 'Inspection', 'Inspection');
INSERT INTO workeffortcategory (id, entity_code, name, description) VALUES (2, 'MAINTENANCE', 'Maintenance & Repairs', 'Maintenance & Repairs');
INSERT INTO workeffortcategory (id, entity_code, name, description) VALUES (3, 'IMPROVEMENT', 'Improvement', 'Improvement');

/* Insert statement for Work Effort Type */
INSERT INTO workefforttype (category, business_category, entity_code, name, description) VALUES (1, 2, 'EXTERNAL', 'External Inspection', 'External Inspection');
INSERT INTO workefforttype (category, business_category, entity_code, name, description) VALUES (1, 2, 'INTERNAL', 'Internal Inspection', 'Internal Inspection');
INSERT INTO workefforttype (category, business_category, entity_code, name, description) VALUES (2, 2, 'PREVENTATIVE', 'Preventative', 'Preventative');
INSERT INTO workefforttype (category, business_category, entity_code, name, description) VALUES (3, 2, 'PAINTING', 'Painting', 'Painting');

/* Insert statement for Work Effort Status */
INSERT INTO workeffortstatus (entity_code, name, description) VALUES ('PENDING', 'Pending', 'Pending');

/* Insert statement for Work Effort Purchase Type */
INSERT INTO workeffortpurposetype (category, entity_code, name, description) VALUES (1, 'INSPECTION', 'Inspection', 'Inspection');
INSERT INTO workeffortpurposetype (category, entity_code, name, description) VALUES (2, 'MAINTENANCE', 'Maintenance & Repairs', 'Maintenance & Repairs');
INSERT INTO workeffortpurposetype (category, entity_code, name, description) VALUES (3, 'IMPROVEMENT', 'Improvement', 'Improvement');

/* Insert statement for Work Effort Category */
INSERT INTO agreementcategory (id, entity_code, name, description) VALUES (1, 'RENT', 'Rent Agreement', 'Rent Agreement');
INSERT INTO agreementcategory (id, entity_code, name, description) VALUES (2, 'SERVICE', 'Service Agreement', 'Service Agreement');
INSERT INTO agreementcategory (id, entity_code, name, description) VALUES (3, 'SUPPLIER', 'Supplier Agreement', 'Supplier Agreement');
INSERT INTO agreementcategory (id, entity_code, name, description) VALUES (4, 'MANAGEMENT', 'Management Agreement', 'Management Agreement');

/* Insert statement for Work Effort Type */

INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (1, 2, 'MONTH', 'Month-to-month', 'Month-to-month');
INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (1, 2, 'ONEWAY', 'One-way lease', 'One-way lease');
INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (1, 2, 'FIXED', 'Fixed-term lease', 'Fixed-term lease');

INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (2, 2, 'PROPERTY_SERVICE', 'Property Service Agreement', 'Property Service Agreement');
INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (3, 2, 'PROPERTY_SUPPLIER', 'Property Supplier Agreement', 'Property Supplier Agreement');

INSERT INTO agreementtype (category, business_category, entity_code, name, description) VALUES (4, 2, 'CLIENT', 'Client Agreement', 'Client Agreement');

/* Insert statement for Receipt Type */
INSERT INTO receipttype (business_category, entity_code, name, description) VALUES (1, 'RENT', 'Rent Payment', 'Rent Payment');
INSERT INTO receipttype (business_category, entity_code, name, description) VALUES (2, 'RENT', 'Rent Payment', 'Rent Payment');

/* Insert statement for Disbursement Type */
INSERT INTO disbursementtype (business_category, entity_code, name, description) VALUES (1, 'RENT', 'Rent Expense', 'Rent Expense');
INSERT INTO disbursementtype (business_category, entity_code, name, description) VALUES (2, 'RENT', 'Rent Expense', 'Rent Expense');

/* Insert statement for Payment Method Type */
INSERT INTO paymentmethodtype (entity_code, name, description) VALUES ('CASH', 'Cash Payment', 'Cash Payment');
INSERT INTO paymentmethodtype (entity_code, name, description) VALUES ('CHEQUE', 'Cheque', 'Cheque');
INSERT INTO paymentmethodtype (entity_code, name, description) VALUES ('CARD', 'Card Payment', 'Card Payment');
INSERT INTO paymentmethodtype (entity_code, name, description) VALUES ('TRANSFER', 'Bank Transfer', 'Bank Transfer');

/* Insert statement for Payment Type */
INSERT INTO paymenttype (entity_code, name, description) VALUES ('RECEIPT', 'Receipt', 'Receipt');
INSERT INTO paymenttype (entity_code, name, description) VALUES ('DISBURSEMENT', 'Disbursement', 'Disbursement');

/* Insert statement for Inventory Type */
INSERT INTO inventorytype (business_category, entity_code, name, description) VALUES (1, 'ASSET', 'Asset Inventory', 'Asset Inventory');
INSERT INTO inventorytype (business_category, entity_code, name, description) VALUES (1, 'STOCK', 'Stock Inventory', 'Stock Inventory');
INSERT INTO inventorytype (business_category, entity_code, name, description) VALUES (2, 'ASSET', 'Asset Inventory', 'Asset Inventory');
INSERT INTO inventorytype (business_category, entity_code, name, description) VALUES (2, 'STOCK', 'Stock Inventory', 'Stock Inventory');

/* Insert statement for Deprecation Method */
INSERT INTO deprecationmethod (entity_code, name, description) VALUES ('STRAIGHT_LINE', 'Straight Line Depreciation', 'Straight Line Depreciation');

/* Insert statement for Unit Of Measure */
INSERT INTO unitofmeasure (entity_code, name, description) VALUES ('KILOGRAMS', 'Kg', 'Kilograms');

/* Insert statement for Asset Category */
INSERT INTO assetcategory (id, entity_code, name, description) VALUES (1, 'NON_CURRENT', 'Current Assets', 'Current Assets');
INSERT INTO assetcategory (id, entity_code, name, description) VALUES (2, 'CURRENT', 'Non Current Assets', 'Non Current Assets');

/* Insert statement for Asset Type */
INSERT INTO assettype (category, business_category, entity_code, name, description) VALUES (1, 1, 'CASH', 'Cash and cash equivalent', 'Cash and cash equivalent');
INSERT INTO assettype (category, business_category, entity_code, name, description) VALUES (1, 1, 'PREPAID_EXPENSE', 'Prepaid expense', 'Prepaid expense');
INSERT INTO assettype (category, business_category, entity_code, name, description) VALUES (1, 2, 'CASH', 'Cash and cash equivalent', 'Cash and cash equivalent');
INSERT INTO assettype (category, business_category, entity_code, name, description) VALUES (1, 2, 'PREPAID_EXPENSE', 'Prepaid expense', 'Prepaid expense');

/* Insert statement for Liability Category */
INSERT INTO liabilitycategory (id, entity_code, name, description) VALUES (1, 'CURRENT', 'Current Liabilities', 'Current Liabilities');
INSERT INTO liabilitycategory (id, entity_code, name, description) VALUES (2, 'NON_CURRENT', 'Non Current Liabilities', 'Non Current Liabilities');

/* Insert statement for Liability Type */
INSERT INTO liabilitytype (category, business_category, entity_code, name, description) VALUES (1, 1, 'AP', 'Accounts Payable', 'Accounts Payable');
INSERT INTO liabilitytype (category, business_category, entity_code, name, description) VALUES (2, 1, 'MORTGAGE', 'Mortgage', 'Mortgage');
INSERT INTO liabilitytype (category, business_category, entity_code, name, description) VALUES (1, 2, 'AP', 'Accounts Payable', 'Accounts Payable');
INSERT INTO liabilitytype (category, business_category, entity_code, name, description) VALUES (2, 2, 'MORTGAGE', 'Mortgage', 'Mortgage');


INSERT INTO unittype (entity_code, name, description) VALUES ('APARTMENT', 'Apartment', 'Apartment');