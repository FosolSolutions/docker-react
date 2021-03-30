import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { IUser } from 'store/slices/users';
import { UserColumns } from './UserColumns';
import styled from 'styled-components';

interface IUserRowsProps {
  users: IUser[];
}

/**
 *
 * @param users
 * @returns
 */
export const UserRows: React.FC<IUserRowsProps> = ({ users }: IUserRowsProps) => {
  return (
    <>
      <Row>
        <Col>User</Col>
        <Col>Email</Col>
        <Col>Last Name</Col>
        <Col>First Name</Col>
        <Col></Col>
      </Row>
      {users.map((u) => (
        <UserRow key={u.id}>
          <UserColumns user={u} />
        </UserRow>
      ))}
    </>
  );
};

const UserRow = styled(Row)``;
