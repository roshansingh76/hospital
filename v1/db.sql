-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

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
-- Table structure for table `astro_account_info`
--

DROP TABLE IF EXISTS `astro_account_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `astro_account_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(125) NOT NULL,
  `ifsc` varchar(125) NOT NULL,
  `account_number` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astro_account_info`
--

LOCK TABLES `astro_account_info` WRITE;
/*!40000 ALTER TABLE `astro_account_info` DISABLE KEYS */;
INSERT INTO `astro_account_info` VALUES (2,37,'nghj','jf75755757',2147483647,'2020-02-21 12:33:36','2020-02-21 07:03:36'),(3,38,'nghj','jf75755757',2147483647,'2020-02-21 12:36:57','2020-02-21 07:06:57'),(4,39,'nghj','jf75755757',2147483647,'2020-02-21 12:39:44','2020-02-21 07:09:44'),(5,40,'nghj','jf75755757',2147483647,'2020-02-21 14:00:56','2020-02-21 08:30:56');
/*!40000 ALTER TABLE `astro_account_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `astro_expertise`
--

DROP TABLE IF EXISTS `astro_expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `astro_expertise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `expertise_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astro_expertise`
--

LOCK TABLES `astro_expertise` WRITE;
/*!40000 ALTER TABLE `astro_expertise` DISABLE KEYS */;
INSERT INTO `astro_expertise` VALUES (1,31,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,31,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,31,7,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,37,1,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(5,37,7,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(6,37,2,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(7,38,1,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(8,38,2,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(9,38,7,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(10,39,1,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(11,39,2,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(12,39,7,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(13,40,1,'2020-02-21 14:00:56','0000-00-00 00:00:00'),(14,40,7,'2020-02-21 14:00:56','0000-00-00 00:00:00'),(15,40,2,'2020-02-21 14:00:56','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `astro_expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `astro_languages`
--

DROP TABLE IF EXISTS `astro_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `astro_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astro_languages`
--

LOCK TABLES `astro_languages` WRITE;
/*!40000 ALTER TABLE `astro_languages` DISABLE KEYS */;
INSERT INTO `astro_languages` VALUES (1,31,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,31,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,37,1,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(4,37,2,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(5,38,1,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(6,38,2,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(7,39,1,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(8,39,2,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(9,40,1,'2020-02-21 14:00:56','0000-00-00 00:00:00'),(10,40,2,'2020-02-21 14:00:56','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `astro_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `astro_price_info`
--

DROP TABLE IF EXISTS `astro_price_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `astro_price_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `chat_price` decimal(10,0) NOT NULL,
  `call_price` decimal(10,0) NOT NULL,
  `report_price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astro_price_info`
--

LOCK TABLES `astro_price_info` WRITE;
/*!40000 ALTER TABLE `astro_price_info` DISABLE KEYS */;
INSERT INTO `astro_price_info` VALUES (1,32,12,4,2,'2020-02-21 12:24:24','0000-00-00 00:00:00'),(2,33,12,4,2,'2020-02-21 12:25:36','0000-00-00 00:00:00'),(3,34,12,4,2,'2020-02-21 12:28:36','0000-00-00 00:00:00'),(4,35,12,4,2,'2020-02-21 12:28:36','0000-00-00 00:00:00'),(5,36,12,4,2,'2020-02-21 12:28:48','0000-00-00 00:00:00'),(6,37,12,4,2,'2020-02-21 12:33:36','0000-00-00 00:00:00'),(7,38,12,4,2,'2020-02-21 12:36:57','0000-00-00 00:00:00'),(8,39,12,4,2,'2020-02-21 12:39:44','0000-00-00 00:00:00'),(9,40,12,4,2,'2020-02-21 14:00:56','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `astro_price_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `astro_profile_info`
--

DROP TABLE IF EXISTS `astro_profile_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `astro_profile_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `experience` int(11) NOT NULL,
  `about` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `astro_profile_info`
--

LOCK TABLES `astro_profile_info` WRITE;
/*!40000 ALTER TABLE `astro_profile_info` DISABLE KEYS */;
INSERT INTO `astro_profile_info` VALUES (1,37,3,'jhfghj','2020-02-21 12:33:36','2020-02-21 07:03:36'),(2,38,3,'jhfghj','2020-02-21 12:36:57','2020-02-21 07:06:57'),(3,39,3,'jhfghj','2020-02-21 12:39:44','2020-02-21 07:09:44'),(4,40,3,'jhfghj','2020-02-21 14:00:56','2020-02-21 08:30:56');
/*!40000 ALTER TABLE `astro_profile_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cb_menus`
--

DROP TABLE IF EXISTS `cb_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cb_menus` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_number` int(11) NOT NULL DEFAULT '0',
  `cb_modules_id` int(11) DEFAULT NULL,
  `parent_cb_menus_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cb_menus`
--

LOCK TABLES `cb_menus` WRITE;
/*!40000 ALTER TABLE `cb_menus` DISABLE KEYS */;
INSERT INTO `cb_menus` VALUES (3,'Users',NULL,NULL,'module',0,2,NULL),(4,'Manage Users',NULL,NULL,'module',0,3,3),(5,'Packages','fa fa-list-alt',NULL,'module',1,4,NULL);
/*!40000 ALTER TABLE `cb_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cb_modules`
--

DROP TABLE IF EXISTS `cb_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cb_modules` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_column_build` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cb_modules`
--

LOCK TABLES `cb_modules` WRITE;
/*!40000 ALTER TABLE `cb_modules` DISABLE KEYS */;
INSERT INTO `cb_modules` VALUES (2,'Users','fa fa-bars','users','AdminUsersController','[{\"column_label\":\"Name\",\"column_field\":\"name\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Email\",\"column_field\":\"email\",\"column_type\":\"email\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Email Verified At\",\"column_field\":\"email_verified_at\",\"column_type\":\"datetime\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Photo\",\"column_field\":\"photo\",\"column_type\":\"image\",\"column_file_encrypt\":\"on\",\"column_image_width\":\"400\",\"column_image_height\":\"400\",\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Cb Role\",\"column_field\":\"cb_roles_id\",\"column_type\":\"select_table\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":\"cb_roles\",\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":\"id\",\"column_option_display\":\"name\",\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[{\"column\":\"id\",\"primary_key\":true,\"display\":false},{\"column\":\"name\",\"primary_key\":false,\"display\":true}]}]'),(3,'Manage Users','fa fa-user-circle','users','AdminManageUsersController','[{\"column_label\":\"Name\",\"column_field\":\"name\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Email\",\"column_field\":\"email\",\"column_type\":\"email\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Email Verified At\",\"column_field\":\"email_verified_at\",\"column_type\":\"datetime\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Photo\",\"column_field\":\"photo\",\"column_type\":\"image\",\"column_file_encrypt\":\"on\",\"column_image_width\":\"400\",\"column_image_height\":\"400\",\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Cb Role\",\"column_field\":\"cb_roles_id\",\"column_type\":\"select_table\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":\"cb_roles\",\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":\"id\",\"column_option_display\":\"name\",\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[{\"column\":\"id\",\"primary_key\":true,\"display\":false},{\"column\":\"name\",\"primary_key\":false,\"display\":true}]}]'),(4,'Packages','fa fa-heart','packages','AdminPackagesController','[{\"column_label\":\"Parentid\",\"column_field\":\"parentId\",\"column_type\":\"select_table\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":\"packages\",\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":\"id\",\"column_option_display\":\"title\",\"column_option_sql_condition\":null,\"column_options\":[{\"key\":null,\"label\":null}],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":\"parentId\",\"listTableColumns\":[{\"column\":\"id\",\"primary_key\":true,\"display\":false},{\"column\":\"parentId\",\"primary_key\":false,\"display\":false},{\"column\":\"title\",\"primary_key\":false,\"display\":true},{\"column\":\"sub_title\",\"primary_key\":false,\"display\":true},{\"column\":\"price\",\"primary_key\":false,\"display\":false},{\"column\":\"gov_fee\",\"primary_key\":false,\"display\":false},{\"column\":\"professional_fee\",\"primary_key\":false,\"display\":false},{\"column\":\"valid\",\"primary_key\":false,\"display\":false},{\"column\":\"photo\",\"primary_key\":false,\"display\":false},{\"column\":\"status\",\"primary_key\":false,\"display\":false},{\"column\":\"created_at\",\"primary_key\":false,\"display\":false},{\"column\":\"updated_at\",\"primary_key\":false,\"display\":false}]},{\"column_label\":\"Title\",\"column_field\":\"title\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Sub Title\",\"column_field\":\"sub_title\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Price\",\"column_field\":\"price\",\"column_type\":\"money\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Gov Fee\",\"column_field\":\"gov_fee\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Professional Fee\",\"column_field\":\"professional_fee\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Valid\",\"column_field\":\"valid\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Photo\",\"column_field\":\"photo\",\"column_type\":\"image\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]},{\"column_label\":\"Status\",\"column_field\":\"status\",\"column_type\":\"text\",\"column_file_encrypt\":\"on\",\"column_image_width\":null,\"column_image_height\":null,\"column_option_table\":null,\"column_date_format\":null,\"column_text_display_limit\":150,\"column_text_max\":255,\"column_text_min\":0,\"column_money_prefix\":null,\"column_money_precision\":null,\"column_money_thousand_separator\":null,\"column_money_decimal_separator\":null,\"column_option_value\":null,\"column_option_display\":null,\"column_option_sql_condition\":null,\"column_options\":[],\"column_sql_query\":null,\"column_help\":null,\"column_mandatory\":\"on\",\"column_browse\":\"on\",\"column_detail\":\"on\",\"column_edit\":\"on\",\"column_add\":\"on\",\"column_filterable\":null,\"column_foreign\":null,\"listTableColumns\":[]}]');
/*!40000 ALTER TABLE `cb_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cb_role_privileges`
--

DROP TABLE IF EXISTS `cb_role_privileges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cb_role_privileges` (
  `id` int(10) unsigned NOT NULL,
  `cb_roles_id` int(11) NOT NULL,
  `cb_menus_id` int(11) NOT NULL,
  `can_browse` tinyint(4) NOT NULL DEFAULT '1',
  `can_create` tinyint(4) NOT NULL DEFAULT '1',
  `can_read` tinyint(4) NOT NULL DEFAULT '1',
  `can_update` tinyint(4) NOT NULL DEFAULT '1',
  `can_delete` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cb_role_privileges`
--

LOCK TABLES `cb_role_privileges` WRITE;
/*!40000 ALTER TABLE `cb_role_privileges` DISABLE KEYS */;
INSERT INTO `cb_role_privileges` VALUES (3,2,3,1,1,1,1,1),(4,2,4,1,1,1,1,1),(5,2,5,1,1,1,1,1);
/*!40000 ALTER TABLE `cb_role_privileges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cb_roles`
--

DROP TABLE IF EXISTS `cb_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cb_roles` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cb_roles`
--

LOCK TABLES `cb_roles` WRITE;
/*!40000 ALTER TABLE `cb_roles` DISABLE KEYS */;
INSERT INTO `cb_roles` VALUES (2,'Admin');
/*!40000 ALTER TABLE `cb_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `state_id` (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'North and Middle Andaman',32),(2,'South Andaman',32),(3,'Nicobar',32),(4,'Adilabad',1),(5,'Anantapur',1),(6,'Chittoor',1),(7,'East Godavari',1),(8,'Guntur',1),(9,'Hyderabad',1),(10,'Kadapa',1),(11,'Karimnagar',1),(12,'Khammam',1),(13,'Krishna',1),(14,'Kurnool',1),(15,'Mahbubnagar',1),(16,'Medak',1),(17,'Nalgonda',1),(18,'Nellore',1),(19,'Nizamabad',1),(20,'Prakasam',1),(21,'Rangareddi',1),(22,'Srikakulam',1),(23,'Vishakhapatnam',1),(24,'Vizianagaram',1),(25,'Warangal',1),(26,'West Godavari',1),(27,'Anjaw',3),(28,'Changlang',3),(29,'East Kameng',3),(30,'Lohit',3),(31,'Lower Subansiri',3),(32,'Papum Pare',3),(33,'Tirap',3),(34,'Dibang Valley',3),(35,'Upper Subansiri',3),(36,'West Kameng',3),(37,'Barpeta',2),(38,'Bongaigaon',2),(39,'Cachar',2),(40,'Darrang',2),(41,'Dhemaji',2),(42,'Dhubri',2),(43,'Dibrugarh',2),(44,'Goalpara',2),(45,'Golaghat',2),(46,'Hailakandi',2),(47,'Jorhat',2),(48,'Karbi Anglong',2),(49,'Karimganj',2),(50,'Kokrajhar',2),(51,'Lakhimpur',2),(52,'Marigaon',2),(53,'Nagaon',2),(54,'Nalbari',2),(55,'North Cachar Hills',2),(56,'Sibsagar',2),(57,'Sonitpur',2),(58,'Tinsukia',2),(59,'Araria',4),(60,'Aurangabad',4),(61,'Banka',4),(62,'Begusarai',4),(63,'Bhagalpur',4),(64,'Bhojpur',4),(65,'Buxar',4),(66,'Darbhanga',4),(67,'Purba Champaran',4),(68,'Gaya',4),(69,'Gopalganj',4),(70,'Jamui',4),(71,'Jehanabad',4),(72,'Khagaria',4),(73,'Kishanganj',4),(74,'Kaimur',4),(75,'Katihar',4),(76,'Lakhisarai',4),(77,'Madhubani',4),(78,'Munger',4),(79,'Madhepura',4),(80,'Muzaffarpur',4),(81,'Nalanda',4),(82,'Nawada',4),(83,'Patna',4),(84,'Purnia',4),(85,'Rohtas',4),(86,'Saharsa',4),(87,'Samastipur',4),(88,'Sheohar',4),(89,'Sheikhpura',4),(90,'Saran',4),(91,'Sitamarhi',4),(92,'Supaul',4),(93,'Siwan',4),(94,'Vaishali',4),(95,'Pashchim Champaran',4),(96,'Bastar',36),(97,'Bilaspur',36),(98,'Dantewada',36),(99,'Dhamtari',36),(100,'Durg',36),(101,'Jashpur',36),(102,'Janjgir-Champa',36),(103,'Korba',36),(104,'Koriya',36),(105,'Kanker',36),(106,'Kawardha',36),(107,'Mahasamund',36),(108,'Raigarh',36),(109,'Rajnandgaon',36),(110,'Raipur',36),(111,'Surguja',36),(112,'Diu',29),(113,'Daman',29),(114,'Central Delhi',25),(115,'East Delhi',25),(116,'New Delhi',25),(117,'North Delhi',25),(118,'North East Delhi',25),(119,'North West Delhi',25),(120,'South Delhi',25),(121,'South West Delhi',25),(122,'West Delhi',25),(123,'North Goa',26),(124,'South Goa',26),(125,'Ahmedabad',5),(126,'Amreli District',5),(127,'Anand',5),(128,'Banaskantha',5),(129,'Bharuch',5),(130,'Bhavnagar',5),(131,'Dahod',5),(132,'The Dangs',5),(133,'Gandhinagar',5),(134,'Jamnagar',5),(135,'Junagadh',5),(136,'Kutch',5),(137,'Kheda',5),(138,'Mehsana',5),(139,'Narmada',5),(140,'Navsari',5),(141,'Patan',5),(142,'Panchmahal',5),(143,'Porbandar',5),(144,'Rajkot',5),(145,'Sabarkantha',5),(146,'Surendranagar',5),(147,'Surat',5),(148,'Vadodara',5),(149,'Valsad',5),(150,'Ambala',6),(151,'Bhiwani',6),(152,'Faridabad',6),(153,'Fatehabad',6),(154,'Gurgaon',6),(155,'Hissar',6),(156,'Jhajjar',6),(157,'Jind',6),(158,'Karnal',6),(159,'Kaithal',6),(160,'Kurukshetra',6),(161,'Mahendragarh',6),(162,'Mewat',6),(163,'Panchkula',6),(164,'Panipat',6),(165,'Rewari',6),(166,'Rohtak',6),(167,'Sirsa',6),(168,'Sonepat',6),(169,'Yamuna Nagar',6),(170,'Palwal',6),(171,'Bilaspur',7),(172,'Chamba',7),(173,'Hamirpur',7),(174,'Kangra',7),(175,'Kinnaur',7),(176,'Kulu',7),(177,'Lahaul and Spiti',7),(178,'Mandi',7),(179,'Shimla',7),(180,'Sirmaur',7),(181,'Solan',7),(182,'Una',7),(183,'Anantnag',8),(184,'Badgam',8),(185,'Bandipore',8),(186,'Baramula',8),(187,'Doda',8),(188,'Jammu',8),(189,'Kargil',8),(190,'Kathua',8),(191,'Kupwara',8),(192,'Leh',8),(193,'Poonch',8),(194,'Pulwama',8),(195,'Rajauri',8),(196,'Srinagar',8),(197,'Samba',8),(198,'Udhampur',8),(199,'Bokaro',34),(200,'Chatra',34),(201,'Deoghar',34),(202,'Dhanbad',34),(203,'Dumka',34),(204,'Purba Singhbhum',34),(205,'Garhwa',34),(206,'Giridih',34),(207,'Godda',34),(208,'Gumla',34),(209,'Hazaribagh',34),(210,'Koderma',34),(211,'Lohardaga',34),(212,'Pakur',34),(213,'Palamu',34),(214,'Ranchi',34),(215,'Sahibganj',34),(216,'Seraikela and Kharsawan',34),(217,'Pashchim Singhbhum',34),(218,'Ramgarh',34),(219,'Bidar',9),(220,'Belgaum',9),(221,'Bijapur',9),(222,'Bagalkot',9),(223,'Bellary',9),(224,'Bangalore Rural District',9),(225,'Bangalore Urban District',9),(226,'Chamarajnagar',9),(227,'Chikmagalur',9),(228,'Chitradurga',9),(229,'Davanagere',9),(230,'Dharwad',9),(231,'Dakshina Kannada',9),(232,'Gadag',9),(233,'Gulbarga',9),(234,'Hassan',9),(235,'Haveri District',9),(236,'Kodagu',9),(237,'Kolar',9),(238,'Koppal',9),(239,'Mandya',9),(240,'Mysore',9),(241,'Raichur',9),(242,'Shimoga',9),(243,'Tumkur',9),(244,'Udupi',9),(245,'Uttara Kannada',9),(246,'Ramanagara',9),(247,'Chikballapur',9),(248,'Yadagiri',9),(249,'Alappuzha',10),(250,'Ernakulam',10),(251,'Idukki',10),(252,'Kollam',10),(253,'Kannur',10),(254,'Kasaragod',10),(255,'Kottayam',10),(256,'Kozhikode',10),(257,'Malappuram',10),(258,'Palakkad',10),(259,'Pathanamthitta',10),(260,'Thrissur',10),(261,'Thiruvananthapuram',10),(262,'Wayanad',10),(263,'Alirajpur',11),(264,'Anuppur',11),(265,'Ashok Nagar',11),(266,'Balaghat',11),(267,'Barwani',11),(268,'Betul',11),(269,'Bhind',11),(270,'Bhopal',11),(271,'Burhanpur',11),(272,'Chhatarpur',11),(273,'Chhindwara',11),(274,'Damoh',11),(275,'Datia',11),(276,'Dewas',11),(277,'Dhar',11),(278,'Dindori',11),(279,'Guna',11),(280,'Gwalior',11),(281,'Harda',11),(282,'Hoshangabad',11),(283,'Indore',11),(284,'Jabalpur',11),(285,'Jhabua',11),(286,'Katni',11),(287,'Khandwa',11),(288,'Khargone',11),(289,'Mandla',11),(290,'Mandsaur',11),(291,'Morena',11),(292,'Narsinghpur',11),(293,'Neemuch',11),(294,'Panna',11),(295,'Rewa',11),(296,'Rajgarh',11),(297,'Ratlam',11),(298,'Raisen',11),(299,'Sagar',11),(300,'Satna',11),(301,'Sehore',11),(302,'Seoni',11),(303,'Shahdol',11),(304,'Shajapur',11),(305,'Sheopur',11),(306,'Shivpuri',11),(307,'Sidhi',11),(308,'Singrauli',11),(309,'Tikamgarh',11),(310,'Ujjain',11),(311,'Umaria',11),(312,'Vidisha',11),(313,'Ahmednagar',12),(314,'Akola',12),(315,'Amrawati',12),(316,'Aurangabad',12),(317,'Bhandara',12),(318,'Beed',12),(319,'Buldhana',12),(320,'Chandrapur',12),(321,'Dhule',12),(322,'Gadchiroli',12),(323,'Gondiya',12),(324,'Hingoli',12),(325,'Jalgaon',12),(326,'Jalna',12),(327,'Kolhapur',12),(328,'Latur',12),(329,'Mumbai City',12),(330,'Mumbai suburban',12),(331,'Nandurbar',12),(332,'Nanded',12),(333,'Nagpur',12),(334,'Nashik',12),(335,'Osmanabad',12),(336,'Parbhani',12),(337,'Pune',12),(338,'Raigad',12),(339,'Ratnagiri',12),(340,'Sindhudurg',12),(341,'Sangli',12),(342,'Solapur',12),(343,'Satara',12),(344,'Thane',12),(345,'Wardha',12),(346,'Washim',12),(347,'Yavatmal',12),(348,'Bishnupur',13),(349,'Churachandpur',13),(350,'Chandel',13),(351,'Imphal East',13),(352,'Senapati',13),(353,'Tamenglong',13),(354,'Thoubal',13),(355,'Ukhrul',13),(356,'Imphal West',13),(357,'East Garo Hills',14),(358,'East Khasi Hills',14),(359,'Jaintia Hills',14),(360,'Ri-Bhoi',14),(361,'South Garo Hills',14),(362,'West Garo Hills',14),(363,'West Khasi Hills',14),(364,'Aizawl',15),(365,'Champhai',15),(366,'Kolasib',15),(367,'Lawngtlai',15),(368,'Lunglei',15),(369,'Mamit',15),(370,'Saiha',15),(371,'Serchhip',15),(372,'Dimapur',16),(373,'Kohima',16),(374,'Mokokchung',16),(375,'Mon',16),(376,'Phek',16),(377,'Tuensang',16),(378,'Wokha',16),(379,'Zunheboto',16),(380,'Angul',17),(381,'Boudh',17),(382,'Bhadrak',17),(383,'Bolangir',17),(384,'Bargarh',17),(385,'Baleswar',17),(386,'Cuttack',17),(387,'Debagarh',17),(388,'Dhenkanal',17),(389,'Ganjam',17),(390,'Gajapati',17),(391,'Jharsuguda',17),(392,'Jajapur',17),(393,'Jagatsinghpur',17),(394,'Khordha',17),(395,'Kendujhar',17),(396,'Kalahandi',17),(397,'Kandhamal',17),(398,'Koraput',17),(399,'Kendrapara',17),(400,'Malkangiri',17),(401,'Mayurbhanj',17),(402,'Nabarangpur',17),(403,'Nuapada',17),(404,'Nayagarh',17),(405,'Puri',17),(406,'Rayagada',17),(407,'Sambalpur',17),(408,'Subarnapur',17),(409,'Sundargarh',17),(410,'Karaikal',27),(411,'Mahe',27),(412,'Puducherry',27),(413,'Yanam',27),(414,'Amritsar',18),(415,'Bathinda',18),(416,'Firozpur',18),(417,'Faridkot',18),(418,'Fatehgarh Sahib',18),(419,'Gurdaspur',18),(420,'Hoshiarpur',18),(421,'Jalandhar',18),(422,'Kapurthala',18),(423,'Ludhiana',18),(424,'Mansa',18),(425,'Moga',18),(426,'Mukatsar',18),(427,'Nawan Shehar',18),(428,'Patiala',18),(429,'Rupnagar',18),(430,'Sangrur',18),(431,'Ajmer',19),(432,'Alwar',19),(433,'Bikaner',19),(434,'Barmer',19),(435,'Banswara',19),(436,'Bharatpur',19),(437,'Baran',19),(438,'Bundi',19),(439,'Bhilwara',19),(440,'Churu',19),(441,'Chittorgarh',19),(442,'Dausa',19),(443,'Dholpur',19),(444,'Dungapur',19),(445,'Ganganagar',19),(446,'Hanumangarh',19),(447,'Juhnjhunun',19),(448,'Jalore',19),(449,'Jodhpur',19),(450,'Jaipur',19),(451,'Jaisalmer',19),(452,'Jhalawar',19),(453,'Karauli',19),(454,'Kota',19),(455,'Nagaur',19),(456,'Pali',19),(457,'Pratapgarh',19),(458,'Rajsamand',19),(459,'Sikar',19),(460,'Sawai Madhopur',19),(461,'Sirohi',19),(462,'Tonk',19),(463,'Udaipur',19),(464,'East Sikkim',20),(465,'North Sikkim',20),(466,'South Sikkim',20),(467,'West Sikkim',20),(468,'Ariyalur',21),(469,'Chennai',21),(470,'Coimbatore',21),(471,'Cuddalore',21),(472,'Dharmapuri',21),(473,'Dindigul',21),(474,'Erode',21),(475,'Kanchipuram',21),(476,'Kanyakumari',21),(477,'Karur',21),(478,'Madurai',21),(479,'Nagapattinam',21),(480,'The Nilgiris',21),(481,'Namakkal',21),(482,'Perambalur',21),(483,'Pudukkottai',21),(484,'Ramanathapuram',21),(485,'Salem',21),(486,'Sivagangai',21),(487,'Tiruppur',21),(488,'Tiruchirappalli',21),(489,'Theni',21),(490,'Tirunelveli',21),(491,'Thanjavur',21),(492,'Thoothukudi',21),(493,'Thiruvallur',21),(494,'Thiruvarur',21),(495,'Tiruvannamalai',21),(496,'Vellore',21),(497,'Villupuram',21),(498,'Dhalai',22),(499,'North Tripura',22),(500,'South Tripura',22),(501,'West Tripura',22),(502,'Almora',33),(503,'Bageshwar',33),(504,'Chamoli',33),(505,'Champawat',33),(506,'Dehradun',33),(507,'Haridwar',33),(508,'Nainital',33),(509,'Pauri Garhwal',33),(510,'Pithoragharh',33),(511,'Rudraprayag',33),(512,'Tehri Garhwal',33),(513,'Udham Singh Nagar',33),(514,'Uttarkashi',33),(515,'Agra',23),(516,'Allahabad',23),(517,'Aligarh',23),(518,'Ambedkar Nagar',23),(519,'Auraiya',23),(520,'Azamgarh',23),(521,'Barabanki',23),(522,'Badaun',23),(523,'Bagpat',23),(524,'Bahraich',23),(525,'Bijnor',23),(526,'Ballia',23),(527,'Banda',23),(528,'Balrampur',23),(529,'Bareilly',23),(530,'Basti',23),(531,'Bulandshahr',23),(532,'Chandauli',23),(533,'Chitrakoot',23),(534,'Deoria',23),(535,'Etah',23),(536,'Kanshiram Nagar',23),(537,'Etawah',23),(538,'Firozabad',23),(539,'Farrukhabad',23),(540,'Fatehpur',23),(541,'Faizabad',23),(542,'Gautam Buddha Nagar',23),(543,'Gonda',23),(544,'Ghazipur',23),(545,'Gorkakhpur',23),(546,'Ghaziabad',23),(547,'Hamirpur',23),(548,'Hardoi',23),(549,'Mahamaya Nagar',23),(550,'Jhansi',23),(551,'Jalaun',23),(552,'Jyotiba Phule Nagar',23),(553,'Jaunpur District',23),(554,'Kanpur Dehat',23),(555,'Kannauj',23),(556,'Kanpur Nagar',23),(557,'Kaushambi',23),(558,'Kushinagar',23),(559,'Lalitpur',23),(560,'Lakhimpur Kheri',23),(561,'Lucknow',23),(562,'Mau',23),(563,'Meerut',23),(564,'Maharajganj',23),(565,'Mahoba',23),(566,'Mirzapur',23),(567,'Moradabad',23),(568,'Mainpuri',23),(569,'Mathura',23),(570,'Muzaffarnagar',23),(571,'Pilibhit',23),(572,'Pratapgarh',23),(573,'Rampur',23),(574,'Rae Bareli',23),(575,'Saharanpur',23),(576,'Sitapur',23),(577,'Shahjahanpur',23),(578,'Sant Kabir Nagar',23),(579,'Siddharthnagar',23),(580,'Sonbhadra',23),(581,'Sant Ravidas Nagar',23),(582,'Sultanpur',23),(583,'Shravasti',23),(584,'Unnao',23),(585,'Varanasi',23),(586,'Birbhum',24),(587,'Bankura',24),(588,'Bardhaman',24),(589,'Darjeeling',24),(590,'Dakshin Dinajpur',24),(591,'Hooghly',24),(592,'Howrah',24),(593,'Jalpaiguri',24),(594,'Cooch Behar',24),(595,'Kolkata',24),(596,'Malda',24),(597,'Midnapore',24),(598,'Murshidabad',24),(599,'Nadia',24),(600,'North 24 Parganas',24),(601,'South 24 Parganas',24),(602,'Purulia',24),(603,'Uttar Dinajpur',24);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int(5) NOT NULL,
  `countryCode` char(2) NOT NULL DEFAULT '',
  `name` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'AD','Andorra'),(2,'AE','United Arab Emirates'),(3,'AF','Afghanistan'),(4,'AG','Antigua and Barbuda'),(5,'AI','Anguilla'),(6,'AL','Albania'),(7,'AM','Armenia'),(8,'AO','Angola'),(9,'AQ','Antarctica'),(10,'AR','Argentina'),(11,'AS','American Samoa'),(12,'AT','Austria'),(13,'AU','Australia'),(14,'AW','Aruba'),(15,'AX','Åland'),(16,'AZ','Azerbaijan'),(17,'BA','Bosnia and Herzegovina'),(18,'BB','Barbados'),(19,'BD','Bangladesh'),(20,'BE','Belgium'),(21,'BF','Burkina Faso'),(22,'BG','Bulgaria'),(23,'BH','Bahrain'),(24,'BI','Burundi'),(25,'BJ','Benin'),(26,'BL','Saint Barthélemy'),(27,'BM','Bermuda'),(28,'BN','Brunei'),(29,'BO','Bolivia'),(30,'BQ','Bonaire'),(31,'BR','Brazil'),(32,'BS','Bahamas'),(33,'BT','Bhutan'),(34,'BV','Bouvet Island'),(35,'BW','Botswana'),(36,'BY','Belarus'),(37,'BZ','Belize'),(38,'CA','Canada'),(39,'CC','Cocos [Keeling] Islands'),(40,'CD','Democratic Republic of the Congo'),(41,'CF','Central African Republic'),(42,'CG','Republic of the Congo'),(43,'CH','Switzerland'),(44,'CI','Ivory Coast'),(45,'CK','Cook Islands'),(46,'CL','Chile'),(47,'CM','Cameroon'),(48,'CN','China'),(49,'CO','Colombia'),(50,'CR','Costa Rica'),(51,'CU','Cuba'),(52,'CV','Cape Verde'),(53,'CW','Curacao'),(54,'CX','Christmas Island'),(55,'CY','Cyprus'),(56,'CZ','Czech Republic'),(57,'DE','Germany'),(58,'DJ','Djibouti'),(59,'DK','Denmark'),(60,'DM','Dominica'),(61,'DO','Dominican Republic'),(62,'DZ','Algeria'),(63,'EC','Ecuador'),(64,'EE','Estonia'),(65,'EG','Egypt'),(66,'EH','Western Sahara'),(67,'ER','Eritrea'),(68,'ES','Spain'),(69,'ET','Ethiopia'),(70,'FI','Finland'),(71,'FJ','Fiji'),(72,'FK','Falkland Islands'),(73,'FM','Micronesia'),(74,'FO','Faroe Islands'),(75,'FR','France'),(76,'GA','Gabon'),(77,'GB','United Kingdom'),(78,'GD','Grenada'),(79,'GE','Georgia'),(80,'GF','French Guiana'),(81,'GG','Guernsey'),(82,'GH','Ghana'),(83,'GI','Gibraltar'),(84,'GL','Greenland'),(85,'GM','Gambia'),(86,'GN','Guinea'),(87,'GP','Guadeloupe'),(88,'GQ','Equatorial Guinea'),(89,'GR','Greece'),(90,'GS','South Georgia and the South Sandwich Islands'),(91,'GT','Guatemala'),(92,'GU','Guam'),(93,'GW','Guinea-Bissau'),(94,'GY','Guyana'),(95,'HK','Hong Kong'),(96,'HM','Heard Island and McDonald Islands'),(97,'HN','Honduras'),(98,'HR','Croatia'),(99,'HT','Haiti'),(100,'HU','Hungary'),(101,'ID','Indonesia'),(102,'IE','Ireland'),(103,'IL','Israel'),(104,'IM','Isle of Man'),(105,'IN','India'),(106,'IO','British Indian Ocean Territory'),(107,'IQ','Iraq'),(108,'IR','Iran'),(109,'IS','Iceland'),(110,'IT','Italy'),(111,'JE','Jersey'),(112,'JM','Jamaica'),(113,'JO','Jordan'),(114,'JP','Japan'),(115,'KE','Kenya'),(116,'KG','Kyrgyzstan'),(117,'KH','Cambodia'),(118,'KI','Kiribati'),(119,'KM','Comoros'),(120,'KN','Saint Kitts and Nevis'),(121,'KP','North Korea'),(122,'KR','South Korea'),(123,'KW','Kuwait'),(124,'KY','Cayman Islands'),(125,'KZ','Kazakhstan'),(126,'LA','Laos'),(127,'LB','Lebanon'),(128,'LC','Saint Lucia'),(129,'LI','Liechtenstein'),(130,'LK','Sri Lanka'),(131,'LR','Liberia'),(132,'LS','Lesotho'),(133,'LT','Lithuania'),(134,'LU','Luxembourg'),(135,'LV','Latvia'),(136,'LY','Libya'),(137,'MA','Morocco'),(138,'MC','Monaco'),(139,'MD','Moldova'),(140,'ME','Montenegro'),(141,'MF','Saint Martin'),(142,'MG','Madagascar'),(143,'MH','Marshall Islands'),(144,'MK','Macedonia'),(145,'ML','Mali'),(146,'MM','Myanmar [Burma]'),(147,'MN','Mongolia'),(148,'MO','Macao'),(149,'MP','Northern Mariana Islands'),(150,'MQ','Martinique'),(151,'MR','Mauritania'),(152,'MS','Montserrat'),(153,'MT','Malta'),(154,'MU','Mauritius'),(155,'MV','Maldives'),(156,'MW','Malawi'),(157,'MX','Mexico'),(158,'MY','Malaysia'),(159,'MZ','Mozambique'),(160,'NA','Namibia'),(161,'NC','New Caledonia'),(162,'NE','Niger'),(163,'NF','Norfolk Island'),(164,'NG','Nigeria'),(165,'NI','Nicaragua'),(166,'NL','Netherlands'),(167,'NO','Norway'),(168,'NP','Nepal'),(169,'NR','Nauru'),(170,'NU','Niue'),(171,'NZ','New Zealand'),(172,'OM','Oman'),(173,'PA','Panama'),(174,'PE','Peru'),(175,'PF','French Polynesia'),(176,'PG','Papua New Guinea'),(177,'PH','Philippines'),(178,'PK','Pakistan'),(179,'PL','Poland'),(180,'PM','Saint Pierre and Miquelon'),(181,'PN','Pitcairn Islands'),(182,'PR','Puerto Rico'),(183,'PS','Palestine'),(184,'PT','Portugal'),(185,'PW','Palau'),(186,'PY','Paraguay'),(187,'QA','Qatar'),(188,'RE','Réunion'),(189,'RO','Romania'),(190,'RS','Serbia'),(191,'RU','Russia'),(192,'RW','Rwanda'),(193,'SA','Saudi Arabia'),(194,'SB','Solomon Islands'),(195,'SC','Seychelles'),(196,'SD','Sudan'),(197,'SE','Sweden'),(198,'SG','Singapore'),(199,'SH','Saint Helena'),(200,'SI','Slovenia'),(201,'SJ','Svalbard and Jan Mayen'),(202,'SK','Slovakia'),(203,'SL','Sierra Leone'),(204,'SM','San Marino'),(205,'SN','Senegal'),(206,'SO','Somalia'),(207,'SR','Suriname'),(208,'SS','South Sudan'),(209,'ST','São Tomé and Príncipe'),(210,'SV','El Salvador'),(211,'SX','Sint Maarten'),(212,'SY','Syria'),(213,'SZ','Swaziland'),(214,'TC','Turks and Caicos Islands'),(215,'TD','Chad'),(216,'TF','French Southern Territories'),(217,'TG','Togo'),(218,'TH','Thailand'),(219,'TJ','Tajikistan'),(220,'TK','Tokelau'),(221,'TL','East Timor'),(222,'TM','Turkmenistan'),(223,'TN','Tunisia'),(224,'TO','Tonga'),(225,'TR','Turkey'),(226,'TT','Trinidad and Tobago'),(227,'TV','Tuvalu'),(228,'TW','Taiwan'),(229,'TZ','Tanzania'),(230,'UA','Ukraine'),(231,'UG','Uganda'),(232,'UM','U.S. Minor Outlying Islands'),(233,'US','United States'),(234,'UY','Uruguay'),(235,'UZ','Uzbekistan'),(236,'VA','Vatican City'),(237,'VC','Saint Vincent and the Grenadines'),(238,'VE','Venezuela'),(239,'VG','British Virgin Islands'),(240,'VI','U.S. Virgin Islands'),(241,'VN','Vietnam'),(242,'VU','Vanuatu'),(243,'WF','Wallis and Futuna'),(244,'WS','Samoa'),(245,'XK','Kosovo'),(246,'YE','Yemen'),(247,'YT','Mayotte'),(248,'ZA','South Africa'),(249,'ZM','Zambia'),(250,'ZW','Zimbabwe');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expertise`
--

DROP TABLE IF EXISTS `expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expertise` (
  `id` int(11) NOT NULL,
  `expertise_name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expertise`
--

LOCK TABLES `expertise` WRITE;
/*!40000 ALTER TABLE `expertise` DISABLE KEYS */;
INSERT INTO `expertise` VALUES (1,'Vedic Astrology'),(2,'Tarot Card Reading'),(3,'Numerology'),(4,'Vaastu'),(5,'Fengshui'),(6,'KP Astrology'),(7,'Prashna Kundali');
/*!40000 ALTER TABLE `expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `gender_name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Male'),(2,'Female');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hand_kundli`
--

DROP TABLE IF EXISTS `hand_kundli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hand_kundli` (
  `id` int(11) NOT NULL,
  `price` float NOT NULL DEFAULT '200',
  `dollar` float NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `meta_title` text NOT NULL,
  `meta_desc` text NOT NULL,
  `meta_key` text NOT NULL,
  `title_2` varchar(200) NOT NULL,
  `desc_2` longtext NOT NULL,
  `title_3` varchar(200) NOT NULL,
  `desc_3` text NOT NULL,
  `parent_id` int(11) NOT NULL,
  `kundli_image` varchar(200) NOT NULL,
  `kundli_slug` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `add_user` int(11) NOT NULL,
  `mod_user` int(11) NOT NULL,
  `addDateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hand_kundli`
--

LOCK TABLES `hand_kundli` WRITE;
/*!40000 ALTER TABLE `hand_kundli` DISABLE KEYS */;
INSERT INTO `hand_kundli` VALUES (1,2100,57.71,' Handmade Janam Kundli','<p>Handmade Janam Kundli is a manually calculated horoscope based on the system of Sun/Zodiac Signs. In our exclusive Janam Kundli, we provide 100% genuine by Best Astrologers with Prediction, satisfactory and authentic hand made predictions as well as their solutions by our Best Astrologers.&nbsp;With the help of your Janam kundli, you will know positions of planets like Sun and Moon in various rashi and nakshatra. It will also reveal the astrological aspects and significant information regarding your future life. Via Janam Kundli you will be able to access your good and bad times easily. This will help you make right decisions at the right time.</p>\n<p class=\"MsoNormal\"><strong>What Business Life Kundli Has For You?</strong></p>\n<p class=\"MsoNormal\">Karkansh Kundli, Janam Kundli (D1 Chart), Tarkan Kundli (Tarkan Chart), &nbsp;Lagan Phal,&nbsp;Grah Tithi, Bhav Phal,&nbsp;Dasha Phal,&nbsp;Maha Dasha Phal / Antar Dasha Phal,&nbsp;Remedies,&nbsp;Gems Stones.</p>','','','','','','','',0,'kundli1.png','handmade-janam-kundli',1,81,81,'2018-02-09 11:14:28'),(2,2100,57.71,'Business Life Prediction Kundli','<p>Business Life-Prediction Kundli is one of a kind Kundli style. Business Kundli is conventionally introduced to take care your venture and new- undertaking&rsquo;s ifs and buts. This unique commercial Kundli is generated by learned Best Astrologers and Best Predictors. Business Kundli gives a detailed scrutiny and astrological observations about your business and trade.</p>\n<p>As a truth, Business Kundli is a manually calculated horoscope depends upon your sun-signs and zodiac-signs. In our premier Business Kundli, we proffer 100% genuine, satisfactory and authentic hand-made predictions as well as their solutions.</p>\n<p>This Indian-manner of displaying the astrological attributes and critical examination about your commercial business is authentic in every aspect. It exhibits pros-cons, demerits-merits and how much your occupation would grow in future and upcoming months. This astronomical investigation will certainly make everything easier and possible by offering the relevant solutions and remedies forsooth.</p>\n<p class=\"MsoNormal\"><strong>What Business Life Kundli Has For You?</strong></p>\n<p class=\"MsoNormal\">Karkansh Kundli, Janam Kundli (D1 Chart), Tarkan Kundli (Tarkan Chart), &nbsp;Lagan Phal,&nbsp;Grah Tithi, Bhav Phal,&nbsp;Dasha Phal,&nbsp;Maha Dasha Phal / Antar Dasha Phal,&nbsp;Remedies,&nbsp;Gems Stones.</p>','','','','','','','',0,'kundli2.png','business-life-predictor-kundli',1,81,81,'2018-02-09 11:24:26');
/*!40000 ALTER TABLE `hand_kundli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `language_name` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language`
--

LOCK TABLES `language` WRITE;
/*!40000 ALTER TABLE `language` DISABLE KEYS */;
INSERT INTO `language` VALUES (1,'English'),(2,'Hindi'),(3,'Gujarati'),(4,'Marathi'),(5,'Telugu'),(6,'Tamil');
/*!40000 ALTER TABLE `language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_08_07_152421_modify_users',1),(4,'2016_08_07_152421_table_menus',1),(5,'2016_08_07_152421_table_modules',1),(6,'2016_08_07_152421_table_role_privileges',1),(7,'2016_08_07_152421_table_roles',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muhurat`
--

DROP TABLE IF EXISTS `muhurat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `muhurat` (
  `id` int(11) NOT NULL,
  `price` float NOT NULL DEFAULT '200',
  `dollar` float NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `meta_title` text NOT NULL,
  `meta_desc` text NOT NULL,
  `meta_key` text NOT NULL,
  `title_2` varchar(200) NOT NULL,
  `desc_2` longtext NOT NULL,
  `title_3` varchar(200) NOT NULL,
  `desc_3` text NOT NULL,
  `parent_id` int(11) NOT NULL,
  `muhurat_image` varchar(200) NOT NULL,
  `muhurat_slug` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `add_user` int(11) NOT NULL,
  `mod_user` int(11) NOT NULL,
  `addDateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muhurat`
--

LOCK TABLES `muhurat` WRITE;
/*!40000 ALTER TABLE `muhurat` DISABLE KEYS */;
INSERT INTO `muhurat` VALUES (1,399,6.14,'Make a purchase','<p class=\"MsoNormal\"><strong>Make a purchase</strong></p>','','','','','','','',0,'BUYING_P.png','make-a-purchase',1,81,81,'2018-02-09 09:13:47'),(2,399,6.14,'Vehicle','<p>Finding and buying a perfect car or bike is not an easy task. As it is a heavy investment, any step going wrong can bring a huge loss. There are many decisions to make and factors to take into account among which one of the most important things is the EXACT TIME to buy the vehicle. So do not take the risk of future hazards and buy the best by taking care of the perfect Muhurat!</p>\n<p><strong>Benefits of Muhurat for buying a Vehicle.</strong></p>\n<p>&bull; The vehicle will give maximum benefits.</p>\n<p>&bull; Probability of accidents will be minimized.</p>\n<p>&bull; The vehicle will show much lesser issues.</p>\n<p>&bull; A vehicle is also responsible to propel the owner to greater success and prosperity.</p>\n<p><strong>Required Details</strong></p>\n<p>Customized vehicle purchase Muhurat&nbsp;can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p>On special request we can also inform you on the colours of cars that would best suit you, the number of your car, the model of the car and much more.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Car.png','vehicle',1,81,81,'2018-02-09 09:15:31'),(3,399,6.14,'House','<p>A house of one\'s own is everybody&rsquo;s dream. Building a house involves a lot of struggle and sufficient financial availability. A small thing going wrong can create a heavy loss. So, do not forget to take care of the appropriate Muhurat (timing) suitable for house. Make sure to check the Muhurat before buying a land, starting the construction of your house or office, gharpratistha (house warming), buying a house, Griha pravesh, Bhoomi pujan and much more.</p>\n<p><strong>Benefits of Muhurat for your house</strong></p>\n<p>&bull; Probability of damage to property will be much lesser.</p>\n<p>&bull; House being the major place of one\'s survival; it will impart positive vibes for overall growth and success.</p>\n<p>&bull; Muhurta will keep away evil spirits and unwanted energies from one\'s residence.</p>\n<p>&bull; The longevity and productivity of house will be much more than usual.</p>\n<p>&bull; One\'s house will be protected from buri nazar (evil eye) effects.</p>\n<p><strong>Required Details</strong></p>\n<p>The day is good or bad is decided on the Janma Nakshatra (Birth Star) of that person. If that person\'s Janma Nakshatra is auspiciously compatible with the Nakshatra of that particular day, then that day, date is read to good date for him. Auspicious Moment or a Shubh Muhurat is to be calculated for a particular geographic position within the frame of an auspicious day using the sunrise time for that particular position as the starting point.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'House.png','house',1,81,81,'2018-02-09 09:16:26'),(4,399,6.14,'Land/Property: Registration/First Token Money/Agreement Signing','<p>Paper works, agreements, registrations, industrial documentations and financial chores hold a very delicate place in one\'s life. Proper implementation and processing of these things is of prior importance. Hence, never forget to refer an authentic Pandit and jot down the best Muhurat for these. May it be a money transfer or partnership or any registration, always take care to consult the Muhurat.</p>\n<p><strong>Benefits of Muhurat for registrations and financial chores</strong></p>\n<p>&bull; Registrations may lead to controversies and legal issues, a proper Muhurat will keep one away from such issues. Benefits of Muhurat for paper works and financial chores.</p>\n<p>&bull; Properties can get negative eyeballs hence make sure to keep them away by following the ritualistic Muhurat implementation.</p>\n<p>&bull; Money is the reason of all disputes, so make sure to be safe and secure by implementing the power of Muhurat.</p>\n<p><strong>Required Details</strong></p>\n<p>Paper works and financial necessities Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Land.png','property-registration',1,81,81,'2018-02-09 09:18:34'),(5,399,6.14,'Open an office or shop','<p>The place where one work is considered to be the source of attracting wealth. The more positive vibes the place has more will be the inflow of cash. Opening a shop or an office should be done after consulting a specialist for an exact Muhurat. Do not make the mistake of purifying the workplace before use.</p>\n<p><strong>Benefits of Muhurat for opening an office or shop</strong></p>\n<p>&bull; These workplaces will attract a lot of wealth</p>\n<p>&bull; These places will bring satisfaction and pleasure</p>\n<p>&bull; It will take care not to allow evil energies enter one\'s workplace</p>\n<p>&bull; One\'s business will flourish</p>\n<p><strong>Required Details</strong></p>\n<p>Workplace purchasing or opening Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Office_space.png','open-an-office-or-shop',1,81,81,'2018-02-09 09:19:49'),(6,399,6.14,'Furniture','<p>Furniture makes the house look beautiful and enables to get all the support and comfort. These beauties make sure to pamper one when back from a tiring day and always take care of one\'s peace. Hence, never ignore the proper Muhurat for the welcome of these daily needs.</p>\n<p><strong>Benefits of Muhurat for buying or making furniture</strong></p>\n<p>&bull; The longevity and the productivity of the furniture will increase.</p>\n<p>&bull; It will be of proper use and will give one peace.</p>\n<p>&bull; The products used in the furniture will impart positive energies making the environment comfortable.</p>\n<p><strong>Required Details</strong></p>\n<p>Buying or using furniture Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'furniture.png','furniture',1,81,81,'2018-02-09 09:20:29'),(7,399,6.14,'Business or Job','<p>One\'s survival depends on occupation. Jobs and businesses are the backbone of existence as well the source of wealth. Never ever miss the Muhurat for these developmental activities or moments of life. one can always depend on the Muhurat for starting a business, inaugurating a business, joining a new firm, resigning from a company, applying for a new job or scheduling a interview for your job.</p>\n<p><strong>Benefits of Muhurat for Business or job</strong></p>\n<p>&bull; It will make sure one flourish in his/her field.</p>\n<p>&bull; It will bring immense name and fame.</p>\n<p>&bull; Life will be much easier and will attract wealth.</p>\n<p>&bull; Praises and appraisals throughout can be witnessed.</p>\n<p>&bull; Satisfaction of one\'s achievements will be praiseworthy.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'business.png','business-or-job',1,81,81,'2018-02-09 09:21:12'),(8,399,6.14,'Industrial machineries, electronics and appliances','<p>In the language of astrology and vedic science, electronics are said to be the greatest storehouse of energies. These energies when enter a house, tend to force the environment to adapt to its qualities. So, it is extremely important that one takes care of the Muhurat before purchasing, using or installing such equipments and gadgets.</p>\n<p><strong>Benefits of Muhurat for Industrial machineries, electronics and appliances</strong></p>\n<p>&bull; It will have an impressive life span.</p>\n<p>&bull; It will give great output.</p>\n<p>&bull; Will create a healthy environment around.</p>\n<p>&bull; May enable to get lucky.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, custommer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Machinery.png','industrial-machineries-electronics',1,81,81,'2018-02-09 09:22:45'),(9,399,6.14,'Equity Shares/Stocks/FD/Investments','<p>Investments and financial transactions may play a big change in living style. A major profit or loss can totally change conditions. Hence, such major decisions should be made only when the planetary positions and energies support the action. Make sure to implement these before any investment.</p>\n<p><strong>Benefits of Muhurat for Equity Shares/Stocks/FD/Investments</strong></p>\n<p>&bull; Will return more than invested.</p>\n<p>&bull; Will lead one to financial growth.</p>\n<p>&bull; May develop one\'s lifestyle to a great extent.</p>\n<p>&bull; Will keep one happy and satisfied.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Equity_Shares.png','equity-shares',1,81,81,'2018-02-09 09:23:38'),(10,399,6.14,'Jewellery (precious stones and materials)','<p>Purchasing costly ornaments and metals which will be a support for a long time also comes under a productive investment sector. Do not dare to make the purchase or use it without consulting a pandit about the Muhurat for the same.</p>\n<p><strong>Benefits of Muhurat for purchasing and using Gold and Jewellery</strong></p>\n<p>&bull; The belongings will be safe and away from theft.</p>\n<p>&bull; It will give one heavy returns in the future.</p>\n<p>&bull; One\'s possessions will get praise from friends and relatives.</p>\n<p>&bull; It will attract positive eyeballs.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',1,'Jewellery.png','jewellery-purchase',1,81,81,'2018-02-09 09:24:59'),(11,399,6.14,'Opening Ceremony','<p>Opening Ceremony</p>','','','','','','','',0,'Opening_Ceremony_P1.png','opening-ceremony',1,81,81,'2018-02-09 09:27:20'),(12,399,6.14,'Bhoomi Pujan','<p>It is believed since ancient times that bhoomi pujan is extremely necessary before one builds a house. This puja is done to thank mother Goddess to give space in her body. It is also believed that bhoomi pujan eradicates all evil energies from the place. So, take the Muhurat for bhoomi puja.</p>\n<p><strong>Benefits of Muhurat for your house</strong></p>\n<p>&bull; Probability of damage to property will be much lesser.</p>\n<p>&bull; House being the major place of your survival; it will impart positive vibes for&nbsp;one\'s all growth and success.</p>\n<p>&bull; Muhurat will keep away evil spirits and unwanted energies from one\'s residence.</p>\n<p>&bull; The longevity and productivity of one\'s house will be much more than usual.</p>\n<p>&bull; One\'s house will be protected from buri nazar (evil eye) effects.</p>\n<p><strong>Required Details</strong></p>\n<p>The day is good or bad is decided on the Janma Nakshatra (Birth Star) of that person. If that person\'s Janma Nakshatra is auspiciously compatible with the Nakshatra of that particular day, then that day, date is read to good date for him. Auspicious Moment or a Shubh Muhurat is to be calculated for a particular geographic position within the frame of an auspicious day using the sunrise time for that particular position as the starting point.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',11,'Bhoomi_pujan.png','bhoomi-pujan',1,81,81,'2018-02-09 09:28:56'),(13,399,6.14,'Building a house','<p class=\"MsoNormal\"><span lang=\"EN-IN\">Starting the construction of a house is the time when digging of land starts and pillars are put. It is important to consult a pandit for the Muhurat.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Benefits of Muhurat for your house</strong></span></p>\n<p class=\"MsoNormal\">&bull; Probability of damage to property will be much lesser.</p>\n<p class=\"MsoNormal\">&bull; House being the major place of one\'s survival; it will impart positive vibes for one\'s overall growth and success.</p>\n<p class=\"MsoNormal\">&bull; Muhurat will keep away evil spirits and unwanted energies from one\'s residence.</p>\n<p class=\"MsoNormal\">&bull; The longevity and productivity of one\'s house will be much more than usual.</p>\n<p class=\"MsoNormal\">&bull; One\'s house will be protected from buri nazar (evil eye) effects.</p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Required Details</strong></span></p>\n<p><span lang=\"EN-IN\">The day is good or bad is decided on the Janma Nakshatra (Birth Star) of that person. If that person\'s Janma Nakshatra is auspiciously compatible with the Nakshatra of that particular day, then that day, date is read to good date for him. Auspicious Moment or a Shubh Muhurat is to be calculated for a particular geographic position within the frame of an auspicious day using the sunrise time for that particular position as the starting point.</span></p>\n<p><span lang=\"EN-IN\"><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</span></p>','','','','','','','',11,'Buying_a_house.png','building-a-house',1,81,81,'2018-02-09 09:30:06'),(14,399,6.14,'Major Life Decisions','<p class=\"MsoNormal\"><strong>Major Life Decisions</strong></p>','','','','','','','',0,'PERSONAL_P1.png','major-life-decisions',1,81,81,'2018-02-09 09:31:23'),(15,399,6.14,'Joining a job','<p class=\"MsoNormal\"><span lang=\"EN-IN\">When one joins a new job, he/she makes a new family! It is important for future to keep on growing and hence do not forget to take the Muhurat.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Benefits of Muhurat for joining a job</strong></span></p>\n<p class=\"MsoListParagraphCxSpFirst\">&middot; It will make sure one flourishes in his/her field.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&middot; It will bring immense name and fame.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&middot; Life will be much easier and will attract wealth.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&middot; Praises and appraisals throughout can be witnessed.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&middot; Satisfaction of one\'s achievements will be praiseworthy.</p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Required Details</strong></span></p>\n<p><span lang=\"EN-IN\">Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</span></p>\n<p><span lang=\"EN-IN\"><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</span></p>','','','','','','','',14,'Joining_a_job.png','joining-a-job',1,81,81,'2018-02-09 09:33:01'),(16,399,6.14,'Making an investment','<p>Whether one is investing in a startup or a real estate, it is important to consult a Pandit for the appropriate Muhurat.</p>\n<p><strong>Benefits of Muhurat Investments</strong></p>\n<p>&bull; Will return more than invested.</p>\n<p>&bull; Will lead one to financial growth.</p>\n<p>&bull; May develop one\'s lifestyle to a great extent.</p>\n<p>&bull; Will keep one happy and satisfied.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',14,'Making_investment.png','making-an-investment',1,81,81,'2018-02-09 09:41:13'),(17,399,6.14,'Buying stocks or shares','<p>Buying a stock or a share is always a betting and one\'s luck should be strong for it. Do not forget to check the Muhurat before buying one.</p>\n<p><strong>Benefits of Muhurat Investments</strong></p>\n<p>&bull; Will return more than invested.</p>\n<p>&bull; Will lead one to financial growth.</p>\n<p>&bull; May develop one\'s lifestyle to a great extent.</p>\n<p>&bull; Will keep one happy and satisfied.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',14,'Buying_stocks.png','buying-stocks-or-shares',1,81,81,'2018-02-09 09:42:03'),(18,399,6.14,'Surgery and Operations','<p>Life has many complications and one of the major setbacks for us is health. Due to the changing climatic conditions and unhealthy lifestyle, one face a lot of health issues. Some lead to really serious situation whereone&nbsp; may need to go for a surgery or operation. Even if medical science is quite advanced, they still fail at certain situations. Referring a Pandit for the auspicious time to start a operation may help one survive any loss.</p>\n<p><strong>Benefits of Muhurat for surgery and operation</strong></p>\n<p>&bull; The operation will be successful without any loss.</p>\n<p>&bull; One\'s health will recover after the operation.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',14,'Surgery.png','surgery-and-operations',1,81,81,'2018-02-09 09:43:09'),(19,399,6.14,'Bride or Groom visit / Matrimonial tasks','<p>It is not possible that one always hit at the right place. Searching for the perfect bride or groom for marriage is infact one of the most difficult tasks. Hence, make sure that one consult an experienced Pandit before finalizing a bride or groom for marriage.</p>\n<p><strong>Benefits Of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Evimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',14,'bride_or_groom_visit.png','matrimonial-tasks',1,81,81,'2018-02-09 09:44:12'),(20,399,6.14,'Puja / Rituals','<p>Hinduism is a very cleverly organized set of extra ordinary powers which can change one\'s bad luck to good and make one achieve the things he/she desires. The set of puja and rituals are not just beliefs but rather are concepts from advanced science, one hasn\'t yet thought of. Following these rituals, pujas and more can benefit one more if followed exactly as described by ancestors, and their prior tip has been the involvement of Muhurat for commencing the puja. There are many types of pujas and rituals; you can refer the Pandit for the Muhurat. Some of them are navagraha puja, namakaran, rudraabhisek, Mundan, pitra dosha, satyanarayan puja, yagnyas and much more.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',0,'Puja_Ritual_P1.png','puja-rituals',1,81,81,'2018-02-09 09:45:22'),(21,399,6.14,'Navagraha','<p>Hinduism is a very cleverly organized set of extra ordinary powers which can change one\'s bad luck to good and make one achieve the things he/she desires. The set of puja and rituals are not just beliefs but rather are concepts from advanced science, one hasn&rsquo;t yet thought of. Following these rituals, pujas and more can benefit us more if followed exactly as described by our ancestors, Navgrah are the 9 planets who control one\'s life and hence prove to be the most influential Gods life. Navgrah puja needs the Muhurat for its implementation.</p>\n<p><strong>Benefits Of Muhurat for Puja and rituals</strong></p>\n<p>&bull; The puja or ritual will get one, a success.</p>\n<p>&bull; All the positive energies will attract one\'s success.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p>and their prior tip has been the involvement of Muhurat for commencing the puja. There are many types of pujas and rituals; you can refer the Pandit for the Muhurat. Some of them are navagraha puja, namakaran, rudraabhisek, Mundan, pitra dosha, satyanarayan puja, yagnyas and much more.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',20,'Navgrah.png','navgrah',1,81,81,'2018-02-09 09:47:13'),(22,399,6.14,'Namkaran','<p>Namkaran is ritual for giving a name for a newly born baby and defines its upcoming future. Know the exact Muhurat which will do justice to the name of the baby.</p>\n<p><strong>Benefits Of Muhurat for Puja and rituals</strong></p>\n<p>&bull; The puja or ritual will get one, a success.</p>\n<p>&bull; All the positive energies will attract one\'s success.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',20,'Namkaran.png','namkaran',1,81,81,'2018-02-09 09:48:08'),(23,399,6.14,'Rudra Abhishek','<p>The powerful Yagya which is done for certain dosha nivaran and purification. Know the exact Muhurat which will make the puja a success.</p>\n<p><strong>Benefits Of Muhurat for Puja and rituals</strong></p>\n<p>&bull; The puja or ritual will get one, a success.</p>\n<p>&bull; All the positive energies will attract one\'s success.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',20,'Rudra_Abhishek.png','rudra-abhishek',1,81,81,'2018-02-09 09:48:53'),(24,399,6.14,'Mundan','<p>Mundan is a ritual involving a baby\'s first haircut and hair is donated to God. This ritual is of great significance and should be done on the exact Muhurat.</p>\n<p><strong>Benefits Of Muhurat for Puja and rituals</strong></p>\n<p>&bull; The puja or ritual will get one, a success.</p>\n<p>&bull; All the positive energies will attract one\'s success.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',20,'Mundan.png','mundan',1,81,81,'2018-02-09 09:49:31'),(25,399,6.14,'Pitra Dosh','<p>Pitra dosh puja is of great importance and should be perfomed with extreme carefulness. This ritual is of immense significance and should be done on the exact Muhurat.</p>\n<p><strong>Benefits Of Muhurat for Puja and rituals</strong></p>\n<p>&bull; The puja or ritual will get one\'s success.</p>\n<p>&bull; All the positive energies will attract one\'s success.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay at side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:-</strong>&nbsp;Muhurat Details would be mailed within 4&nbsp; hours of operation.</p>','','','','','','','',20,'Pitra_dosh.png','pitra-dosh',1,81,81,'2018-02-09 09:51:03'),(26,399,6.14,'Satyanarayan Puja','<p class=\"MsoNormal\"><span lang=\"EN-IN\">A very famous and auspicious puja, which is done in remembrance of God Vishnu. This ritual is of great significance and should be done on the exact Muhurat.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Benefits Of Muhurat for Puja and rituals</strong></span></p>\n<p class=\"MsoListParagraphCxSpFirst\">&bull; The puja or ritual will get one, a success.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&bull; All the positive energies will attract one\'s success.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&bull; The marriage will happen without any problems.</p>\n<p class=\"MsoListParagraphCxSpFirst\">&bull; Luck, success, and love will always stay at side.</p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\"><strong>Required Details</strong></span></p>\n<p><span lang=\"EN-IN\">The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</span></p>\n<p><span lang=\"EN-IN\"><strong>Note:-</strong> Muhurat Details would be mailed within 4&nbsp; hours of operation.</span></p>','','','','','','','',20,'Satyanarayan_Puja.png','satyanarayan-puja',1,81,81,'2018-02-09 09:52:28'),(27,399,6.14,'Special Muhurat','<p class=\"MsoNormal\" ><strong ><span lang=\"EN-IN\" >Special Muhurat</span></strong></p>','','','','','','','',0,'Special_Muharat_P1.png','special-muhurat',1,81,81,'2018-02-09 09:53:08'),(28,399,6.14,'For First Night','<p>First night is one of the beautiful moments for every couple. The husband and wife relationship has been prioritized by our scriptures, and hence this ritual is considered to be of great importance. Many couples face issue in their intimate relationship in the long run after marriage. These issues may happen due to many reasons but it is believed that the first act of intimacy between a couple should be done in the proper Muhurat. Make sure to consult the most authentic Pandits for the auspicious moment.</p>\n<p><strong>Benefits Of Muhurat for First Night</strong></p>\n<p>&bull; The intimate relationship of a husband and wife always stays blissful.</p>\n<p>&bull; All the positive energies make the bonding even stronger.</p>\n<p>&bull; Love and understanding stays intact forever.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',27,'First_Night.png','for-first-night',1,81,81,'2018-02-09 10:08:32'),(29,399,6.14,'First Dating','<p>In today&rsquo;s world, finding a perfect partner has become the most difficult task. Understanding a person before marriage is more than necessary, and this is where dating comes into picture. We have come up with a powerful way of making one\'s date a success. We believe that scheduling a date in the proper Muhurat according to astrological movements will for sure bring one satisfaction for date.</p>\n<p><strong>Benefits Of Muhurat for First Date</strong></p>\n<p>&bull; The intimate relationship of a husband and wife always stays blissful.</p>\n<p>&bull; All the positive energies make the bonding even stronger.</p>\n<p>&bull; Love and understanding stays intact forever.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',27,'First_Dating.png','first-dating',1,81,81,'2018-02-09 10:09:37'),(30,399,6.14,'Education and Exams','<p class=\"MsoNormal\" ><strong ><span lang=\"EN-IN\" >Education and Exams</span></strong></p>','','','','','','','',0,'Education_P.png','education-and-exams',1,81,81,'2018-02-09 10:10:04'),(31,399,6.14,'For new college and school joining','<p>Education forms the basic building block of any individual. Parents and students now days have become extremely carrier oriented and are ready to do anything for success. We are here with solutions which can kickstart one\'s career by implementing good vibes. Consult authentic and experienced Pandits for any Muhurat details which include joining school for a kid, first writing of kid, entering the college and much more.</p>\n<p><strong>Benefits of Muhurat for Education</strong></p>\n<p>&bull; It will boost the career of your kid.</p>\n<p>&bull; Education will remain strong and the child may gain a lot of name and fame for the same.</p>\n<p>&bull; Success and finance will always be at your side.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',30,'school_joining.png','for-new-college-and-school-joining',1,81,81,'2018-02-09 10:11:19'),(32,399,6.14,'For Exams','<p>Education forms the basic building block of any individual. Parents and students now days have become extremely carrier oriented and are ready to do anything for success. We are here with solutions which can kickstart one\'s career by implementing good vibes. Consult authentic and experienced Pandits for Muhurat details of entrance exams, scholarship exams, competitive exams, competitions, job interviews and much more.</p>\n<p><strong>Benefits of Muhurat for Exams</strong></p>\n<p>&bull; It will boost the career of your kid.</p>\n<p>&bull; Education will remain strong and the child may gain a lot of name and fame for the same.</p>\n<p>&bull; Success and finance will always be at your side.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurta can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',30,'Exams.png','for-exams',1,81,81,'2018-02-09 10:12:06'),(33,399,6.14,'Marriage / Court Marriage','<p class=\"MsoNormal\"><strong><span lang=\"EN-IN\" >Marriage / Court Marriage</span></strong><strong>&nbsp;</strong></p>','','','','','','','',0,'Marriage_P.png','marriage-or-court-marriage',1,81,81,'2018-02-09 10:15:06'),(34,399,6.14,'Engagement','<p>The Engagement ceremony forms the key to a marriage and the most important pre wedding ritual. This is done to establish a confirmation between the two families about the marriage. In many parts of India it is also known as &lsquo;Wagdaan&rsquo; and &lsquo;Janam Patrika&rsquo; ritual. In the ancient times engagement was conducted to announce the good news to the society.</p>\n<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'engagement.png','engagement',1,81,81,'2018-02-09 10:20:21'),(35,399,6.14,'Haldi','<p>The Haldi ceremony is a very important part of Hindu weddings and marks the beginning of the wedding rituals. The bride and the groom are smeared with a natural yellow paste before they tie the knot.</p>\n<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'haldi.png','haldi',1,81,81,'2018-02-09 10:21:07'),(36,399,6.14,'Mehendi','<p>Among all the pre wedding ceremonies among Hindus, Mehendi is the most exciting one. It is all about art and creativity which brings in a sense of upcoming beauty in the Bride&rsquo;s life. Out of all the solha shringars, Mehendi is a significant one. According to the ritual, the bride does not step out of the house after this ceremony.</p>\n<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'mehendi.png','mehendi',1,81,81,'2018-02-09 10:22:59'),(37,399,6.14,'Tilak','<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas and Ekavimshati Doshas are also considered.</p>\n<p>&nbsp;</p>','','','','','','','',33,'tilak.png','tilak',1,81,81,'2018-02-09 10:24:03'),(38,399,6.14,'Sangeet','<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p>&nbsp;</p>','','','','','','','',33,'sangeet.png','sangeet',1,81,81,'2018-02-09 10:25:52'),(39,399,6.14,'Varmaala','<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'varmaala.png','varmaala',1,81,81,'2018-02-09 10:26:53'),(40,399,6.14,'Vidaai','<p>Vidaai seems to be the end of the entire marriage ceremonies from the bride&rsquo;s side. The most pampered, beautiful, lively presence leaves her parents family to form and enchant a new family. This marks the most painful moment of the entire pomp and show of an Indian wedding.</p>\n<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'vidaai.png','vidaai',1,81,81,'2018-02-09 10:27:31'),(41,399,6.14,'Reception','<p>Reception is done so as to introduce the bride to all the relatives and the friends of the Groom&rsquo;s family. Generally, it is a post wedding ceremony which might be celebrated immediately after the marriage or after a few days.</p>\n<p><strong>Benefits of Muhurat for Marriage rituals</strong></p>\n<p>&bull; The marriage will be a success.</p>\n<p>&bull; All the positive energies will attract the bride and groom&rsquo;s life along with a lot of happiness for their families.</p>\n<p>&bull; The marriage will happen without any problems.</p>\n<p>&bull; Luck, success, and love will always stay in your side.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',33,'reception.png','reception',1,81,81,'2018-02-09 10:28:08'),(42,399,6.14,'Business Initiatives','<p class=\"MsoNormal\"><strong>Business Initiatives</strong></p>','','','','','','','',0,'Office_Muhurat_P1.png','business-initiatives',1,81,81,'2018-02-09 10:28:56'),(43,399,6.14,'New Product launched','<p>Happiness is when one\'s hard work gets success. How would one feel if all the hard work, time and money go in vain? Make sure to jot down the perfect time for launching one\'s idea so as to attract the best.</p>\n<p><strong>Benefits of Muhurat for New Product Launch</strong></p>\n<p>&bull; The product will tend to be a huge success.</p>\n<p>&bull; It will bring in business and financial growth.</p>\n<p>&bull; The launch will attract potential users and investors.</p>\n<p>&bull; It will have good reviews in the future.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',42,'New_product_launch.png','new-product-launched',1,81,81,'2018-02-09 10:30:15'),(44,399,6.14,'New Employee Hiring','<p>Employees are the building blocks of a company. Their efficiency impacts the growth of a company. Not only does there skillsets matter but also their nature, attitude and behaviour matters. Especially in a startup, the hiring of each employee has a huge effect. Hence, make sure to check the Muhurat which makes it applicable to increase the probability of getting the most suitable employee for one\'s company.</p>\n<p><strong>Benefits of Muhurat in hiring an employee</strong></p>\n<p>&bull; It will increase the probability of getting the best in industry skilled employee.</p>\n<p>&bull; The productivity and output will be quite high.</p>\n<p>&bull; Understanding and company growth will be impressive.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',42,'new_employee_hiring.png','new-employee-hiring',1,81,81,'2018-02-09 10:31:03'),(45,399,6.14,'Booking of a office space','<p>Places where one will do his/her business and bring finance for a long run needs to be booked very carefully. Refer a Pandit for Muhurat.</p>\n<p><strong>Benefits of Muhurat for booking office space</strong></p>\n<p>&bull; The product will tend to be a huge success.</p>\n<p>&bull; It will bring in business and financial growth.</p>\n<p>&bull; The launch will attract potential users and investors.</p>\n<p>&bull; It will have good reviews in the future.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',42,'Booking_of_a_office_space1.png','booking-of-a-office-space',1,81,81,'2018-02-09 10:31:44'),(46,399,6.14,'Inauguration of office','<p>The first day at office needs to be special and so is the Muhurat. Knowing the Muhurat as important as doing a puja for start of any auspicious beginning.</p>\n<p><strong>Benefits of Muhurat for Inaguration of office</strong></p>\n<p>&bull; The product will tend to be a huge success.</p>\n<p>&bull; It will bring in business and financial growth.</p>\n<p>&bull; The launch will attract potential users and investors.</p>\n<p>&bull; It will have good reviews in the future.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',42,'Inauguration_of_office.png','inauguration-of-office',1,81,81,'2018-02-09 10:32:42'),(47,399,6.14,'Opening a new shop','<p>The place where one will do the business and get an inflow of cash deserves a right start and hence Muhurat is very important.</p>\n<p><strong>Benefits of Muhurat for New Product Launch</strong></p>\n<p>&bull; The product will tend to be a huge success.</p>\n<p>&bull; It will bring in business and financial growth.</p>\n<p>&bull; The launch will attract potential users and investors.</p>\n<p>&bull; It will have good reviews in the future.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',42,'Opening_a_new_shop.png','opening-a-new-shop',1,81,81,'2018-02-09 10:33:31'),(48,399,6.14,'Tour Planning','<p class=\"MsoNormal\" ><strong ><span lang=\"EN-IN\" >Tour Planning</span></strong></p>','','','','','','','',0,'Tour_and_Travel_Muhurat_P1.png','tour-planning',1,81,81,'2018-02-09 10:35:54'),(49,399,6.14,'First Honeymoon','<p>Tours are the best way for recreation and sometimes also a necessity. People plan tours for their first honeymoon. Tours get a lot of beautiful memories but also get increase towards risks along. To make sure that the trip goes smooth, it is important that one should take care of the Muhurat for starting the journey.</p>\n<p><strong>Benefits of Muhurat for Trips and Tours</strong></p>\n<p>&bull; One will stay safe throughout your trip.</p>\n<p>&bull; The trip will give one pleasure and satisfaction.</p>\n<p>&bull; When it is a business or corporate trip, one can gain success.</p>\n<p>&bull; Financial loss will not happen.</p>\n<p>&bull; The trip will give one great memories.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',48,'First_Honeymoon.png','first-honeymoon',1,81,81,'2018-02-09 10:37:04'),(50,399,6.14,'Family Tour','<p>Tours are the best way for recreation and sometimes also a necessity. People plan tours for their family get-together, baby\'s first tour, friend&rsquo;s tours and so on. Tours get a lot of beautiful memories but also get increase towards risks along. To make sure that the trip goes smooth, it is important that one should take care of the Muhurat for starting the journey.</p>\n<p><strong>Benefits of Muhurat for Trips and Tours</strong></p>\n<p>&bull; One will stay safe throughout your trip.</p>\n<p>&bull; The trip will give one immense pleasure and satisfaction.</p>\n<p>&bull; When it is a business or corporate trip, one can gain success.</p>\n<p>&bull; Financial loss will not happen.</p>\n<p>&bull; The trip will give one great memories.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',48,'Family_tour.png','family-Tour',1,81,81,'2018-02-09 10:37:59'),(51,399,6.14,'Business tour','<p>Tours are the best way for recreation and sometimes also a necessity. People plan tours for their business but also get increase towards risks. To make sure that the trip goes smooth, it is important that one should take care of the Muhurat for starting the journey.</p>\n<p><strong>Benefits of Muhurat for Trips and Tours</strong></p>\n<p>&bull; One will stay safe throughout the trip.</p>\n<p>&bull; The trip will give one immense pleasure and satisfaction.</p>\n<p>&bull; When it is a business or corporate trip, one can gain success.</p>\n<p>&bull; Financial loss will not happen.</p>\n<p>&bull; The trip will give one great memories.</p>\n<p><strong>Required Details</strong></p>\n<p>The details which will be required for the Muhurat details are the Tithi (Lunar day), Nakshatra (Star constellation in which the moon is placed at that time) and the Yoga, Karana (auspiciousness) and Vara (weekday). Apart from that certain good times and bad times in a day, combinations of certain weekdays with Nakshatra &amp; Tithis are taken into consideration and certain doshas like Panchaka Doshas ans Ekavimshati Doshas are also considered.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',48,'Business_tour.png','business-tour',1,81,81,'2018-02-09 10:40:14'),(52,399,6.14,'Child Birth and Adoption','<p class=\"MsoNormal\"><strong>Child Birth and Adoption</strong></p>','','','','','','','',0,'Child_Muhurat_P.png','child-birth-and-adoption',1,81,81,'2018-02-09 10:40:34'),(53,399,6.14,'Child Adoption','<p>Child adoption is the most beautiful thing that can happen one\'s family. Apart from this, adopting a child also gets a more powerful feeling of love. The adopted child who would henceforth be represented as the next generation of the family, worths an entry to home on the perfect time made for him/her.</p>\n<p><strong>Benefits of Muhurat of Child Adoption</strong></p>\n<p>&bull; The child adopted will have a bright future and will gel up with your family nicely.</p>\n<p>&bull; The child will make you feel proud and bring fame to your family.</p>\n<p>&bull; There will be mental satisfaction among all the family members.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',52,'Child_adoption.png','child-adoption',1,81,81,'2018-02-09 10:41:41'),(54,399,6.14,'Child Birth','<p>Child birth is the most beautiful thing that can happen to one\'s family. The child who would henceforth be represented as the next generation of the family worths an entry to home on the perfect time made for him/her.</p>\n<p><strong>Benefits of Muhurat of Child birth</strong></p>\n<p>&bull; The child adopted will have a bright future and will gel up with your family nicely.</p>\n<p>&bull; The child will make you feel proud and bring fame to your family.</p>\n<p>&bull; There will be mental satisfaction among all the family members.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, your name, your future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>\n<p>&nbsp;</p>','','','','','','','',52,'Child_birth1.png','child-birth',1,81,81,'2018-02-09 10:42:28'),(55,399,6.14,'Tattoos and others','<p class=\"MsoNormal\" ><strong ><span lang=\"EN-IN\" >Tattoo&rsquo;s and others</span></strong></p>','','','','','','','',0,'Tattos_and_others_P.png','tattoos-and-others',1,81,81,'2018-02-09 10:42:50'),(56,399,6.14,'First Tattoo','<p>Tattoo is a permanent encryption on body which stays forever. Tattoos when done signify a lot of meaning with emotions associated. Sometimes they might get infectious and can lead to serious issues. Hence such major decisions in life should have the involvement of specialists who can tell appropriate auspicious time to do such task.</p>\n<p><strong>Benefits of Muhurat for Tattoo</strong></p>\n<p>&bull; It will send a good message.</p>\n<p>&bull; Being a good step for acupressure, it will give benefits to your health.</p>\n<p>&bull; It will not create infections.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar, and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',55,'First_Tatto.png','first-tattoo',1,81,81,'2018-02-09 10:43:45'),(57,399,6.14,'Cosmetic Surgery','<p>Most of the people have become beauty conscious and opt for cosmetic surgeries. Sometimes they might get infections which can lead to serious issues. Hence, such major decisions in life should have the involvement of specialists who can tell appropriate auspicious time to do such task.</p>\n<p><strong>Benefits of Muhurat for cosmetic surgery</strong></p>\n<p>&bull; It will send a good message.</p>\n<p>&bull; Being a good step for acupressure, it will give benefits to your health.</p>\n<p>&bull; It will not create infections.</p>\n<p><strong>Required Details</strong></p>\n<p>Muhurat can be determined based on the suitable nakshatras, favourable date and tithi of the hindu lunisolar calendar, customer name, customer future perspectives, appropriate date of the Gregorian calendar and the exact span of the auspicious timing.</p>\n<p><strong>Note:</strong>- Muhurat Details would be mailed within 4 hours of operation.</p>','','','','','','','',55,'Cosmetic_surgery.png','cosmetic-surgery',1,81,81,'2018-02-09 10:44:56');
/*!40000 ALTER TABLE `muhurat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` varchar(225) NOT NULL,
  `price` int(11) NOT NULL,
  `default` int(11) NOT NULL,
  `default_set` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (1,'First Time ','First Time ',200,0,1,'2020-02-23 00:00:00','2020-02-27 23:31:04'),(2,'Silver ','Silver ',500,0,0,'2020-02-23 00:00:00','2020-02-23 11:00:24'),(3,'Gold','Gold',1000,0,0,'2020-02-23 00:00:00','2020-02-23 11:00:38');
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'ANDHRA PRADESH',105),(2,'ASSAM',105),(3,'ARUNACHAL PRADESH',105),(4,'BIHAR',105),(5,'GUJRAT',105),(6,'HARYANA',105),(7,'HIMACHAL PRADESH',105),(8,'JAMMU & KASHMIR',105),(9,'KARNATAKA',105),(10,'KERALA',105),(11,'MADHYA PRADESH',105),(12,'MAHARASHTRA',105),(13,'MANIPUR',105),(14,'MEGHALAYA',105),(15,'MIZORAM',105),(16,'NAGALAND',105),(17,'ORISSA',105),(18,'PUNJAB',105),(19,'RAJASTHAN',105),(20,'SIKKIM',105),(21,'TAMIL NADU',105),(22,'TRIPURA',105),(23,'UTTAR PRADESH',105),(24,'WEST BENGAL',105),(25,'DELHI',105),(26,'GOA',105),(27,'PONDICHERY',105),(28,'LAKSHDWEEP',105),(29,'DAMAN & DIU',105),(30,'DADRA & NAGAR',105),(31,'CHANDIGARH',105),(32,'ANDAMAN & NICOBAR',105),(33,'UTTARANCHAL',105),(34,'JHARKHAND',105),(35,'CHATTISGARH',105);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Active'),(2,'Pending');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_info`
--

DROP TABLE IF EXISTS `user_profile_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_profile_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `preferred_lang1` int(11) NOT NULL,
  `preferred_lang2` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_info`
--

LOCK TABLES `user_profile_info` WRITE;
/*!40000 ALTER TABLE `user_profile_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryx` int(11) NOT NULL,
  `statex` int(11) NOT NULL,
  `cityx` int(11) NOT NULL,
  `pincode` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cb_roles_id` int(11) NOT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wallet` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Roshan SIngh','','8958785685','07696689508','','',105,6,0,'',NULL,'','',NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,'oshan-ngh','0'),(6,'Roshan SIngh','roshansingh9450@gmail.com','8958785685','07696689508','','',105,6,168,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'oshan-ngh','0'),(7,'Roshan SIngh','roshansingh9450@gmail.com','7696689508','07696689508','','',105,6,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'oshan-ngh','1972'),(9,'Roshan SIngh','roshansingh9450@gmail.com','','07696689508','','',105,6,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'oshan-ngh','0'),(17,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(18,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(19,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(20,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(21,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(22,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(23,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(24,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(25,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(26,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(27,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(28,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(29,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(30,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(31,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(32,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(33,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(34,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(35,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(36,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(37,'jghjb gjhg','ghfhgfhg@hgfh.com','757775766','686868686','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(38,'jghjb gjhg','ghfhgfhg@hgfh.com','686868686','757775766','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(39,'jghjb gjhg','ghfhgfhg@hgfh.com','686868686','757775766','','',0,0,0,'',NULL,'','',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0'),(40,'jghjb gjhg','ghfhgfhg@hgfh.com','686868686','757775766','','',0,0,0,'',NULL,'','2b7762b428199956a21938b3641bf15a',NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,'jghjb-gjhg','0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vastu`
--

DROP TABLE IF EXISTS `vastu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vastu` (
  `id` int(11) NOT NULL,
  `price` float NOT NULL DEFAULT '200',
  `dollar` float NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `meta_title` text NOT NULL,
  `meta_desc` text NOT NULL,
  `meta_key` text NOT NULL,
  `title_2` varchar(200) NOT NULL,
  `desc_2` longtext NOT NULL,
  `title_3` varchar(200) NOT NULL,
  `desc_3` text NOT NULL,
  `parent_id` int(11) NOT NULL,
  `vastu_image` varchar(200) NOT NULL,
  `vastu_slug` varchar(200) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `add_user` int(11) NOT NULL,
  `mod_user` int(11) NOT NULL,
  `addDateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vastu`
--

LOCK TABLES `vastu` WRITE;
/*!40000 ALTER TABLE `vastu` DISABLE KEYS */;
INSERT INTO `vastu` VALUES (3,299,4.6,'Vastu for Bedroom','<p class=\"MsoNormal\"><span lang=\"EN-IN\">Vastu is majorly significant while designing Master and Children Bedrooms in your house. &nbsp; It includes- adjusting your beds, placing your interior decors, managing your furniture and the most importantly, the way you sleep with your head and in which direction. You should take care of some essential points while you model your bedroom outlines for peace and prosperity throughout. &nbsp;Vastu Consultation of bedroom involves utter investigation and the deep study which includes- </span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\">-Orientation and the projections of the bed and the cupboards.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\">-Proper location of the bedroom in the house. </span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\">-The direction and the extension of the Bedroom Entrance and the windows.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\">-The directions of other electronic appliances such as-&nbsp; TV, AC, cooler and audio systems.</span></p>\n<p class=\"MsoNormal\"><span lang=\"EN-IN\">-And the backgrounds, the flooring and the wall colours. </span></p>','','','','','','','',0,'Vaastu_for_Bedroom2.png','vastu-for-bedroom',1,81,81,'2018-02-09 06:57:28'),(4,299,4.6,'Vastu for Temple at home','<p><span lang=\"EN-IN\">To create a room for Pooja, and Meditation simply signifies that you are creating vicinity to get charged with positive vibes each and every morning. That positive zeal would stimulate your environment, mind, body and soul. People generally avoid designing a Temple inside the house premises due to space restrictions. However, Pooja room should be installed on the priority basis only by taking proper Vastu Tips from one of the renowned Advisors.&nbsp; Pooja room or a temple in a house should be plotted in such a way that you can feel positive energies within you while you mediate. If the temple is not created in the right direction, then no matter how much meditation you would do, you will never feel energized and enthusiastic.</span></p>','','','','','','','',0,'Vaastu_for_Temple_at_home.png','vastu-for-temple-at-home',1,81,0,'2018-02-09 07:03:01'),(5,499,7.68,'Vastu for the Pre Construction','<p><span lang=\"EN-IN\">Ancestors always suggested performing a Bhumi Pooja- by worshipping the area (Earth) before initiating with the construction process. Pre- construction, Vastu should be defined by a relevant astrologer or Vastu Advisor to avoid hurdles and obstacles. This Pooja should be done especially to target the house construction according to Vastu tips and Directions .This is considered an auspicious beginning and a sign of good start to the proceedings towards the creation of the House.</span></p>','','','','','','','',0,'Vastu_for_the_Pre-_Construction.png','vastu-for-the-pre-construction',1,81,0,'2018-02-09 07:07:29'),(6,499,7.68,'Vastu for the Main Entrance','<p class=\"MsoNormal\"><span lang=\"EN-IN\">The main entrance is undoubtedly, one of the foremost and the important places of your house that brings in the main energy. The entry area represents &lsquo;the mouth of a house&rsquo; and is the predominant region in it. You should be very cautious about the entry portion of your dream home. Rather recommend you to take a consultation before moving ahead with the entrance construction. The Vastu Mentor would surely help you with certain rules about the dos and don\'ts regarding the entrance door! So be quick and Go ahead by booking an appointment with any of the skilled Vastu experts nearby via online. </span></p>','','','','','','','',0,'VASTU_for_the_Main_Entrance.png','vastu-for-the-main-entrance',1,81,0,'2018-02-09 07:09:36'),(7,299,4.6,'Vastu for your Work Station Or Office Cabin','<p>If you are willing to start a new business or trying to have your own start- up, we suggest you to take help from a Vastu Expert before stepping into it. We notice people around, jumping into a business without taking proper consultation regarding the place and the directions for the office premises. He/ she should not avoid Vastu importance which is highly required for every business and office settlement. Vastu for office is highly recommended to have flow of Health and office maintains the economic growth, tackles staff, helps make the environment serene and positive which clears the obstacle coming in the business.</p>','','','','','','','',0,'Vastu_for_your_Office_Cabin1.png','vastu-for-your-office-cabin',1,81,0,'2018-02-09 07:29:54'),(8,299,4.6,'Vastu for Shop and its Cash Counter','<p><span lang=\"EN-IN\">A famous shop or showroom earns its name only by the proper directions and the constructions done in the beginning by following basic Vastu tips. You can have a lot of profit from the shop and showroom you own only by trailing the beneficial Vastu guidelines from an expert. After consulting from any of the eminent Vastu Advisors, you would surely get proper orientation, directional method and the perfect places for putting important things like cash counter, placement of shop material and displays.</span></p>','','','','','','','',0,'Vastu_for_Shop1.png','vastu-for-shop',1,81,0,'2018-02-09 07:34:33'),(9,999,50,'Vastu For Plots','<p>You should be very careful and selective while buying a plot for constructing a house, a shop or any other commercial office. Buyers hardly involve a Vastu expert while buying a Plot of their choices; however it has always be recommended to take suggestions while getting a whole new home-site for your family. This framework defines a directed layout which radiates the positive as well as the negative vibes (energies). Therefore, it is always recommended to keep these six points in mind at the time of selecting/buying a plot.</p>\n<p><strong>VASTU GUIDELINES FOR-:</strong></p>\n<p>- PLOT EXTENSIONS AND PROJECTIONS</p>\n<p>- PLOT DIRECTION (LOCATION)</p>\n<p>- PLOT ORIENTATION</p>\n<p>- PLOT SHAPE AND SIZE</p>\n<p>- PLOT SOIL TYPE (GRADE)</p>\n<p>- PLOT SLOPE</p>\n<p>If you already own a plot for building a house or for a particular office or shop, you should still refer to the Vastu Guidelines advised for the selection of suitable area&nbsp; to avoid discomfort and .</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>','','','','','','','',0,'Vastu_For_Plots.png','vastu-for-plots',1,81,0,'2018-02-09 07:48:22'),(10,299,50,'Vastu for Health','<p>The greatest wealth is health. When your house is equipped with good Vastu, your life would be healthy, wealthy, joyful and harmonious. To enjoy good health and to bring true bliss peace into your family, you must first discipline and control your house with Vastu from a skilled Vastu Counsellor. Vastu may not heal all that troubles you, but it can help you become fit and healthy -both physically and mentally. Good health is a result of positive thinking. It\'s like a sacred source for the body. So, Take care of your body, because it is the only place you have to live in.</p>\n<p>&nbsp;</p>','','','','','','','',0,'Vastu_for_your_Health1.png','vastu-for-health',1,81,0,'2018-02-09 07:55:25'),(11,499,7.68,'Vastu for your Vehicles','<p>Vehicles are like second homes or mini homes for their owners. Autonomous automobiles vehicles are important as the internet in today&rsquo;s life and these personal vehicles are taken care like a family member. Vastu for Car Parking | Car Shed | Car Garage is very necessary, thus required a special and unique treatment to park/shed. These vehicles should be housed properly for its better efficiency and long life.&nbsp; Make sure that some basic rules, terms and conditions should be followed as per Vastu shastra once you fixed these places for car parking. Consult a good Vastu Advisor for your car or vehicle and get maximum benefits of Vastu Science.</p>','','','','','','','',0,'Vastu_for_your_Vehicles.png','vastu-for-your-vehicles',1,81,0,'2018-02-09 07:56:39'),(12,299,4.6,'Vastu for Study Table','<p>In a house, study room is an area where you can study without any disturbance and distractions. This place should be very tranquil and peaceful and full of positive vibes and energies. Vastu tips are the most essential part while creating a study room inside your own house. You should be very clear about placing your study gadgets such as- Laptop, Desktop, calculator, printer etc and the foremost item is managing a Study table in that room. Before proceeding, its better suggested to arrange a visit of one of the renowned vastu advisors via online or offline.</p>','','','','','','','',0,'Vastu_for_Study_Table1.png','vastu-for-study-table',1,81,0,'2018-02-09 07:58:08'),(13,299,4.6,'Vastu for Dining Table ','<p>There are numerous things that should be looked over, while organising the dining room/area in your house. It includes- the proper location of dining room, proper placement of dining table, position of electronic gadgets and most importantly the direction you are facing while taking food/dinner/lunch/breakfast etc. We suggest you to consult a proficient Vastu Advisor for setting a Dining table inside your own vicinity (wherever you want)and always make sure that the food you are taking would have positive effects on your health.</p>','','','','','','','',0,'Vastu_for_Dining_Table3.png','vastu-for-dining-table',1,81,0,'2018-02-09 07:59:45'),(14,299,4.6,'Vastu for Paintings ','<p>Each and Every object inside the house has its own spark and energy. These items also have a strong influence on the people staying in the house. Paintings and Pictures display a lot about your life supporting energies which impacts on your relationship, finance, education, health, children etc. These interior d&eacute;cor objects simply connect you to your personal life and culture. Make sure to hook these paintings on your walls with proper Vastu rules in mind. Its better to get connected once to any of the famous Vastu Consultants while choosing a painting or a picture for your drawing room, lobby and especially for your bedrooms.</p>','','','','','','','',0,'Vastu_for_Paintings.png','vastu-for-paintings',1,81,0,'2018-02-09 08:04:52'),(15,499,7.68,'Vastu for Career','<p>A famous poet once said: Success doesn&rsquo;t come to you, you go to it and future depends on what you do today..!!! So wake up and be awesome.<br />Everybody wishes to have an excelled and fruitful career for brighten his/her future. Undoubtedly, your occupation/ job become more advantageous and profitable when you allow Vastu expert to help you with some basic worthwhile tips and guides. You should follow some prescribed directions, conditions and work- routine through directional management that can certainly help you in growth and betterment.</p>\n<p>&nbsp;</p>','','','','','','','',0,'Vastu_for_Career.png','vastu-for-career',1,81,0,'2018-02-09 08:08:13'),(16,999,15.37,'Vastu For Home','<p>Vastu is a very basic architectural guidance and intelligence. Vastu varies from state to state and place to place. If you are looking for constructing a house on hills, then the Vastu would surely differ as compare to Vastu on Plain Surfaces. Likewise, the Vastu in Goa State is different from Vastu in Maharashtra. Our experts would give you some predictable guidelines so that you can build your house exquisitely and without any flaws and imperfections.</p>','','','','','','','',0,'Vastu_For_Home.png','vastu-for-home',1,81,0,'2018-02-09 08:10:05');
/*!40000 ALTER TABLE `vastu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekly_horoscope`
--

DROP TABLE IF EXISTS `weekly_horoscope`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weekly_horoscope` (
  `id` int(11) NOT NULL,
  `sunsign_en` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sunsign_hi` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sunsign_bn` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sunsign_mr` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sunsign_te` varchar(55) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `status` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mphoto` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `photo` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly_horoscope`
--

LOCK TABLES `weekly_horoscope` WRITE;
/*!40000 ALTER TABLE `weekly_horoscope` DISABLE KEYS */;
INSERT INTO `weekly_horoscope` VALUES (1,'Aries','मेष राशि','','','','Active','aries.png','public/uploads/2018-06/aries-symbol.png','2019-04-23 09:57:30','2018-06-28 18:15:03'),(2,'Taurus','वृषभ','','','','Active','taurus.png','taurus.png','2019-04-23 09:58:31','2018-06-29 04:42:43'),(3,'Gemini','मिथुन राशि','','','','Active','gemini.png','public/uploads/2018-06/gemini.png','2019-04-23 09:58:49','2018-06-29 04:48:14'),(4,'Cancer','कैंसर','','','','Active','cancer.png','public/uploads/2018-06/cancer.png','2019-04-23 09:59:01','2018-06-29 04:53:53'),(5,'Leo','लियो','','','','Active','leo.png','public/uploads/2018-06/leo.png','2019-04-23 09:59:12','2018-06-29 04:58:15'),(6,'Vigro','कन्या','','','','Active','virgo.png','virgo.png','2019-04-23 09:59:25','2018-06-29 05:13:59'),(7,'Libra','तुला','','','','Active','libra.png','libra.png','2019-04-23 10:10:55','2018-06-29 05:18:38'),(8,'Scorpio','वृश्चिक','','','','Active','scorpio.png','scorpio.png','2019-04-23 10:11:14','2018-06-29 05:21:51'),(9,'Sagittarius','धनु','','','','Active','sagittarius.png','saggitarius.png','2019-04-23 10:11:29','2018-06-29 05:27:44'),(10,'Capricorn','मकर','','','','Active','capricorn.png','capricon.png','2019-04-23 10:11:44','2018-06-29 05:31:57'),(11,'Aquarius','कुंभ राशि','','','','Active','aquarius.png','aquarius.png','2019-04-23 10:11:59','2018-06-29 05:35:43'),(12,'Pisces','मीन राशि','','','','Active','pisces.png','picses.png','2019-04-23 10:12:19','2018-06-29 05:39:33');
/*!40000 ALTER TABLE `weekly_horoscope` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-18 10:35:50
