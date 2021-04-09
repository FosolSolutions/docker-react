import React from 'react';
import { Field as AField, FieldAttributes } from 'formik';
import styled from 'styled-components';

interface IFieldProps extends FieldAttributes<any> {
  label: string;
}

export const Field = ({ name, label, as, ...props }: IFieldProps) => {
  return (
    <InputStyled>
      <label htmlFor={name}>{label}:</label>{' '}
      <AField name={name} as={as}>
        {props.children}
      </AField>
    </InputStyled>
  );
};

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

export default Field;
