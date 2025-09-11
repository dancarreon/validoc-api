/*
  Warnings:

  - You are about to drop the `_QRFieldToTemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `templateId` to the `QRField` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_QRFieldToTemplate" DROP CONSTRAINT "_QRFieldToTemplate_A_fkey";

-- DropForeignKey
ALTER TABLE "_QRFieldToTemplate" DROP CONSTRAINT "_QRFieldToTemplate_B_fkey";

-- AlterTable
ALTER TABLE "QRField" ADD COLUMN     "templateId" UUID NOT NULL;

-- DropTable
DROP TABLE "_QRFieldToTemplate";

-- AddForeignKey
ALTER TABLE "QRField" ADD CONSTRAINT "QRField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
