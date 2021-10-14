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
  image1_url varchar(255) NOT NULL,
  image2_url varchar(255) NOT NULL,
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
INSERT INTO items (id, name, image1_url, image2_url) VALUES (1, "glass bottle", "https://atlas-content-cdn.pixelsquid.com/stock-images/mason-jar-G9m2aPB-600.jpg", "https://i5.walmartimages.com/asr/dc43bf0c-8069-4223-a9a5-a7c80e2b3a22_1.1f9e0aa653ddb87864e7b2b93cb7c06f.jpeg");
INSERT INTO items (id, name, image1_url, image2_url) VALUES (2, "aluminum can", "https://static.turbosquid.com/Preview/001309/068/JC/_600.jpg", "https://cdn11.bigcommerce.com/s-neo29sbo9q/images/stencil/1280x1280/products/5413/17284/3100T15-WB__09261.1537452952.jpg?c=2");
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (1, 1, 1, true);
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (2, 1, 2, true);
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (3, 2, 1, true);
INSERT INTO recyclable (id, city_id, item_id, is_recyclable) VALUES (4, 2, 2, false);