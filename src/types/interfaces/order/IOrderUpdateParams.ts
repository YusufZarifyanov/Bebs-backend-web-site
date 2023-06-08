import { DeliveryMethod } from 'src/types/enums';

export interface IOrderUpdateParams {
  id: number;
  check?: string;
  deliveryAddress?: string;
  deliveryMethod?: DeliveryMethod;
  price?: number;
  userId?: number;
}
