/*
  Warnings:

  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_movieId_fkey";

-- DropTable
DROP TABLE "movies";

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "media" DOUBLE PRECISION NOT NULL,
    "quantidadeMedias" INTEGER NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
