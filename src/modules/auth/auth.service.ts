import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}
    async signup(userData) {
        const user= await this.userService.create(userData);
        console.log(user)
            if (user) {
                return 'Correct'
            }
    }

    async login(loginData: LoginUserDto) {
        try {
            const user = await this.userService.findOneUserByEmail(loginData.email)
            if (user) {
                if(user.password === loginData.password) {
                    return user
                }
            }
            return "false data"
        }
        catch (error) {
            return error.message
        }
    }
}