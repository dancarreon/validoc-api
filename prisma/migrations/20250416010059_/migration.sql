/*
  Warnings:

  - The primary key for the `ClaveConcentradora` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ClaveConcentradora` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Estado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Estado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Producto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `RazonSocialComercial` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `RazonSocialComercial` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `estadoId` on the `TadDireccion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "TadDireccion" DROP CONSTRAINT "TadDireccion_estadoId_fkey";

-- AlterTable
ALTER TABLE "ClaveConcentradora" DROP CONSTRAINT "ClaveConcentradora_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "ClaveConcentradora_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Estado" DROP CONSTRAINT "Estado_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Estado_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Producto_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RazonSocialComercial" DROP CONSTRAINT "RazonSocialComercial_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "RazonSocialComercial_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TadDireccion" DROP COLUMN "estadoId",
ADD COLUMN     "estadoId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "TadDireccion" ADD CONSTRAINT "TadDireccion_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
