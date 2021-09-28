"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    constructor(httpCode, internalCode, description, context, clazz) {
        super(description);
        this.httpCode = httpCode;
        this.internalCode = internalCode;
        this.description = description;
        this.context = context;
        Object.setPrototypeOf(this, clazz.prototype);
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map