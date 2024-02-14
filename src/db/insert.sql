INSERT INTO blog.roles(user_role)
VALUES
	('admin'),
	('user');
	
INSERT INTO blog.users(username, email, password_hash, date_registered, role_id)
VALUES
	('colincclark', 'col.c.clark@gmail.com', 'password', current_timestamp, 1),
	('francescadelguidice', 'francescadelguidice@gmail.com', 'password', current_timestamp, 1);

INSERT INTO blog.countries (country, iso_code) VALUES
    ('Afghanistan', 'AF'),
    ('Albania', 'AL'),
    ('Algeria', 'DZ'),
    ('Andorra', 'AD'),
    ('Angola', 'AO'),
    ('Antigua and Barbuda', 'AG'),
    ('Argentina', 'AR'),
    ('Armenia', 'AM'),
    ('Australia', 'AU'),
    ('Austria', 'AT'),
    ('Azerbaijan', 'AZ'),
    ('Bahamas', 'BS'),
    ('Bahrain', 'BH'),
    ('Bangladesh', 'BD'),
    ('Barbados', 'BB'),
    ('Belarus', 'BY'),
    ('Belgium', 'BE'),
    ('Belize', 'BZ'),
    ('Benin', 'BJ'),
    ('Bhutan', 'BT'),
    ('Bolivia', 'BO'),
    ('Bosnia and Herzegovina', 'BA'),
    ('Botswana', 'BW'),
    ('Brazil', 'BR'),
    ('Brunei', 'BN'),
    ('Bulgaria', 'BG'),
    ('Burkina Faso', 'BF'),
    ('Burundi', 'BI'),
    ('Cabo Verde', 'CV'),
    ('Cambodia', 'KH'),
    ('Cameroon', 'CM'),
    ('Canada', 'CA'),
    ('Central African Republic', 'CF'),
    ('Chad', 'TD'),
    ('Chile', 'CL'),
    ('China', 'CN'),
    ('Colombia', 'CO'),
    ('Comoros', 'KM'),
    ('Congo (Congo-Brazzaville)', 'CG'),
    ('Costa Rica', 'CR'),
    ('Croatia', 'HR'),
    ('Cuba', 'CU'),
    ('Cyprus', 'CY'),
    ('Czechia (Czech Republic)', 'CZ'),
    ('Democratic Republic of the Congo', 'CD'),
    ('Denmark', 'DK'),
    ('Djibouti', 'DJ'),
    ('Dominica', 'DM'),
    ('Dominican Republic', 'DO'),
    ('Ecuador', 'EC'),
    ('Egypt', 'EG'),
    ('El Salvador', 'SV'),
    ('Equatorial Guinea', 'GQ'),
    ('Eritrea', 'ER'),
    ('Estonia', 'EE'),
    ('Eswatini (fmr. "Swaziland")', 'SZ'),
    ('Ethiopia', 'ET'),
    ('Fiji', 'FJ'),
    ('Finland', 'FI'),
    ('France', 'FR'),
    ('Gabon', 'GA'),
    ('Gambia', 'GM'),
    ('Georgia', 'GE'),
    ('Germany', 'DE'),
    ('Ghana', 'GH'),
    ('Greece', 'GR'),
    ('Grenada', 'GD'),
    ('Guatemala', 'GT'),
    ('Guinea', 'GN'),
    ('Guinea-Bissau', 'GW'),
    ('Guyana', 'GY'),
    ('Haiti', 'HT'),
    ('Holy See', 'VA'),
    ('Honduras', 'HN'),
    ('Hungary', 'HU'),
    ('Iceland', 'IS'),
    ('India', 'IN'),
    ('Indonesia', 'ID'),
    ('Iran', 'IR'),
    ('Iraq', 'IQ'),
    ('Ireland', 'IE'),
    ('Israel', 'IL'),
    ('Italy', 'IT'),
    ('Jamaica', 'JM'),
    ('Japan', 'JP'),
    ('Jordan', 'JO'),
    ('Kazakhstan', 'KZ'),
    ('Kenya', 'KE'),
    ('Kiribati', 'KI'),
    ('Kuwait', 'KW'),
    ('Kyrgyzstan', 'KG'),
    ('Laos', 'LA'),
    ('Latvia', 'LV'),
    ('Lebanon', 'LB'),
    ('Lesotho', 'LS'),
    ('Liberia', 'LR'),
    ('Libya', 'LY'),
    ('Liechtenstein', 'LI'),
    ('Lithuania', 'LT'),
    ('Luxembourg', 'LU'),
    ('Madagascar', 'MG'),
    ('Malawi', 'MW'),
    ('Malaysia', 'MY'),
    ('Maldives', 'MV'),
    ('Mali', 'ML'),
    ('Malta', 'MT'),
    ('Marshall Islands', 'MH'),
    ('Mauritania', 'MR'),
    ('Mauritius', 'MU'),
    ('Mexico', 'MX'),
    ('Micronesia', 'FM'),
    ('Moldova', 'MD'),
    ('Monaco', 'MC'),
    ('Mongolia', 'MN'),
    ('Montenegro', 'ME'),
    ('Morocco', 'MA'),
    ('Mozambique', 'MZ'),
    ('Myanmar (formerly Burma)', 'MM'),
    ('Namibia', 'NA'),
    ('Nauru', 'NR'),
    ('Nepal', 'NP'),
    ('Netherlands', 'NL'),
    ('New Zealand', 'NZ'),
    ('Nicaragua', 'NI'),
    ('Niger', 'NE'),
    ('Nigeria', 'NG'),
    ('North Korea', 'KP'),
    ('North Macedonia (formerly Macedonia)', 'MK'),
    ('Norway', 'NO'),
    ('Oman', 'OM'),
    ('Pakistan', 'PK'),
    ('Palau', 'PW'),
    ('Palestine State', 'PS'),
    ('Panama', 'PA'),
    ('Papua New Guinea', 'PG'),
    ('Paraguay', 'PY'),
    ('Peru', 'PE'),
    ('Philippines', 'PH'),
    ('Poland', 'PL'),
    ('Portugal', 'PT'),
    ('Qatar', 'QA'),
    ('Romania', 'RO'),
    ('Russia', 'RU'),
    ('Rwanda', 'RW'),
    ('Saint Kitts and Nevis', 'KN'),
    ('Saint Lucia', 'LC'),
    ('Saint Vincent and the Grenadines', 'VC'),
    ('Samoa', 'WS'),
    ('San Marino', 'SM'),
    ('Sao Tome and Principe', 'ST'),
    ('Saudi Arabia', 'SA'),
    ('Senegal', 'SN'),
    ('Serbia', 'RS'),
    ('Seychelles', 'SC'),
    ('Sierra Leone', 'SL'),
    ('Singapore', 'SG'),
    ('Slovakia', 'SK'),
    ('Slovenia', 'SI'),
    ('Solomon Islands', 'SB'),
    ('Somalia', 'SO'),
    ('South Africa', 'ZA'),
    ('South Korea', 'KR'),
    ('South Sudan', 'SS'),
    ('Spain', 'ES'),
    ('Sri Lanka', 'LK'),
    ('Sudan', 'SD'),
    ('Suriname', 'SR'),
    ('Sweden', 'SE'),
    ('Switzerland', 'CH'),
    ('Syria', 'SY'),
    ('Tajikistan', 'TJ'),
    ('Tanzania', 'TZ'),
    ('Thailand', 'TH'),
    ('Timor-Leste', 'TL'),
    ('Togo', 'TG'),
    ('Tonga', 'TO'),
    ('Trinidad and Tobago', 'TT'),
    ('Tunisia', 'TN'),
    ('Turkey', 'TR'),
    ('Turkmenistan', 'TM'),
    ('Tuvalu', 'TV'),
    ('Uganda', 'UG'),
    ('Ukraine', 'UA'),
    ('United Arab Emirates', 'AE'),
    ('United Kingdom', 'GB'),
    ('United States of America', 'US'),
    ('Uruguay', 'UY'),
    ('Uzbekistan', 'UZ'),
    ('Vanuatu', 'VU'),
    ('Venezuela', 'VE'),
    ('Vietnam', 'VN'),
    ('Yemen', 'YE'),
    ('Zambia', 'ZM'),
    ('Zimbabwe', 'ZW');
	
