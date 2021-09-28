import {Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AvaliacaoController } from './avaliacao/avaliacao.controller';
import { AvaliacaoService } from './avaliacao/avaliacao.service';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';


@Module({
  imports: [],
  providers: [PrismaService, MovieService, AvaliacaoService],
  controllers: [MovieController, AvaliacaoController],
  exports: [PrismaService, MovieService, AvaliacaoService,
  ],
})
export class EntityModule {}
