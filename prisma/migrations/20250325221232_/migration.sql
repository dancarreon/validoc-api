/*
  Warnings:

  - You are about to drop the column `nombre` on the `Estado` table. All the data in the column will be lost.
  - Added the required column `name` to the `Estado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Estado" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;
