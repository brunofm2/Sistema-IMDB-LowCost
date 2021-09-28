"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundException = void 0;
const exception_1 = require("./exception");
class EntityNotFoundException extends exception_1.Exception {
    constructor(description, context) {
        super(400, 'EntityNotFoundException', description, context, EntityNotFoundException);
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=entitynotfound.exception.js.map