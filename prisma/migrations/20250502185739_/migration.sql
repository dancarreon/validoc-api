-- DropIndex
DROP INDEX "ClaveConcentradora_clave_idx";

-- DropIndex
DROP INDEX "Estado_name_idx";

-- DropIndex
DROP INDEX "Producto_clave_idx";

-- DropIndex
DROP INDEX "RazonSocialComercial_name_idx";

-- DropIndex
DROP INDEX "TadDireccion_ciudad_idx";

-- CreateIndex
CREATE INDEX "ClaveConcentradora_clave_idx" ON "ClaveConcentradora"("clave");

-- CreateIndex
CREATE INDEX "ClaveConcentradora_name_idx" ON "ClaveConcentradora"("name");

-- CreateIndex
CREATE INDEX "Estado_name_idx" ON "Estado"("name");

-- CreateIndex
CREATE INDEX "Producto_clave_idx" ON "Producto"("clave");

-- CreateIndex
CREATE INDEX "RazonSocialComercial_name_idx" ON "RazonSocialComercial"("name");

-- CreateIndex
CREATE INDEX "TadDireccion_ciudad_idx" ON "TadDireccion"("ciudad");

-- CreateIndex
CREATE INDEX "TadDireccion_estadoId_idx" ON "TadDireccion"("estadoId");

-- CreateIndex
CREATE INDEX "Transportista_name_idx" ON "Transportista"("name");

-- CreateIndex
CREATE INDEX "Transportista_lastName_idx" ON "Transportista"("lastName");
