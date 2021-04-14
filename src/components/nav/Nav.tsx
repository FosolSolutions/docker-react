import React from 'react';
import styled from 'styled-components';

export interface INavProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export const BaseNav = (props: INavProps) => {
  return <nav {...{ ...props, className: `${props.className} nav` }}></nav>;
};

export const Nav = styled('nav')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: aliceblue;

  a {
    padding: 5px 10px 5px 10px;
  }

  a:hover {
    background: inherit;
    filter: brightness(90%);
    border-radius: 0.25rem;
  }
`;

export default Nav;
