-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "User"
(
    "id"        TEXT         NOT NULL,
    "userName"  TEXT         NOT NULL,
    "name"      TEXT         NOT NULL,
    "lastName"  TEXT         NOT NULL,
    "email"     TEXT         NOT NULL,
    "phone"     TEXT         NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status"    "UserStatus" NOT NULL DEFAULT 'INACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User" ("userName");
