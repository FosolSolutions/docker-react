import React from 'react';
import { FormikContextType } from 'formik';

export interface IFormikFormContextType<Values> extends FormikContextType<Values> {
  /**
   * Set the reset values so that if the form is reset it will use these instead of the formik initial values.
   * Formik initial values do not contain the 'original' values after an useEffect.
   */
  setResetValues: (values: Values) => void;
  /**
   * When the reset is triggered it will call this function to update the formik values to the original reset values.
   */
  handleReset: () => void;
  disabled: boolean;
  setDisabled: (value: boolean) => void;
  editable: boolean;
  setEditable: (value: boolean) => void;
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
