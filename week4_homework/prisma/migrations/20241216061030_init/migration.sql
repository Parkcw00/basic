-- CreateTable
CREATE TABLE `Player` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `speed` INTEGER NOT NULL,
    `shooting` VARCHAR(191) NOT NULL,
    `grade` INTEGER NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
