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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
const users_roles_1 = require("../roles/users-roles");
const roles_model_1 = require("../roles/roles.model");
const posts_model_1 = require("../posts/posts.model");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'prymary key' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'example@example.com', description: 'User email' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '123', description: 'User password' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'false', description: 'User no banned' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.BOOLEAN, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'false', description: 'User no banReason' }),
    sequelize_typescript_2.Column({ type: sequelize_typescript_2.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], User.prototype, "banReason", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => roles_model_1.Role, () => users_roles_1.UsersRoles),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => posts_model_1.Post),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
User = __decorate([
    sequelize_typescript_2.Table({
        tableName: 'users'
    })
], User);
exports.User = User;
//# sourceMappingURL=users.model.js.map