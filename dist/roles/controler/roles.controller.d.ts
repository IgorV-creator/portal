import { CreateRoleDto } from '../dto/create-role.dto';
import { RolesService } from '../service/roles.service';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: CreateRoleDto): Promise<import("../roles.model").Role>;
    getBayValue(value: string): Promise<import("../roles.model").Role>;
}
