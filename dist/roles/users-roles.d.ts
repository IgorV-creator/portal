import { Model } from "sequelize-typescript";
export declare class UsersRoles extends Model<UsersRoles> {
    id: number;
    roleId: number;
    userId: number;
}
