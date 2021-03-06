/* Insert statement for Currency */
INSERT INTO currency (id, entity_code, symbol, name, description) VALUES (1, 'KSH', 'Ksh', 'Kenyan Shillings', 'Kenyan Shillings');
INSERT INTO currency (id, entity_code, symbol, name, description) VALUES (2, 'USD', '$', 'US Dollar', 'US Dollar');

/* Insert statement for Location Type */
INSERT INTO locationtype (id, entity_code, name, description) VALUES (1, 'COUNTRY', 'Country', 'Country');
INSERT INTO locationtype (id, entity_code, name, description) VALUES (2, 'STATE', 'State', 'State');
INSERT INTO locationtype (id, entity_code, name, description) VALUES (3, 'CITY', 'City', 'City');

/* Insert statement for Location */
INSERT INTO location (location_type, entity_code, name, description) VALUES (1, 'KENYA', 'Kenya', 'Kenya');
INSERT INTO location (location_type, location, entity_code, name, description) VALUES (2, 1, 'NAIROBI', 'Nairobi', 'Nairobi');
INSERT INTO location (location_type, location, entity_code, name, description) VALUES (3, 2, 'NBO', 'Nairobi', 'Nairobi');

/* Insert statement for Business */
INSERT INTO business (id, currency, entity_code, name, user_name, pin, tel_no, account_notify_email, orders_notify_email, description) VALUES (1, 1, 'AFAD', 'African Fabric & Designs', 'admin@africanfabricanddesigns.com', '0000000', '254 0710 660 524', 'accounts@africanfabricanddesigns.com', 'info@africanfabricanddesigns.com', 'African Fabric & Designs');

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
INSERT INTO productcategory (id, entity_code, name, description) VALUES (4, 'ACCESSORIES', 'Accessories', 'Accessories');

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
INSERT INTO productfeaturecategory (id, entity_code, name, description) VALUES (2, 'APPEARANCE', 'Appearance', 'Appearance');

/* Insert statement for Product Feature Display Type */
INSERT INTO displaytype(id, entity_code, name, description) VALUES (1, 'SELECT', 'Select', 'Select');

/* Insert statement for Product Feature Type */
INSERT INTO productfeaturetype(id, feature_category, display_type, entity_code, name, description) VALUES (1, 1, 1, 'SIZE', 'Size', 'Size');
INSERT INTO productfeaturetype(id, feature_category, display_type, entity_code, name, description) VALUES (2, 1, 1, 'DIMENESION', 'Dimension', 'Dimension');
INSERT INTO productfeaturetype(id, feature_category, display_type, entity_code, name, description) VALUES (3, 2, 1, 'COLOR', 'Color', 'Color');

/* Insert statement for Feature Applicability Type */
INSERT INTO featureapplicabilitytype(id, entity_code, name, description) VALUES (1, 'STANDARD', 'Standard', 'Standard');
INSERT INTO featureapplicabilitytype(id, entity_code, name, description) VALUES (2, 'REQUIRED', 'Required', 'Required');
INSERT INTO featureapplicabilitytype(id, entity_code, name, description) VALUES (3, 'OPTIONAL', 'Optional', 'Optional');

/* Insert statement for Product Feature */
INSERT INTO productfeature(id, feature_type, entity_code, name, description) VALUES (1, 1, 'SIX_YARDS', '6-Yards', '6-Yards');

/* Insert statement for Product Order Type */
INSERT INTO productordertype (id, entity_code, name, description) VALUES (1, 'SALES_ORDER', 'Sales Order', 'Sales Order');
INSERT INTO productordertype (id, entity_code, name, description) VALUES (2, 'PURCHASE_ORDER', 'Purchase Order', 'Purchase Order');

/* Insert statement for Product Order Status */
INSERT INTO productorderstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO productorderstatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');
INSERT INTO productorderstatus (id, entity_code, name, description) VALUES (3, 'COMPLETED', 'Completed', 'Completed');

/* Insert statement for Product Order Item Type */
INSERT INTO productorderitemtype (id, entity_code, name, description) VALUES (1, 'SALES_ORDER_ITEM', 'Sales Order Item', 'Sales Order Item');
INSERT INTO productorderitemtype (id, entity_code, name, description) VALUES (2, 'PURCHASE_ORDER_ITEM', 'Purchase Order Item', 'Purchase Order Item');

/* Insert statement for Product Order Item Status */
INSERT INTO productorderitemstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO productorderitemstatus (id, entity_code, name, description) VALUES (2, 'CONFIRMED', 'Confirmed', 'Confirmed');

