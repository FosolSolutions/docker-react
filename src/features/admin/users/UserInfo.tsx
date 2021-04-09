import React from 'react';
import { IUser, useUsers } from 'store';
import styled from 'styled-components';
import { Form, Field } from 'components';
import { useFormik, FormikProvider } from 'formik';

const defaultUser: IUser = {
  id: 0,
  key: '',
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  isDisabled: false,
};

interface IEditUserProps {
  id?: number;
}

/**
 * A user info form to edit user data.
 * @param param0 Component properties.
 * @param param0.id The user 'id'.
 * @returns React component.
 */
export const UserInfo = ({ id }: IEditUserProps) => {
  const { getUser, updateUser } = useUsers();
  const formik = useFormik<IUser>({
    initialValues: defaultUser,
    onSubmit: (values: IUser) => {
      updateUser(values)
        .then((user) => {
          formik.setValues({ ...user });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.username) errors.username = 'Required';
      return errors;
    },
  });
  const { setValues } = formik;

  React.useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          setValues({ ...user });
        })
        .catch(() => {});
    }
  }, [getUser, id, setValues]);

  return (
    <UserFormStyled>
      <FormikProvider value={formik}>
        <Form<IUser> disabled={true}>
          <Field name="username" label="Username" />
          <InputStyled>
            <label htmlFor="email">Email:</label>{' '}
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
          </InputStyled>
          <InputStyled>
            <label htmlFor="firstName">First Name:</label>{' '}
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
          </InputStyled>
          <InputStyled>
            <label htmlFor="lastName">Last Name:</label>{' '}
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
          </InputStyled>
          <InputStyled>
            <label htmlFor="isDisabled">Disabled:</label>{' '}
            <input
              type="checkbox"
              name="isDisabled"
              checked={formik.values.isDisabled}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
            />
          </InputStyled>
        </Form>
      </FormikProvider>
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
