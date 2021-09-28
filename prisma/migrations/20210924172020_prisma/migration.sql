-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "media" DOUBLE PRECISION NOT NULL,
    "quantidadeMedias" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" SERIAL NOT NULL,
    "nomeFilme" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AvaliacaoToMoviesAndSeries" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AvaliacaoToMoviesAndSeries_AB_unique" ON "_AvaliacaoToMoviesAndSeries"("A", "B");

-- CreateIndex
CREATE INDEX "_AvaliacaoToMoviesAndSeries_B_index" ON "_AvaliacaoToMoviesAndSeries"("B");

-- AddForeignKey
ALTER TABLE "_AvaliacaoToMoviesAndSeries" ADD FOREIGN KEY ("A") REFERENCES "avaliacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AvaliacaoToMoviesAndSeries" ADD FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
