-- CreateTable
CREATE TABLE "TadDireccion" (
    "id" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "estadoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TadDireccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClaveConcentradora" (
    "id" TEXT NOT NULL,
    "clave" BIGINT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClaveConcentradora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RazonSocialComercial" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RazonSocialComercial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "clave" BIGINT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TadDireccion" ADD CONSTRAINT "TadDireccion_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "Estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
