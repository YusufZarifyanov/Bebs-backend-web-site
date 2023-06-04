import { IProductDeleteResponse } from 'src/types';
import { Product } from 'src/entities';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDeleteResponseDto implements IProductDeleteResponse {
  @ApiProperty()
  id: number;

  constructor(product: Product) {
    this.id = product.id;
  }
}
