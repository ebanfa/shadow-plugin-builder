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

