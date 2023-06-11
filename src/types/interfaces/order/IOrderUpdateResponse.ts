import { DeliveryMethod } from 'src/types/enums';

export interface IOrderUpdateResponse {
  id: number;
  check: string;
  deliveryAddress: string;
  deliveryMethod: DeliveryMethod;
  price: number;
  productId: number;
  isActive: boolean;
}
