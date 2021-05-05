"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const controler_module_1 = require("./controler/controler.module");
const service_module_1 = require("./service/service.module");
const users_model_1 = require("./users.model");
const roles_model_1 = require("../roles/roles.model");
const users_roles_1 = require("../roles/users-roles");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
const posts_model_1 = require("../posts/posts.model");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        controllers: [controler_module_1.UsersControler],
        providers: [service_module_1.UserService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, roles_model_1.Role, users_roles_1.UsersRoles, posts_model_1.Post]),
            roles_module_1.RolesModule,
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        exports: [service_module_1.UserService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map