/* Insert statement for Invoice Type */
INSERT INTO invoicetype (id, entity_code, name, description) VALUES (1, 'SALES_INVOICE', 'Sales Invoice', 'Sales Invoice');
INSERT INTO invoicetype (id, entity_code, name, description) VALUES (2, 'PURCHASE_INVOICE', 'Purchase Invoice', 'Purchase Invoice');

/* Insert statement for Invoice Status */
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (2, 'OUTSTANDING', 'Outstanding', 'Outstanding');
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (3, 'PARTIAL_PAYMENT', 'Partial Payment', 'Partial Payment');
INSERT INTO invoicestatus (id, entity_code, name, description) VALUES (4, 'PAID', 'Paid', 'Paid');

/* Insert statement for Invoice Item Type */
INSERT INTO invoiceitemtype (id, entity_code, name, description) VALUES (1, 'SALES_INVOICE_ITEM', 'Sales Invoice Item', 'Sales Invoice Item');
INSERT INTO invoiceitemtype (id, entity_code, name, description) VALUES (2, 'PURCHASE_INVOICE_ITEM', 'Purchase Invoice Item', 'Purchase Invoice Item');

/* Insert statement for Product Order Item Status */
INSERT INTO invoiceitemstatus (id, entity_code, name, description) VALUES (1, 'ACTIVE', 'Active', 'Active');
INSERT INTO invoiceitemstatus (id, entity_code, name, description) VALUES (2, 'OUTSTANDING', 'Outstanding', 'Outstanding');
INSERT INTO invoiceitemstatus (id, entity_code, name, description) VALUES (3, 'PAID', 'Paid', 'Paid');

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

/* Insert statement for Shipment Category Type */
INSERT INTO shipmentcategory (id, entity_code, name, description) VALUES (1, 'OUTGOING', 'Outgoing Shipment', 'Outgoing Shipment');
INSERT INTO shipmentcategory (id, entity_code, name, description) VALUES (2, 'INCOMING', 'Incoming Shipment', 'Incoming Shipment');

/* Insert statement for Shipment Category Type */
INSERT INTO shipmenttype (id, shipment_category, entity_code, name, description) VALUES (1, 1, 'CUSTOMER_SHIPMENT', 'Customer Shipment', 'Customer Shipment');
INSERT INTO shipmenttype (id, shipment_category, entity_code, name, description) VALUES (2, 2, 'PURCHASE_SHIPMENT', 'Purchase Shipment', 'Purchase Shipment');

/* Insert statement for Shipment Status */
INSERT INTO shipmentstatus (id, entity_code, name, description) VALUES (1, 'SHIPPED', 'Shipped', 'Shipped');
INSERT INTO shipmentstatus (id, entity_code, name, description) VALUES (2, 'IN_TRANSIT', 'In Transit', 'In Transit');
INSERT INTO shipmentstatus (id, entity_code, name, description) VALUES (3, 'DELIVERED', 'Delivered', 'Delivered');

/* Insert statement for Payment Type */
INSERT INTO paymenttype (id, entity_code, name, description) VALUES (1, 'DISBURSEMENT', 'Disbursement', 'Disbursement');
INSERT INTO paymenttype (id, entity_code, name, description) VALUES (2, 'RECEIPT', 'Receipt', 'Receipt');

/* Insert statement for Payment Method */
INSERT INTO paymentmethod (id, entity_code, name, description) VALUES (1, 'CASH', 'Cash', 'Cash');

/* Insert statement for Account Transaction Type */
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (1, 'CASH_SALE', 'Cash Sale', 'Cash Sale');
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (2, 'SALE_ON_INVOICE', 'Sale on Invoice', 'Sale on Invoice');
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (3, 'PURCHASE', 'Purchase', 'Purchase');

/* Insert statement for Account Transaction Status */
INSERT INTO accounttransactionstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO accounttransactionstatus (id, entity_code, name, description) VALUES (2, 'COMPLETED', 'Completed', 'Completed');


/* Insert statement for Account Category */
INSERT INTO glaccountcategory (id, entity_code, name, description) VALUES (1, 'ASSETS', 'Assets', 'Assets');
INSERT INTO glaccountcategory (id, entity_code, name, description) VALUES (2, 'LIABILITIES', 'Liabilities', 'Liabilities');
INSERT INTO glaccountcategory (id, entity_code, name, description) VALUES (3, 'EXPENSES', 'Expenses', 'Expenses');
INSERT INTO glaccountcategory (id, entity_code, name, description) VALUES (4, 'INCOME', 'Income', 'Income');
INSERT INTO glaccountcategory (id, entity_code, name, description) VALUES (5, 'EQUITY', 'Equity', 'Equity');

