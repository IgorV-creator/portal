import { User } from './../users/users.model';
import { UserService } from './../users/service/service.module';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ){}

    login = async(userDto: CreateUserDto) => {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    registration = async(userDto: CreateUserDto) => {
        const candidate = await this.userService.getUsersByEmail(userDto.email)
        //если пользователь уже есть с таким email
        if(candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        //если пользователя нет хешируем пароль
        const hashPasword = await bcrypt.hashSync(userDto.password, 5);
        const user = await this.userService.createUser({...userDto,  password: hashPasword})
        //возвращаем токен Пользователя
        return this.generateToken(user)
    }

    //токен Пользователя
    private generateToken = async(user: User) => {
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles
        }
        const token = await this.jwtService.sign(payload)
        return { token }
    }

    private validateUser = async (userDto: CreateUserDto) => {
        const user = await this.userService.getUsersByEmail(userDto.email);
        //проверим совпадают ли пароли. Cравни ваем только хешированные
        const passwordEquals = await bcrypt.compareSync(userDto.password, user.password);
            if(user && passwordEquals){
                return user;
            }
        throw new UnauthorizedException({message: 'Некорректный пароль'})
    }
}
