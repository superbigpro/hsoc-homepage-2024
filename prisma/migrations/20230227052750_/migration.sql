/*
  Warnings:

  - A unique constraint covering the columns `[nickName]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `student` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `student_nickName_studentId_phoneNumber_key` ON `student`;

-- CreateIndex
CREATE UNIQUE INDEX `student_nickName_key` ON `student`(`nickName`);

-- CreateIndex
CREATE UNIQUE INDEX `student_studentId_key` ON `student`(`studentId`);

-- CreateIndex
CREATE UNIQUE INDEX `student_phoneNumber_key` ON `student`(`phoneNumber`);
