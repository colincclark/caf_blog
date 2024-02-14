DROP TABLE IF EXISTS blog.posts;
DROP TABLE IF EXISTS blog.users;
DROP TABLE IF EXISTS blog.roles;
DROP TABLE IF EXISTS blog.countries;
DROP TABLE IF EXISTS blog.trips;
DROP SCHEMA IF EXISTS blog;

CREATE SCHEMA IF NOT EXISTS blog;

ALTER database postgres SET log_min_duration_statement='250ms';
ALTER DATABASE postgres SET log_statement = 'all';

CREATE TABLE IF NOT EXISTS blog.roles (
	id SERIAL PRIMARY KEY,
	user_role VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS blog.users (
	id SERIAL PRIMARY KEY,
	username VARCHAR (255) UNIQUE NOT NULL,
	email VARCHAR (255) UNIQUE,
	password_hash VARCHAR (32) NOT NULL,
	date_registered TIMESTAMP NOT NULL,
	role_id INTEGER NOT NULL,
	CONSTRAINT fk_roles
		FOREIGN KEY(role_id)
	  	REFERENCES blog.roles(id)
);

CREATE TABLE IF NOT EXISTS blog.countries (
	id SERIAL PRIMARY KEY,
	country VARCHAR (255) UNIQUE NOT NULL,
	iso_code CHAR(2) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS blog.trips (
	id SERIAL PRIMARY KEY,
	trip VARCHAR (255) UNIQUE NOT NULL,
	date_from TIMESTAMP NOT NULL,
	date_to TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS blog.posts (
	id SERIAL PRIMARY KEY,
	slug VARCHAR (255) UNIQUE NOT NULL,
	title VARCHAR (255) NOT NULL,
	content TEXT NOT NULL,
	posted_at TIMESTAMP NOT NULL,
	user_id INTEGER NOT NULL,
	country_id INTEGER NOT NULL,
	trip_id INTEGER,
	CONSTRAINT fk_users
		FOREIGN KEY(user_id)
	  	REFERENCES blog.users(id),
	CONSTRAINT fk_countries
		FOREIGN KEY(country_id)
	  	REFERENCES blog.countries(id),
	CONSTRAINT fk_trips
		FOREIGN KEY(trip_id)
	  	REFERENCES blog.trips(id)
);
