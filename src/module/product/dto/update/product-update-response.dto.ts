import { IProductUpdateResponse } from 'src/types';
import { Product } from 'src/entities';
import { Category, ProductStatus } from 'src/types/enums';
import { ApiProperty } from '@nestjs/swagger';

export class ProductUpdateResponseDto implements IProductUpdateResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  photoUrl: string;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  price: number;

  @ApiProperty()
  count: number;

  @ApiProperty()
  geoPosition: string;

  @ApiProperty()
  status: ProductStatus;

  @ApiProperty()
  oldPrice: number;

  @ApiProperty()
  sizes: string[];

  @ApiProperty()
  colors: string[];

  @ApiProperty()
  materials: string[];

  @ApiProperty()
  styles: string[];

  @ApiProperty()
  isActive: boolean;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.photoUrl = product.photoUrl;
    this.category = product.category;
    this.price = product.price;
    this.count = product.count;
    this.geoPosition = product.geoPosition;
    this.status = product.status;
    this.oldPrice = product.oldPrice;
    this.sizes = product.sizes;
    this.colors = product.colors;
    this.materials = product.materials;
    this.styles = product.styles;
    this.isActive = product.isActive;
  }
}
