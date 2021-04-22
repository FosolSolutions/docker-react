import React from 'react';
import styled from 'styled-components';
import { BadgeVariants, BadgeSizes } from '.';

export interface IBadgeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  // Control the variant styling of the badge.
  variant?: BadgeVariants | string;
  // Control the size of the badge.
  size?: BadgeSizes | string;
}

/**
 * Styled components with typescript require the properties to be identified.
 * @param param0 Badge properties.
 * @returns BaseBadge component.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BaseBadge = ({ variant, size, ...rest }: IBadgeProps) => {
  return <div {...{ ...rest, className: `${rest.className} btn` }}></div>;
};

/**
 * A button that is styled like Bootstrap.
 */
export const Badge = styled(BaseBadge)`
  margin-right: 10px;
`;

export default Badge;
