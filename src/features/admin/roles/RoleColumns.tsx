import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import { useAppDispatch } from 'store';
import { IRole, remove as removeRole } from 'store/slices/roles';

interface IRoleColumnsProps {
  role: IRole;
}

/**
 *
 * @param role
 * @returns
 */
export const RoleColumns: React.FC<IRoleColumnsProps> = ({ role }: IRoleColumnsProps) => {
  const dispatch = useAppDispatch();

  const onRemove = (e: any, id: number) => {
    e.preventDefault();
    dispatch(removeRole({ ...role, id }));
  };

  return (
    <>
      <Col>{role.name}</Col>
      <Col>
        <a href="void" onClick={(e) => onRemove(e, role.id)}>
          remove
        </a>
      </Col>
    </>
  );
};
