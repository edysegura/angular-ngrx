export interface User {
  id: number;
  name: string;
  cardNumber: string;
  cardType: string;
}

export interface Users {
  users: User[];
}
