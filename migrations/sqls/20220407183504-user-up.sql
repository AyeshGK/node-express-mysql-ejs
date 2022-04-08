/* Replace with your SQL commands */
CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `firstname` varchar(255) NOT NULL,
    `lastname` varchar(255) NOT NULL,
    `nic` varchar(20) NOT NULL,
    `contact_no` varchar(10) NOT NULL,
    `email` varchar(255) NOT NULL,
    `birthday` date NOT NULL,
    `user_type_id` int NOT NULL,
    `active` tinyint(1) DEFAULT '1',
    `created_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `user_type_id` (`user_type_id`),
    CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci