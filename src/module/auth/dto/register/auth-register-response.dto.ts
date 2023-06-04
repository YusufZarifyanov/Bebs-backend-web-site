import { IAuthRegisterResponse } from 'src/types';
import { User } from 'src/entities';
import { ApiProperty } from '@nestjs/swagger';

export class AuthRegisterResponseDto implements IAuthRegisterResponse {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;

  constructor(authRegisterData: User) {
    this.userId = authRegisterData.id;
    this.login = authRegisterData.login;
    this.password = authRegisterData.password;
  }
}
