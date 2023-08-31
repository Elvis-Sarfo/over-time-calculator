-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2023 at 07:52 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `overtime`
--

-- --------------------------------------------------------

--
-- Table structure for table `claims`
--

CREATE TABLE `claims` (
  `id` int(11) NOT NULL,
  `lecturer_id` int(11) NOT NULL,
  `approval_status` enum('Pending','Approved','Rejected','') NOT NULL DEFAULT 'Pending',
  `approved_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `claims`
--

INSERT INTO `claims` (`id`, `lecturer_id`, `approval_status`, `approved_by`) VALUES
(1, 200036122, 'Pending', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

CREATE TABLE `lesson` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `course_code` varchar(10) NOT NULL,
  `credit_hours` int(11) NOT NULL DEFAULT 3,
  `approval_status` enum('Pending','Approved','Rejected','') NOT NULL DEFAULT 'Pending',
  `lecturer_id` int(11) NOT NULL,
  `approved_by` int(11) NOT NULL,
  `claim_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `nic` int(12) NOT NULL,
  `name` varchar(100) NOT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `department` varchar(100) NOT NULL,
  `telephone` varchar(12) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`nic`, `name`, `designation`, `department`, `telephone`, `email`, `password`, `role`) VALUES
(0, 'Andoh Jeffery', 'Administrator', 'Administration', '0123456789', 'admin@email.com', '$2a$12$wsQ3zUIePjo7p9rbaUNROO6T3JwExY8E7D4g4TLoCemsCVDjXUX2a', 'admin'),
(200036057, 'Amoah', NULL, 'Management', '0247846842', 'amoah@gmail.com', '$2a$12$mxAbto5l3Ai0dbiP2LasjuiNBD834sYZqoh1UGpyZ3CK4JKqwe0Iu', 'registrer'),
(200036122, 'Troy Lynx', NULL, 'Info Tech', '553231829', 'troy@gmail.com', '$2a$12$3LPhuHAVJNSPshnaueWIv.dO9DL69cRN4bTdFyEoUZqeOrCEvU706', 'lecturer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `claims`
--
ALTER TABLE `claims`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lecturer_id` (`lecturer_id`),
  ADD KEY `approved_by` (`approved_by`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lecturer_id` (`lecturer_id`),
  ADD KEY `approved_by` (`approved_by`),
  ADD KEY `claim_id` (`claim_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`nic`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `claims`
--
ALTER TABLE `claims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lesson`
--
ALTER TABLE `lesson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `claims`
--
ALTER TABLE `claims`
  ADD CONSTRAINT `claims_ibfk_1` FOREIGN KEY (`lecturer_id`) REFERENCES `users` (`nic`),
  ADD CONSTRAINT `claims_ibfk_2` FOREIGN KEY (`approved_by`) REFERENCES `users` (`nic`);

--
-- Constraints for table `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_2` FOREIGN KEY (`approved_by`) REFERENCES `users` (`nic`),
  ADD CONSTRAINT `lesson_ibfk_3` FOREIGN KEY (`lecturer_id`) REFERENCES `users` (`nic`),
  ADD CONSTRAINT `lesson_ibfk_4` FOREIGN KEY (`claim_id`) REFERENCES `claims` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
