/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS EcoGuide;

CREATE DATABASE EcoGuide;

USE EcoGuide;

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  item_name varchar(255) NOT NULL UNIQUE,
  image_name varchar(255) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE recycalable (
  id int NOT NULL AUTO_INCREMENT,
  city_id int,
  item_id int,
  isRecycalable boolean,
  PRIMARY KEY (ID)
);

ALTER TABLE recycalable ADD FOREIGN KEY (city_id) REFERENCES cities (id);
ALTER TABLE recycalable ADD FOREIGN KEY (item_id) REFERENCES items (id);

INSERT INTO cities (id, name,) VALUES (1, "Boulder");
INSERT INTO cities (id, name) VALUES (2, "Austin");
INSERT INTO items (id, item_name) VALUES (1, "aluminum can");
INSERT INTO items (id, item_name) VALUES (2, "glass bottle");
