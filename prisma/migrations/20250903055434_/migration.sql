-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "qrFieldId" UUID;

-- CreateTable
CREATE TABLE "QRField" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "qrData" TEXT,
    "qrSize" TEXT,
    "qrColor" TEXT,
    "qrBackgroundColor" TEXT,
    "qrErrorCorrectionLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QRField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QRField_id_idx" ON "QRField"("id");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_qrFieldId_fkey" FOREIGN KEY ("qrFieldId") REFERENCES "QRField"("id") ON DELETE SET NULL ON UPDATE CASCADE;
