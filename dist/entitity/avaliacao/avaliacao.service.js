"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const entitynotfound_exception_1 = require("../../exception/entitynotfound.exception");
let AvaliacaoService = class AvaliacaoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.avaliacao.findMany();
    }
    findById(id) {
        const avaliacao = this.prismaService.avaliacao.findUnique({
            where: {
                id: id,
            },
        });
        if (avaliacao == null) {
            throw new entitynotfound_exception_1.EntityNotFoundException('Avaliacao ' + id + ' not found');
        }
        return avaliacao;
    }
    async calcularMedia(movieId, value) {
        const movieEntity = await this.prismaService.movie.findUnique({
            where: { id: movieId }
        });
        if (movieEntity.quantidadeMedias == 0) {
            const movie = await this.prismaService.movie.update({
                where: { id: movieId },
                data: {
                    media: value,
                    soma: value,
                    quantidadeMedias: 1,
                },
            });
        }
        else {
            const movie = await this.prismaService.movie.update({
                where: { id: movieId },
                data: {
                    soma: movieEntity.soma + value,
                    quantidadeMedias: (movieEntity.quantidadeMedias + 1),
                    media: (value + movieEntity.soma) / (movieEntity.quantidadeMedias + 1),
                },
            });
        }
    }
    createAvalicacao(data) {
        this.calcularMedia(data.movieId, data.nota);
        return this.prismaService.avaliacao.create({ data });
    }
    async updateAvaliacao(id, userDto) {
        var _a, _b, _c;
        const userEntity = await this.findById(id);
        if (userEntity == null)
            throw new common_1.BadRequestException('Avaliacao Id is invalid');
        await this.prismaService.avaliacao.update({
            where: {
                id: id,
            },
            data: {
                nomeFilme: (_a = userDto.nomeFilme) !== null && _a !== void 0 ? _a : userEntity.nomeFilme,
                nota: (_b = userDto.nota) !== null && _b !== void 0 ? _b : userEntity.nota,
                movieId: (_c = userDto.movieId) !== null && _c !== void 0 ? _c : userEntity.movieId,
            },
        });
    }
    async deleteAvaliacao(id) {
        await this.prismaService.avaliacao.delete({
            where: {
                id: id,
            },
        });
    }
};
AvaliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AvaliacaoService);
exports.AvaliacaoService = AvaliacaoService;
//# sourceMappingURL=avaliacao.service.js.map