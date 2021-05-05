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
exports.AuthService = void 0;
const service_module_1 = require("./../users/service/service.module");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.login = async (userDto) => {
            const user = await this.validateUser(userDto);
            return this.generateToken(user);
        };
        this.registration = async (userDto) => {
            const candidate = await this.userService.getUsersByEmail(userDto.email);
            if (candidate) {
                throw new common_1.HttpException('Пользователь с таким email уже существует', common_1.HttpStatus.BAD_REQUEST);
            }
            const hashPasword = await bcrypt.hashSync(userDto.password, 5);
            const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPasword }));
            return this.generateToken(user);
        };
        this.generateToken = async (user) => {
            const payload = {
                id: user.id,
                email: user.email,
                roles: user.roles
            };
            const token = await this.jwtService.sign(payload);
            return { token };
        };
        this.validateUser = async (userDto) => {
            const user = await this.userService.getUsersByEmail(userDto.email);
            const passwordEquals = await bcrypt.compareSync(userDto.password, user.password);
            if (user && passwordEquals) {
                return user;
            }
            throw new common_1.UnauthorizedException({ message: 'Некорректный пароль' });
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [service_module_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map