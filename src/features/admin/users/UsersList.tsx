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

  const onAdd = () => {
    const id = usersStore.users.length + 1;
    console.log(id);
    dispatch(addUser({ ...user, id }));
  };

  return (
    <div>
      Users
      <div>
        <button onClick={onAdd}>Add</button>
      </div>
      <div>
        <Rows users={usersStore.users} />
      </div>
    </div>
  );
};

interface IRowProps {
  users: IUser[];
}

/**
 *
 * @param users
 * @returns
 */
const Rows: React.FC<IRowProps> = ({ users }) => {
  return (
    <>
      {users.map((u) => (
        <UserRow user={u} />
      ))}
    </>
  );
};

interface IUserRowProps {
  user: IUser;
}

/**
 *
 * @param user
 * @returns
 */
const UserRow: React.FC<IUserRowProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  const onRemove = (e: any, id: number) => {
    e.preventDefault();
    dispatch(removeUser({ ...user, id }));
  };

  return (
    <div key={user.id}>
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
