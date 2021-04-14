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
    <FieldStyled className={`${props.className} form-field`}>
      <label htmlFor={name}>{label}:</label>
      <InputStyled name={name} as={as} type={type} disabled={disabled}>
        {props.children}
      </InputStyled>
    </FieldStyled>
  );
};

const FieldStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;

  label {
    justify-self: end;
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 10px;
  }
`;

const InputStyled = styled(FormikField)`
  justify-self: stretch;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: ${(props) =>
    props.disabled ? props.theme.inputBackgroundColorReadonly : props.theme.inputBackgroundColor};
  ${(props) => (props.disabled ? 'opacity: 1;' : null)}
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export default Field;
