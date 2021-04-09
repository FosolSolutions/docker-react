import React from 'react';
import { useFormikContext } from 'formik';

interface IFormProps extends React.PropsWithChildren<any> {
  submitLabel?: string;
  cancelLabel?: string;
  editLabel?: string;
  editable?: boolean;
  disabled?: boolean;
}

/**
 *
 * @param param0
 * @returns
 */
export const Form = <T,>({
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  editLabel = 'Edit',
  editable = true,
  disabled = false,
  ...props
}: IFormProps) => {
  const formik = useFormikContext<T>();
  const [isDisabled, setIsDisabled] = React.useState(disabled);
  const [original, setOriginal] = React.useState(formik.values);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    try {
      await formik.submitForm();
      setOriginal(formik.values);
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
    formik.setValues(original);
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
