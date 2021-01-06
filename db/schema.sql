CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger VARCHAR(25) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);