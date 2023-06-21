import { Category, ProductStatus } from 'src/types/enums';

export interface IProductCreateParams {
  name: string;
  category: Category;
  price: number;
  count: number;
  geoPosition: string;
  status?: ProductStatus;
  oldPrice?: number;
  sizes?: string[];
  colors?: string[];
  materials?: string[];
  styles?: string[];
  userId: number;
}
