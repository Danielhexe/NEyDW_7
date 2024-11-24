-- MySQL dump 10.13  Distrib 5.7.15, for Win32 (AMD64)
--
-- Host: localhost    Database: Eq7ComidaOrganica
-- ------------------------------------------------------
-- Server version	5.7.15-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alimentos`
--

DROP TABLE IF EXISTS `alimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alimentos` (
  `id` int(11) NOT NULL,
  `nomprod` char(50) DEFAULT NULL,
  `cantidad` varchar(5) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alimentos`
--

LOCK TABLES `alimentos` WRITE;
/*!40000 ALTER TABLE `alimentos` DISABLE KEYS */;
INSERT INTO `alimentos` VALUES (1,'Quinoa Organica','1Kg',180),(2,'Harina de Trigo Integral Organica','1Kg',70),(3,'Leche Organica','1Lt',60),(4,'Pan de Caja Integral Organico','680gr',100),(5,'Cafe Organico','250gr',150),(6,'Huevos Organicos','12pz',120),(7,'Mermelada Organica','350gr',120);
/*!40000 ALTER TABLE `alimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `nombreprod` char(50) NOT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`nombreprod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `infocliente`
--

DROP TABLE IF EXISTS `infocliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `infocliente` (
  `telef` varchar(10) NOT NULL,
  `nombre` char(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `numtarj` varchar(16) DEFAULT NULL,
  `ccv` varchar(3) DEFAULT NULL,
  `fechavenc` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`telef`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infocliente`
--

LOCK TABLES `infocliente` WRITE;
/*!40000 ALTER TABLE `infocliente` DISABLE KEYS */;
INSERT INTO `infocliente` VALUES ('5554977343','Maria Fernanda Martinez Jimenez','C Rio Mixcoac Mz 4 Lt 34 Alvaro Obregon','0123456789123654','123','0525');
/*!40000 ALTER TABLE `infocliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proteinas`
--

DROP TABLE IF EXISTS `proteinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proteinas` (
  `id` int(11) NOT NULL,
  `marca` char(50) DEFAULT NULL,
  `nomprod` char(50) DEFAULT NULL,
  `gramaje` varchar(5) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proteinas`
--

LOCK TABLES `proteinas` WRITE;
/*!40000 ALTER TABLE `proteinas` DISABLE KEYS */;
INSERT INTO `proteinas` VALUES (100,'Orgain','Plant Based','500gr',800),(101,'Garden of Life','Raw Organic Protein','576gr',1300),(102,'Vital Proteins','Organic Whey Protein','454gr',1100);
/*!40000 ALTER TABLE `proteinas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-23 23:09:00
