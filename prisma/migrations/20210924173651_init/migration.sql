/*
  Warnings:

  - You are about to drop the `_AvaliacaoToMoviesAndSeries` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `movieId` to the `avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AvaliacaoToMoviesAndSeries" DROP CONSTRAINT "_AvaliacaoToMoviesAndSeries_A_fkey";

-- DropForeignKey
ALTER TABLE "_AvaliacaoToMoviesAndSeries" DROP CONSTRAINT "_AvaliacaoToMoviesAndSeries_B_fkey";

-- AlterTable
ALTER TABLE "avaliacao" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AvaliacaoToMoviesAndSeries";

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
