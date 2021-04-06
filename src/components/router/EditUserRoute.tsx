import React from 'react';
import { UserInfo } from 'features/admin/users';
import { useParams } from 'react-router-dom';

interface IEditUserRouteParams {
  id?: string;
}

export const EditUserRoute = () => {
  const { id } = useParams<IEditUserRouteParams>();

  return <UserInfo id={parseInt(id ?? '0')} />;
};

export default EditUserRoute;
