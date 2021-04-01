import { IError } from '.';

export interface IAppStore {
  loading: boolean;
  requests: string[];
  error: IError | null;
}
