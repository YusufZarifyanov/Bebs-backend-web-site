import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class FileError extends BaseResponseError {
  constructor() {
    super(`Error writing file`, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
