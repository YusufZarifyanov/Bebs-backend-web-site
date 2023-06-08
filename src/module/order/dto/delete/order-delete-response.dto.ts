import { IOrderDeleteResponse } from 'src/types';
import { Order } from 'src/entities';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDeleteResponseDto implements IOrderDeleteResponse {
  @ApiProperty()
  id: number;

  constructor(order: Order) {
    this.id = order.id;
  }
}
