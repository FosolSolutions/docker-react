import React from 'react';
import { useApiAdminUsers } from 'libs/hooks';
import { useAppDispatch, fetchUsers, addUser, updateUser, removeUser, IUser } from 'store';

/**
 * React hook to perform async actions on users.
 * Provides all interaction with API and redux store.
 * @returns userUsers hook.
 */
export const useUsers = () => {
  const api = useApiAdminUsers();
  const dispatch = useAppDispatch();

  /**
   * Make a request to fetch a page of users.
   * Update redux with successful results.
   */
  const fetch = React.useCallback(async () => {
    return await api.getUsersPaged().then((res) => {
      dispatch(fetchUsers(res.data));
      return res.data;
    });
  }, [dispatch, api]);

  /**
   * Make a request for a user with the specified 'id'.
   */
  const get = React.useCallback(
    async (id: number) => {
      return await api.getUser(id).then((res) => {
        return res.data;
      });
    },
    [api],
  );

  /**
   * Make a request to add a user to the datasource.
   * Update redux with successful results.
   */
  const add = React.useCallback(
    async (user: IUser) => {
      return await api.postUser(user).then((res) => {
        dispatch(addUser(res.data));
        return res.data;
      });
    },
    [dispatch, api],
  );

  /**
   * Make a request to add a user to the datasource.
   * Update redux with successful results.
   */
  const update = React.useCallback(
    async (user: IUser) => {
      return await api.putUser(user).then((res) => {
        dispatch(updateUser(res.data));
        return res.data;
      });
    },
    [dispatch, api],
  );

  /**
   * Make a request to remove a user from the datasource.
   * Update redux with successful results.
   */
  const remove = React.useCallback(
    async (user: IUser) => {
      return await api.deleteUser(user).then((res) => {
        dispatch(removeUser(res.data));
        return res.data;
      });
    },
    [dispatch, api],
  );

  return { fetchUsers: fetch, getUser: get, addUser: add, updateUser: update, removeUser: remove };
};
