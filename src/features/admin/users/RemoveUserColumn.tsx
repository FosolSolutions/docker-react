import React from 'react';
import { IUser, useUsers } from 'store';

export const RemoveUserColumn = ({ user }: { user: IUser }) => {
  const { removeUser } = useUsers();

  const onClick = (e: any) => {
    e.preventDefault();
    removeUser(user);
  };

  return (
    <a href={`users/${user.id}`} onClick={(e) => onClick(e)}>
      remove
    </a>
  );
};

export default RemoveUserColumn;
