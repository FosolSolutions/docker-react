import React from 'react';
import { useFormik, FormikConfig } from 'formik';
import { IFormikFormContextType } from '.';

export interface IFormikFormConfig<Values> extends FormikConfig<Values> {}

export const useFormikForm = <Values>(
  config: IFormikFormConfig<Values>,
): IFormikFormContextType<Values> => {
  const formik = useFormik(config);
  const [resetValues, _setResetValues] = React.useState<Values>(formik.values);
  const [disabled, setDisabled] = React.useState(true);
  const [editable, setEditable] = React.useState(true);
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

  /**
   * When the reset is triggered it will call this function to update the formik values to the original reset values.
   */
  const handleReset = React.useCallback(() => {
    setValues(resetValues);
  }, [resetValues, setValues]);

  return {
    ...formik,
    setResetValues,
    handleReset,
    disabled,
    setDisabled,
    editable,
    setEditable,
  };
};

export default useFormikForm;
