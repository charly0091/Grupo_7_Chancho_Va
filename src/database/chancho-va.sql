CREATE DATABASE  IF NOT EXISTS `chanchova`;
use `chanchova`;

-- chancho_va.categories definition
DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES 
(1,'1'),
(2,'2'),
(3,'3');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

-- chancho_va.subcategories definition

DROP TABLE IF EXISTS `subcategories`;

CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES 
(1,'in-sale'),
(2,'visited');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

-- chancho_va.products definition

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `subCategory_id` int(11) NOT NULL,
  `description` varchar(800) NOT NULL,
  `image` varchar(100) DEFAULT 'imageDefault.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `category_fk` (`category_id`),
  KEY `subCategory_fk` (`subCategory_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subCategory_id`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES 
	(1,'Red 7', 3990, 10, 1, 1, 'Red 7 es un juego de cartas compacto, rápido y fluido, para 2 a 4 jugadores, que exige a fondo tu ingenio para ganar. Las reglas son muy fáciles ...¡Lástima que cambian todo el tiempo!', 'red7.PNG'),
	(2, 'Kingdomino', 6990, 0, 1, 2 , 'Kingdominio es un juego de 2 a 4 jugadores en el que sos un rey ambicioso buscando nuevas tierras para expandir tu reino, ¡pero cada tierra nueva es una ficha de dominó muy especial! Vas a tener que ir conectando los terrenos con inteligencia para formar tus territorios y conseguir la mayor cantidad de puntos posibles.', 'kingdomino.PNG'),
	(3, 'Yokai', 3990, 15, 1, 2, 'Yokai es un desafiante juego cooperativo en el que la comunicación entre jugadores esta limitada¡Deberán trabajar en equipo para apaciguar a estos seres legendarios y reunir a cada uno con su familia!', 'yokai.PNG'),
	(4, 'Pistas Cruzadas', 4490, 12, 1, 2, 'Pistas Cruzadas es un juego party cooperativo para todo tipo de reuniones, en el que vas a pensar pistas para conectar pares de palabras y que tus compañeros adivinen qué palabras cruzaste. Cuantas más coordenadas de la grilla cubran, más van a puntuar y a creerse conectados telepáticamente.', 'pistasCruzadas.PNG'),
	(5, 'Say My Name + Expansiones 2 Y 3', 11070, 20, 1, 2, 'En Say My Name el objetivo es adivinar la mayor cantidad de tarjetas lo más rápido posible, ¿como? Dándole pistas a tu equipo respetando las reglas de cada ronda', 'sayMyName.PNG'),
	(6, 'King Of Tokyo: Power Up', 5990, 0, 1, 1, '¡La lucha se potencia con PowerUp! Los moustros están mutando y evolucionan para sorprender a sus rivales. ¡La pelea nunca será la misma! Además, el hábil Pandakai se suma a los candidados a convertirse en ... ¡El verdadero Rey de Tokyo!', 'kingOfTokyo.PNG'),
	(7, 'Takenoko', 14900, 25, 1, 1, 'Takenoko es un juego para 2 a 4 jugadores que te permite convertirte en el Jardinero del Emperador y cuidar su jardín y a su hambriento panda. Incluye más de 4 docenas de segmentos de bambú de plástico y 28 parcelas de jardín con arte increíble, que, sumadas a las miniaturas, logran una visión única sobre el arte de la jardinería de bambú que es tan preciosa como divertida.', 'tekenoko.PNG'),
	(8, '¡Toma 6!', 4490, 0, 1, 1, 'Toma 6 es un juego de cartas para 2 a 10 jugadores, en el que intentás ubicar cada una de tus 10 cartas en las hileras que hay en la mesa sin que tu carta sea la sexta de una fila. ¿Suena sencillo? Lo es. ¿Suena fácil? Para nada, ¡hay otros jugadores buscando lo mismo!', 'toma6.PNG'),
	(9, 'Cartógrafos Héroes', 6990, 7, 1, 2, 'Cartógrafos Héroes es un juego roll and write donde todos los jugadores, a la vez y con los mismos recursos, tienen que crear un reino de la forma más eficiente posible. Tiene altísima rejugabilidad, gran valor para jugadores novatos y avanzados por igual y la posibilidad de ser jugado de uno a prácticamente todos los jugaadores que quieras.', 'cartografosHeroes.PNG'),
	(10, 'Bandido', 3490, 0, 1, 2, 'Bandido es un juego de colocación de cartas rápido y tenso, en el que intentás que el bandido no se escape de prisión. Es un juego cooperativo: todos los jugadores ganan juntos, o son humillados por una pequeña cajita de cartulina.', 'bandido.PNG'),
	(11, 'No Lo Testeamos Ni Un Poco', 3490, 7, 2, 2, 'Si buscás un juego lleno de estrategia...¡claramente no es este! En una partida TODO es posible: desde perder por un Piedra, Papel o Tijera hasta ganar por ser el más bajito.', 'noLoTesteamosNiUnPoco.PNG'),
	(12, 'No Lo Testeamos Ni Un Poco: Drinking', 1790, 0, 2, 1, 'Una Expansión con cartas que convierten tu NLTNUP en un drinking game. Se puede usar con cualquier tipo de bebida (con o sin alcohol). ¡Jugar con moderación!', 'noLoTesteamosNiUnPocoDrinking.PNG'),
	(13, 'Dungeons & Drinks', 6990, 10, 2, 1, 'Dungeons & Dinks, es un juego de 2 a 6 jugadores en el cual sos un héroe pasado de copas, que entra junto con sus amigos a un dungeon lleno de pelligros y monstruos que no molestaban a nadie', 'dungeonAndDrinks.PNG'),
	(14, 'No Lo Testeamos Ni Un Poco Expansiones', 17630, 20, 2, 1, 'Se reparten 2 cartas a cada jugador. En tu turno robás 1 carta del mazo y jugás 1 carta de tu mano. Hacés lo que dice la carta que jugaste. Luego sigue el jugador a tu izquierda', 'nolotesteamos.PNG'),
	(15, 'HDP', 8990, 3, 2, 2, 'Un juego de humor políticamente incorrecto. Uno de esos juegos donde respondés una carta negra con cartas blancas. Mucho humor negro en una caja pequeña que ademas tiene un mono. Una vuelta más en mi espiral de decadencia y hedonismo. Un ataque de palometas.', 'hdp.PNG'),
	(16, 'Prendete Fuego', 7490, 0, 2, 2, 'Prendete Fuego es un juego para personas capaces de hacer cualquier cosa con tal de ganar, y para los que quieren divertirse viéndolos.', 'prendeteFuego.PNG'),
	(17, 'Tomalo Vos', 2490, 0, 2, 2, 'Un juego ideal para tus previas, en el que tu objetivo es lograr que tus amigos/as tomen más que vos.', 'tomaloVos.PNG'),
	(18, 'Amigos De Mierda', 3490, 5, 2, 1, 'Amigos de Mierda es un juego ideal para romper amistades de toda la vida, caerle como el ojete a gente que acabás de conocer y/o arruinar cualquier tipo de reunión familiar.', 'amigosDeMierda.PNG'),
	(19, 'Decisiones De Mierda', 3490, 10, 2, 1, '¿Creés que tus amigos toman malas decisiones? Esperá a jugar Decisiones de Mierda De paso, vas a conocer nuevos aspectos (oscuros, muy oscuros) de tus amigos. Capaz te enteres que en el fondo son bastante mierdas,¡o capaz simplemente lo confirmes!', 'decisionesDeMierda.PNG'),
	(20, 'HDP Expansiones Numéricas', 10740, 15, 2, 1, 'Un juego de humor políticamente incorrecto. Uno de esos juegos donde respondés una carta negra con cartas blancas. Mucho humor negro en una caja pequeña que ademas tiene un mono. Una vuelta más en mi espiral de decadencia y hedonismo. Un ataque de palometas. Con todas sus expanciones.', 'hdp6.PNG'),
	(21, 'Descifrá El Código', 6990, 10, 3, 2, 'Hay un código oculto, compuesto por números de distintos colores. ¿Tu objetivo? Descubrirlo antes que los demás. Todos tienen una parte de la información: Vas a tener que elegir las preguntas mas efectivas para interrogar a tus rivales y descubrir qué es lo que saben ellos. Después, activá tu cerebro, usá la lógica... ¡Y descifrá el código antes que los demás!', 'descifraElCodigo.PNG'),
	(22, 'Schotten Totten', 4490, 0, 3, 2, 'Schotten Totten es un jeugo para dos jugadores en el que manejás un clan escocés que está peleando por expandir su aldea. El buen uso de tus Guerreros y Especialistas son la clave de la vistoria.', 'schottenTotten.PNG'),
	(23, 'Little Town', 9900, 5, 3, 2, 'Little Town es un juego de colocación de trabajadores fácil de aprender pero con mucha profundidad, en el que recolectás recursos y construís edificios con el objetivo de ser declarado el mejor arquitecto del pueblo.', 'littleTown.PNG'),
	(24, 'Raccoon Tycoon', 15900, 10, 3, 1, 'Raccoon Tycoon es un juego de gestión de recursos y especulación económica, sencillo de explicar y con turnos rápidos. Vas a pasártela produciendo ítems y mirando de reojo los precios del mercado, preguntándote en cada turno si es el momento de vender antes que lo haga otro, o mejor de comprar e invertir.', 'raccoonTycoon.PNG'),
	(25, 'Roll Player', 19900, 7, 3, 1, 'Tirá dados, armá tu personaje, equipalo para una aventura de fantasía medieval clásica y ganá puntos de reputación por haber creado al personaje perfecto.', 'rollPlayer.PNG'),
	(26, 'Cartógrafos', 6990, 0, 3, 1, 'Cartógrafos es un juego roll & write donde todos los jugadores, con exactamente los mismos recursos, tienen que crear un reino de la forma m{as eficiente posible ', 'cartografos.PNG'),
	(27, 'Ecos, Primer Continente', 15900, 7, 3, 2, 'En Ecos: Primer Continente, los jugadores van creando el planeta y poblándolo de especies, pero cada uno tiene su propia agenda y sus propias acciones disponibles. Simple de aprender, tiene muchísima profundida y una rejugabilidad enorme.', 'ecosPrimerContinente.PNG'),
	(28, 'Montañas De La Locura', 14900, 15, 3, 2, 'Montañas De La Locura es un juego cooperativo de estrategia inspirado en la obra de H.P. Lovecraft (La llamada de Cthulhu, La sombra sobre Innsmouth), con mucha estrategia y algo de humor. Cada jugador se pone en la piel de un científico en búsqueda de las reliquias de una ciudad antigua. Solo el trabajo en equipo los salvará de no caer en ¡La locura!', 'montañaDeLaLocura.PNG'),
	(29, 'Papillon', 15900, 10, 3, 2, 'Papillon es un juego muy competitivo con distintos caminos hacia la victoria. Eso sí: ganes o pierdas, al final vas a regodearte contemplando los jardínes florecidos (¡Salvo que te dé alergia!)', 'papillon.PNG'),
	(30, 'Raids', 12900, 7, 3, 2, 'Raids es un jeugo ágil y fluido, con turnos cortos pero repletos de decisiones importantes, en los que vas a elegir a qué puerto llegar antes que los demás para así obetener sus beneficios. Pero cuidado, si otro llega junto a vos... habrá que luchar por esa fichita preciada.', 'raids.PNG'),
	(31, 'prueba', 1545, 14, 2, 2, '"xzc"sdasd', '');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

-- chancho_va.roles definition

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES 
(1,'admin'),
(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;



-- chancho_va.users definition

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(11) DEFAULT 2,
  `avatar` varchar(100) DEFAULT 'defaultImagePerfil.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `id_UNIQUE2` (`email`),
  KEY `role_fk` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
	(1, 'Veronica','Vargas', 'Vero@veronikos.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(2, 'Nicolas','Sosa', 'Nico@veronikos.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(3, 'Braian','Briseña', 'Braian@veronikos.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(4, 'Javier','Arias', 'Javi@veronikos.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(5, 'Carlos','Pinto', 'Charly@veronikos.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(6, 'Brenda','Prueba', 'brenda@gmail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png'),
	(7, 'Elisabeth','Prueba', 'elisabeth@gmail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png'),
	(8, 'Mariano','Prueba', 'mariano@gmail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png'),
	(9, 'Jose','Prueba', 'jose@gmail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png'),
	(10, 'Tomas','Prueba', 'tomas@gmail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png'),
	(11, 'Admin','Prueba', 'admin@mail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 1, 'defaultImagePerfil.png'),
	(12, 'User','Prueba', 'user@mail.com', '$2a$10$NpDmFDe3uAOUo7xwZluyjuinPD/7RVJ3c5VWA7IzyHfvk8apX1cxO', 2, 'defaultImagePerfil.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


