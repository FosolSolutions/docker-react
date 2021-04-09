import React from 'react';
import { useApiAdminUsers, IUser } from 'libs/hooks';
import { useAppDispatch, fetchUsers, addUser, updateUser, removeUser } from 'store';

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
  const fetch = React.useCallback(async (): Promise<IUser[]> => {
    try {
      const response = await api.getUsersPaged();
      dispatch(fetchUsers(response.data));
      return response.data;
    } catch (error) {
      return error;
    }
  }, [dispatch, api]);

  /**
   * Make a request for a user with the specified 'id'.
   */
  const get = React.useCallback(
    async (id: number): Promise<IUser> => {
      try {
        const response = await api.getUser(id);
        return response.data;
      } catch (error) {
        return error;
      }
    },
    [api],
  );

  /**
   * Make a request to add a user to the datasource.
   * Update redux with successful results.
   */
  const add = React.useCallback(
    async (user: IUser): Promise<IUser> => {
      try {
        const response = await api.postUser(user);
        dispatch(addUser(response.data));
        return response.data;
      } catch (error) {
        return error;
      }
    },
    [dispatch, api],
  );

  /**
   * Make a request to add a user to the datasource.
   * Update redux with successful results.
   */
  const update = React.useCallback(
    async (user: IUser): Promise<IUser> => {
      try {
        const response = await api.putUser(user);
        dispatch(updateUser(response.data));
        return response.data;
      } catch (error) {
        return error;
      }
    },
    [dispatch, api],
  );

  /**
   * Make a request to remove a user from the datasource.
   * Update redux with successful results.
   */
  const remove = React.useCallback(
    async (user: IUser): Promise<IUser> => {
      try {
        const response = await api.deleteUser(user);
        dispatch(removeUser(response.data));
        return response.data;
      } catch (error) {
        return error;
      }
    },
    [dispatch, api],
  );

  return { fetchUsers: fetch, getUser: get, addUser: add, updateUser: update, removeUser: remove };
};
