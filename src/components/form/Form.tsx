import React from 'react';
import { useFormikFormContext } from '.';

export interface IFormProps extends React.PropsWithChildren<any> {
  submitLabel?: string;
  cancelLabel?: string;
  editLabel?: string;
  editable?: boolean;
  disabled?: boolean;
}

export interface IFormConfigProps extends IFormProps {}

/**
 * A Form component that supports;
 * - enabling/disabling form edits
 * - cancelling any edits currently made
 * - submit button
 * @param param0
 * @returns
 */
export const Form = <Values,>({
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  editLabel = 'Edit',
  editable = true,
  disabled = false,
  ...props
}: IFormConfigProps) => {
  const formik = useFormikFormContext<Values>();
  const [isDisabled, setIsDisabled] = React.useState(disabled);
  const { handleReset, setResetValues } = formik;

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    try {
      await formik.submitForm();
      setResetValues(formik.values);
    } catch (error) {
      console.error(error); // TODO: add to state to display error message.
    } finally {
      formik.setSubmitting(false);
    }
  };

  const onEditClick = () => {
    setIsDisabled(false);
  };

  const onCancelClick = () => {
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      <div className="actions">
        {editable && !isDisabled && (
          <>
            <button type="button" onClick={onCancelClick}>
              {cancelLabel}
            </button>
            <button type="submit" disabled={formik.isSubmitting || isDisabled}>
              {submitLabel}
            </button>
          </>
        )}
        {editable && isDisabled && (
          <button type="button" onClick={onEditClick}>
            {editLabel}
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
