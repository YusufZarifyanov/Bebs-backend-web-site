import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthLoginRequestDto,
  AuthLoginResponseDto,
  AuthRegisterRequestDto,
  AuthRegisterResponseDto,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: HttpStatus.OK, type: AuthRegisterResponseDto })
  async register(@Body() registerDto: AuthRegisterRequestDto) {
    const response = await this.authService.register(
      registerDto.login,
      registerDto.password,
    );

    return new AuthRegisterResponseDto(response);
  }

  @Post('login')
  @ApiResponse({ status: HttpStatus.OK, type: AuthLoginResponseDto })
  async login(@Body() loginDto: AuthLoginRequestDto) {
    const response = await this.authService.login(
      loginDto.login,
      loginDto.password,
    );

    return new AuthLoginResponseDto(response);
  }
}
