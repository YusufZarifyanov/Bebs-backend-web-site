import { Order } from 'src/entities';

export interface OrderSendInterface extends Order {
  trackNumber: string;
}
