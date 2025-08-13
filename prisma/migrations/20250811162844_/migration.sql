-- CreateEnum
CREATE TYPE "TipoTraza" AS ENUM ('NACIONAL', 'INTERNACIONAL');

-- AlterTable
ALTER TABLE "Traza" ADD COLUMN     "tipoTraza" "TipoTraza" NOT NULL DEFAULT 'NACIONAL';
