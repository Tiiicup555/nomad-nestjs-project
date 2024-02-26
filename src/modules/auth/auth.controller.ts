import {
    Controller,
    Post,
    Body,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreateUserDto } from './dto';

  @Controller('auth')
  export class AuthController {
    constructor (private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userData: AuthCreateUserDto) {
    try {
        return await this.authService.signup(userData);
    } catch (error) {
        return error
    }
  }

  @Post('login')
    async login(@Body() UserLogin) {
      try {
          return await this.authService.login(UserLogin);
      } catch (error) {
          return error
      }
  }
  }