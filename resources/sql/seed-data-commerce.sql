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
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_USER', 'Business User', 'Business User');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_OWNER', 'Business Owner', 'Business Owner');
INSERT INTO roletype (entity_code, name, description) VALUES ('CUSTOMER', 'Customer', 'Customer');
INSERT INTO roletype (entity_code, name, description) VALUES ('SUPPLIER', 'Supplier', 'Supplier');
INSERT INTO roletype (entity_code, name, description) VALUES ('EMPLOYEE', 'Employee', 'Employee');


/* Insert statement for Product Category */
INSERT INTO productcategory (id, entity_code, name, description) VALUES (1, 'FABRICS', 'Fabrics', 'Fabrics');
INSERT INTO productcategory (id, entity_code, name, description) VALUES (2, 'WOMEN', 'Women', 'Women');
INSERT INTO productcategory (id, entity_code, name, description) VALUES (3, 'MEN', 'Men', 'Men');

/* Insert statement for Product Type */
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (1, 1, 'ANKARA', 'Ankara', 'Ankara');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (2, 1, 'BALI_PRINTS', 'Bali Prints', 'Bali Prints');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (3, 1, 'GHANIAN_KENTE', 'Ghanian Kente', 'Ghanian Kente');
INSERT INTO producttype (id, prod_cat, entity_code, name, description) VALUES (4, 1, 'LACE', 'Lace', 'Lace');





