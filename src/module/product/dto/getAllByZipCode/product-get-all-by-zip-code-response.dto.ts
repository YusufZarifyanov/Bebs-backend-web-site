import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/entities';
import { IProductGetAllByZipCodeResponse } from 'src/types';
import { Category, ProductStatus } from 'src/types/enums';

export class ProductGetAllByZipCodeResponseDto
  implements IProductGetAllByZipCodeResponse
{
  @ApiProperty()
  products: {
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
    isActive: boolean;
    stripeId: string;
  }[];

  constructor(products: Product[]) {
    this.products = products.map((product) => ({
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
      isActive: product.isActive,
      stripeId: product.stripeId,
    }));
  }
}
