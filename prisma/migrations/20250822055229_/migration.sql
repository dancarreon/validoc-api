-- AlterTable
ALTER TABLE "Traza" ADD COLUMN     "consecutivoId" UUID,
ADD COLUMN     "solicitanteId" UUID;

-- CreateTable
CREATE TABLE "Solicitante" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Solicitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consecutivo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "valor" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consecutivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Solicitante_name_idx" ON "Solicitante"("name");

-- CreateIndex
CREATE INDEX "Consecutivo_valor_idx" ON "Consecutivo"("valor");

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_consecutivoId_fkey" FOREIGN KEY ("consecutivoId") REFERENCES "Consecutivo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "Solicitante"("id") ON DELETE SET NULL ON UPDATE CASCADE;
