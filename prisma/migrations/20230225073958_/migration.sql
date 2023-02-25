/*
  Warnings:

  - You are about to drop the column `createdAt` on the `student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `createdAt`,
    ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
