import { IOrderCreateResponse } from 'src/types';
import { Order } from 'src/entities';
import { DeliveryMethod } from 'src/types/enums';
import { ApiProperty } from '@nestjs/swagger';

export class OrderCreateResponseDto implements IOrderCreateResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  check: string;

  @ApiProperty()
  deliveryAddress: string;

  @ApiProperty()
  deliveryMethod: DeliveryMethod;

  @ApiProperty()
  price: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  isActive: boolean;

  constructor(order: Order) {
    this.id = order.id;
    this.check = order.check;
    this.deliveryAddress = order.deliveryAddress;
    this.deliveryMethod = order.deliveryMethod;
    this.price = order.price;
    this.userId = order.user.id;
    this.isActive = order.isActive;
  }
}
