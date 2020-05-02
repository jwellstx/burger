DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` INT NOT NULL PRIMARY KEY auto_increment,
    `burger_name` VARCHAR(255) NOT NULL,
    `devoured` BOOLEAN NOT NULL
);