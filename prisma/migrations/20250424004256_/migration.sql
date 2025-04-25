-- CreateTable
CREATE TABLE "Transportista" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "generated" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Transportista_pkey" PRIMARY KEY ("id")
);
