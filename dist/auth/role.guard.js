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
exports.RoletGuard = void 0;
const role_auth_decorator_1 = require("./role-auth.decorator");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let RoletGuard = class RoletGuard {
    constructor(JwtService, reflector) {
        this.JwtService = JwtService;
        this.reflector = reflector;
    }
    canActivate(context) {
        try {
            const requireRoles = this.reflector.getAllAndOverride(role_auth_decorator_1.ROLES_KEY, [
                context.getHandler(),
                context.getClass()
            ]);
            if (!requireRoles) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const [bearer, token] = authHeader.split(' ');
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException({ message: 'Пользователь не авторизован' });
            }
            const user = this.JwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requireRoles.includes(role.value));
        }
        catch (e) {
            throw new common_1.HttpException('Нет доступа', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
RoletGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector])
], RoletGuard);
exports.RoletGuard = RoletGuard;
//# sourceMappingURL=role.guard.js.map