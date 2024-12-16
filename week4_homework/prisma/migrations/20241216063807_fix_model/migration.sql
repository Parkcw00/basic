/*
  Warnings:

  - You are about to alter the column `shooting` on the `Player` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Player` MODIFY `shooting` INTEGER NOT NULL,
    MODIFY `grade` VARCHAR(191) NOT NULL;
