import React from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import Badge from 'react-bootstrap/esm/Badge';
import { useAppSelector, useAppDispatch, clearError } from 'store';
import styled from 'styled-components';

/**
 * Displays error messages in the redux store in an alert dialog.
 * @returns Error alert component.
 */
export const AlertError = () => {
  const state = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    state.error && (
      <AlertErrorStyled variant="danger" onClose={() => dispatch(clearError())} dismissible>
        <Alert.Heading>Request Error</Alert.Heading>
        <p>{state.error.message}</p>
        {state.error.details && (
          <>
            <hr />
            <p>
              {state.error.status && (
                <BadgeStyled variant="danger">{state.error.status}</BadgeStyled>
              )}
              {state.error.details}
            </p>
          </>
        )}
      </AlertErrorStyled>
    )
  );
};

const BadgeStyled = styled(Badge)`
  margin-right: 10px;
`;

const AlertErrorStyled = styled(Alert)`
  position: absolute;
  right: 10px;
  margin-top: 10px;
`;

export default AlertError;
