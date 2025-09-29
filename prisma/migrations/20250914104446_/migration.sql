/*
  Warnings:

  - Added the required column `densidad` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idProducto` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iva` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperatura` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "densidad" TEXT NOT NULL,
ADD COLUMN     "idProducto" TEXT NOT NULL,
ADD COLUMN     "iva" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "temperatura" TEXT NOT NULL;
