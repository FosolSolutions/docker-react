import { IUserRole } from '.';

export interface IUser {
  id: number;
  key: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isDisabled: boolean;
  roles?: IUserRole[];
  rowVersion?: string;
  [propName: string]: any;
}
