import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'store';

/**
 * Link that will load the user info form.
 * @param param0 Component properties
 * @param param.user User to load.
 * @returns React component.
 */
export const EditUserColumn = ({ user }: { user: IUser }) => {
  return <Link to={`/admin/users/${user.id}`}>{user.username}</Link>;
};

export default EditUserColumn;
