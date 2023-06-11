import { Category, ProductStatus } from 'src/types/enums';

export interface IProductGetAllResponse {
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
    userId: number;
    isActive: boolean;
  }[];
}
