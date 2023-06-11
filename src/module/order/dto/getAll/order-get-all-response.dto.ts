import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/entities';
import { IOrderGetAllResponse } from 'src/types';
import { DeliveryMethod } from 'src/types/enums';

export class OrderGetAllResponseDto implements IOrderGetAllResponse {
  @ApiProperty()
  orders: {
    id: number;
    check: string;
    deliveryAddress: string;
    deliveryMethod: DeliveryMethod;
    price: number;
    productId: number;
    isActive: boolean;
  }[];

  constructor(orders: Order[]) {
    this.orders = orders.map((order) => ({
      id: order.id,
      check: order.check,
      deliveryAddress: order.deliveryAddress,
      deliveryMethod: order.deliveryMethod,
      price: order.price,
      productId: order.product.id,
      isActive: order.isActive,
    }));
  }
}
