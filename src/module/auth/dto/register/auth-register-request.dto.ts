import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IAuthRegisterParams } from 'src/types';

export class AuthRegisterRequestDto implements IAuthRegisterParams {
  @ApiProperty()
  @IsString()
  login: string;

  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
