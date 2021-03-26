import React from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { add as addUser, remove as removeUser, IUser } from 'store/features/users';

const user: IUser = {
  id: 1,
  key: 'key',
  username: 'username',
  email: 'email',
  firstName: 'first',
  lastName: 'last',
  isDisabled: false,
};

/**
 * UsersList component provides a way to view a list of users.
 * @returns Users list component.
 */
export const UsersList = () => {
  const dispatch = useAppDispatch();
  const usersStore = useAppSelector((state) => state.users);
  const [count, setCount] = React.useState(usersStore.users.length);

  const onAdd = () => {
    const id = count + 1;
    setCount(id);
    console.log(id);
    dispatch(addUser({ ...user, id }));
  };

  return (
    <div>
      Users
      <div>
        <button onClick={onAdd}>Add</button>
      </div>
      <div>{Rows(usersStore.users)}</div>
    </div>
  );
};

/**
 *
 * @param users
 * @returns
 */
const Rows = (users: IUser[]) => {
  return users.map((u) => UserRow(u));
};

/**
 *
 * @param user
 * @returns
 */
const UserRow = (user: IUser) => {
  const dispatch = useAppDispatch();

  const onRemove = (e: any, id: number) => {
    e.preventDefault();
    dispatch(removeUser({ ...user, id }));
  };

  return (
    <div key={user.key}>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>
        <a href="void" onClick={(e) => onRemove(e, user.id)}>
          remove
        </a>
      </div>
    </div>
  );
};