/* Insert statement for Account Type (assets) */
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (1, 1, 'CURRENT_ASSET', 'Current Asset', 'Current Asset');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (2, 1, 'INVENTORY', 'Inventory', 'Inventory');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (3, 1, 'FIXED_ASSET', 'Fixed Asset', 'Fixed Asset');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (4, 1, 'BANK_CASH', 'Bank & Cash', 'Bank & Cash');
/* Insert statement for Account Type (liabilities) */
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (5, 2, 'CURRENT_LIABILITY', 'Current Liability', 'Current Liability');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (6, 2, 'NON_CURRENT_LIABILITY', 'Non-current Liability', 'Non-current Liability');
/* Insert statement for Account Type (expenses) */
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (7, 3, 'DIRECT_COSTS', 'Direct Costs', 'Direct Costs');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (8, 3, 'EXPENSE', 'Expense', 'Expense');
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (9, 3, 'DEPRECIATION', 'Depreciation', 'Depreciation');
/* Insert statement for Account Type (revenue) */
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (10, 4, 'REVENUE', 'Revenue', 'Revenue');
/* Insert statement for Account Type (equity) */
INSERT INTO glaccounttype (id, gl_account_cat, entity_code, name, description) VALUES (11, 5, 'EQUITY', 'Equity', 'Equity');

/* Insert statement for Account(equity) */
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (1, 1, 'ACCT_RECEIVABLE', 'Accounts Receivable', 0.00, '2016-01-01', 'Accounts Receivable');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (2, 2, 'INVENTORY', 'Inventory', 0.00, '2016-01-01', 'Inventory');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (3, 3, 'OFFICE_EQUIPMENT', 'Office Equipment', 0.00, '2016-01-01', 'Office Equipment');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (4, 4, 'PETTY_CASH', 'Petty Cash', 0.00, '2016-01-01', 'Petty Cash');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (5, 4, 'SAVINGS', 'Savings Account', 0.00, '2016-01-01', 'Savings Account');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (6, 5, 'ACCT_PAYABLE', 'Accounts Payable', 0.00, '2016-01-01', 'Accounts Payable');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (7, 6, 'LOAN', 'Loan', 0.00, '2016-01-01', 'Loan');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (8, 7, 'COGS', 'Costs of Goods Sold', 0.00, '2016-01-01', 'Costs of Goods Sold');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (9, 8, 'ADVERTISING', 'Advertising', 0.00, '2016-01-01', 'Advertising');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (10, 8, 'UTILITIES', 'Utilities', 0.00, '2016-01-01', 'Utilities');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (11, 8, 'RENT', 'Rent', 0.00, '2016-01-01', 'Rent');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (12, 8, 'WAGES', 'Wages & Salaries', 0.00, '2016-01-01', 'Wages & Salaries');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (13, 10, 'SALES', 'Sales', 0.00, '2016-01-01', 'Sales');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (14, 10, 'SALES', 'Other Revenue', 0.00, '2016-01-01', 'Other Revenue');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (15, 10, 'INTEREST_INCOME', 'Interest Income', 0.00, '2016-01-01', 'Interest Income');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (16, 11, 'OWNERS_CONTRIB', 'Owners Contribution', 0.00, '2016-01-01', 'Owners Contribution');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (17, 11, 'OWNERS_DRAW', 'Owners Draw', 0.00, '2016-01-01', 'Owners Draw');
INSERT INTO glaccount (id, gl_account_type, entity_code, name, balance, last_updated_date, description) VALUES (18, 11, 'RETAINED_EARNINGS', 'Retained Earnings', 0.00, '2016-01-01', 'Retained Earnings');


INSERT INTO product (id, prod_type, entity_code, name, description) VALUES (1, 1, 'DEMO', 'Demo Product', 'Demo Product');

INSERT INTO inventoryitem (id, item_type, item_product, item_status, item_facility, item_container, item_lot, entity_code, name, quantity, description) VALUES (1, 1, 1, 1, 1, 1, 1, 'DEMO_ITEM', 'Demo Item', 5, 'Demo Item');

INSERT INTO pricecomponent (id, component_type, component_prod, entity_code, name, component_price, description) VALUES (1, 1, 1, 'BASE_PRICE', 'Demo Price Component', 100, 'Demo Price Component');