import React from 'react';
import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

type ButtonType = {
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
  width?: string | number;
  onClick?: () => void;
  children?: ReactNode | string;
  type: 'button' | 'submit';
};

const Button = ({
  type,
  children,
  size,
  bgColor,
  width,
  onClick,
}: ButtonType) => (
  <Wrapper
    type={type}
    size={size}
    bgColor={bgColor}
    width={width}
    onClick={onClick}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.button<ButtonType>`
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
    ${props =>
      props.size === 'small' &&
      css`
        height: 1.75rem;
        font-size: 0.75rem;
        padding: 0 0.875rem;
      `};
    ${props =>
      props.size === 'medium' &&
      css`
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 1rem;
      `};
    ${props =>
      props.size === 'large' &&
      css`
        height: 3rem;
        font-size: 1.125rem;
        padding: 0 1.5rem;
      `};
`;

export default Button;
