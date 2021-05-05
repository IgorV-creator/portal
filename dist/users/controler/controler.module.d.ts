import { User } from './../users.model';
import { UserService } from '../service/service.module';
import { CreateUserDto } from '../dto/create-user.dto';
import { AddRoleDto } from 'src/roles/dto/add-role.dto';
import { BanUserDto } from 'src/roles/dto/ban-user.dto';
export declare class UsersControler {
    private userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
