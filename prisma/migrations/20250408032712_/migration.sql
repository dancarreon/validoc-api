-- AlterTable
ALTER TABLE "ClaveConcentradora" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "RazonSocialComercial" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
