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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const entitynotfound_exception_1 = require("../../exception/entitynotfound.exception");
let MovieService = class MovieService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.movie.findMany();
    }
    findById(id) {
        const movie = this.prismaService.movie.findUnique({
            where: {
                id: id,
            },
        });
        if (movie == null) {
            throw new entitynotfound_exception_1.EntityNotFoundException('Movie ' + id + ' not found');
        }
        return movie;
    }
    createMovie(data) {
        return this.prismaService.movie.create({ data });
    }
    async updateMovie(id, userDto) {
        var _a, _b, _c, _d;
        const userEntity = await this.findById(id);
        if (userEntity == null)
            throw new common_1.BadRequestException('UserId is invalid');
        await this.prismaService.movie.update({
            where: {
                id: id,
            },
            data: {
                nome: (_a = userDto.nome) !== null && _a !== void 0 ? _a : userEntity.nome,
                media: (_b = userDto.media) !== null && _b !== void 0 ? _b : userEntity.media,
                soma: (_c = userDto.soma) !== null && _c !== void 0 ? _c : userEntity.soma,
                quantidadeMedias: (_d = userDto.quantidadeMedias) !== null && _d !== void 0 ? _d : userEntity.quantidadeMedias,
            },
        });
    }
    async deleteMovie(id) {
        await this.prismaService.movie.delete({
            where: {
                id: id,
            },
        });
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map