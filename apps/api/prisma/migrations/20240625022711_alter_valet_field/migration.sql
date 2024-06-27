/*
  Warnings:

  - You are about to drop the column `licence_id` on the `valets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "valets" DROP COLUMN "licence_id",
ADD COLUMN     "license_id" TEXT NOT NULL DEFAULT '';
