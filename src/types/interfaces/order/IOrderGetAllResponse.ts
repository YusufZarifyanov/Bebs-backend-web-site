import { DeliveryMethod } from 'src/types/enums';

export interface IOrderGetAllResponse {
  orders: {
    id: number;
    check: string;
    deliveryAddress: string;
    deliveryMethod: DeliveryMethod;
    price: number;
    userId: number;
    isActive: boolean;
  }[];
}