INSERT INTO blog.trips(trip, date_from, date_to)
VALUES
	('thailand 2011', TO_TIMESTAMP('2012-11', 'YYYY-MM'), TO_TIMESTAMP('2012-11', 'YYYY-MM')),
	('south america 2013-2015', TO_TIMESTAMP('2013-01', 'YYYY-MM'), TO_TIMESTAMP('2015-03', 'YYYY-MM')),
	('belgium & luxembourg 2017', TO_TIMESTAMP('2017-08', 'YYYY-MM'), TO_TIMESTAMP('2017-09', 'YYYY-MM')),
	('luxembourg 2017 part 1', TO_TIMESTAMP('2017-02', 'YYYY-MM'), TO_TIMESTAMP('2017-02', 'YYYY-MM')),
	('luxembourg 2017 part 2', TO_TIMESTAMP('2017-08', 'YYYY-MM'), TO_TIMESTAMP('2017-09', 'YYYY-MM')),
	('denmark 2018', TO_TIMESTAMP('2018-10', 'YYYY-MM'), TO_TIMESTAMP('2018-11', 'YYYY-MM')),
	('antarctic 2019', TO_TIMESTAMP('2019-01', 'YYYY-MM'), TO_TIMESTAMP('2019-02', 'YYYY-MM')),
	('norfolk 2022', TO_TIMESTAMP('2022-09', 'YYYY-MM'), TO_TIMESTAMP('2022-09', 'YYYY-MM')),
	('scotland 2023', TO_TIMESTAMP('2023-08', 'YYYY-MM'), TO_TIMESTAMP('2023-09', 'YYYY-MM'));
