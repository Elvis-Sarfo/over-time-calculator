-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 04, 2023 at 12:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: overtime
--

-- --------------------------------------------------------

--
-- Table structure for table users
--

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  nic varchar(255) NOT NULL,
  name varchar(100) NOT NULL,
  designation varchar(100) DEFAULT NULL,
  department varchar(100) NOT NULL,
  telephone varchar(25) NOT NULL,
  email varchar(70) NOT NULL,
  password varchar(100) NOT NULL,
  role varchar(50) NOT NULL,
  stuClass varchar(20) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE (nic)
);

CREATE INDEX users_index_table
ON users (id);

--
-- Table structure for table claims
--

CREATE TABLE claims (
  id int NOT NULL AUTO_INCREMENT,
  lecturer_id int NOT NULL,
  approval_status enum('Pending','Approved','Rejected','') NOT NULL DEFAULT 'Pending',
  approved_by int DEFAULT NULL,
  hod_approval_status enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  reg_approval_status enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  vc_approval_status enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  payment_status enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  hod_id int DEFAULT NULL,
  req_id int DEFAULT NULL,
  vc_id int DEFAULT NULL,
  paid_by int DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lecturer_id) REFERENCES users(id),
  FOREIGN KEY (approved_by) REFERENCES users(id),
  FOREIGN KEY (req_id) REFERENCES users(id),
  FOREIGN KEY (vc_id) REFERENCES users(id),
  FOREIGN KEY (paid_by) REFERENCES users(id)
) ;

CREATE INDEX claims_index_table
ON claims (id);


--
-- Table structure for table lesson
--

CREATE TABLE lesson (
  id int NOT NULL AUTO_INCREMENT,
  date date NOT NULL,
  time time NOT NULL,
  course_code varchar(10) NOT NULL,
  class_name varchar(10) NOT NULL,
  credit_hours int(11) NOT NULL DEFAULT 3,
  approval_status enum('Pending','Approved','Rejected','') NOT NULL DEFAULT 'Pending',
  lecturer_id int NOT NULL,
  approved_by int DEFAULT NULL,
  claim_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (lecturer_id) REFERENCES users(id),
  FOREIGN KEY (approved_by) REFERENCES users(id),
  FOREIGN KEY (claim_id) REFERENCES claims(id)
) ;

--
-- Dumping data for table users
--

INSERT INTO users (nic, name, designation, department, telephone, email, password, role, stuClass) VALUES
('0', 'Andoh Jeffery', 'Administrator', 'Administration', '0123456789', 'admin@email.com', '$2a$12$wsQ3zUIePjo7p9rbaUNROO6T3JwExY8E7D4g4TLoCemsCVDjXUX2a', 'admin', ''),
('12345678', 'Kanta', 'Admin', 'Administration', '0242265961', 'kanta@text.com', '$2a$12$ZNLfceGdS4RsC8QKVdyPVexF1z7kfBpp9yCq0oXKs46WO4o37d9qa', 'admin', ''),
('200036057', 'Amoah', NULL, 'Management', '0247846842', 'amoah@gmail.com', '$2a$12$mxAbto5l3Ai0dbiP2LasjuiNBD834sYZqoh1UGpyZ3CK4JKqwe0Iu', 'registrer', ''),
('200036111', 'Elvis Antwi Sarfo', 'Cash Papa', 'Administration', '+233543075757', 'test123@gmail.com', '$2a$12$JUM9o3Mpnndu65rCGJR7Q.9OVs4iA6kj/JHW55gpER6R/0hPm56O6', 'class_rep', NULL),
('200036122', 'Troy Lynx', NULL, 'Info Tech', '553231829', 'troy@gmail.com', '$2a$12$3LPhuHAVJNSPshnaueWIv.dO9DL69cRN4bTdFyEoUZqeOrCEvU706', 'lecturer', ''),
('23434344', 'sdsd sdsd', 'dbee', 'Information Technology', '0242265961', 'sdsd123@gmail.com', '$2a$12$3ZwzKu2SyYWXV.bRnRbw/uOBfm2RP3eWcF9/7qZgNMVHQKOvuh7pW', 'class_rep', 'ITE D'),
('98970', 'Elvis Antwi Sarfo', 'Lecturer ', 'Information Technology', '+233543075757', 'sarfoantwielvis@gmail.com', '$2a$12$5FarqdEL6FH2kecTswunhuw/EM8PVa..q8cImgQAj.xugVAur6One', 'lecturer', '');

--

--
-- Dumping data for table claims
--

-- INSERT INTO claims (id, lecturer_id, approval_status, approved_by, hod_approval_status, reg_approval_status, vc_approval_status, payment_status, hod_id, req_id, vc_id, paid_by) VALUES
-- (1, '200036122', 'Pending', NULL, 'Pending', 'Pending', 'Pending', 'Pending', NULL, NULL, NULL, NULL),
-- (2, '0', 'Pending', NULL, 'Pending', 'Pending', 'Pending', 'Pending', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Dumping data for table lesson
--

-- INSERT INTO lesson (id, date, time, course_code, credit_hours, approval_status, lecturer_id, approved_by, claim_id) VALUES
-- (1, '2023-09-03', '00:16:00', 'Itc 45', 3, 'Pending', '0', NULL, 2),
-- (2, '2023-09-03', '12:26:00', '7', 7, 'Pending', '0', NULL, 1),
-- (3, '2023-09-03', '22:07:00', 'Itc 45', 3, 'Pending', ' 0 ', NULL, 1);

-- --------------------------------------------------------

--
-- Dumping data for table sessions
--

-- INSERT INTO sessions (session_id, expires, data) VALUES
-- ('izy_U5u-qR_zws1CRAxp78RcIF8QjAxy', 1693865229, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isAuth\":true,\"authorization\":\"admin\",\"user\":{\"nic\":\"0\",\"name\":\"Andoh Jeffery\",\"designation\":\"Administrator\",\"department\":\"Administration\",\"telephone\":\"0123456789\",\"email\":\"admin@email.com\",\"password\":\"$2a$12$wsQ3zUIePjo7p9rbaUNROO6T3JwExY8E7D4g4TLoCemsCVDjXUX2a\",\"role\":\"admin\",\"stuClass\":\"\"}}');

-- --------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
