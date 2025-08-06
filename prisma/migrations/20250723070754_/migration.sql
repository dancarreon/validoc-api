-- CreateTable
CREATE TABLE "Cliente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "noCliente" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "rfc" TEXT NOT NULL,
    "unbMx" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "direccionCorta" TEXT NOT NULL,
    "id2" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_noCliente_key" ON "Cliente"("noCliente");

-- CreateIndex
CREATE INDEX "Cliente_noCliente_idx" ON "Cliente"("noCliente");

-- CreateIndex
CREATE INDEX "Cliente_rfc_idx" ON "Cliente"("rfc");
