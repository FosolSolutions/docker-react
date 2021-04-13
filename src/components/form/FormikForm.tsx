import React from 'react';
import { IFormProps, Form, FormikFormProvider, IFormikFormContextType } from '.';

export interface IFormikFormProps<Values> extends IFormProps {
  formik: IFormikFormContextType<Values>;
}

/**
 * Provides a simple way to include the FormikForm component.
 * @param param0 Formik props.
 * @returns A FormikForm wrapped in a context provider.
 */
export const FormikForm = <Values,>({ formik, ...props }: IFormikFormProps<Values>) => {
  return (
    <FormikFormProvider value={formik}>
      <Form {...props}></Form>
    </FormikFormProvider>
  );
};

export default FormikForm;
