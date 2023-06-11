import { DeliveryMethod } from 'src/types/enums';

export interface IOrderGetResponse {
  id: number;
  check: string;
  deliveryAddress: string;
  deliveryMethod: DeliveryMethod;
  price: number;
  productId: number;
  isActive: boolean;
}
