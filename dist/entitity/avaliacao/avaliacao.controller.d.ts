import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/createavaliacaodto';
import { UpdateAvaliacaoDto } from './dto/updateavaliacaodto';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    create(newAvaliacaoeDto: CreateAvaliacaoDto): import(".prisma/client").Prisma.Prisma__AvaliacaoClient<import(".prisma/client").Avaliacao>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Avaliacao[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__AvaliacaoClient<import(".prisma/client").Avaliacao>;
    update(id: string, updateAvaliacaoDto: UpdateAvaliacaoDto): Promise<void>;
    remove(id: string): Promise<void>;
}
