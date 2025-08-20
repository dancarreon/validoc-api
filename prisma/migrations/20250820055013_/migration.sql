-- AlterTable
ALTER TABLE "Traza" ADD COLUMN     "clienteId" UUID;

-- AddForeignKey
ALTER TABLE "Traza" ADD CONSTRAINT "Traza_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
