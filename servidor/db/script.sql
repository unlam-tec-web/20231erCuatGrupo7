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
/*COMICS*/
(1,'Infinity war','The Infinity War es una serie limitada de cómics de seis númerospublicada por Marvel Comics en 1992. La serie fue escrita por Jim Starlin y dibujada a lápiz por Ron Lim , Ian Laughlin, Al Milgrom , Jack Morelli y Christie Scheele.','Comic',500,'https://upload.wikimedia.org/wikipedia/en/4/4e/Infinity_War_1.jpg'),
(2,'BATMAN VOL. 3','En esta nueva colección de números 16-21 y BATMAN: THE DARK KNIGHT ANNUAL #1, las habilidades de detective de Batman se ponen a prueba cuando el Sombrerero Loco comienza a secuestrar ciudadanos de Ciudad Gótica con un propósito desconocido.','Comic',450,'https://static.dc.com/dc/files/default_images/BMTDK-v3-MAD_cvr_5320bb3d9856d9.23548792.jpg?w=640'),
(3,'Silk(2023) #2','¡BIENVENIDO AL SALVAJE, SALVAJE OESTE! La vieja némesis de Silk, Saya Ishii, la tiene atrapada en un mundo de sueños que se reinicia constantemente','Comic',250,'https://cdn.marvel.com/u/prod/marvel/i/mg/4/40/6494a8e8517c6/clean.jpg'),
(4,'Thor(2020) #35','¡EL FINAL QUE DESTRUYE EL MIDGARD DE "BLOOD OF THE FATHERS"! El Doctor Doom toma su posición final para controlar a toda la humanidad: ¡pasado, presente y futuro!','Comic',550,'https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/6494a8cb640b3/clean.jpg'),
(5,'Storm(2023) #1','¡STORM ENFRENTA EL RETROCESO DE SUS PODERES! Ororo Munroe, alias STORM, ha sido una ladrona, una diosa y una líder de los X-MEN, ¡y recién está comenzando!','Comic',600,'https://cdn.marvel.com/u/prod/marvel/i/mg/c/a0/646b6a2ec5e9c/clean.jpg'),

/*MANGAS*/

(6,'CHAINSAW MAN 01','Chainsaw Man narra la historia de Denji; un pobre infeliz que haría cualquier cosa por guita. Su padre se suicidó dejándole una deuda impagable con la mafia; jamás en su vida lo abrazaron y gracias si puede apuntar a comerse una rodaja de pan lactal por día.','Manga',500,'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/683542.jpg'),
(7,'PARASYTE Nº 05/08','Hace tiempo que Shinichi ha dejado de ser un chico normal de instituto. Desde que su cuerpo convive con un parásito; se ha convertido en un monstruo con cara y consciencia humana. Una lucha desesperada para salvar su propia alma y la de sus congéneres','Manga',750,'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/707472.jpg'),
(8,'ATAQUE A LOS TITANES','El objetivo de la policía militar central, que está bajo las órdenes directas del rey, es capturar a Eren e Historia. El cuerpo de exploración, ante el desenfreno del rey, ¡decide derrocar a la monarquía!','Manga',450,'https://www.normaeditorial.com/upload/media/albumes/0001/05/thumb_4753_albumes_big.jpeg'),
(9,'CHOUJIN X 5','Para convertirse en guardianes de Yamato Mori, Tokio y los demás van a entrenar a las Islas Bestias. Sin embargo, aparece un grupo de choujin, liderados por Chandra, que saben que allí se encuentra el choujin bestia y quieren capturarlo. ¿Podrán proteger a Tokio de estos poderosos enemigos?','Manga',550,'https://www.normaeditorial.com/upload/media/albumes/0001/26/thumb_25834_albumes_big.jpeg'),
(10,'ONE PIECE','One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salvó la vida, desea convertirse en el Rey de los Piratas y encontrar el tesoro conocido como One Piece, que pertenecía a Gol D. Roger. Antes de ser ejecutado, hace 24 años, este legendario pirata contó al mundo sobre la existencia de su tesoro','Manga',600,'https://tutopiaplace.com.ar/wp-content/uploads/2021/12/Sin-titulo-39.jpg'),

/*LIBROS*/

(11,'Los juegos del hambre','Doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre. Solo hay una regla: matar o morir.','Libro',550,'https://www.libros-prohibidos.com/wp-content/uploads/2015/01/los-juegos-del-hambre-300x451.jpg'),
(12,'El ladron del rayo','¿Qué pasaría si un día descubrieras que, en realidad, eres hijo de un dios griego que debe cumplir una misión secreta? Pues eso es lo que le sucede a Percy Jackson, que a partir de ese momento se dispone a vivir los acontecimientos más emocionantes de su vida.','Libro',750,'https://contentv2.tap-commerce.com/cover/large/9789878000183_1.jpg?id_com=1113'),
(13,'El alma del brujo','La magia y la guerra son cosas que nunca deberian mezclarse.Sangre con sangre. Muerte con muerte. La magia llama a la magia. La sangre llama a la sangre. Londres, 1940. Liang Shelby es una superviviente de la llamada Tragedia dela Academia Covenant. Intenta olvidar lo que ocurrio mientras trabaja como aprendiz en la Torre de Londres','Libro',350,'https://contentv2.tap-commerce.com/cover/large/9789878977478_1.jpg?id_com=1113'),
(14,'Harry Potter #4','Otro deplorable verano con los Dursley llega a su fin y Harry está impaciente por regresar a Hogwarts. A sus catorce años, sólo desea ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios y asistir a los Mundiales de quidditch. Sin embargo, en Hogwarts le espera un desafío de grandes proporciones, por lo que tendrá que demostrar que ya no es un niño y que está preparado','Libro',1000,'https://images.cdn2.buscalibre.com/fit-in/360x360/26/bf/26bfbb07586addb839fb8864437447d5.jpg'),
(15,'Narnia #4','Un clásico de la literatura infantil con el que descubrir un nuevo mundo lleno de seres mitológicos, animales parlantes y brujas malvadas.El príncipe lucha por su corona, al tiempo que descubre la verdadera historia de su pueblo, los telmarinos, unos auténticos piratas terrestres…Los Pevensie acuden a Narnia de nuevo para a yudar al príncipe a recuperar el trono.','Libro',800,'https://images.cdn2.buscalibre.com/fit-in/360x360/47/ef/47ef410d07fcb7ccfd8f74c027747693.jpg');