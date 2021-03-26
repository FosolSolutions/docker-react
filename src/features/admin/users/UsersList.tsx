import { useAppSelector } from 'store';
import { IUser } from 'store/features/users';

/**
 * UsersList component provides a way to view a list of users.
 * @returns Users list component.
 */
export const UsersList = () => {
  const usersStore = { users: [] }; //useAppSelector(state => state.users);

  return (
    <div>
      Users
      <div>{Rows(usersStore.users)}</div>
    </div>
  );
};

const Rows = (users: IUser[]) => {
  return users.map(u => UserRow(u));
};

const UserRow = (user: IUser) => {
  return (
    <div>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  );
};
