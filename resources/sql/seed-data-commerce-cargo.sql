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
INSERT INTO business (id, currency, entity_code, name, user_name, pin, tel_no, account_notify_email, orders_notify_email, description) VALUES (1, 1, 'AFAD', 'African Fabric & Designs', 'admin@southernstar.com', '0000000', '254 0710 660 524', 'accounts@southernstar.com', 'info@southernstar.com', 'African Fabric & Designs');

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
INSERT INTO party (id, party_type, entity_code, name, user_name, description, business_unit) VALUES (1, 2, 'ADMINISTRATOR', 'Administrator', 'admin@southernstar.com', 'Organizational party', 1);

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

/* Insert statement for Port Type */
INSERT INTO facilitytype (entity_code, name, description) VALUES ('AIRPORT', 'Airport', 'Airport');
INSERT INTO facilitytype (entity_code, name, description) VALUES ('SEAPORT', 'Seaport', 'Seaport');

/* Insert statement for Package Category */
INSERT INTO packagecategory (entity_code, name, description) VALUES ('LIQUID', 'Liquid', 'Liquid');
INSERT INTO packagecategory (entity_code, name, description) VALUES ('BULK_GOODS ', 'Bulk Goods', 'Bulk Goods');
INSERT INTO packagecategory (entity_code, name, description) VALUES ('PALLETIZED: ', 'Palletized', 'Palletized');

/* Insert statement for Package Type */
INSERT INTO packagetype (package_category, entity_code, name, description) VALUES (2, 'BULK_LARGE', 'Bulk, solid, large particles', 'Bulk, solid, large particles');
INSERT INTO packagetype (package_category, entity_code, name, description) VALUES (2, 'BULK_GRAINS ', 'Bulk, solid, granular particles (grains)', ' 	Bulk, solid, granular particles (grains)');

/* Insert statement for Shipment Type */
INSERT INTO shipmenttype (entity_code, name, description) VALUES ('AIR', 'Air', 'Air');
INSERT INTO shipmenttype (entity_code, name, description) VALUES ('SEA', 'Sea', 'Sea');
INSERT INTO shipmenttype (entity_code, name, description) VALUES ('LAND', 'Land', 'Land');

/* Insert statement for Shipment Status */
INSERT INTO shipmentstatus (entity_code, name, description) VALUES ('SCHEDULED', 'Scheduled', 'Scheduled');
INSERT INTO shipmentstatus (entity_code, name, description) VALUES ('SHIPPED', 'Shipped', 'Shipped');
INSERT INTO shipmentstatus (entity_code, name, description) VALUES ('IN_TRANSIT', 'In transit', 'In transit');
INSERT INTO shipmentstatus (entity_code, name, description) VALUES ('RECEIVED', 'Received', 'Received');

/* Insert statement for Deposit Category */
INSERT INTO depositcategory (id, entity_code, name, description) VALUES (1, 'DEFAULT', 'Default', 'Default');

/* Insert statement for Deposit Type */
INSERT INTO deposittype (deposit_category, entity_code, name, description) VALUES (1, 'ON_DEPOSIT', 'On Deposit', 'On Deposit');
INSERT INTO deposittype (deposit_category, entity_code, name, description) VALUES (1, 'CUSTODY', 'Custody', 'Custody');

/* Insert statement for Deposit Status */
INSERT INTO depositstatus (entity_code, name, description) VALUES ('RECEIVED', 'Received', 'Received');