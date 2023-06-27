CREATE DATABASE IF NOT EXISTS knockout;

USE knockout;

CREATE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250) DEFAULT NULL,
    descripcion VARCHAR(250) DEFAULT NULL,
    clasificacion VARCHAR(250) DEFAULT NULL,
    precio float DEFAULT NULL,
    imagen VARCHAR(250) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE productos;

INSERT INTO productos VALUES
(1,'Infinity war','The Infinity War es una serie limitada de cómics de seis númerospublicada por Marvel Comics en 1992. La serie fue escrita por Jim Starlin y dibujada a lápiz por Ron Lim , Ian Laughlin, Al Milgrom , Jack Morelli y Christie Scheele.','comic',500,'https://upload.wikimedia.org/wikipedia/en/4/4e/Infinity_War_1.jpg'),
(2,'BATMAN: EL CABALLERO OSCURO VOL. 3','En esta nueva colección de números 16-21 y BATMAN: THE DARK KNIGHT ANNUAL #1, las habilidades de detective de Batman se ponen a prueba cuando el Sombrerero Loco comienza a secuestrar ciudadanos de Ciudad Gótica con un propósito desconocido.','comic',450,'https://static.dc.com/dc/files/default_images/BMTDK-v3-MAD_cvr_5320bb3d9856d9.23548792.jpg?w=640'),
(3,'Silk(2023) #2','¡BIENVENIDO AL SALVAJE, SALVAJE OESTE! La vieja némesis de Silk, Saya Ishii, la tiene atrapada en un mundo de sueños que se reinicia constantemente','comic',250,'https://cdn.marvel.com/u/prod/marvel/i/mg/4/40/6494a8e8517c6/clean.jpg'),
(4,'Thor(2020) #35','¡EL FINAL QUE DESTRUYE EL MIDGARD DE "BLOOD OF THE FATHERS"! El Doctor Doom toma su posición final para controlar a toda la humanidad: ¡pasado, presente y futuro!','comic',550,'https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/6494a8cb640b3/clean.jpg'),
(5,'Storm(2023) #1','¡STORM ENFRENTA EL RETROCESO DE SUS PODERES! Ororo Munroe, alias STORM, ha sido una ladrona, una diosa y una líder de los X-MEN, ¡y recién está comenzando!','comic',600,'https://cdn.marvel.com/u/prod/marvel/i/mg/c/a0/646b6a2ec5e9c/clean.jpg');