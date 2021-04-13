import React from 'react';
import { Field as FormikField, FieldAttributes } from 'formik';
import styled from 'styled-components';
import { useFormikFormContext } from '.';

interface IFieldProps extends FieldAttributes<any> {
  label: string;
}

export const Field = ({ name, label, as, type, ...props }: IFieldProps) => {
  const { disabled } = useFormikFormContext();

  return (
    <InputStyled>
      <label htmlFor={name}>{label}:</label>{' '}
      <FormikField name={name} as={as} type={type} disabled={disabled} className="form-control">
        {props.children}
      </FormikField>
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
