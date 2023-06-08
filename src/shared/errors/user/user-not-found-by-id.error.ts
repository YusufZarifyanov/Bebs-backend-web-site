import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class UserNotFoundByIdError extends BaseResponseError {
  constructor(id: number) {
    super(`User with id = ${id} not found`, HttpStatus.BAD_REQUEST);
  }
}
