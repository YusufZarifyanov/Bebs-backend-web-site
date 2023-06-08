import { DeliveryMethod } from 'src/types/enums';

export interface IOrderCreateParams {
  check: string;
  deliveryAddress: string;
  deliveryMethod?: DeliveryMethod;
  price: number;
  userId: number;
}
