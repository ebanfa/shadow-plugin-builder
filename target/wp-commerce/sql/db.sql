DROP TABLE IF EXISTS invoiceterm;
DROP TABLE IF EXISTS invoiceitem;
DROP TABLE IF EXISTS invoiceitemtype;
DROP TABLE IF EXISTS invoicerole;
DROP TABLE IF EXISTS invoice;
DROP TABLE IF EXISTS invoicestatus;
DROP TABLE IF EXISTS invoicetype;
DROP TABLE IF EXISTS productorderitem;
DROP TABLE IF EXISTS productorderitemstatus;
DROP TABLE IF EXISTS productorderitemtype;
DROP TABLE IF EXISTS productorder;
DROP TABLE IF EXISTS productorderstatus;
DROP TABLE IF EXISTS productordertype;
DROP TABLE IF EXISTS inventoryitem;
DROP TABLE IF EXISTS inventoryitemstatus;
DROP TABLE IF EXISTS inventoryitemtype;
DROP TABLE IF EXISTS lot;
DROP TABLE IF EXISTS container;
DROP TABLE IF EXISTS containertype;
DROP TABLE IF EXISTS facility;
DROP TABLE IF EXISTS facilitytype;
DROP TABLE IF EXISTS productsupplier;
DROP TABLE IF EXISTS supplierpreference;
DROP TABLE IF EXISTS supplierrating;
DROP TABLE IF EXISTS costcomponent;
DROP TABLE IF EXISTS costcomponenttype;
DROP TABLE IF EXISTS pricecomponent;
DROP TABLE IF EXISTS pricecomponenttype;
DROP TABLE IF EXISTS productfeatureinteraction;
DROP TABLE IF EXISTS featureinteractiontype;
DROP TABLE IF EXISTS productfeatureapplicability;
DROP TABLE IF EXISTS featureapplicabilitytype;
DROP TABLE IF EXISTS productfeature;
DROP TABLE IF EXISTS productfeaturetype;
DROP TABLE IF EXISTS productfeaturecategory;
DROP TABLE IF EXISTS productimage;
DROP TABLE IF EXISTS producttypeimage;
DROP TABLE IF EXISTS productcategoryimage;
DROP TABLE IF EXISTS productclassificationlink;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS producttype;
DROP TABLE IF EXISTS productclassification;
DROP TABLE IF EXISTS productcategory;
DROP TABLE IF EXISTS uomconversion;
DROP TABLE IF EXISTS uom;
DROP TABLE IF EXISTS contactus;
DROP TABLE IF EXISTS notification;
DROP TABLE IF EXISTS notificationlevel;
DROP TABLE IF EXISTS notificationstatus;
DROP TABLE IF EXISTS notificationtype;
DROP TABLE IF EXISTS messagefiles;
DROP TABLE IF EXISTS message;
DROP TABLE IF EXISTS conversationuser;
DROP TABLE IF EXISTS conversation;
DROP TABLE IF EXISTS billingaccount;
DROP TABLE IF EXISTS partycontactmechanismpurpose;
DROP TABLE IF EXISTS partycontactmechanism;
DROP TABLE IF EXISTS partycontactmechanismpurposetype;
DROP TABLE IF EXISTS contactmechanism;
DROP TABLE IF EXISTS contactmechanismtype;
DROP TABLE IF EXISTS partyprofile;
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS partygroup;
DROP TABLE IF EXISTS partyrelationship;
DROP TABLE IF EXISTS relationshipstatus;
DROP TABLE IF EXISTS relationshiptype;
DROP TABLE IF EXISTS partyrole;
DROP TABLE IF EXISTS party;
DROP TABLE IF EXISTS roletype;
DROP TABLE IF EXISTS partytype;
DROP TABLE IF EXISTS partycategory;
DROP TABLE IF EXISTS businessunit;
DROP TABLE IF EXISTS business;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS locationtype;
DROP TABLE IF EXISTS currency;


CREATE TABLE currency  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	symbol   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE locationtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE location  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	location_type   int(11) NOT NULL,
   	location   int(11) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (location_type) REFERENCES locationtype (id), 
 	FOREIGN KEY (location) REFERENCES location (id), 
	PRIMARY KEY( id )
);

CREATE TABLE business  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	currency   int(11) NOT NULL,
	user_name   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (currency) REFERENCES currency (id), 
	PRIMARY KEY( id )
);

