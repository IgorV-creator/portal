import { User } from 'src/users/users.model';
import { Model } from "sequelize-typescript";
export interface PostCreateAttrs {
    title: string;
    content: string;
    userId: number;
    image?: string;
}
export declare class Post extends Model<Post, PostCreateAttrs> {
    id: number;
    title: string;
    content: string;
    userId: number;
    image: string;
    author: User;
}
