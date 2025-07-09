/*
  Warnings:

  - Added the required column `color` to the `TemplateField` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TemplateField" ADD COLUMN     "color" TEXT NOT NULL;
