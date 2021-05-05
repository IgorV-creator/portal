import { UserService } from './../users/service/service.module';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login: (userDto: CreateUserDto) => Promise<{
        token: string;
    }>;
    registration: (userDto: CreateUserDto) => Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
