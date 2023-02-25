-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nickName` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('STUDENT', 'OPERATOR') NOT NULL DEFAULT 'STUDENT',
    `studentId` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `introduce` MEDIUMTEXT NULL,

    UNIQUE INDEX `student_nickName_key`(`nickName`),
    UNIQUE INDEX `student_studentId_key`(`studentId`),
    UNIQUE INDEX `student_phoneNumber_key`(`phoneNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
