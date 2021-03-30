import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { IRole } from 'store/slices/roles';
import { RoleColumns } from './RoleColumns';
import styled from 'styled-components';

interface IRoleRowsProps {
  roles: IRole[];
}

/**
 *
 * @param roles
 * @returns
 */
export const RoleRows: React.FC<IRoleRowsProps> = ({ roles }: IRoleRowsProps) => {
  return (
    <>
      <Row>
        <Col>Role</Col>
        <Col></Col>
      </Row>
      {roles.map((u) => (
        <RoleRow key={u.id}>
          <RoleColumns role={u} />
        </RoleRow>
      ))}
    </>
  );
};

const RoleRow = styled(Row)``;
