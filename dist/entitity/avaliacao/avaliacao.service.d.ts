import { Avaliacao } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateAvaliacaoDto } from './dto/createavaliacaodto';
import { UpdateAvaliacaoDto } from './dto/updateavaliacaodto';
export declare class AvaliacaoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<Avaliacao[]>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__AvaliacaoClient<Avaliacao>;
    calcularMedia(movieId: number, value: number): Promise<void>;
    createAvalicacao(data: CreateAvaliacaoDto): import(".prisma/client").Prisma.Prisma__AvaliacaoClient<Avaliacao>;
    updateAvaliacao(id: number, userDto: UpdateAvaliacaoDto): Promise<void>;
    deleteAvaliacao(id: number): Promise<void>;
}
