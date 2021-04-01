import React from 'react';
import { useApi } from '../../../libs/hooks';
import { useAppDispatch, fetchUsers, addUser, updateUser, removeUser, IUser } from 'store';

/**
 * React hook to perform async actions on users.
 * Provides all interaction with API and redux store.
 * @returns userUsers hook.
 */
export const useUsers = () => {
  const api = useApi();
  const dispatch = useAppDispatch();

  /**
   * Make a request to fetch a page of users.
   */
  const fetch = React.useCallback(async () => {
    return await api
      .get<IUser[]>({
        url: '/admin/users',
      })
      .then((res) => {
        dispatch(fetchUsers(res.data));
        return res.data;
      })
      .catch(() => {
        dispatch(fetchUsers([]));
        return [];
      });
  }, [dispatch, api]);

  /**
   * Make a request to add a user to the datasource.
   */
  const add = React.useCallback(
    async (user: IUser) => {
      return await api
        .post<IUser>({
          url: '/admin/users',
          data: user,
        })
        .then((res) => {
          dispatch(addUser(res.data));
          return res.data;
        })
        .catch(() => {});
    },
    [dispatch, api],
  );

  /**
   * Make a request to add a user to the datasource.
   */
  const update = React.useCallback(
    async (user: IUser) => {
      return await api
        .put<IUser>({
          url: `/admin/users/${user.id}`,
          data: user,
        })
        .then((res) => {
          dispatch(updateUser(res.data));
          return res.data;
        })
        .catch(() => {});
    },
    [dispatch, api],
  );

  /**
   * Make a request to remove a user from the datasource.
   */
  const remove = React.useCallback(
    async (user: IUser) => {
      return await api
        .delete<IUser>({
          url: `/admin/users/${user.id}`,
          data: user,
        })
        .then((res) => {
          dispatch(removeUser(res.data));
          return res.data;
        })
        .catch(() => {});
    },
    [dispatch, api],
  );

  return { fetchUsers: fetch, addUser: add, updateUser: update, removeUser: remove };
};