CREATE TABLE businessunit  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	parent_unit   int(11) NULL,
   	currency   int(11) NULL,
	name   		varchar(35) NOT NULL,
	address_1   		varchar(35) NOT NULL,
	address_2   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business   int(11) NULL,
 	FOREIGN KEY (parent_unit) REFERENCES businessunit (id), 
 	FOREIGN KEY (currency) REFERENCES currency (id), 
 	FOREIGN KEY (business) REFERENCES business (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partycategory  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE partytype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	party_category   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (party_category) REFERENCES partycategory (id), 
	PRIMARY KEY( id )
);

CREATE TABLE roletype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE party  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	party_type   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	user_name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (party_type) REFERENCES partytype (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partyrole  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	party   int(11) NOT NULL,
   	parent_prole   int(11) NULL,
   	role   int(11) NOT NULL,
   	parent_unit   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (parent_prole) REFERENCES partyrole (id), 
 	FOREIGN KEY (role) REFERENCES roletype (id), 
 	FOREIGN KEY (parent_unit) REFERENCES businessunit (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE relationshiptype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE relationshipstatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE partyrelationship  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	rel_type   int(11) NOT NULL,
   	from_role   int(11) NOT NULL,
   	to_role   int(11) NOT NULL,
   	status   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	from_date   		date NOT NULL,
	to_date   		date NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (rel_type) REFERENCES relationshiptype (id), 
 	FOREIGN KEY (from_role) REFERENCES partyrole (id), 
 	FOREIGN KEY (to_role) REFERENCES partyrole (id), 
 	FOREIGN KEY (status) REFERENCES relationshipstatus (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partygroup  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	party   int(11) NOT NULL,
   	business_unit   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	pin   		INT(6) NOT NULL,
	description   		varchar(255) NOT NULL,
	date_created   		date NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE person  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	party   int(11) NOT NULL,
   	business_unit   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	first_name   		varchar(35) NOT NULL,
	last_name   		varchar(35) NOT NULL,
	gender   		varchar(35) NOT NULL,
	date_of_birth   		date NOT NULL,
	id_number   		varchar(35) NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partyprofile  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	party   int(11) NOT NULL,
   	default_unit   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	display_name   		varchar(35) NOT NULL,
	date_created   		date NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (default_unit) REFERENCES businessunit (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE contactmechanismtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE contactmechanism  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	cm_type   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	address_1   		varchar(35) NULL,
	address_2   		varchar(35) NULL,
	area_code   		INT(6) NULL,
	contact_number   		INT(6) NULL,
	country_code   		INT(6) NULL,
	address_string   		INT(6) NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (cm_type) REFERENCES contactmechanismtype (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partycontactmechanismpurposetype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE partycontactmechanism  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	party   int(11) NOT NULL,
   	contact_mech   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (contact_mech) REFERENCES contactmechanism (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE partycontactmechanismpurpose  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	type   int(11) NOT NULL,
   	pcontact_mech   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (type) REFERENCES partycontactmechanismpurposetype (id), 
 	FOREIGN KEY (pcontact_mech) REFERENCES partycontactmechanism (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE billingaccount  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	party   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	balance   		decimal(38,0) NULL,
	date_created   		date NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (party) REFERENCES party (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE conversation  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE conversationuser  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	conversation   int(11) NOT NULL,
   	con_user   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	create_date   		date NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (conversation) REFERENCES conversation (id), 
 	FOREIGN KEY (con_user) REFERENCES party (id), 
	PRIMARY KEY( id )
);

CREATE TABLE message  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	conversation   int(11) NOT NULL,
   	owner   int(11) NOT NULL,
   	counter_party   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	message   		varchar(255) NOT NULL,
	message_date   		date NULL,
 	FOREIGN KEY (conversation) REFERENCES conversation (id), 
 	FOREIGN KEY (owner) REFERENCES party (id), 
 	FOREIGN KEY (counter_party) REFERENCES party (id), 
	PRIMARY KEY( id )
);

CREATE TABLE messagefiles  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	message   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	file_url   		varchar(35) NOT NULL,
	file_size   		varchar(35) NOT NULL,
 	FOREIGN KEY (message) REFERENCES message (id), 
	PRIMARY KEY( id )
);

CREATE TABLE notificationtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	title_template   		varchar(35) NOT NULL,
	message_template   		varchar(35) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE notificationstatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE notificationlevel  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE notification  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	n_owner   int(11) NOT NULL,
   	n_type   int(11) NOT NULL,
   	status   int(11) NOT NULL,
   	log_level   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (n_owner) REFERENCES party (id), 
 	FOREIGN KEY (n_type) REFERENCES notificationtype (id), 
 	FOREIGN KEY (status) REFERENCES notificationstatus (id), 
 	FOREIGN KEY (log_level) REFERENCES notificationlevel (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE contactus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	subject   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	email   		varchar(35) NOT NULL,
	b_name   		varchar(35) NOT NULL,
	message   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE uom  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	uom_abbr   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE uomconversion  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	from_uom   int(11) NOT NULL,
   	to_uom   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	conversion_factor   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (from_uom) REFERENCES uom (id), 
 	FOREIGN KEY (to_uom) REFERENCES uom (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productcategory  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productclassification  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE producttype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_cat   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_cat) REFERENCES productcategory (id), 
	PRIMARY KEY( id )
);

CREATE TABLE product  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_type   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_type) REFERENCES producttype (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productclassificationlink  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	product   int(11) NOT NULL,
   	product_class   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (product) REFERENCES product (id), 
 	FOREIGN KEY (product_class) REFERENCES productclassification (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productcategoryimage  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_cat_image   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	image_url   		varchar(255) NOT NULL,
	image_size   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_cat_image) REFERENCES productcategory (id), 
	PRIMARY KEY( id )
);

CREATE TABLE producttypeimage  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_ty_image   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	image_url   		varchar(255) NOT NULL,
	image_size   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_ty_image) REFERENCES producttype (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productimage  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	product   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	image_url   		varchar(255) NOT NULL,
	image_size   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (product) REFERENCES product (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productfeaturecategory  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productfeaturetype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	feature_category   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (feature_category) REFERENCES productfeaturecategory (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productfeature  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	feature_type   int(11) NOT NULL,
   	feature_uom   int(11) NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (feature_type) REFERENCES productfeaturetype (id), 
 	FOREIGN KEY (feature_uom) REFERENCES uom (id), 
	PRIMARY KEY( id )
);

CREATE TABLE featureapplicabilitytype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productfeatureapplicability  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	applicability_type   int(11) NOT NULL,
   	applicability_prod   int(11) NOT NULL,
   	applicability_feat   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	from_date   		date NOT NULL,
	to_date   		date NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (applicability_type) REFERENCES featureapplicabilitytype (id), 
 	FOREIGN KEY (applicability_prod) REFERENCES product (id), 
 	FOREIGN KEY (applicability_feat) REFERENCES productfeature (id), 
	PRIMARY KEY( id )
);

CREATE TABLE featureinteractiontype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productfeatureinteraction  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	interaction_type   int(11) NOT NULL,
   	interaction_prod   int(11) NOT NULL,
   	interaction_feat   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (interaction_type) REFERENCES featureinteractiontype (id), 
 	FOREIGN KEY (interaction_prod) REFERENCES product (id), 
 	FOREIGN KEY (interaction_feat) REFERENCES productfeature (id), 
	PRIMARY KEY( id )
);

CREATE TABLE pricecomponenttype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE pricecomponent  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	component_type   int(11) NOT NULL,
   	component_prod   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	component_price   		decimal(38,0) NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (component_type) REFERENCES pricecomponenttype (id), 
 	FOREIGN KEY (component_prod) REFERENCES product (id), 
	PRIMARY KEY( id )
);

CREATE TABLE costcomponenttype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE costcomponent  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	cost_type   int(11) NOT NULL,
   	cost_prod   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	component_cost   		decimal(38,0) NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (cost_type) REFERENCES costcomponenttype (id), 
 	FOREIGN KEY (cost_prod) REFERENCES product (id), 
	PRIMARY KEY( id )
);

CREATE TABLE supplierrating  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE supplierpreference  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productsupplier  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_supplier   int(11) NOT NULL,
   	supplier_of_prod   int(11) NOT NULL,
   	supplier_rating   int(11) NOT NULL,
   	supplier_preference   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_supplier) REFERENCES product (id), 
 	FOREIGN KEY (supplier_of_prod) REFERENCES party (id), 
 	FOREIGN KEY (supplier_rating) REFERENCES supplierrating (id), 
 	FOREIGN KEY (supplier_preference) REFERENCES supplierpreference (id), 
	PRIMARY KEY( id )
);

