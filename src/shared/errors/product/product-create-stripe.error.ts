import { HttpStatus } from '@nestjs/common';
import { BaseResponseError } from '../base.error';

export class ProductCreateStripeError extends BaseResponseError {
  constructor() {
    super(`Stripe error: create product`, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
