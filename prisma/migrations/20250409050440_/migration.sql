/*
  Warnings:

  - You are about to drop the column `nombre` on the `ClaveConcentradora` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `RazonSocialComercial` table. All the data in the column will be lost.
  - Added the required column `name` to the `ClaveConcentradora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `RazonSocialComercial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClaveConcentradora" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RazonSocialComercial" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;
