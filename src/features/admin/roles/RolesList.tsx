import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch, addRole, IRole } from 'store';
import { RoleRows } from './RoleRows';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const role: IRole = {
  id: 1,
  key: 'key',
  name: 'role',
  isDisabled: false,
};

/**
 * RolesList component provides a way to view a list of Roles.
 * @returns Roles list component.
 */
export const RolesList = () => {
  const dispatch = useAppDispatch();
  const rolesStore = useAppSelector((state) => state.roles);

  const onAdd = () => {
    const id = generateId(rolesStore.roles);
    dispatch(addRole({ ...role, id }));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Roles</h1>
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
            <RoleRows roles={rolesStore.roles} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const generateId = (roles: IRole[]): number => {
  if (!roles || !roles.length) return 1;
  return roles[roles.length - 1].id + 1;
};
