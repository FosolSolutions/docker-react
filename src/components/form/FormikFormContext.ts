import React from 'react';
import { FormikContextType } from 'formik';

export interface IFormikFormContextType<Values> extends FormikContextType<Values> {
  setResetValues: (values: Values) => void;
  handleReset: () => void;
}

export const FormikFormContext = React.createContext<IFormikFormContextType<any>>(undefined as any);
FormikFormContext.displayName = 'FormikFormContext';

export const { Provider: FormikFormProvider, Consumer: FormikFormConsumer } = FormikFormContext;

export const useFormikFormContext = <Values>() => {
  const formik = React.useContext<IFormikFormContextType<Values>>(FormikFormContext);

  // invariant(
  //   !!formik,
  //   `Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.`,
  // );

  return formik;
};
