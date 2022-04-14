CREATE DATABASE IF NOT EXISTS sudere;

USE sudere;

CREATE TABLE `lines`(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80) NOT NULL);

CREATE TABLE series(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80) NOT NULL);

CREATE TABLE centers(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80) NOT NULL);

INSERT INTO centers (name)
    VALUES 
        ('TSEE'),
        ('TLG'),
        ('TLL'),
        ('NST'),
        ('TALT'),
        ('TEE'),
        ('aucun');

CREATE TABLE users(
id VARCHAR(8) NOT NULL PRIMARY KEY ,
firstname VARCHAR(80) NOT NULL,
lastname VARCHAR(200) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
id_center INT NOT NULL,
access VARCHAR(80) NOT NULL,
CONSTRAINT fk_users_centers
    FOREIGN KEY (id_center) REFERENCES centers(id) ON UPDATE CASCADE ON DELETE CASCADE);



CREATE TABLE trains(
id INT NOT NULL PRIMARY KEY,
id_line INT NOT NULL,
id_serie INT NOT NULL,
CONSTRAINT fk_trains_lines 
    FOREIGN KEY (id_line) REFERENCES `lines`(id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_trains_series
    FOREIGN KEY (id_serie) REFERENCES series(id) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE trailers(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
number VARCHAR(3) NOT NULL,
date DATE,
`processing-time` INT,
id_train INT NOT NULL,
id_user VARCHAR(8),
CONSTRAINT fk_trailers_trains
    FOREIGN KEY (id_train) REFERENCES trains(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_trailers_users
    FOREIGN KEY (id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);



