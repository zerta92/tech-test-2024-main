export interface NextDelivery {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}
export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: PouchSize;
}

export interface Message {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
}

export enum PouchSize {
  'A' = 'A',
  'B' = 'B',
  'C' = 'C',
  'D' = 'D',
  'E' = 'E',
  'F' = 'F',
}
