import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/entities';
import { IPaginationResponse, IProductGetAllResponse } from 'src/types';
import { Category, ProductStatus } from 'src/types/enums';

export class ProductGetAllResponseDto implements IProductGetAllResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  data: {
    id: number;
    name: string;
    photoUrl: string;
    category: Category;
    price: number;
    count: number;
    geoPosition: string;
    status: ProductStatus;
    oldPrice: number;
    sizes: string[];
    colors: string[];
    materials: string[];
    styles: string[];
    userId: number;
    isActive: boolean;
  }[];

  constructor(products: IPaginationResponse<Product>) {
    this.total = products.total;
    this.data = products.data.map((product) => ({
      id: product.id,
      name: product.name,
      photoUrl: product.photoUrl,
      category: product.category,
      price: product.price,
      count: product.count,
      geoPosition: product.geoPosition,
      status: product.status,
      oldPrice: product.oldPrice,
      sizes: product.sizes,
      colors: product.colors,
      materials: product.materials,
      styles: product.styles,
      userId: product.user.id,
      isActive: product.isActive,
    }));
  }
}
