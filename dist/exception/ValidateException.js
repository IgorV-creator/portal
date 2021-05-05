"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateException = void 0;
const common_1 = require("@nestjs/common");
class ValidateException extends common_1.HttpException {
    constructor(response) {
        super(response, common_1.HttpStatus.BAD_REQUEST);
        this.messages = response;
    }
}
exports.ValidateException = ValidateException;
//# sourceMappingURL=ValidateException.js.map