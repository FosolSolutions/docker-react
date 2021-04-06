import React from 'react';
import { Column, CellProps } from 'react-table';
import { IUser } from 'store';
import EditUserColumn from './EditUserColumn';
import RemoveUserColumn from './RemoveUserColumn';

export const useColumns = () => {
  const actionColumn = (props: CellProps<IUser>) => (
    <RemoveUserColumn user={props.cell.row.original} />
  );
  const usernameColumn = (props: CellProps<IUser>) => (
    <EditUserColumn user={props.cell.row.original} />
  );

  return React.useMemo(
    () =>
      [
        {
          Header: 'Username',
          accessor: 'username',
          Cell: usernameColumn,
        },
        {
          Header: 'Email',
          accessor: 'email',
          minWidth: 200,
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: '',
          id: 'id',
          Cell: actionColumn,
        },
      ] as Column<IUser>[],
    [],
  );
};
