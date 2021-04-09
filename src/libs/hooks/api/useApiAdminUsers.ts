import React from 'react';
import { useApi, IUser } from '.';

/**
 * Provides all api endpoints for admin users.
 * @returns Axios hooks to make requests.
 */
export const useApiAdminUsers = () => {
  const api = useApi();

  return React.useMemo(
    () => ({
      getUsersPaged: () => api.get<IUser[]>('/admin/users'),
      getUser: (id: number) => api.get<IUser>(`/admin/users/${id}`),
      postUser: (user: IUser) => api.post<IUser>('/admin/users', user),
      putUser: (user: IUser) => api.put<IUser>(`/admin/users/${user.id}`, user),
      deleteUser: (user: IUser) => api.delete<IUser>(`/admin/users/${user.id}`, { data: user }),
    }),
    [api],
  );
};

export default useApiAdminUsers;
