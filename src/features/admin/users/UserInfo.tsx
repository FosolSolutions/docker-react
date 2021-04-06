import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { IUser, useUsers } from 'store';
import styled from 'styled-components';

interface IEditUserProps {
  id?: number;
}

const defaultUser: IUser = {
  id: 0,
  key: '',
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  isDisabled: false,
};

interface IFormState {
  user: IUser;
  original: IUser;
}

export const UserInfo = ({ id }: IEditUserProps) => {
  const { getUser, updateUser } = useUsers();
  const [editable, setEditable] = React.useState(false);
  const [state, setState] = React.useState<IFormState>({
    user: { ...defaultUser },
    original: { ...defaultUser },
  });

  React.useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          setState({ user, original: user });
        })
        .catch(() => {});
    }
  }, [getUser, id]);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      switch (e.target.name) {
        case 'username':
          return { ...state, user: { ...state.user, username: e.target.value } };
        case 'email':
          return { ...state, user: { ...state.user, email: e.target.value } };
        case 'firstName':
          return { ...state, user: { ...state.user, firstName: e.target.value } };
        case 'lastName':
          return { ...state, user: { ...state.user, lastName: e.target.value } };
      }
      return state;
    });
  };

  const onClickEdit = () => {
    setEditable(true);
  };

  const onClickCancel = () => {
    setEditable(false);
    setState({ ...state, user: { ...state.original } });
  };

  const onClickSave = () => {
    setEditable(false);
    updateUser(state.user).then((user) => {
      setState({ ...state, user: { ...user }, original: { ...user } });
    });
  };

  return (
    <UserFormStyled>
      <form>
        <InputStyled>
          <label htmlFor="username">Username:</label>{' '}
          <input
            type="text"
            name="username"
            value={state.user.username}
            onChange={onValueChange}
            disabled={!editable}
          />
        </InputStyled>
        <InputStyled>
          <label htmlFor="email">Email:</label>{' '}
          <input
            type="text"
            name="email"
            value={state.user.email}
            onChange={onValueChange}
            disabled={!editable}
          />
        </InputStyled>
        <InputStyled>
          <label htmlFor="firstName">First Name:</label>{' '}
          <input
            type="text"
            name="firstName"
            value={state.user.firstName}
            onChange={onValueChange}
            disabled={!editable}
          />
        </InputStyled>
        <InputStyled>
          <label htmlFor="lastName">Last Name:</label>{' '}
          <input
            type="text"
            name="lastName"
            value={state.user.lastName}
            onChange={onValueChange}
            disabled={!editable}
          />
        </InputStyled>
      </form>
      <div className="actions">
        {editable ? (
          <>
            <Button variant="secondary" onClick={onClickCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onClickSave}>
              Save
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={onClickEdit}>
            Edit
          </Button>
        )}
      </div>
    </UserFormStyled>
  );
};

const UserFormStyled = styled('div')`
  display: grid;
  align-items: stretch;
  justify-items: stretch;
  justify-content: center;
  grid-auto-flow: row;
  grid-gap: 5px;
  width: 100%;
  margin: 10px 10% 10px 10%;

  form {
    display: grid;
    grid-gap: 5px;
  }

  .actions {
    display: grid;
    grid-auto-flow: column;
    justify-self: end;
    grid-gap: 5px;
  }
`;

const InputStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;

  label {
    justify-self: end;
    padding-right: 5px;
  }

  input {
    justify-self: stretch;
  }
`;

export default UserInfo;
