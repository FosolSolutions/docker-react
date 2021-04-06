import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { IUser, useUsers } from 'store';
import styled from 'styled-components';

interface IEditUserProps {
  id?: number;
}

export const UserInfo = ({ id }: IEditUserProps) => {
  const { getUser } = useUsers();
  const [user, setUser] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          setUser(user);
        })
        .catch(() => {});
    }
  }, [getUser, id]);

  return (
    <UserFormStyled>
      <Button variant="primary">Edit</Button>
      <InputStyled>
        Username: <input type="text">{user?.username}</input>
      </InputStyled>
      <InputStyled>
        Email: <input type="text">{user?.email}</input>
      </InputStyled>
      <InputStyled>
        First Name: <input type="text">{user?.firstName}</input>
      </InputStyled>
      <InputStyled>
        Last Name: <input type="text">{user?.lastName}</input>
      </InputStyled>
    </UserFormStyled>
  );
};

const UserFormStyled = styled('div')`
  display: grid;
  justify-items: center;
  grid-auto-flow: row;
  grid-gap: 5px;
  width: 100%;
  margin: 10px 10% 10px 10%;
`;

const InputStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;

  div {
    justify-self: stretch;
  }
`;

export default UserInfo;
