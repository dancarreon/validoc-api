/*
  Warnings:

  - You are about to drop the column `qrFieldId` on the `Template` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_qrFieldId_fkey";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "qrFieldId";

-- CreateTable
CREATE TABLE "_QRFieldToTemplate" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_QRFieldToTemplate_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_QRFieldToTemplate_B_index" ON "_QRFieldToTemplate"("B");

-- AddForeignKey
ALTER TABLE "_QRFieldToTemplate" ADD CONSTRAINT "_QRFieldToTemplate_A_fkey" FOREIGN KEY ("A") REFERENCES "QRField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QRFieldToTemplate" ADD CONSTRAINT "_QRFieldToTemplate_B_fkey" FOREIGN KEY ("B") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;
