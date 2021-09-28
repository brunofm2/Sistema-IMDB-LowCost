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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const avaliacao_service_1 = require("./avaliacao.service");
const createavaliacaodto_1 = require("./dto/createavaliacaodto");
const updateavaliacaodto_1 = require("./dto/updateavaliacaodto");
let AvaliacaoController = class AvaliacaoController {
    constructor(avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }
    create(newAvaliacaoeDto) {
        return this.avaliacaoService.createAvalicacao(newAvaliacaoeDto);
    }
    findAll() {
        return this.avaliacaoService.findAll();
    }
    findById(id) {
        return this.avaliacaoService.findById(parseInt(id));
    }
    update(id, updateAvaliacaoDto) {
        return this.avaliacaoService.updateAvaliacao(parseInt(id), updateAvaliacaoDto);
    }
    remove(id) {
        return this.avaliacaoService.deleteAvaliacao(parseInt(id));
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createavaliacaodto_1.CreateAvaliacaoDto]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateavaliacaodto_1.UpdateAvaliacaoDto]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AvaliacaoController.prototype, "remove", null);
AvaliacaoController = __decorate([
    (0, common_2.Controller)('avaliacao'),
    __metadata("design:paramtypes", [avaliacao_service_1.AvaliacaoService])
], AvaliacaoController);
exports.AvaliacaoController = AvaliacaoController;
//# sourceMappingURL=avaliacao.controller.js.map