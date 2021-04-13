import React from 'react';
import { useFormik, FormikConfig } from 'formik';
import { IFormikFormContextType } from '.';

export interface IFormikFormConfig<Values> extends FormikConfig<Values> {}

export const useFormikForm = <Values>(
  config: IFormikFormConfig<Values>,
): IFormikFormContextType<Values> => {
  const formik = useFormik(config);
  const [resetValues, _setResetValues] = React.useState<Values>(formik.values);
  const { setValues } = formik;

  /**
   * Set the reset values so that if the form is reset it will use these instead of the formik initial values.
   * Formik initial values do not contain the 'original' values after an useEffect.
   */
  const setResetValues = React.useCallback(
    (values: Values) => {
      _setResetValues(values);
      setValues(values);
    },
    [_setResetValues, setValues],
  );

  const handleReset = React.useCallback(() => {
    setValues(resetValues);
  }, [resetValues, setValues]);

  return {
    ...formik,
    setResetValues,
    handleReset,
  };
};

export default useFormikForm;
