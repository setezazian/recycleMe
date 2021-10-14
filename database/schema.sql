/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS recycle;

CREATE DATABASE recycle;

USE recycle;

CREATE TABLE cities (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  image_url varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE recyclable (
  id int NOT NULL AUTO_INCREMENT,
  city_id int,
  item_id int,
  is_recyclable boolean,
  PRIMARY KEY (ID)
);

ALTER TABLE recyclable ADD FOREIGN KEY (city_id) REFERENCES cities (id);
ALTER TABLE recyclable ADD FOREIGN KEY (item_id) REFERENCES items (id);

INSERT INTO cities (id, name) VALUES (1, "Boulder");
INSERT INTO cities (id, name) VALUES (2, "Austin");
INSERT INTO items (id, name, image_url) VALUES (1, "aluminum can", "https://www.pngkey.com/png/detail/388-3884517_shindig-glass-jar-glass.png");
INSERT INTO items (id, name, image_url) VALUES (2, "glass bottle", "https://static.turbosquid.com/Preview/001309/068/JC/_600.jpg");
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (1, 1, 1, true);
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (2, 1, 2, true);
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (3, 2, 2, false);