import { PostsService } from './../service/posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(dto: CreatePostDto, image: any): Promise<any>;
}
