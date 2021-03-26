import { IUser } from '.';

export interface IUsersStore {
  total: number;
  users: IUser[];
}
