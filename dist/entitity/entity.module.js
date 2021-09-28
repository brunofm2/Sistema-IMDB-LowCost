"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const avaliacao_controller_1 = require("./avaliacao/avaliacao.controller");
const avaliacao_service_1 = require("./avaliacao/avaliacao.service");
const movie_controller_1 = require("./movie/movie.controller");
const movie_service_1 = require("./movie/movie.service");
let EntityModule = class EntityModule {
};
EntityModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [prisma_service_1.PrismaService, movie_service_1.MovieService, avaliacao_service_1.AvaliacaoService],
        controllers: [movie_controller_1.MovieController, avaliacao_controller_1.AvaliacaoController],
        exports: [prisma_service_1.PrismaService, movie_service_1.MovieService, avaliacao_service_1.AvaliacaoService,
        ],
    })
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map