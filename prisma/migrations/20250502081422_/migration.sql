-- CreateIndex
CREATE INDEX "ClaveConcentradora_clave_idx" ON "ClaveConcentradora" USING HASH ("clave");

-- CreateIndex
CREATE INDEX "Estado_name_idx" ON "Estado" USING HASH ("name");

-- CreateIndex
CREATE INDEX "Producto_clave_idx" ON "Producto" USING HASH ("clave");

-- CreateIndex
CREATE INDEX "RazonSocialComercial_name_idx" ON "RazonSocialComercial" USING HASH ("name");

-- CreateIndex
CREATE INDEX "TadDireccion_ciudad_idx" ON "TadDireccion" USING HASH ("ciudad");
