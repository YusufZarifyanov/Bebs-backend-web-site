import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class UserNotFoundByLoginError extends BaseResponseError {
  constructor(login: string) {
    super(`User with login = ${login} not found`, HttpStatus.BAD_REQUEST);
  }
}
