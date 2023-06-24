CREATE DATABASE IF NOT EXISTS knockout;

USE knockout;

CREATE TABLE productos(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200) DEFAULT NULL,
    descripcion VARCHAR(200) DEFAULT NULL,
    clasificacion VARCHAR(200) DEFAULT NULL,
    precio DOUBLE DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE productos;

INSER INTO productos VALUES
(1,'Infinity war 1','comic del año 2010','comic',500),
(2,'Infinity war 2','comic del año 2012','comic',450),
(3,'Infinity war 3','comic del año 2015','comic',250),
(4,'Infinity war 4','comic del año 2018','comic',550),
(5,'Infinity war 5','comic del año 2020','comic',600);