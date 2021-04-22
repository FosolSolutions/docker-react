import { Button } from 'components';
import React from 'react';
import { useAppSelector, useAppDispatch, addRole, IRole } from 'store';
import { RoleRows } from './RoleRows';

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
    <div>
      <div>
        <div>
          <h1>Roles</h1>
        </div>
      </div>
      <div>
        <div>
          <Button onClick={onAdd}>Add</Button>
        </div>
      </div>
      <div>
        <div>
          <div className="table">
            <RoleRows roles={rolesStore.roles} />
          </div>
        </div>
      </div>
    </div>
  );
};

const generateId = (roles: IRole[]): number => {
  if (!roles || !roles.length) return 1;
  return roles[roles.length - 1].id + 1;
};
