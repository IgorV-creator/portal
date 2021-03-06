"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const ValidateException_1 = require("../exception/ValidateException");
let ValidatePipe = class ValidatePipe {
    async transform(value, metadata) {
        const obj = class_transformer_1.plainToClass(metadata.metatype, value);
        const error = await class_validator_1.validate(obj);
        if (error.length) {
            let messages = error.map(err => `${err.property} - ${Object.values(err.constraints).join(', ')}`);
            throw new ValidateException_1.ValidateException(messages);
        }
        return value;
    }
};
ValidatePipe = __decorate([
    common_1.Injectable()
], ValidatePipe);
exports.ValidatePipe = ValidatePipe;
//# sourceMappingURL=validation.pipe.js.map