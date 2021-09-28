"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createmovie_dto_1 = require("./createmovie.dto");
class UpdateMovieDto extends (0, mapped_types_1.PartialType)(createmovie_dto_1.CreateMovieDto) {
}
exports.UpdateMovieDto = UpdateMovieDto;
//# sourceMappingURL=updatemovie.dto.js.map