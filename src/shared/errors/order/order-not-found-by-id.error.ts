import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class OrderNotFoundByIdError extends BaseResponseError {
  constructor(id: number) {
    super(`Order with id = ${id} not found`, HttpStatus.BAD_REQUEST);
  }
}
