import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/createmovie.dto';
import { PrismaService } from '../../prisma.service';
import { EntityNotFoundException } from '../../exception/entitynotfound.exception';
import { UpdateMovieDto } from './dto/updatemovie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    return this.prismaService.movie.findMany();
  }

  findById(id: number) {
    const movie = this.prismaService.movie.findUnique({
      where: {
        id: id,
      },
    });
    if (movie == null) {
      throw new EntityNotFoundException('Movie ' + id + ' not found');
    }
    return movie;
  }


  createMovie(data: CreateMovieDto) {
    return this.prismaService.movie.create({ data });

  }


  async updateMovie(id: number, userDto: UpdateMovieDto) {
    const userEntity: Movie | null = await this.findById(id);

    if (userEntity == null) throw new BadRequestException('UserId is invalid');
    await this.prismaService.movie.update({
      where: {
        id: id,
      },
      data: {
        nome: userDto.nome ?? userEntity.nome,
        media: userDto.media ?? userEntity.media,
        soma: userDto.soma ?? userEntity.soma,
        quantidadeMedias: userDto.quantidadeMedias ?? userEntity.quantidadeMedias,
      },
    });
  }

  async deleteMovie(id: number) {
    await this.prismaService.movie.delete({
      where: {
        id: id,
      },
    });
  }

}