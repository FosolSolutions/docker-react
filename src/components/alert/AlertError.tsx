import React from 'react';
import { useAppSelector, useAppDispatch, clearError } from 'store';
import styled from 'styled-components';
import { Badge, AlertVariants } from '..';

export interface IAlertErrorProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // Control the variant styling of the alert.
  variant?: AlertVariants | string;
  dismissible?: boolean;
}

/**
 * Styled components with typescript require the properties to be identified.
 * @param param0 AlertError properties.
 * @returns BaseAlertError component.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BaseAlertError = ({ variant, dismissible = false, ...rest }: IAlertErrorProps) => {
  const state = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    state.error && (
      <div
        {...{ ...rest, className: `${rest.className} alert` }}
        onClick={() => dispatch(clearError())}
      >
        {/* <Alert.Heading>Request Error</Alert.Heading> */}
        <p>{state.error.message}</p>
        {state.error.details && (
          <>
            <hr />
            <p>
              {state.error.status && <Badge variant="danger">{state.error.status}</Badge>}
              {state.error.details}
            </p>
          </>
        )}
      </div>
    )
  );
};

/**
 * Displays error messages in the redux store in an alert dialog.
 * @returns Error alert component.
 */
export const AlertError = styled(BaseAlertError)`
  /* position: absolute; */
  right: 10px;
  margin-top: 10px;
  color: ${(props) => props.theme.alertColor[props.variant?.toString() ?? 'secondary']};
  background-color: ${(props) =>
    props.theme.alertBackground[props.variant?.toString() ?? 'secondary']};
  border-color: #b8daff;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: opacity 0.15s linear;
  display: block;
`;

export default AlertError;