CREATE TABLE facilitytype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE facility  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	facility_type   int(11) NOT NULL,
   	facility_loc   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (facility_type) REFERENCES facilitytype (id), 
 	FOREIGN KEY (facility_loc) REFERENCES location (id), 
	PRIMARY KEY( id )
);

CREATE TABLE containertype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE container  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	container_type   int(11) NOT NULL,
   	container_facility   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (container_type) REFERENCES containertype (id), 
 	FOREIGN KEY (container_facility) REFERENCES facility (id), 
	PRIMARY KEY( id )
);

CREATE TABLE lot  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE inventoryitemtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE inventoryitemstatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE inventoryitem  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	item_type   int(11) NOT NULL,
   	item_product   int(11) NOT NULL,
   	item_status   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (item_type) REFERENCES inventoryitemtype (id), 
 	FOREIGN KEY (item_product) REFERENCES product (id), 
 	FOREIGN KEY (item_status) REFERENCES inventoryitemstatus (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productordertype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productorderstatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productorder  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	prod_order_type   int(11) NOT NULL,
   	prod_order_status   int(11) NOT NULL,
   	place_by_party   int(11) NOT NULL,
   	taken_by_party   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	prod_order_date   		date NOT NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (prod_order_type) REFERENCES productordertype (id), 
 	FOREIGN KEY (prod_order_status) REFERENCES productorderstatus (id), 
 	FOREIGN KEY (place_by_party) REFERENCES party (id), 
 	FOREIGN KEY (taken_by_party) REFERENCES party (id), 
	PRIMARY KEY( id )
);

