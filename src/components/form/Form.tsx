import React from 'react';
import { useFormikFormContext, Button } from '.';
import { ButtonVariants } from './Button';

export interface IFormProps extends React.PropsWithChildren<any> {
  submitLabel?: string;
  cancelLabel?: string;
  editLabel?: string;
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
  ...props
}: IFormConfigProps) => {
  const formik = useFormikFormContext<Values>();
  const { handleReset, setResetValues, disabled, setDisabled, editable } = formik;

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
    setDisabled(false);
  };

  const onCancelClick = () => {
    handleReset();
    setDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      <div className="actions">
        {editable && !disabled && (
          <>
            <Button type="button" variant={ButtonVariants.Secondary} onClick={onCancelClick}>
              {cancelLabel}
            </Button>
            <Button
              type="submit"
              variant={ButtonVariants.Primary}
              disabled={formik.isSubmitting || disabled}
            >
              {submitLabel}
            </Button>
          </>
        )}
        {editable && disabled && (
          <Button type="button" variant={ButtonVariants.Primary} onClick={onEditClick}>
            {editLabel}
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
