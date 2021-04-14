import React from 'react';
import styled from 'styled-components';
import { ButtonVariants, ButtonSizes } from '.';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // Disable the button functionality.
  disabled?: boolean;
  // Control the variant styling of the button.
  variant?: ButtonVariants | string;
  // Control the styling of the button.
  inverted?: boolean;
  // Control the size of the button.
  size?: ButtonSizes | string;
}

/**
 * Styled components with typescript require the properties to be identified.
 * @param param0 Button properties.
 * @returns BaseButton component.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BaseButton = ({ disabled, inverted, variant, size, ...rest }: IButtonProps) => {
  return <button {...rest}></button>;
};

/**
 * A button that is styled like Bootstrap.
 */
export const Button = styled(BaseButton)`
  --border: ${(props) => props.theme[`${props.variant}Border`]};
  --background: ${(props) => props.theme[`${props.variant}Background`]};
  --color: ${(props) => props.theme[`${props.variant}Color`]};
  --borderHover: ${(props) => props.theme[`${props.variant}BorderHover`]};
  --backgroundHover: ${(props) => props.theme[`${props.variant}BackgroundHover`]};
  --colorHover: ${(props) => props.theme[`${props.variant}ColorHover`]};
  border: ${(props) => (props.inverted ? `1px solid var(--border)` : '1px solid rgba(0,0,0,0)')};
  border-radius: ${(props) => props.theme.baseRadius};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font-size: ${(props) => {
    const { baseFontSize } = props.theme;
    const baseFontSizeParsed = parseInt(baseFontSize, 10);
    return (
      (props.size === ButtonSizes.Small && `${baseFontSizeParsed * 0.875}px`) ||
      (props.size === ButtonSizes.Large && `${baseFontSizeParsed * 1.375}px`) ||
      baseFontSize
    );
  }};
  font-weight: ${(props) => props.theme.fontSemibold};
  line-height: ${(props) =>
    (props.size === ButtonSizes.Small && '2.2') ||
    (props.size === ButtonSizes.Large && '1.25') ||
    '2.5'};
  padding: ${(props) => (props.size === ButtonSizes.Large ? '16px 25px 17px' : '0 12px')};
  position: relative;
  text-align: center;
  color: ${(props) => (props.inverted ? 'var(--background)' : 'var(--color)')};
  background-color: ${(props) => (props.inverted ? 'rgba(0,0,0,0)' : 'var(--background)')};
  opacity: ${(props) => (props.disabled ? '.65' : '1')};

  &:hover {
    ${(props) => props.variant === ButtonVariants.Link && 'text-decoration: underline;'}
    border: 1px solid var(--borderHover);
    background: var(--backgroundHover);
    color: var(--colorHover);
  }
`;

export default Button;
