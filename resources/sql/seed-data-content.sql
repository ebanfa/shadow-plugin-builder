/* Insert statement for Currency */
INSERT INTO currency (id, entity_code, symbol, name, description) VALUES (1, 'KSH', 'Ksh', 'Kenyan Shillings', 'Kenyan Shillings');
INSERT INTO currency (id, entity_code, symbol, name, description) VALUES (2, 'USD', '$', 'US Dollar', 'US Dollar');

/* Insert statement for Business */
INSERT INTO business (id, currency, entity_code, name, user_name, pin, tel_no, account_notify_email, orders_notify_email, description) VALUES (1, 1, 'PAE', 'Premium Academic Essays', 'admin@premiumacademicessays.com', '0000000', '254 00000000', 'accounts@premiumacademicessays.com', 'info@premiumacademicessays.com', 'Premium Academic Essays');

/* Insert statement for Party Category */
INSERT INTO partycategory (id, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partycategory (id, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Party Type */
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (1, 'ORGANIZATION', 'Organization', 'Organizational party');
INSERT INTO partytype (party_category, entity_code, name, description) VALUES (2, 'INDIVIDUAL', 'Individual', 'Individual party');

/* Insert statement for Role Type */
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_USER', 'Business User', 'Business User');
INSERT INTO roletype (entity_code, name, description) VALUES ('BUSINESS_OWNER', 'Business Owner', 'Business Owner');
INSERT INTO roletype (entity_code, name, description) VALUES ('STUDENT', 'Student', 'Student');
INSERT INTO roletype (entity_code, name, description) VALUES ('TUTOR', 'Tutor', 'Tutor');
INSERT INTO roletype (entity_code, name, description) VALUES ('EMPLOYEE', 'Employee', 'Employee');

/* Insert statement for Party */
INSERT INTO party (id, party_type, entity_code, name, user_name, description) VALUES (1, 2, 'ADMINISTRATOR', 'Administrator', 'admin@premiumacademicessays.com', 'Organizational party');

/* Insert statement for Party Role */
INSERT INTO partyrole (party_role_party, party_role_type, entity_code, name, description) VALUES (1, 1, 'ADMINISTRATOR', 'Administrator', 'Administrator');
INSERT INTO partyrole (party_role_party, party_role_type, entity_code, name, description) VALUES (1, 5, 'ADMIN_EMPLOYEE', 'Administrator Employee', 'Administrator Employee');

/* Insert statement for Party Profile */
INSERT INTO partyprofile (profile_party, entity_code, name, display_name, date_created, description) VALUES (1, 'ADMINISTRATOR', 'Administrator', 'Administrator', '2000-01-01', 'Organizational party');

/* Insert statement for Content Order Type */
INSERT INTO contentordertype VALUES(1, 'ACADEMIC_PAPER_ORDER', 'Academic Paper Order', 'Academic Paper Order');

/* Insert statement for Content Order Status */
INSERT INTO contentorderstatus VALUES(1, 'PENDING', 'Pending', 'Pending');
INSERT INTO contentorderstatus VALUES(2, 'IN_PROGRESS', 'In Progress', 'Progress');
INSERT INTO contentorderstatus VALUES(3, 'COMPLETED', 'Completed', 'Completed');
INSERT INTO contentorderstatus VALUES(4, 'ACCEPTED', 'Accepted', 'Accepted');
INSERT INTO contentorderstatus VALUES(5, 'REJECTED', 'Rejected', 'Rejected');
INSERT INTO contentorderstatus VALUES(6, 'REVIEW_IN_PROGRESS', 'Review In Progress', 'Review In Progress');
INSERT INTO contentorderstatus VALUES(7, 'REVIEW_COMPLETED', 'Review Completed', 'Review Completed');

/* Insert statement for Content Order Payment Status */
INSERT INTO paymentstatus VALUES(1, 'NOT_PAID', 'Payment Pending', 'Payment Pending');
INSERT INTO paymentstatus VALUES(2, 'PARTIAL_PAYMENT', 'Partial Payment', 'Partial Payment');
INSERT INTO paymentstatus VALUES(3, 'COMPLETED', 'Payment Completed', 'Payment Completed');

/* Insert statement for Transaction type */
INSERT INTO accounttransactiontype VALUES(1, 'CLIENT_PAYMENT', 'Client Payment', 'Client Payment');

/* Insert statement for Transaction Status */
INSERT INTO accounttransactionstatus VALUES(1, 'PENDING', 'Pending', 'Pending');
INSERT INTO accounttransactionstatus VALUES(2, 'COMPLETED', 'Completed', 'Completed');


/* Insert statement for Academic Level */
INSERT INTO academiclevel VALUES(1, '1', 'High School', 'High School');
INSERT INTO academiclevel VALUES(2, '2', 'Undergraduate', 'Undergraduate');
INSERT INTO academiclevel VALUES(3, '3', 'Master', 'Master');
INSERT INTO academiclevel VALUES(4, '4', 'Ph. D.', 'Ph. D.');

/* Insert statement for Content Classification Type */
INSERT INTO classificationtype VALUES(1, 'ACADEMIC_LEVEL', 'Academic Level', 'Academic Level');

/* Insert statement for Content Classification */
INSERT INTO classification (id, class_type, entity_code, name, description) VALUES(1, 1, 'HIGH_SCHOOL', 'High School', 'High School');
INSERT INTO classification (id, class_type, entity_code, name, description) VALUES(2, 1, 'UNDERGRADUATE', 'Undergraduate', 'Undergraduate');
INSERT INTO classification (id, class_type, entity_code, name, description) VALUES(3, 1, 'MASTER', 'Master', 'Master');
INSERT INTO classification (id, class_type, entity_code, name, description) VALUES(4, 1, 'PHD', 'Ph. D.', 'Ph. D.');

/* Insert statement for Content Category */
INSERT INTO contentcategory VALUES(1, 'POST', 'Post', 'Post');
INSERT INTO contentcategory VALUES(2, 'DOCUMENT', 'Document', 'Document');
INSERT INTO contentcategory VALUES(3, 'FLASH_CARDS', 'Flash Cards', 'Flash Cards');
INSERT INTO contentcategory VALUES(4, 'NOTES', 'Notes', 'Notes');

/* Insert statement for Content Type */
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(1, 2, '1', 'Essay', 'Essay');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(2, 2, '2', 'Term Paper', 'Term Paper');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(3, 2, '3', 'Research Paper', 'Research Paper');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(4, 2, '4', 'Coursework', 'Coursework');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(5, 2, '5', 'Book Report', 'Book Report');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(6, 2, '6', 'Book Review', 'Book Review');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(7, 2, '7', 'Movie Review', 'Movie Review');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(8, 2, '8', 'Dissertation', 'Dissertation');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(9, 2, '9', 'Thesis', 'Thesis');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(10, 2, '10', 'Thesis Proposal', 'Thesis Proposal');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(11, 2, '11', 'Research Proposal', 'Research Proposal');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(12, 2, '12', 'Dissertation Chapter - Abstract', 'Dissertation Chapter - Abstract');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(13, 2, '13', 'Dissertation Chapter - Introduction', 'Dissertation Chapter - Introduction Chapter');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(14, 2, '14', 'Dissertation Chapter - Literature R', 'Dissertation Chapter - Literature Review');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(15, 2, '15', 'Dissertation Chapter - Methodology', 'Dissertation Chapter - Methodology');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(16, 2, '16', 'Dissertation Chapter - Results', 'Dissertation Chapter - Results');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(17, 2, '17', 'Dissertation Chapter - Discussion', 'Dissertation Chapter - Discussion');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(18, 2, '18', 'Dissertation Services - Editing', 'Dissertation Services - Editing');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(19, 2, '19', 'Dissertation Services - Proofreadin', 'Dissertation Services - Proofreading');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(20, 2, '20', 'Formatting', 'Formatting');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(21, 2, '21', 'Admission Services - Admission Essa', 'Admission Services - Admission Essay');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(22, 2, '22', 'Admission Services - Scholarship Es', 'Admission Services - Scholarship Essay');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(23, 2, '23', 'Admission Services - Personal State', 'Admission Services - Personal Statement');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(24, 2, '24', 'Admission Services - Editing', 'Admission Services - Editing');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(25, 2, '25', 'Editing', 'Editing');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(26, 2, '26', 'Proofreading', 'Proofreading');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(27, 2, '27', 'Case Study', 'Case Study');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(28, 2, '28', 'Lab Report', 'Lab Report');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(29, 2, '29', 'Speech Presentation', 'Speech Presentation');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(30, 2, '30', 'Math Problem', 'Math Problem');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(31, 2, '31', 'Article', 'Article');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(32, 2, '32', 'Article Critique', 'Article Critique');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(33, 2, '33', 'Annotated Bibliography', 'Annotated Bibliography');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(34, 2, '34', 'Reaction Paper', 'Reaction Paper');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(35, 2, '35', 'PowerPoint Presentation', 'PowerPoint Presentation');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(36, 2, '36', 'Statistics Project', 'Statistics Project');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(37, 2, '37', 'Multiple Choice Questions (None-Tim', 'Multiple Choice Questions (None-Time-Framed)');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(38, 2, '38', 'Other (Not listed)', 'Other (Not listed)');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(39, 1, '39', 'Questions', 'Question');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(40, 3, '40', 'Flash Cards', 'Flash Cards');
INSERT INTO contenttype (id, content_category, entity_code, name, description) VALUES(41, 4, '41', 'Notes', 'Notes');

/* Insert statement for Number of Pages */
INSERT INTO noofpages VALUES(1, '1', '1 page(s) / 275 words', '1 page(s) / 275 words');
INSERT INTO noofpages VALUES(2, '2', '2 page(s) / 550 words', '2 page(s) / 550 words');
INSERT INTO noofpages VALUES(3, '3', '3 page(s) / 825 words', '3 page(s) / 825 words');
INSERT INTO noofpages VALUES(4, '4', '4 page(s) / 1100 words', '4 page(s) / 1100 words');
INSERT INTO noofpages VALUES(5, '5', '5 page(s) / 1375 words', '5 page(s) / 1375 words');
INSERT INTO noofpages VALUES(6, '6', '6 page(s) / 1650 words', '6 page(s) / 1650 words');
INSERT INTO noofpages VALUES(7, '7', '7 page(s) / 1925 words', '7 page(s) / 1925 words');
INSERT INTO noofpages VALUES(8, '8', '8 page(s) / 2200 words', '8 page(s) / 2200 words');
INSERT INTO noofpages VALUES(9, '9', '9 page(s) / 2475 words', '9 page(s) / 2475 words');
INSERT INTO noofpages VALUES(10, '10', '10 page(s) / 2750 words', '10 page(s) / 2750 words');
INSERT INTO noofpages VALUES(11, '11', '11 page(s) / 3025 words', '11 page(s) / 3025 words');
INSERT INTO noofpages VALUES(12, '12', '12 page(s) / 3300 words', '12 page(s) / 3300 words');
INSERT INTO noofpages VALUES(13, '13', '13 page(s) / 3575 words', '13 page(s) / 3575 words');
INSERT INTO noofpages VALUES(14, '14', '14 page(s) / 3850 words', '14 page(s) / 3850 words');
INSERT INTO noofpages VALUES(15, '15', '15 page(s) / 4125 words', '15 page(s) / 4125 words');
INSERT INTO noofpages VALUES(16, '16', '16 page(s) / 4400 words', '16 page(s) / 4400 words');
INSERT INTO noofpages VALUES(17, '17', '17 page(s) / 4675 words', '17 page(s) / 4675 words');
INSERT INTO noofpages VALUES(18, '18', '18 page(s) / 4950 words', '18 page(s) / 4950 words');
INSERT INTO noofpages VALUES(19, '19', '19 page(s) / 5225 words', '19 page(s) / 5225 words');
INSERT INTO noofpages VALUES(20, '20', '20 page(s) / 5500 words', '20 page(s) / 5500 words');
INSERT INTO noofpages VALUES(21, '21', '21 page(s) / 5775 words', '21 page(s) / 5775 words');
INSERT INTO noofpages VALUES(22, '22', '22 page(s) / 6050 words', '22 page(s) / 6050 words');
INSERT INTO noofpages VALUES(23, '23', '23 page(s) / 6325 words', '23 page(s) / 6325 words');
INSERT INTO noofpages VALUES(24, '24', '24 page(s) / 6600 words', '24 page(s) / 6600 words');
INSERT INTO noofpages VALUES(25, '25', '25 page(s) / 6875 words', '25 page(s) / 6875 words');
INSERT INTO noofpages VALUES(26, '26', '26 page(s) / 7150 words', '26 page(s) / 7150 words');
INSERT INTO noofpages VALUES(27, '27', '27 page(s) / 7425 words', '27 page(s) / 7425 words');
INSERT INTO noofpages VALUES(28, '28', '28 page(s) / 7700 words', '28 page(s) / 7700 words');
INSERT INTO noofpages VALUES(29, '29', '29 page(s) / 7975 words', '29 page(s) / 7975 words');
INSERT INTO noofpages VALUES(30, '30', '30 page(s) / 8250 words', '30 page(s) / 8250 words');
INSERT INTO noofpages VALUES(31, '31', '31 page(s) / 8525 words', '31 page(s) / 8525 words');
INSERT INTO noofpages VALUES(32, '32', '32 page(s) / 8800 words', '32 page(s) / 8800 words');
INSERT INTO noofpages VALUES(33, '33', '33 page(s) / 9075 words', '33 page(s) / 9075 words');
INSERT INTO noofpages VALUES(34, '34', '34 page(s) / 9350 words', '34 page(s) / 9350 words');
INSERT INTO noofpages VALUES(35, '35', '35 page(s) / 9625 words', '35 page(s) / 9625 words');
INSERT INTO noofpages VALUES(36, '36', '36 page(s) / 9900 words', '36 page(s) / 9900 words');
INSERT INTO noofpages VALUES(37, '37', '37 page(s) / 10175 words', '37 page(s) / 10175 words');
INSERT INTO noofpages VALUES(38, '38', '38 page(s) / 10450 words', '38 page(s) / 10450 words');
INSERT INTO noofpages VALUES(39, '39', '39 page(s) / 10725 words', '39 page(s) / 10725 words');
INSERT INTO noofpages VALUES(40, '40', '40 page(s) / 11000 words', '40 page(s) / 11000 words');
INSERT INTO noofpages VALUES(41, '41', '41 page(s) / 11275 words', '41 page(s) / 11275 words');
INSERT INTO noofpages VALUES(42, '42', '42 page(s) / 11550 words', '42 page(s) / 11550 words');
INSERT INTO noofpages VALUES(43, '43', '43 page(s) / 11825 words', '43 page(s) / 11825 words');
INSERT INTO noofpages VALUES(44, '44', '44 page(s) / 12100 words', '44 page(s) / 12100 words');
INSERT INTO noofpages VALUES(45, '45', '45 page(s) / 12375 words', '45 page(s) / 12375 words');
INSERT INTO noofpages VALUES(46, '46', '46 page(s) / 12650 words', '46 page(s) / 12650 words');
INSERT INTO noofpages VALUES(47, '47', '47 page(s) / 12925 words', '47 page(s) / 12925 words');
INSERT INTO noofpages VALUES(48, '48', '48 page(s) / 13200 words', '48 page(s) / 13200 words');
INSERT INTO noofpages VALUES(49, '49', '49 page(s) / 13475 words', '49 page(s) / 13475 words');
INSERT INTO noofpages VALUES(50, '50', '50 page(s) / 13750 words', '50 page(s) / 13750 words');
INSERT INTO noofpages VALUES(51, '51', '51 page(s) / 14025 words', '51 page(s) / 14025 words');
INSERT INTO noofpages VALUES(52, '52', '52 page(s) / 14300 words', '52 page(s) / 14300 words');
INSERT INTO noofpages VALUES(53, '53', '53 page(s) / 14575 words', '53 page(s) / 14575 words');
INSERT INTO noofpages VALUES(54, '54', '54 page(s) / 14850 words', '54 page(s) / 14850 words');
INSERT INTO noofpages VALUES(55, '55', '55 page(s) / 15125 words', '55 page(s) / 15125 words');
INSERT INTO noofpages VALUES(56, '56', '56 page(s) / 15400 words', '56 page(s) / 15400 words');
INSERT INTO noofpages VALUES(57, '57', '57 page(s) / 15675 words', '57 page(s) / 15675 words');
INSERT INTO noofpages VALUES(58, '58', '58 page(s) / 15950 words', '58 page(s) / 15950 words');
INSERT INTO noofpages VALUES(59, '59', '59 page(s) / 16225 words', '59 page(s) / 16225 words');
INSERT INTO noofpages VALUES(60, '60', '60 page(s) / 16500 words', '60 page(s) / 16500 words');
INSERT INTO noofpages VALUES(61, '61', '61 page(s) / 16775 words', '61 page(s) / 16775 words');
INSERT INTO noofpages VALUES(62, '62', '62 page(s) / 17050 words', '62 page(s) / 17050 words');
INSERT INTO noofpages VALUES(63, '63', '63 page(s) / 17325 words', '63 page(s) / 17325 words');
INSERT INTO noofpages VALUES(64, '64', '64 page(s) / 17600 words', '64 page(s) / 17600 words');
INSERT INTO noofpages VALUES(65, '65', '65 page(s) / 17875 words', '65 page(s) / 17875 words');
INSERT INTO noofpages VALUES(66, '66', '66 page(s) / 18150 words', '66 page(s) / 18150 words');
INSERT INTO noofpages VALUES(67, '67', '67 page(s) / 18425 words', '67 page(s) / 18425 words');
INSERT INTO noofpages VALUES(68, '68', '68 page(s) / 18700 words', '68 page(s) / 18700 words');
INSERT INTO noofpages VALUES(69, '69', '69 page(s) / 18975 words', '69 page(s) / 18975 words');
INSERT INTO noofpages VALUES(70, '70', '70 page(s) / 19250 words', '70 page(s) / 19250 words');
INSERT INTO noofpages VALUES(71, '71', '71 page(s) / 19525 words', '71 page(s) / 19525 words');
INSERT INTO noofpages VALUES(72, '72', '72 page(s) / 19800 words', '72 page(s) / 19800 words');
INSERT INTO noofpages VALUES(73, '73', '73 page(s) / 20075 words', '73 page(s) / 20075 words');
INSERT INTO noofpages VALUES(74, '74', '74 page(s) / 20350 words', '74 page(s) / 20350 words');
INSERT INTO noofpages VALUES(75, '75', '75 page(s) / 20625 words', '75 page(s) / 20625 words');
INSERT INTO noofpages VALUES(76, '76', '76 page(s) / 20900 words', '76 page(s) / 20900 words');
INSERT INTO noofpages VALUES(77, '77', '77 page(s) / 21175 words', '77 page(s) / 21175 words');
INSERT INTO noofpages VALUES(78, '78', '78 page(s) / 21450 words', '78 page(s) / 21450 words');
INSERT INTO noofpages VALUES(79, '79', '79 page(s) / 21725 words', '79 page(s) / 21725 words');
INSERT INTO noofpages VALUES(80, '80', '80 page(s) / 22000 words', '80 page(s) / 22000 words');
INSERT INTO noofpages VALUES(81, '81', '81 page(s) / 22275 words', '81 page(s) / 22275 words');
INSERT INTO noofpages VALUES(82, '82', '82 page(s) / 22550 words', '82 page(s) / 22550 words');
INSERT INTO noofpages VALUES(83, '83', '83 page(s) / 22825 words', '83 page(s) / 22825 words');
INSERT INTO noofpages VALUES(84, '84', '84 page(s) / 23100 words', '84 page(s) / 23100 words');
INSERT INTO noofpages VALUES(85, '85', '85 page(s) / 23375 words', '85 page(s) / 23375 words');
INSERT INTO noofpages VALUES(86, '86', '86 page(s) / 23650 words', '86 page(s) / 23650 words');
INSERT INTO noofpages VALUES(87, '87', '87 page(s) / 23925 words', '87 page(s) / 23925 words');
INSERT INTO noofpages VALUES(88, '88', '88 page(s) / 24200 words', '88 page(s) / 24200 words');
INSERT INTO noofpages VALUES(89, '89', '89 page(s) / 24475 words', '89 page(s) / 24475 words');
INSERT INTO noofpages VALUES(90, '90', '90 page(s) / 24750 words', '90 page(s) / 24750 words');
INSERT INTO noofpages VALUES(91, '91', '91 page(s) / 25025 words', '91 page(s) / 25025 words');
INSERT INTO noofpages VALUES(92, '92', '92 page(s) / 25300 words', '92 page(s) / 25300 words');
INSERT INTO noofpages VALUES(93, '93', '93 page(s) / 25575 words', '93 page(s) / 25575 words');
INSERT INTO noofpages VALUES(94, '94', '94 page(s) / 25850 words', '94 page(s) / 25850 words');
INSERT INTO noofpages VALUES(95, '95', '95 page(s) / 26125 words', '95 page(s) / 26125 words');
INSERT INTO noofpages VALUES(96, '96', '96 page(s) / 26400 words', '96 page(s) / 26400 words');
INSERT INTO noofpages VALUES(97, '97', '97 page(s) / 26675 words', '97 page(s) / 26675 words');
INSERT INTO noofpages VALUES(98, '98', '98 page(s) / 26950 words', '98 page(s) / 26950 words');
INSERT INTO noofpages VALUES(99, '99', '99 page(s) / 27225 words', '99 page(s) / 27225 words');
INSERT INTO noofpages VALUES(100, '100', '100 page(s) / 27500 words', '100 page(s) / 27500 words');
INSERT INTO noofpages VALUES(101, '101', '101 page(s) / 27775 words', '101 page(s) / 27775 words');
INSERT INTO noofpages VALUES(102, '102', '102 page(s) / 28050 words', '102 page(s) / 28050 words');
INSERT INTO noofpages VALUES(103, '103', '103 page(s) / 28325 words', '103 page(s) / 28325 words');
INSERT INTO noofpages VALUES(104, '104', '104 page(s) / 28600 words', '104 page(s) / 28600 words');
INSERT INTO noofpages VALUES(105, '105', '105 page(s) / 28875 words', '105 page(s) / 28875 words');
INSERT INTO noofpages VALUES(106, '106', '106 page(s) / 29150 words', '106 page(s) / 29150 words');
INSERT INTO noofpages VALUES(107, '107', '107 page(s) / 29425 words', '107 page(s) / 29425 words');
INSERT INTO noofpages VALUES(108, '108', '108 page(s) / 29700 words', '108 page(s) / 29700 words');
INSERT INTO noofpages VALUES(109, '109', '109 page(s) / 29975 words', '109 page(s) / 29975 words');
INSERT INTO noofpages VALUES(110, '110', '110 page(s) / 30250 words', '110 page(s) / 30250 words');
INSERT INTO noofpages VALUES(111, '111', '111 page(s) / 30525 words', '111 page(s) / 30525 words');
INSERT INTO noofpages VALUES(112, '112', '112 page(s) / 30800 words', '112 page(s) / 30800 words');
INSERT INTO noofpages VALUES(113, '113', '113 page(s) / 31075 words', '113 page(s) / 31075 words');
INSERT INTO noofpages VALUES(114, '114', '114 page(s) / 31350 words', '114 page(s) / 31350 words');
INSERT INTO noofpages VALUES(115, '115', '115 page(s) / 31625 words', '115 page(s) / 31625 words');
INSERT INTO noofpages VALUES(116, '116', '116 page(s) / 31900 words', '116 page(s) / 31900 words');
INSERT INTO noofpages VALUES(117, '117', '117 page(s) / 32175 words', '117 page(s) / 32175 words');
INSERT INTO noofpages VALUES(118, '118', '118 page(s) / 32450 words', '118 page(s) / 32450 words');
INSERT INTO noofpages VALUES(119, '119', '119 page(s) / 32725 words', '119 page(s) / 32725 words');
INSERT INTO noofpages VALUES(120, '120', '120 page(s) / 33000 words', '120 page(s) / 33000 words');
INSERT INTO noofpages VALUES(121, '121', '121 page(s) / 33275 words', '121 page(s) / 33275 words');
INSERT INTO noofpages VALUES(122, '122', '122 page(s) / 33550 words', '122 page(s) / 33550 words');
INSERT INTO noofpages VALUES(123, '123', '123 page(s) / 33825 words', '123 page(s) / 33825 words');
INSERT INTO noofpages VALUES(124, '124', '124 page(s) / 34100 words', '124 page(s) / 34100 words');
INSERT INTO noofpages VALUES(125, '125', '125 page(s) / 34375 words', '125 page(s) / 34375 words');
INSERT INTO noofpages VALUES(126, '126', '126 page(s) / 34650 words', '126 page(s) / 34650 words');
INSERT INTO noofpages VALUES(127, '127', '127 page(s) / 34925 words', '127 page(s) / 34925 words');
INSERT INTO noofpages VALUES(128, '128', '128 page(s) / 35200 words', '128 page(s) / 35200 words');
INSERT INTO noofpages VALUES(129, '129', '129 page(s) / 35475 words', '129 page(s) / 35475 words');
INSERT INTO noofpages VALUES(130, '130', '130 page(s) / 35750 words', '130 page(s) / 35750 words');
INSERT INTO noofpages VALUES(131, '131', '131 page(s) / 36025 words', '131 page(s) / 36025 words');
INSERT INTO noofpages VALUES(132, '132', '132 page(s) / 36300 words', '132 page(s) / 36300 words');
INSERT INTO noofpages VALUES(133, '133', '133 page(s) / 36575 words', '133 page(s) / 36575 words');
INSERT INTO noofpages VALUES(134, '134', '134 page(s) / 36850 words', '134 page(s) / 36850 words');
INSERT INTO noofpages VALUES(135, '135', '135 page(s) / 37125 words', '135 page(s) / 37125 words');
INSERT INTO noofpages VALUES(136, '136', '136 page(s) / 37400 words', '136 page(s) / 37400 words');
INSERT INTO noofpages VALUES(137, '137', '137 page(s) / 37675 words', '137 page(s) / 37675 words');
INSERT INTO noofpages VALUES(138, '138', '138 page(s) / 37950 words', '138 page(s) / 37950 words');
INSERT INTO noofpages VALUES(139, '139', '139 page(s) / 38225 words', '139 page(s) / 38225 words');
INSERT INTO noofpages VALUES(140, '140', '140 page(s) / 38500 words', '140 page(s) / 38500 words');
INSERT INTO noofpages VALUES(141, '141', '141 page(s) / 38775 words', '141 page(s) / 38775 words');
INSERT INTO noofpages VALUES(142, '142', '142 page(s) / 39050 words', '142 page(s) / 39050 words');
INSERT INTO noofpages VALUES(143, '143', '143 page(s) / 39325 words', '143 page(s) / 39325 words');
INSERT INTO noofpages VALUES(144, '144', '144 page(s) / 39600 words', '144 page(s) / 39600 words');
INSERT INTO noofpages VALUES(145, '145', '145 page(s) / 39875 words', '145 page(s) / 39875 words');
INSERT INTO noofpages VALUES(146, '146', '146 page(s) / 40150 words', '146 page(s) / 40150 words');
INSERT INTO noofpages VALUES(147, '147', '147 page(s) / 40425 words', '147 page(s) / 40425 words');
INSERT INTO noofpages VALUES(148, '148', '148 page(s) / 40700 words', '148 page(s) / 40700 words');
INSERT INTO noofpages VALUES(149, '149', '149 page(s) / 40975 words', '149 page(s) / 40975 words');
INSERT INTO noofpages VALUES(150, '150', '150 page(s) / 41250 words', '150 page(s) / 41250 words');
INSERT INTO noofpages VALUES(151, '151', '151 page(s) / 41525 words', '151 page(s) / 41525 words');
INSERT INTO noofpages VALUES(152, '152', '152 page(s) / 41800 words', '152 page(s) / 41800 words');
INSERT INTO noofpages VALUES(153, '153', '153 page(s) / 42075 words', '153 page(s) / 42075 words');
INSERT INTO noofpages VALUES(154, '154', '154 page(s) / 42350 words', '154 page(s) / 42350 words');
INSERT INTO noofpages VALUES(155, '155', '155 page(s) / 42625 words', '155 page(s) / 42625 words');
INSERT INTO noofpages VALUES(156, '156', '156 page(s) / 42900 words', '156 page(s) / 42900 words');
INSERT INTO noofpages VALUES(157, '157', '157 page(s) / 43175 words', '157 page(s) / 43175 words');
INSERT INTO noofpages VALUES(158, '158', '158 page(s) / 43450 words', '158 page(s) / 43450 words');
INSERT INTO noofpages VALUES(159, '159', '159 page(s) / 43725 words', '159 page(s) / 43725 words');
INSERT INTO noofpages VALUES(160, '160', '160 page(s) / 44000 words', '160 page(s) / 44000 words');
INSERT INTO noofpages VALUES(161, '161', '161 page(s) / 44275 words', '161 page(s) / 44275 words');
INSERT INTO noofpages VALUES(162, '162', '162 page(s) / 44550 words', '162 page(s) / 44550 words');
INSERT INTO noofpages VALUES(163, '163', '163 page(s) / 44825 words', '163 page(s) / 44825 words');
INSERT INTO noofpages VALUES(164, '164', '164 page(s) / 45100 words', '164 page(s) / 45100 words');
INSERT INTO noofpages VALUES(165, '165', '165 page(s) / 45375 words', '165 page(s) / 45375 words');
INSERT INTO noofpages VALUES(166, '166', '166 page(s) / 45650 words', '166 page(s) / 45650 words');
INSERT INTO noofpages VALUES(167, '167', '167 page(s) / 45925 words', '167 page(s) / 45925 words');
INSERT INTO noofpages VALUES(168, '168', '168 page(s) / 46200 words', '168 page(s) / 46200 words');
INSERT INTO noofpages VALUES(169, '169', '169 page(s) / 46475 words', '169 page(s) / 46475 words');
INSERT INTO noofpages VALUES(170, '170', '170 page(s) / 46750 words', '170 page(s) / 46750 words');
INSERT INTO noofpages VALUES(171, '171', '171 page(s) / 47025 words', '171 page(s) / 47025 words');
INSERT INTO noofpages VALUES(172, '172', '172 page(s) / 47300 words', '172 page(s) / 47300 words');
INSERT INTO noofpages VALUES(173, '173', '173 page(s) / 47575 words', '173 page(s) / 47575 words');
INSERT INTO noofpages VALUES(174, '174', '174 page(s) / 47850 words', '174 page(s) / 47850 words');
INSERT INTO noofpages VALUES(175, '175', '175 page(s) / 48125 words', '175 page(s) / 48125 words');
INSERT INTO noofpages VALUES(176, '176', '176 page(s) / 48400 words', '176 page(s) / 48400 words');
INSERT INTO noofpages VALUES(177, '177', '177 page(s) / 48675 words', '177 page(s) / 48675 words');
INSERT INTO noofpages VALUES(178, '178', '178 page(s) / 48950 words', '178 page(s) / 48950 words');
INSERT INTO noofpages VALUES(179, '179', '179 page(s) / 49225 words', '179 page(s) / 49225 words');
INSERT INTO noofpages VALUES(180, '180', '180 page(s) / 49500 words', '180 page(s) / 49500 words');
INSERT INTO noofpages VALUES(181, '181', '181 page(s) / 49775 words', '181 page(s) / 49775 words');
INSERT INTO noofpages VALUES(182, '182', '182 page(s) / 50050 words', '182 page(s) / 50050 words');
INSERT INTO noofpages VALUES(183, '183', '183 page(s) / 50325 words', '183 page(s) / 50325 words');
INSERT INTO noofpages VALUES(184, '184', '184 page(s) / 50600 words', '184 page(s) / 50600 words');
INSERT INTO noofpages VALUES(185, '185', '185 page(s) / 50875 words', '185 page(s) / 50875 words');
INSERT INTO noofpages VALUES(186, '186', '186 page(s) / 51150 words', '186 page(s) / 51150 words');
INSERT INTO noofpages VALUES(187, '187', '187 page(s) / 51425 words', '187 page(s) / 51425 words');
INSERT INTO noofpages VALUES(188, '188', '188 page(s) / 51700 words', '188 page(s) / 51700 words');
INSERT INTO noofpages VALUES(189, '189', '189 page(s) / 51975 words', '189 page(s) / 51975 words');
INSERT INTO noofpages VALUES(190, '190', '190 page(s) / 52250 words', '190 page(s) / 52250 words');
INSERT INTO noofpages VALUES(191, '191', '191 page(s) / 52525 words', '191 page(s) / 52525 words');
INSERT INTO noofpages VALUES(192, '192', '192 page(s) / 52800 words', '192 page(s) / 52800 words');
INSERT INTO noofpages VALUES(193, '193', '193 page(s) / 53075 words', '193 page(s) / 53075 words');
INSERT INTO noofpages VALUES(194, '194', '194 page(s) / 53350 words', '194 page(s) / 53350 words');
INSERT INTO noofpages VALUES(195, '195', '195 page(s) / 53625 words', '195 page(s) / 53625 words');
INSERT INTO noofpages VALUES(196, '196', '196 page(s) / 53900 words', '196 page(s) / 53900 words');
INSERT INTO noofpages VALUES(197, '197', '197 page(s) / 54175 words', '197 page(s) / 54175 words');
INSERT INTO noofpages VALUES(198, '198', '198 page(s) / 54450 words', '198 page(s) / 54450 words');
INSERT INTO noofpages VALUES(199, '199', '199 page(s) / 54725 words', '199 page(s) / 54725 words');
INSERT INTO noofpages VALUES(200, '200', '200 page(s) / 55000 words', '200 page(s) / 55000 words');

/* Insert statement for Subject Area */
INSERT INTO subjectarea VALUES(1, 'ARTS_HUMANITIES', 'Arts & Humanities', 'Arts & Humanities');
INSERT INTO subjectarea VALUES(2, 'ENG_TECH', 'Engineering & Technology', 'Engineering & Technology');
INSERT INTO subjectarea VALUES(3, 'MATHEMATICS', 'Mathematics', 'Mathematics');
INSERT INTO subjectarea VALUES(4, 'SCIENCE', 'Science', 'Science');
INSERT INTO subjectarea VALUES(5, 'SOCIAL_SCIENCE', 'Social Science', 'Social Science');

/* Insert statement for Subject Area */
INSERT INTO subject VALUES(2, 1, '2', 'Literature', 'Literature');
INSERT INTO subject VALUES(3, 1, '3', 'English Literature', 'English Literature');
INSERT INTO subject VALUES(4, 1, '4', 'American Literature', 'American Literature');
INSERT INTO subject VALUES(5, 1, '5', 'Antique Literature', 'Antique Literature');
INSERT INTO subject VALUES(6, 1, '6', 'Asian Literature', 'Asian Literature');
INSERT INTO subject VALUES(7, 1, '7', 'Linguistics', 'Linguistics');
INSERT INTO subject VALUES(9, 1, '9', 'English', 'English');
INSERT INTO subject VALUES(10, 1, '10', 'Art', 'Art');
INSERT INTO subject VALUES(11, 1, '11', 'Paintings', 'Paintings');
INSERT INTO subject VALUES(12, 4, '12', 'Architecture', 'Architecture');
INSERT INTO subject VALUES(13, 1, '13', 'Drama', 'Drama');
INSERT INTO subject VALUES(14, 1, '14', 'Theatre', 'Theatre');
INSERT INTO subject VALUES(15, 1, '15', 'Dance', 'Dance');
INSERT INTO subject VALUES(16, 1, '16', 'Movies', 'Movies');
INSERT INTO subject VALUES(17, 1, '17', 'Design Analysis', 'Design Analysis');
INSERT INTO subject VALUES(18, 1, '18', 'Music', 'Music');
INSERT INTO subject VALUES(21, 5, '21', 'Psychology', 'Psychology');
INSERT INTO subject VALUES(22, 5, '22', 'Sociology', 'Sociology');
INSERT INTO subject VALUES(24, 5, '24', 'Ethics', 'Ethics');
INSERT INTO subject VALUES(28, 5, '28', 'Philosophy', 'Philosophy');
INSERT INTO subject VALUES(29, 5, '29', 'Political Science', 'Political Science');
INSERT INTO subject VALUES(36, 1, '36', 'History', 'History');
INSERT INTO subject VALUES(37, 1, '37', 'American History', 'American History');
INSERT INTO subject VALUES(38, 1, '38', 'African-American Studies', 'African-American Studies');
INSERT INTO subject VALUES(39, 1, '39', 'Native-American Studies', 'Native-American Studies');
INSERT INTO subject VALUES(40, 1, '40', 'Latin-American Studies', 'Latin-American Studies');
INSERT INTO subject VALUES(41, 1, '41', 'Canadian Studies', 'Canadian Studies');
INSERT INTO subject VALUES(42, 1, '42', 'Asian Studies', 'Asian Studies');
INSERT INTO subject VALUES(43, 1, '43', 'West European Studies', 'West European Studies');
INSERT INTO subject VALUES(44, 1, '44', 'East European Studies', 'East European Studies');
INSERT INTO subject VALUES(45, 1, '45', 'Holocaust', 'Holocaust');
INSERT INTO subject VALUES(47, 5, '47', 'Law', 'Law');
INSERT INTO subject VALUES(48, 5, '48', 'Legal Issues', 'Legal Issues');
INSERT INTO subject VALUES(49, 5, '49', 'Criminology', 'Criminology');
INSERT INTO subject VALUES(51, 3, '51', 'Mathematics', 'Mathematics');
INSERT INTO subject VALUES(52, 5, '52', 'Business', 'Business');
INSERT INTO subject VALUES(53, 5, '53', 'Economics', 'Economics');
INSERT INTO subject VALUES(54, 5, '54', 'Management', 'Management');
INSERT INTO subject VALUES(56, 5, '56', 'Marketing', 'Marketing');
INSERT INTO subject VALUES(57, 5, '57', 'Investment', 'Investment');
INSERT INTO subject VALUES(58, 5, '58', 'Company Analysis', 'Company Analysis');
INSERT INTO subject VALUES(59, 5, '59', 'Finance', 'Finance');
INSERT INTO subject VALUES(60, 5, '60', 'Accounting', 'Accounting');
INSERT INTO subject VALUES(61, 5, '61', 'Case Study', 'Case Study');
INSERT INTO subject VALUES(62, 2, '62', 'E-Commerce', 'E-Commerce');
INSERT INTO subject VALUES(63, 5, '63', 'Logistics', 'Logistics');
INSERT INTO subject VALUES(64, 5, '64', 'Trade', 'Trade');
INSERT INTO subject VALUES(65, 2, '65', 'Technology', 'Technology');
INSERT INTO subject VALUES(67, 2, '67', 'Engineering', 'Engineering');
INSERT INTO subject VALUES(70, 2, '70', 'Aviation', 'Aviation');
INSERT INTO subject VALUES(71, 2, '71', 'Aeronautics', 'Aeronautics');
INSERT INTO subject VALUES(72, 2, '72', 'Computer Science', 'Computer Science');
INSERT INTO subject VALUES(73, 2, '73', 'Internet', 'Internet');
INSERT INTO subject VALUES(75, 2, '75', 'IT Management', 'IT Management');
INSERT INTO subject VALUES(77, 2, '77', 'Web Design', 'Web Design');
INSERT INTO subject VALUES(78, 4, '78', 'Nature', 'Nature');
INSERT INTO subject VALUES(79, 4, '79', 'Geography', 'Geography');
INSERT INTO subject VALUES(80, 4, '80', 'Geology', 'Geology');
INSERT INTO subject VALUES(83, 4, '83', 'Environmental Issues', 'Environmental Issues');
INSERT INTO subject VALUES(85, 4, '85', 'Agricultural Studies', 'Agricultural Studies');
INSERT INTO subject VALUES(86, 4, '86', 'Astronomy', 'Astronomy');
INSERT INTO subject VALUES(87, 5, '87', 'Education', 'Education');
INSERT INTO subject VALUES(88, 4, '88', 'Pedagogy', 'Pedagogy');
INSERT INTO subject VALUES(89, 5, '89', 'Education Theories', 'Education Theories');
INSERT INTO subject VALUES(90, 5, '90', 'Teacher''s Career', 'Teacher''s Career');
INSERT INTO subject VALUES(93, 1, '93', 'Application Essay', 'Application Essay');
INSERT INTO subject VALUES(94, 4, '94', 'Medicine and Health', 'Medicine and Health');
INSERT INTO subject VALUES(95, 4, '95', 'Nutrition', 'Nutrition');
INSERT INTO subject VALUES(96, 5, '96', 'Sport', 'Sport');
INSERT INTO subject VALUES(97, 4, '97', 'Healthcare', 'Healthcare');
INSERT INTO subject VALUES(99, 4, '99', 'Alternative Medicine', 'Alternative Medicine');
INSERT INTO subject VALUES(100, 4, '100', 'Pharmacology', 'Pharmacology');
INSERT INTO subject VALUES(101, 4, '101', 'Nursing', 'Nursing');
INSERT INTO subject VALUES(102, 5, '102', 'Communications and Media', 'Communications and Media');
INSERT INTO subject VALUES(103, 5, '103', 'Journalism', 'Journalism');
INSERT INTO subject VALUES(104, 5, '104', 'Public Relations', 'Public Relations');
INSERT INTO subject VALUES(105, 5, '105', 'Advertising', 'Advertising');
INSERT INTO subject VALUES(107, 5, '107', 'Communication Strategies', 'Communication Strategies');
INSERT INTO subject VALUES(108, 1, '108', 'Religion and Theology', 'Religion and Theology');
INSERT INTO subject VALUES(110, 4, '110', 'Physics', 'Physics');
INSERT INTO subject VALUES(111, 4, '111', 'Chemistry', 'Chemistry');
INSERT INTO subject VALUES(112, 4, '112', 'Biology', 'Biology');
INSERT INTO subject VALUES(113, 4, '113', 'Anthropology', 'Anthropology');
INSERT INTO subject VALUES(114, 5, '114', 'Tourism', 'Tourism');
INSERT INTO subject VALUES(115, 1, '115', 'Creative writing', 'Creative writing');
INSERT INTO subject VALUES(116, 1, '116', 'Shakespeare Studies', 'Shakespeare Studies');

/* Insert statement for Urgency */
INSERT INTO urgency VALUES(1, '1', '6 hours', '6', 'H', '6 hours');
INSERT INTO urgency VALUES(2, '2', '12 hours', '12', 'H', '12 hours');
INSERT INTO urgency VALUES(3, '3', '24 hours', '24', 'H', '24 hours');
INSERT INTO urgency VALUES(4, '4', '48 hours', '48', 'H', '48 hours');
INSERT INTO urgency VALUES(5, '5', '3 days', '3', 'D', '3 days');
INSERT INTO urgency VALUES(6, '6', '4 days', '4', 'D', '4 days');
INSERT INTO urgency VALUES(7, '7', '5 days', '5', 'D', '5 days');
INSERT INTO urgency VALUES(8, '8', '7 days', '7', 'D', '7 days');
INSERT INTO urgency VALUES(9, '9', '10 days', '10', 'D', '10 days');
INSERT INTO urgency VALUES(10, '10', '20 days', '20', 'D', '20 days');
INSERT INTO urgency VALUES(11, '11', '30 days', '30', 'D', '30 days');

/* Insert statement for Writing Style */
INSERT INTO writingstyle VALUES(1, 'APA', 'APA', 'APA');
INSERT INTO writingstyle VALUES(2, 'MLA', 'MLA', 'MLA');
INSERT INTO writingstyle VALUES(3, 'Turabian', 'Turabian', 'Turabian');
INSERT INTO writingstyle VALUES(4, 'Chicago', 'Chicago', 'Chicago');
INSERT INTO writingstyle VALUES(5, 'Harvard', 'Harvard', 'Harvard');
INSERT INTO writingstyle VALUES(6, 'Oxford', 'Oxford', 'Oxford');
INSERT INTO writingstyle VALUES(7, 'Vancouver', 'Vancouver', 'Vancouver');
INSERT INTO writingstyle VALUES(8, 'CBE', 'CBE', 'CBE');
INSERT INTO writingstyle VALUES(9, 'Other', 'Other', 'Other');

/* Insert statement for Qualification Type*/
INSERT INTO qualificationtype VALUES(1, 'HD', 'High School Diploma', 'High School Diploma');
INSERT INTO qualificationtype VALUES(2, 'AD', 'Associate Degree', 'Associate Degree');
INSERT INTO qualificationtype VALUES(3, 'BSc', 'Bachelor Of Science', 'Bachelor Of Science');
INSERT INTO qualificationtype VALUES(4, 'BA', 'Bachelor Of Arts', 'Bachelor Of Arts');
INSERT INTO qualificationtype VALUES(5, 'MB', 'Bachelor Of Medicine', 'Bachelor Of Medicine');
INSERT INTO qualificationtype VALUES(6, 'MS', 'Masters Degree', 'Masters Degree');
INSERT INTO qualificationtype VALUES(7, 'Ph.D', 'Doctorate', 'Doctorate');