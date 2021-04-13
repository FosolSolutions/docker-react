import React from 'react';
import { IFormProps, Form, FormikFormProvider, IFormikFormContextType } from '.';
import { FormikProvider } from 'formik';

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
    <FormikProvider value={formik}>
      <FormikFormProvider value={formik}>
        <Form {...props}></Form>
      </FormikFormProvider>
    </FormikProvider>
  );
};

export default FormikForm;
