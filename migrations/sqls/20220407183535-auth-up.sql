/* Replace with your SQL commands */
CREATE TABLE `auth` (
    `user_id` int NOT NULL AUTO_INCREMENT,
    `password` varchar(255) NOT NULL,
    `logged_at` datetime DEFAULT NULL,
    PRIMARY KEY (`user_id`),
    CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci