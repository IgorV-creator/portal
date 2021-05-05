import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
export interface RoleCreateAttrs {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreateAttrs> {
    id: number;
    value: string;
    description: string;
    users: User[];
}
