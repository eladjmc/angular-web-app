import { ListItem } from './list-item';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export interface User {
  token:string;
  firstName: string;
  lastName: string;
  id?: number;
  email:string;
  password: string;
  age: number;
  list: ListItem[];
  role: Role;
}
