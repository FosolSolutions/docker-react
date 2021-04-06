import React from 'react';
import { IUser, useUsers } from 'store';

/**
 * A link to remove the specified user.
 * @param param0 Component properties.
 * @param param0.user User that will be removed.
 * @returns React component.
 */
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
