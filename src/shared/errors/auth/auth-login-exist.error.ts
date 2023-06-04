import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class AuthLoginExistError extends BaseResponseError {
  constructor(login: string) {
    super(`User with login = ${login} already exist!`, HttpStatus.BAD_REQUEST);
  }
}
