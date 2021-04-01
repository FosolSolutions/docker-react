import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import { IUser, useUsers } from 'store';

interface IUserColumnsProps {
  user: IUser;
}

/**
 *
 * @param user
 * @returns
 */
export const UserColumns: React.FC<IUserColumnsProps> = ({ user }: IUserColumnsProps) => {
  const { removeUser } = useUsers();

  const onRemove = (e: any) => {
    e.preventDefault();
    removeUser(user);
  };

  return (
    <>
      <Col>{user.username}</Col>
      <Col>{user.email}</Col>
      <Col>{user.lastName}</Col>
      <Col>{user.firstName}</Col>
      <Col>
        <a href="void" onClick={(e) => onRemove(e)}>
          remove
        </a>
      </Col>
    </>
  );
};
