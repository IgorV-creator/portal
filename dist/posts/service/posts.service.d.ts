import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../posts.model';
export declare class PostsService {
    private postRepository;
    private fileService;
    constructor(postRepository: typeof Post, fileService: FilesService);
    create: (postDto: CreatePostDto, image: any) => Promise<any>;
}
