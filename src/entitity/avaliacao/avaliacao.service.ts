import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { Avaliacao } from '@prisma/client';
import { Movie } from '.prisma/client';
import { PrismaService } from '../../prisma.service';
import { EntityNotFoundException } from '../../exception/entitynotfound.exception';
import { CreateAvaliacaoDto } from './dto/createavaliacaodto';
import { UpdateAvaliacaoDto } from './dto/updateavaliacaodto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    return this.prismaService.avaliacao.findMany();
  }

  findById(id: number) {
    const avaliacao = this.prismaService.avaliacao.findUnique({
      where: {
        id: id,
      },
    });
    if (avaliacao == null) {
      throw new EntityNotFoundException('Avaliacao ' + id + ' not found');
    }
    return avaliacao;
  }

  /*
    getValue(numero: number) {
      const media = this.prismaService.movie.findUnique({
        where: {
          id: numero,
        },
      });
  
      return numero;
    }
    */

  async calcularMedia(movieId: number, value: number) {

    const movieEntity: Movie = await this.prismaService.movie.findUnique({
      where: { id: movieId }
    });

    if (movieEntity.quantidadeMedias == 0) {
      const movie: Movie | null = await this.prismaService.movie.update({
        where: { id: movieId },
        data: {
          media: value,     // Como és o primeiro valor, a média é ele mesmo.
          soma: value,
          quantidadeMedias: 1,
        },
      });

    } else {
      const movie: Movie | null = await this.prismaService.movie.update({
        where: { id: movieId },
        data: {
          soma: movieEntity.soma + value,
          quantidadeMedias: (movieEntity.quantidadeMedias + 1),
          media: (value + movieEntity.soma) / (movieEntity.quantidadeMedias + 1),
        },
      });
    }
  }

  createAvalicacao(data: CreateAvaliacaoDto) {
    this.calcularMedia(data.movieId, data.nota);

    return this.prismaService.avaliacao.create({ data });
  }


  async updateAvaliacao(id: number, userDto: UpdateAvaliacaoDto) {
    const userEntity: Avaliacao | null = await this.findById(id);

    if (userEntity == null) throw new BadRequestException('Avaliacao Id is invalid');
    await this.prismaService.avaliacao.update({
      where: {
        id: id,
      },
      data: {
        nomeFilme: userDto.nomeFilme ?? userEntity.nomeFilme,
        nota: userDto.nota ?? userEntity.nota,
        movieId: userDto.movieId ?? userEntity.movieId,
      },
    });
  }

  async deleteAvaliacao(id: number) {
    await this.prismaService.avaliacao.delete({
      where: {
        id: id,
      },
    });
  }
}