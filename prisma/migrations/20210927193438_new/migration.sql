/*
  Warnings:

  - Added the required column `soma` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movie" ADD COLUMN     "soma" DOUBLE PRECISION NOT NULL;
