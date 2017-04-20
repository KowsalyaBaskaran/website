-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2017 at 05:47 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `utsaha`
--

-- --------------------------------------------------------

--
-- Table structure for table `participant_details`
--

CREATE TABLE `participant_details` (
  `name` varchar(100) NOT NULL,
  `emailid` varchar(100) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `city` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `dept` varchar(10) NOT NULL,
  `year` varchar(10) NOT NULL,
  `college` varchar(100) NOT NULL,
  `ppt` varchar(15) NOT NULL,
  `lan` varchar(10) NOT NULL,
  `debug` varchar(10) NOT NULL,
  `brushup` varchar(10) NOT NULL,
  `treasurehunt` varchar(10) NOT NULL,
  `sell` varchar(10) NOT NULL,
  `google` varchar(10) NOT NULL,
  `hack` varchar(10) NOT NULL,
  `photo` varchar(10) NOT NULL,
  `project` varchar(10) NOT NULL,
  `fun` varchar(10) NOT NULL,
  `gogreen` varchar(10) NOT NULL,
   `workshop` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
