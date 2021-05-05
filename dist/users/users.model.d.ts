import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Post } from "src/posts/posts.model";
export interface UserCreateAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreateAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    posts: Post[];
}
