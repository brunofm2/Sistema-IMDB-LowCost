import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createmovie.dto';
import { UpdateMovieDto } from './dto/updatemovie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(newMovieDto: CreateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Movie[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<void>;
    remove(id: string): Promise<void>;
}