CREATE TABLE productorderitemtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productorderitemstatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE productorderitem  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	item_order   int(11) NOT NULL,
   	order_item_type   int(11) NOT NULL,
   	order_item_status   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	item_sequence   		INT(6) NOT NULL,
	quantity   		INT(6) NOT NULL,
	order_item_price   		decimal(38,0) NULL,
	description   		varchar(255) NOT NULL,
 	FOREIGN KEY (item_order) REFERENCES productorder (id), 
 	FOREIGN KEY (order_item_type) REFERENCES productorderitemtype (id), 
 	FOREIGN KEY (order_item_status) REFERENCES productorderitemstatus (id), 
	PRIMARY KEY( id )
);

CREATE TABLE invoicetype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	business_category   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE invoicestatus  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE invoice  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	type   int(11) NOT NULL,
   	owner_role   int(11) NOT NULL,
   	bill_acct   int(11) NOT NULL,
   	status   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	amount   		decimal(38,0) NULL,
	invoice_date   		date NULL,
	description   		varchar(255) NOT NULL,
	message   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (type) REFERENCES invoicetype (id), 
 	FOREIGN KEY (owner_role) REFERENCES partyrole (id), 
 	FOREIGN KEY (bill_acct) REFERENCES billingaccount (id), 
 	FOREIGN KEY (status) REFERENCES invoicestatus (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE invoicerole  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	ir_invoice   int(11) NOT NULL,
   	ir_partyrole   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (ir_invoice) REFERENCES invoice (id), 
 	FOREIGN KEY (ir_partyrole) REFERENCES partyrole (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE invoiceitemtype  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
	name   		varchar(35) NOT NULL,
	description   		varchar(255) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE invoiceitem  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NOT NULL,
   	ii_invoice   int(11) NOT NULL,
   	item_type   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	quantity   		INT(6) NOT NULL,
	unit_price   		decimal(38,0) NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (ii_invoice) REFERENCES invoice (id), 
 	FOREIGN KEY (item_type) REFERENCES invoiceitemtype (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);

CREATE TABLE invoiceterm  ( 
	id   	int(11) AUTO_INCREMENT NOT NULL,
	entity_code   		varchar(35) NULL,
   	it_invoice   int(11) NOT NULL,
   	it_term   int(11) NOT NULL,
	name   		varchar(35) NOT NULL,
	value   		INT(6) NOT NULL,
	from_start   		date NOT NULL,
	thru_end   		date NOT NULL,
	description   		varchar(255) NOT NULL,
   	business_unit   int(11) NOT NULL,
 	FOREIGN KEY (it_invoice) REFERENCES invoice (id), 
 	FOREIGN KEY (business_unit) REFERENCES businessunit (id), 
	PRIMARY KEY( id )
);
