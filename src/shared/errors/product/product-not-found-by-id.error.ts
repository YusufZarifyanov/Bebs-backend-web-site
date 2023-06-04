import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class ProductNotFoundByIdError extends BaseResponseError {
  constructor(id: number) {
    super(`Product with id = ${id} not found`, HttpStatus.BAD_REQUEST);
  }
}
