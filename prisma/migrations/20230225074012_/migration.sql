/*
  Warnings:

  - You are about to drop the column `createdDate` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `updateDate` on the `student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `createdDate`,
    DROP COLUMN `updateDate`;
