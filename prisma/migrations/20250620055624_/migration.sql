-- AlterTable
ALTER TABLE "Traza" ADD COLUMN     "capAutotanque4" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Template" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateField" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "templateId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "fontFamily" TEXT NOT NULL,
    "fontSize" DOUBLE PRECISION NOT NULL,
    "align" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Template_name_idx" ON "Template"("name");

-- CreateIndex
CREATE INDEX "TemplateField_name_idx" ON "TemplateField"("name");

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
