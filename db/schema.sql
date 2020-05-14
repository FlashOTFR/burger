### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id),
    devoured BOOLEAN DEFAULT false
);