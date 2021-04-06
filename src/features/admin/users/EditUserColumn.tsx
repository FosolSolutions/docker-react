import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'store';

export const EditUserColumn = ({ user }: { user: IUser }) => {
  return <Link to={`/admin/users/${user.id}`}>{user.username}</Link>;
};

export default EditUserColumn;
