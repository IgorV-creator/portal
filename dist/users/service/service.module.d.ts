import { BanUserDto } from './../../roles/dto/ban-user.dto';
import { User } from '../users.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { RolesService } from 'src/roles/service/roles.service';
import { AddRoleDto } from 'src/roles/dto/add-role.dto';
export declare class UserService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser: (dto: CreateUserDto) => Promise<User>;
    getAllUser: () => Promise<User[]>;
    getUsersByEmail: (email: string) => Promise<User>;
    addRole: (dto: AddRoleDto) => Promise<AddRoleDto>;
    ban: (dto: BanUserDto) => Promise<User>;
}
