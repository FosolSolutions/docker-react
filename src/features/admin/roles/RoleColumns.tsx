import React from 'react';
import { useAppDispatch, IRole, removeRole } from 'store';

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
      <div>{role.name}</div>
      <div>
        <a href="void" onClick={(e) => onRemove(e, role.id)}>
          remove
        </a>
      </div>
    </>
  );
};
