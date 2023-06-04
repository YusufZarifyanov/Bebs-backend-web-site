import { IAuthLoginResponse } from 'src/types';
import { AuthLoginResponseInterface } from '../../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginResponseDto implements IAuthLoginResponse {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  token: string;

  constructor(authLoginData: AuthLoginResponseInterface) {
    this.token = authLoginData.token;
    this.userId = authLoginData.userId;
  }
}
