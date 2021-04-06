import React from 'react';
import { useAppSelector } from 'store';
import styled from 'styled-components';
import loader from '../content/loader.svg';

interface OverlayProps {
  message?: string;
}

/**
 * An overlay for the page which can display a specified message.
 * @param {Object} param0 Component props.
 * @param {string} [param0.message]
 * @returns React component.
 */
export const Overlay = ({ message }: OverlayProps) => {
  const app = useAppSelector((state) => state.app);

  return app.loading ? (
    <PageOverlay>
      <Message>{message}</Message>
    </PageOverlay>
  ) : null;
};

export default Overlay;

const PageOverlay = styled('div')`
  background-color: black;
  opacity: 0.25;
  background-image: url(${loader});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Message = styled('p')`
  color: white;
`;
