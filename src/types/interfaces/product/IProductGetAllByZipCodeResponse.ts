import { Category, ProductStatus } from 'src/types/enums';

export interface IProductGetAllByZipCodeResponse {
  products: {
    id: number;
    name: string;
    photoUrl: string;
    category: Category;
    price: number;
    count: number;
    geoPosition: string;
    status: ProductStatus;
    oldPrice: number | null;
    sizes: string[];
    colors: string[];
    materials: string[];
    styles: string[];
    isActive: boolean;
  }[];
}
