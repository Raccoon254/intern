/*
  Warnings:

  - Added the required column `description` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Department` ADD COLUMN `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Organization` ADD COLUMN `bio` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `resetToken` VARCHAR(191) NULL,
    ADD COLUMN `resetTokenExpiry` DATETIME(3) NULL;
