import { DeliveryMethod } from 'src/types/enums';

export interface IOrderSendParams {
  id: number;
  deliveryAddress: string;
  deliveryMethod: DeliveryMethod;
}
