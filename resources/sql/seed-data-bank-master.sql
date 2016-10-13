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
INSERT INTO business (id, currency, entity_code, name, user_name, pin, tel_no, account_notify_email, orders_notify_email, description) VALUES (1, 1, 'AFAD', 'Diamond Trust Bank', 'admin@dtbafricaonline.com', '0000000', '254 0710 660 524', 'accounts@dtbafricaonline.com', 'info@dtbafricaonline.com', 'Diamond Trust Bank');

/* Insert statement for Business Unit */
INSERT INTO businessunit (id, business, currency, entity_code, name, address_1, address_2, description) VALUES (1, 1, 1, 'DEFAULT', 'Head Office', '', '', 'Head Office');

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
INSERT INTO party (id, party_type, entity_code, name, user_name, description, business_unit) VALUES (1, 2, 'ADMINISTRATOR', 'Administrator', 'admin@dtbafricaonline.com', 'Organizational party', 1);

/* Insert statement for Party Role */
INSERT INTO partyrole (party, role, parent_unit, entity_code, name, description, business_unit) VALUES (1, 1, 1, 'ADMINISTRATOR', 'Administrator', 'Administrator', 1);
INSERT INTO partyrole (party, role, parent_unit, entity_code, name, description, business_unit) VALUES (1, 5, 1, 'ADMIN_EMPLOYEE', 'Administrator Employee', 'Administrator Employee', 1);

/* Insert statement for Party Profile */
INSERT INTO partyprofile (party, default_unit, entity_code, name, display_name, date_created, description, business_unit) VALUES (1, 1, 'ADMINISTRATOR', 'Administrator', 'Administrator', '2000-01-01', 'Organizational party', 1);

/* Insert statement for Port Type */
INSERT INTO country (entity_code, name, description) VALUES ('BRAZIL', 'Brazil', 'Brazil');
INSERT INTO country (entity_code, name, description) VALUES ('FRANCE', 'France', 'France');
INSERT INTO country (entity_code, name, description) VALUES ('GERMANY', 'Germany', 'Germany');
INSERT INTO country (entity_code, name, description) VALUES ('ITALY', 'Italy', 'Italy');
INSERT INTO country (entity_code, name, description) VALUES ('KENYA', 'Kenya', 'Kenya');
INSERT INTO country (entity_code, name, description) VALUES ('JAPAN', 'Japan', 'Japan');
INSERT INTO country (entity_code, name, description) VALUES ('NIGERIA', 'Nigeria', 'Nigeria');
INSERT INTO country (entity_code, name, description) VALUES ('SOUTH_KOREA', 'South Korea', 'South Korea');
INSERT INTO country (entity_code, name, description) VALUES ('SOUTH_AFRICA', 'South Africa', 'South Africa');
INSERT INTO country (entity_code, name, description) VALUES ('RUSSIA', 'Russia', 'Russia');
INSERT INTO country (entity_code, name, description) VALUES ('USA', 'USA', 'USA');
INSERT INTO country (entity_code, name, description) VALUES ('UK', 'United Kingdom', 'United Kingdom');

/* Insert statement for Product Category */
INSERT INTO productcategory (id, entity_code, name, description) VALUES (1, 'LOAN', 'Loan', 'Loan');
INSERT INTO productcategory (id, entity_code, name, description) VALUES (2, 'DEPOSIT', 'Deposit', 'Deposit');

/* Insert statement for Product Type */
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (1, 1, 'SBA_LOAN', 'SBA Loan', 'SBA Loan');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (2, 1, 'WORKING_CAPITAL_LOAN', 'Working-Capital Loan', 'Working-Capital Loan');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (3, 1, 'EQUIPMENT_FINANCE', 'Equipment Financing', 'Equipment Financing');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (4, 1, 'MERCHANT_CASH_ADVANCE', 'Merchant Cash Advance', 'Merchant Cash Advance');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (5, 1, 'LINE_OF_CREDIT', 'Line Of Credit', 'Line Of Credit');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (6, 1, 'STARTUP_LOAN', 'Franchise Startup Loan', 'Franchise Startup Loan');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (7, 1, 'INVENTORY_LOAN', 'Inventory Loan', 'Inventory Loan');
INSERT INTO producttype (id, product_category, entity_code, name, description) VALUES (8, 2, 'OFFSHORE_DEPOSIT_ACCOUNT', 'Offshore Deposit Account', 'Offshore Deposit Account');

/* Insert statement for Account Type */
INSERT INTO accountcategory (id, entity_code, name, description) VALUES (1, 'LOAN_ACCOUNT', 'Loan Account', 'Loan Account');
INSERT INTO accountcategory (id, entity_code, name, description) VALUES (2, 'DEPOSIT_ACCOUNT', 'Deposit Account', 'Deposit Account');


