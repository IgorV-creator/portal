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
exports.UsersControler = void 0;
const role_guard_1 = require("./../../auth/role.guard");
const users_model_1 = require("./../users.model");
const common_1 = require("@nestjs/common");
const service_module_1 = require("../service/service.module");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../dto/create-user.dto");
const jwt_guard_1 = require("../../auth/jwt.guard");
const role_auth_decorator_1 = require("../../auth/role-auth.decorator");
const add_role_dto_1 = require("../../roles/dto/add-role.dto");
const ban_user_dto_1 = require("../../roles/dto/ban-user.dto");
let UsersControler = class UsersControler {
    constructor(userService) {
        this.userService = userService;
    }
    create(userDto) {
        return this.userService.createUser(userDto);
    }
    getAll() {
        return this.userService.getAllUser();
    }
    addRole(dto) {
        return this.userService.addRole(dto);
    }
    ban(dto) {
        return this.userService.ban(dto);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'endpoint создания пользователя' }),
    swagger_1.ApiResponse({ status: 200, type: users_model_1.User }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersControler.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'endpoint получения пользователя' }),
    swagger_1.ApiResponse({ status: 200, type: [users_model_1.User] }),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    role_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(role_guard_1.RoletGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersControler.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Выдать роль' }),
    swagger_1.ApiResponse({ status: 200 }),
    role_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(role_guard_1.RoletGuard),
    common_1.Post('/role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersControler.prototype, "addRole", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Забанить пользователя' }),
    swagger_1.ApiResponse({ status: 200 }),
    role_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(role_guard_1.RoletGuard),
    common_1.Post('/ban'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersControler.prototype, "ban", null);
UsersControler = __decorate([
    swagger_1.ApiTags('Пользователи'),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [service_module_1.UserService])
], UsersControler);
exports.UsersControler = UsersControler;
//# sourceMappingURL=controler.module.js.map