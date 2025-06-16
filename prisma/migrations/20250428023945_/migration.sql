/*
  Warnings:

  - Added the required column `direccion` to the `TadDireccion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TadDireccion" ADD COLUMN     "direccion" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Traza" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "tadDireccionId" UUID NOT NULL,
    "claveConcentradoraId" UUID NOT NULL,
    "razonSocialComercialId" UUID NOT NULL,
    "productoId" UUID NOT NULL,
    "capAutotanque1" DOUBLE PRECISION,
    "capAutotanque2" DOUBLE PRECISION,
    "capAutotanque3" DOUBLE PRECISION,
    "litrosTotales" DOUBLE PRECISION,
    "precioLitro" DOUBLE PRECISION,
    "destino" TEXT,
    "sello1Autotanque1" TEXT,
    "sello2Autotanque1" TEXT,
    "sello1Autotanque2" TEXT,
    "sello2Autotanque2" TEXT,
    "nombreTransportista" TEXT,
    "nombreOperador" TEXT,
    "fechaHoraPemex" TIMESTAMP(3),
    "fechaHoraTrasvase" TIMESTAMP(3),
    "folioPemex1" TEXT,
    "folioPemex2" TEXT,
    "folioPemex3" TEXT,
    "folioFiscalPemex1" TEXT,
    "folioFiscalPemex2" TEXT,
    "folioFiscalPemex3" TEXT,
    "folioRemisionNacional" TEXT,
    "folioFiscalRemisionNacional" TEXT,
    "folioTrasvase" TEXT,
    "numeroTractor" TEXT,
    "placasTractor" TEXT,
    "autotanque1" TEXT,
    "placasAutotanque1" TEXT,
    "autotanque2" TEXT,
    "placasAutotanque2" TEXT,
    "autotanque3" TEXT,
    "folio" TEXT,
    "cfi" TEXT,
    "destinoCorto" TEXT,
    "numeroLicencia" TEXT,
    "marcaUnidad1" TEXT,
    "folioCartaPorte" TEXT,
    "folioFiscalCartaPorte" TEXT,
    "fechaHoraCartaPorte" TIMESTAMP(3),

    CONSTRAINT "Traza_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_tadDireccionId_fkey" FOREIGN KEY ("tadDireccionId") REFERENCES "TadDireccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_claveConcentradoraId_fkey" FOREIGN KEY ("claveConcentradoraId") REFERENCES "ClaveConcentradora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_razonSocialComercialId_fkey" FOREIGN KEY ("razonSocialComercialId") REFERENCES "RazonSocialComercial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
