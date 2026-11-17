/*
  Warnings:

  - You are about to drop the column `credits` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `course` DROP COLUMN `credits`,
    ADD COLUMN `objective` TEXT NULL,
    ADD COLUMN `practice` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `selfStudy` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `teacher` VARCHAR(100) NULL,
    ADD COLUMN `theory` INTEGER NOT NULL DEFAULT 0,
    MODIFY `description` TEXT NULL;
