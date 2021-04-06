import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAppSelector, IUser, useUsers } from 'store';
import { useTable } from 'react-table';
import { useColumns } from './useColumns';
import styled from 'styled-components';

// Fake user to add when the button is clicked.
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
 * @returns React component.
 */
export const UsersList = () => {
  const { fetchUsers, addUser } = useUsers();
  const usersStore = useAppSelector((state) => state.users);
  const columns = useColumns();
  const table = useTable({ columns, data: usersStore.users });
  const { getTableProps, headerGroups, rows, prepareRow } = table;

  const onAdd = () => {
    addUser(user);
  };

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <UserGridStyled>
      <h1 className="table-title">Users</h1>
      <Button className="table-actions" onClick={onAdd}>
        Add
      </Button>
      <div className="table" {...getTableProps()}>
        {headerGroups.map((headerGroup) => {
          // const { label, value } = headerGroup.getHeaderGroupProps();
          return (
            <>
              {headerGroup.headers.map((column, colIndex) => {
                const { key, ...restCellProps } = column.getHeaderProps();
                return (
                  <div key={key} className={`header c-${colIndex}`} {...restCellProps}>
                    {column.render('Header')}
                  </div>
                );
              })}
            </>
          );
        })}
        {/* const tableBodyProps = getTableBodyProps(); */}
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          // const { rowProps } = row.getRowProps();
          return (
            <>
              {row.cells.map((cell, colIndex) => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <div
                    key={key}
                    className={`r-${rowIndex % 2 === 0 ? 'even' : 'odd'} c-${colIndex}`}
                    {...restCellProps}
                  >
                    {cell.render('Cell')}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </UserGridStyled>
  );
};

const UserGridStyled = styled('div')`
  display: grid;
  grid-template-areas:
    'title actions'
    'table table';
  grid-template-columns: 1fr 1fr;
  padding: 10px 10% 10px 10%;
  justify-items: stretch;
  justify-self: start;
  align-items: center;
  width: 100%;

  .table-title {
    font-weight: bold;
    justify-self: start;
  }

  .table-actions {
    justify-self: end;
  }

  .table {
    grid-area: table;
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: stretch;
    justify-items: stretch;

    div {
      display: grid;
      justify-content: stretch;
      justify-self: stretch;
      align-self: stretch;
      justify-items: start;
      padding: 0px 5px 0px 5px;
    }

    .header {
      font-weight: bold;
      background-color: aliceblue;
      color: #374f64;
    }

    .r-odd {
      background: lightgrey;
    }

    .r-even {
      background: white;
    }

    .c-4 {
      justify-items: end;
    }
  }
`;
