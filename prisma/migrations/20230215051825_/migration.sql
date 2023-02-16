/*
  Warnings:

  - The primary key for the `student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `introduce` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `student` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `introduce` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);
