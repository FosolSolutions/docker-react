import React from 'react';
import { IUser, useUsers } from 'store';
import styled from 'styled-components';
import { useFormikForm, FormikForm, Field } from 'components';

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
  const formik = useFormikForm<IUser>({
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
  const { setResetValues } = formik;

  React.useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          setResetValues({ ...user });
        })
        .catch(() => {});
    }
  }, [getUser, id, setResetValues]);

  return (
    <UserFormStyled>
      <FormikForm<IUser> formik={formik} disabled={true}>
        <Field name="username" label="Username" />
        <Field name="email" label="Email" />
        <Field name="firstName" label="First Name" />
        <Field name="lastName" label="Last Name" />
        <Field name="isDisabled" label="Disabled" type="checkbox" />
      </FormikForm>
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

export default UserInfo;
