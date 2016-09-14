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

/* Insert statement for Business */
INSERT INTO business (id, currency, entity_code, name, user_name, pin, description) VALUES (1, 1, 'AFAD', 'African Fabric & Designs', 'admin@africanfabricanddesigns.com', '0000000', 'African Fabric & Designs');

/* Insert statement for Business Unit */
INSERT INTO businessunit (id, business, currency, entity_code, name, address_1, address_2, description) VALUES (1, 1, 1, 'DEFAULT', 'Head Office', 'Shop No. 26 Adams arcade mini mall', 'Opposite Shell Petrol station along Suna road, (Right after Iran Medical Clinic)', 'Head Office');

/* Insert statement for Party Category */
INSERT INTO partycategory (id, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partycategory (id, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Party Type */
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Role Type */
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_USER', 'Business User', 'Business User');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_OWNER', 'Business Owner', 'Business Owner');
INSERT INTO roletype (entity_code, name, description) VALUES ('CUSTOMER', 'Customer', 'Customer');
INSERT INTO roletype (entity_code, name, description) VALUES ('SUPPLIER', 'Supplier', 'Supplier');
INSERT INTO roletype (entity_code, name, description) VALUES ('EMPLOYEE', 'Employee', 'Employee');

/* Insert statement for Party */
INSERT INTO party (id, party_type, entity_code, name, user_name, description, business_unit) VALUES (1, 2, 'ADMINISTRATOR', 'Administrator', 'admin@africanfabricanddesigns.com', 'Organizational party', 1);

/* Insert statement for Party Role */
INSERT INTO partyrole (party, role, parent_unit, entity_code, name, description, business_unit) VALUES (1, 1, 1, 'ADMINISTRATOR', 'Administrator', 'Administrator', 1);
INSERT INTO partyrole (party, role, parent_unit, entity_code, name, description, business_unit) VALUES (1, 5, 1, 'ADMIN_EMPLOYEE', 'Administrator Employee', 'Administrator Employee', 1);

/* Insert statement for Party Profile */
INSERT INTO partyprofile (party, default_unit, entity_code, name, display_name, date_created, description, business_unit) VALUES (1, 1, 'ADMINISTRATOR', 'Administrator', 'Administrator', '2000-01-01', 'Organizational party', 1);

/* Insert statement for Product Category */
INSERT INTO productcategory (id, entity_code, name, description) VALUES (1, 'FABRICS', 'Fabrics', 'Fabrics');
INSERT INTO productcategory (id, entity_code, name, description) VALUES (2, 'WOMEN', 'Women', 'Women');
INSERT INTO productcategory (id, entity_code, name, description) VALUES (3, 'MEN', 'Men', 'Men');

/* Insert statement for Product Type */
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (1, 1, 'KITENGE_ANKARA', 'Kitenge/Ankara', 'Kitenge/Ankara');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (2, 1, 'LACE', 'Lace', 'Lace');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (3, 2, 'DRESS', 'Dress', 'Dress');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (4, 2, 'TOPS', 'Tops', 'Tops');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (5, 2, 'SKIRT_TOP', 'Skirt & Top', 'Skirt & Top');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (6, 2, 'PANTS', 'Pants', 'Pants');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (7, 3, 'SHIRTS', 'Shirts', 'Shirts');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (8, 3, 'SENATOR', 'Senator Designs', 'Senator Designs');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (9, 3, 'ANKARA_BLAZER', 'Ankara Blazer', 'Ankara Blazer');

/* Insert statement for Price Component type */
INSERT INTO pricecomponenttype (id, entity_code, name, description) VALUES (1, 'BASE_PRICE', 'Price Component', 'Price Component');

/* Insert statement for Social Media Account Type */
INSERT INTO socialmediaaccounttype (id, entity_code, name, description) VALUES (1, 'FACEBOOK', 'Facebook', 'Facebook');
INSERT INTO socialmediaaccounttype (id, entity_code, name, description) VALUES (2, 'GOOGLEPLUS', 'Google +', 'Google +');
INSERT INTO socialmediaaccounttype (id, entity_code, name, description) VALUES (3, 'INSTAGRAM', 'Instagram', 'Instagram');
INSERT INTO socialmediaaccounttype (id, entity_code, name, description) VALUES (4, 'TWITTER', 'Twitter', 'Twitter');

/* Insert statement for Uom */
INSERT INTO uom (id, entity_code, name, uom_abbr, description) VALUES (1, 'EACH', 'Each', '', 'Each');

/* Insert statement for Product Feature Category */
INSERT INTO productfeaturecategory (id, entity_code, name, description) VALUES (1, 'DIMENESION', 'Dimensions', 'Dimensions');

/* Insert statement for Product Feature Type */
INSERT INTO productfeaturetype(id, feature_category, entity_code, name, description) VALUES (1, 1, 'SIZE', 'Size', 'Size');
INSERT INTO productfeaturetype(id, feature_category, entity_code, name, description) VALUES (2, 1, 'DIMENESION', 'Dimension', 'Dimension');

/* Insert statement for Product Feature */
INSERT INTO productfeature(id, feature_type, entity_code, name, description) VALUES (1, 1, 'SIX_YARDS', '6-Yards', '6-Yards');

/* Insert statement for Facility Type */
INSERT INTO facilitytype (id, entity_code, name, description) VALUES (1, 'WAREHOUSE', 'Warehouse', 'Warehouse');
INSERT INTO facilitytype (id, entity_code, name, description) VALUES (2, 'STORE', 'Store', 'Store');

/* Insert statement for Facility */
INSERT INTO facility (id, facility_type, entity_code, name, description) VALUES (1, 2, 'MAIN_STORE', 'Main Store', 'Main Store');

/* Insert statement for Container Type */
INSERT INTO containertype (id, entity_code, name, description) VALUES (1, 'SHELF', 'Shelf', 'Shelf');

/* Insert statement for Container  */
INSERT INTO container (id, container_type, container_facility, entity_code, name, description) VALUES (1, 1, 1, 'DEFAULT', 'Shelf', 'Shelf');

/* Insert statement for Lot */
INSERT INTO lot (id, entity_code, name, description) VALUES (1, 'DEFAULT_LOT', 'Default Lot', 'Default Lot');

/* Insert statement for Inventory Item Type */
INSERT INTO inventoryitemtype (id, entity_code, name, description) VALUES (1, 'SERIALIZED_INVENTORY_ITEM', 'Serialized', 'Serialized');
INSERT INTO inventoryitemtype (id, entity_code, name, description) VALUES (2, 'NON_SERIALIZED_INVENTORY_ITEM', 'Non Serialized', 'Non Serialized');

/* Insert statement for Inventory Item Type */
INSERT INTO inventoryitemstatus (id, entity_code, name, description) VALUES (1, 'GOOD', 'Good', 'Good');
INSERT INTO inventoryitemstatus (id, entity_code, name, description) VALUES (2, 'DEFECTIVE', 'Defective', 'Defective');

/* Insert statement for Product Order Type */
INSERT INTO productordertype (id, entity_code, name, description) VALUES (1, 'SALES_ORDER', 'Sales Order', 'Sales Order');
INSERT INTO productordertype (id, entity_code, name, description) VALUES (2, 'PURCHASE_ORDER', 'Purchase Order', 'Purchase Order');

/* Insert statement for Product Order Status */
INSERT INTO productorderstatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO productorderstatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');

/* Insert statement for Product Order Item Type */
INSERT INTO productorderitemtype (id, entity_code, name, description) VALUES (1, 'SALES_ORDER_ITEM', 'Sales Order Item', 'Sales Order Item');
INSERT INTO productorderitemtype (id, entity_code, name, description) VALUES (2, 'PURCHASE_ORDER_ITEM', 'Purchase Order Item', 'Purchase Order Item');

/* Insert statement for Product Order Item Status */
INSERT INTO productorderitemstatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO productorderitemstatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');

/* Insert statement for Invoice Type */
INSERT INTO invoicetype (id, entity_code, name, description) VALUES (1, 'SALES_INVOICE', 'Sales Invoice', 'Sales Invoice');
INSERT INTO invoicetype (id, entity_code, name, description) VALUES (2, 'PURCHASE_INVOICE', 'Purchase Invoice', 'Purchase Invoice');

/* Insert statement for Invoice Status */
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');

/* Insert statement for Invoice Item Type */
INSERT INTO invoiceitemtype (id, entity_code, name, description) VALUES (1, 'SALES_INVOICE_ITEM', 'Sales Invoice Item', 'Sales Invoice Item');
INSERT INTO invoiceitemtype (id, entity_code, name, description) VALUES (2, 'PURCHASE_INVOICE_ITEM', 'Purchase Invoice Item', 'Purchase Invoice Item');

/* Insert statement for Product Order Item Status */
INSERT INTO invoiceitemstatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO invoiceitemstatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');

/* Insert statement for Payment Type */
INSERT INTO paymenttype (id, entity_code, name, description) VALUES (1, 'DISBURSEMENT', 'Disbursement', 'Disbursement');
INSERT INTO paymenttype (id, entity_code, name, description) VALUES (2, 'RECEIPT', 'Receipt', 'Receipt');

/* Insert statement for Payment Method */
INSERT INTO paymentmethod (id, entity_code, name, description) VALUES (1, 'CASH', 'Cash', 'Cash');

/* Insert statement for Account Transaction Type */
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (1, 'SALE', 'Sale', 'Sale');
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (2, 'PURCHASE', 'Purchase', 'Purchase');

/* Insert statement for Account Transaction Status */
INSERT INTO accounttransactionstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO accounttransactionstatus (id, entity_code, name, description) VALUES (2, 'COMPLETED', 'Completed', 'Completed');