import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import { useAppDispatch } from 'store';
import { IUser, remove as removeUser } from 'store/features/users';

interface IUserColumnsProps {
  user: IUser;
}

/**
 *
 * @param user
 * @returns
 */
export const UserColumns: React.FC<IUserColumnsProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  const onRemove = (e: any, id: number) => {
    e.preventDefault();
    dispatch(removeUser({ ...user, id }));
  };

  return (
    <>
      <Col>{user.username}</Col>
      <Col>{user.email}</Col>
      <Col>{user.lastName}</Col>
      <Col>{user.firstName}</Col>
      <Col>
        <a href="void" onClick={(e) => onRemove(e, user.id)}>
          remove
        </a>
      </Col>
    </>
  );
};
