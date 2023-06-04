import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class AuthUncorrectPasswordError extends BaseResponseError {
  constructor() {
    super('Uncorrect password!', HttpStatus.UNAUTHORIZED);
  }
}
