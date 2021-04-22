import React from 'react';
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
      <div>
        <div>Role</div>
        <div></div>
      </div>
      {roles.map((u) => (
        <RoleRow key={u.id}>
          <RoleColumns role={u} />
        </RoleRow>
      ))}
    </>
  );
};

const RoleRow = styled.div``;
