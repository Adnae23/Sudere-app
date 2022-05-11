DROP DATABASE sudere;

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

CREATE TABLE profiles(
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

INSERT INTO profiles (name)
    VALUES
        ('ADMIN'),
        ('REFERENT'),
        ('UTILISATEUR');

CREATE TABLE users(
id VARCHAR(8) NOT NULL PRIMARY KEY ,
firstname VARCHAR(80) NOT NULL,
lastname VARCHAR(200) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
id_center INT NOT NULL,
id_profile INT NOT NULL,
CONSTRAINT fk_users_centers
    FOREIGN KEY (id_center) REFERENCES centers(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_users_profiles
    FOREIGN KEY (id_profile) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE);

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
processingTime INT,
id_train INT NOT NULL,
id_user VARCHAR(8) DEFAULT '8709168M',
CONSTRAINT fk_trailers_trains
    FOREIGN KEY (id_train) REFERENCES trains(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_trailers_users
    FOREIGN KEY (id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE);

INSERT INTO users (id, firstname, lastname, email, password, id_profile, id_center)
    VALUES
    ('8709168M', 'Anais', 'Roussy Renard', 'anais.renard@sncf.fr', '$argon2id$v=19$m=65536,t=5,p=1$ghwLB4UR+t/RVJg9oIecZw$AqkL4hZ/N7J3iNQZyWBBdbiXzLtU40Q4QE1Et756a5M', 1, 7),
    ('8902809S', 'Gael', 'Douence', 'gaeldouence@sncf.fr', '$argon2id$v=19$m=65536,t=5,p=1$ghwLB4UR+t/RVJg9oIecZw$AqkL4hZ/N7J3iNQZyWBBdbiXzLtU40Q4QE1Et756a5M', 1, 7);

