import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/createmovie.dto';
import { PrismaService } from '../../prisma.service';
import { UpdateMovieDto } from './dto/updatemovie.dto';
export declare class MovieService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<Movie[]>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__MovieClient<Movie>;
    createMovie(data: CreateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<Movie>;
    updateMovie(id: number, userDto: UpdateMovieDto): Promise<void>;
    deleteMovie(id: number): Promise<void>;
}