INSERT INTO accounttype (id, account_category, entity_code, name, description) VALUES (1, 1, 'LOAN_ACCOUNT', 'Loan Account', 'Loan Account');
INSERT INTO accounttype (id, account_category, entity_code, name, description) VALUES (2, 2, 'OFFSHORE_DEPOSIT_ACCOUNT', 'Offshore Deposit Account', 'Offshore Deposit Account');

/* Insert statement for Account Status */
INSERT INTO accountstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO accountstatus (id, entity_code, name, description) VALUES (2, 'ACTIVE', 'Active', 'Active');

/* Insert statement for Account Transaction Type */
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (1, 'CREDIT', 'Credit', 'Credit');
INSERT INTO accounttransactiontype (id, entity_code, name, description) VALUES (2, 'DEBIT', 'Debit', 'Debit');

/* Insert statement for Business Structure */
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (1, 'SOLE_P', 'Sole Proprietorship', 'Sole Proprietorship');
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (2, 'GENERAL_P', 'General Partnership', 'General Partnership');
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (3, 'LLC', 'LLC - Limited Liability Company', 'LLC - Limited Liability Company');
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (4, 'SINGLE_LLC', 'Single Member LLC', 'Single Member LLC');
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (5, 'CORP', 'Corporation', 'Corporation');
INSERT INTO businessstructure (id, entity_code, name, description) VALUES (6, 'PRO_CORP', 'Professional Corporation', 'Professional Corporation');


/* Insert statement for Credit Application Status */
INSERT INTO creditapplicationstatus (id, entity_code, name, description) VALUES (1, 'PENDING', 'Pending', 'Pending');
INSERT INTO creditapplicationstatus (id, entity_code, name, description) VALUES (2, 'APPROVED', 'Approved', 'Approved');


INSERT INTO industrytype (id, entity_code, name, description) VALUES (1, 'ACCT', 'Accounting, Bookkeeping, Tax Preparation', 'Accounting, Bookkeeping, Tax Preparation');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (2, 'ADVERT', 'Advertising Agencies', 'Advertising Agencies');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (3, 'AMUSE', 'Amusement &amp; Recreation Services', 'Amusement &amp; Recreation Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (4, 'AUTO', 'Auto Repair', 'Auto Repair');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (5, 'BEAUTY', 'Beauty Salons / Barbers / Tanning Salons / Spas', 'Beauty Salons / Barbers / Tanning Salons / Spas');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (6, 'BUSINESS', 'Business Services', 'Business Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (7, 'CATERING', 'Catering', 'Catering');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (8, 'CHILD', 'Child Care', 'Child Care');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (9, 'COMP', 'Computer Services', 'Computer Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (10, 'CONSTRUCT', 'Construction', 'Construction');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (11, 'DENTIST', 'Dentists / Orthodontists / Dental Labs', 'Dentists / Orthodontists / Dental Labs');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (12, 'DRY', 'Dry Cleaning / Laundry Services', 'Dry Cleaning / Laundry Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (13, 'EQUIP', 'Equipment Sales / Rental', 'Equipment Sales / Rental');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (14, 'GROCERY', 'Grocery &amp; Convenience Stores', 'Grocery &amp; Convenience Stores');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (15, 'HEALTH', 'Health &amp; Fitness Facilities', 'Health &amp; Fitness Facilities');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (16, 'HOTELS', 'Hotels / Motels', 'Hotels / Motels');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (17, 'INSURE', 'Insurance Agent, Broker, Solicitor', 'Insurance Agent, Broker, Solicitor');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (18, 'ICT', 'IT and Software Services', 'IT and Software Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (19, 'JANITOR', 'Janitorial / Housekeeping Services', 'Janitorial / Housekeeping Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (20, 'LANSCAPE', 'Landscape / Lawn Maintenance / Gardeners', 'Landscape / Lawn Maintenance / Gardeners');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (21, 'OPT', 'Optometrists / Eye Glasses', 'Optometrists / Eye Glasses');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (22, 'PAINT', 'Painting / Handyman Services / Home Repair', 'Painting / Handyman Services / Home Repair');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (23, 'PHYSICIAN', 'Physicians', 'Physicians');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (24, 'RESTAURANT', 'Restaurants / Bars', 'Restaurants / Bars');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (25, 'RETAILER', 'Retailer-Offline (Consumer Goods)', 'Retailer-Offline (Consumer Goods)');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (26, 'RETAILER_OFFLINE', 'Retailer-Online (Consumer Goods)', 'Retailer-Online (Consumer Goods)');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (27, 'TAXI', 'Taxis / Delivery Services / Limousine Services', 'Taxis / Delivery Services / Limousine Services');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (28, 'TRUCK', 'Trucking / Transportation', 'Trucking / Transportation');
INSERT INTO industrytype (id, entity_code, name, description) VALUES (30, 'OTHER', 'Other', 'Other');




