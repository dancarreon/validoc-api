-- DropForeignKey
ALTER TABLE "Traza" DROP CONSTRAINT "Traza_claveConcentradoraId_fkey";

-- DropForeignKey
ALTER TABLE "Traza" DROP CONSTRAINT "Traza_productoId_fkey";

-- DropForeignKey
ALTER TABLE "Traza" DROP CONSTRAINT "Traza_razonSocialComercialId_fkey";

-- DropForeignKey
ALTER TABLE "Traza" DROP CONSTRAINT "Traza_tadDireccionId_fkey";

-- AlterTable
ALTER TABLE "Traza" ALTER COLUMN "tadDireccionId" DROP NOT NULL,
ALTER COLUMN "claveConcentradoraId" DROP NOT NULL,
ALTER COLUMN "razonSocialComercialId" DROP NOT NULL,
ALTER COLUMN "productoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_tadDireccionId_fkey" FOREIGN KEY ("tadDireccionId") REFERENCES "TadDireccion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_claveConcentradoraId_fkey" FOREIGN KEY ("claveConcentradoraId") REFERENCES "ClaveConcentradora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_razonSocialComercialId_fkey" FOREIGN KEY ("razonSocialComercialId") REFERENCES "RazonSocialComercial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
