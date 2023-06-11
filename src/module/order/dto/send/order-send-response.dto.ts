import { IOrderSendResponse } from 'src/types';
import { ApiProperty } from '@nestjs/swagger';
import { OrderSendInterface } from 'src/module/product/interface';

export class OrderSendResponseDto implements IOrderSendResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  trackNumber: string;

  constructor(orderSendInfo: OrderSendInterface) {
    this.id = orderSendInfo.id;
    this.productId = orderSendInfo.product.id;
    this.trackNumber = orderSendInfo.trackNumber;
  }
}
