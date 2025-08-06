/*
  Warnings:

  - You are about to drop the column `containerWidth` on the `TemplateField` table. All the data in the column will be lost.
  - Added the required column `containerWidth` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "containerWidth" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "TemplateField" DROP COLUMN "containerWidth";
