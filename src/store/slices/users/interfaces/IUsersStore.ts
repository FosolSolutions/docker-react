import { IUser } from 'libs/hooks';

export interface IUsersStore {
  total: number;
  users: IUser[];
}
