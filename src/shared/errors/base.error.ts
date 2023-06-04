import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseResponseError extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}
