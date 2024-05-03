-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2024 a las 19:54:04
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bloggin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria_nombre` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria_nombre`) VALUES
(1, 'reflexion'),
(2, 'alegria'),
(3, 'emocion'),
(5, 'enojo'),
(6, 'tristeza'),
(7, 'depresion'),
(8, 'meditacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_publicaciones`
--

CREATE TABLE `categoria_publicaciones` (
  `id_cp` int(11) NOT NULL,
  `id_publicaciones` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `id_publicaciones` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id_comentario`, `comentario`, `id_publicaciones`, `id_usuario`) VALUES
(1, 'me alegro por ti', 2, 3),
(2, 'hay que tener cuidado aveces hay malas personas ', 1, 4),
(3, 'tienes razon aveces hay canciones justo con la situacion que uno pasa', 3, 3),
(4, 'si es cierto yo pase lo mismo me senti identificada varias veces', 3, 4),
(5, 'felicidades por tu logroo', 2, 2),
(6, 'puedes pasarme el dato de la persona para poder restringirla', 1, 1),
(8, 'si tendre mas cuidado gracias', 1, 3),
(9, 'si tendre un poco mas de cuidado con esas estafas gracias por el fato', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_publicaciones` int(11) NOT NULL,
  `titulo` varchar(250) DEFAULT NULL,
  `contenido` varchar(500) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id_publicaciones`, `titulo`, `contenido`, `id_usuario`) VALUES
(1, 'reclamo sobre una estafa', 'quiero reclamar que me siento estafado despues de haber comprado un producto en linea', 3),
(2, 'graduadooo', 'me siento feliz por haber culminado mis extudios con exito!!!!!!', 4),
(3, 'me siento raro', 'tengo colicos', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `rol_nombre` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `rol_nombre`) VALUES
(1, 'admin'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario_nombre` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `pasword` varchar(200) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario_nombre`, `email`, `pasword`, `id_rol`) VALUES
(1, 'bogui', 'boris231297@gmail.com', 'zarate123', 1),
(2, 'milagrostasayco', 'mili24@gmail.com', 'miltasayco123', 1),
(3, 'jesusito', 'jesus1990@gmail.com', 'jesus231412', 2),
(4, 'liacontreras', 'lia.contreras@gmail.com', 'lia5647322312', 2),
(5, 'maui', 'maui2312@gmail.com', 'maui232', 2),
(6, 'guiomar', 'guiomar@gmail.com', 'guio233456', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `categoria_publicaciones`
--
ALTER TABLE `categoria_publicaciones`
  ADD PRIMARY KEY (`id_cp`),
  ADD KEY `id_publicaciones` (`id_publicaciones`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_publicaciones` (`id_publicaciones`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_publicaciones`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `categoria_publicaciones`
--
ALTER TABLE `categoria_publicaciones`
  MODIFY `id_cp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_publicaciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria_publicaciones`
--
ALTER TABLE `categoria_publicaciones`
  ADD CONSTRAINT `categoria_publicaciones_ibfk_1` FOREIGN KEY (`id_publicaciones`) REFERENCES `publicaciones` (`id_publicaciones`),
  ADD CONSTRAINT `categoria_publicaciones_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_publicaciones`) REFERENCES `publicaciones` (`id_publicaciones`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `publicaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
