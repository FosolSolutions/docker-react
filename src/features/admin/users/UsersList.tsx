import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from 'store';
import { add as addUser, IUser } from 'store/features/users';
import { UserRows } from './UserRows';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

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
    const id = generateId(usersStore.users);
    console.log(id);
    dispatch(addUser({ ...user, id }));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Users</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={onAdd}>Add</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="table">
            <UserRows users={usersStore.users} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const generateId = (users: IUser[]): number => {
  if (!users || !users.length) return 1;
  return users[users.length - 1].id + 1;
};
