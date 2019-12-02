import styled, { css } from 'styled-components';
import { breakpoints } from '../../lib/styles/responsive';
import { colors } from '../../lib/styles/global';

interface HamburgerProps {
  toggle: boolean;
  onToggle: () => void;
}
export default function Hamburger({ toggle, onToggle }: HamburgerProps) {
  return (
    <BurgerIcon
      colors={colors}
      breakpoints={breakpoints}
      toggle={toggle}
      onClick={onToggle}
    >
      <div className="burger-line" />
      <div className="burger-line" />
      <div className="burger-line" />
    </BurgerIcon>
  );
}

const BurgerIcon = styled.button<{
  colors: object;
  breakpoints: object;
  toggle: boolean;
}>`
  position: fixed;
  top: 2rem;
  right: 5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.defaultBlack};
  opacity: 0.8;
  z-index: 900;
  cursor: pointer;
  &:hover {
    background-color: ${colors.violet9};
  }
  transition: all 500ms;
  transform: ${props =>
    props.toggle ? 'translateX(-35rem) rotate(180deg)' : 'translateX(0rem)'};
  background-color: ${props => props.toggle && colors.violet9};
  .burger-line {
    ${props => !props.toggle
      ? css`
      width: 3rem;
      height: 0.4rem;
      margin: 0.2rem 0;
      `
      : css`
      width: 3rem;
      height: 0.15rem;
      margin: 0;
      `
    };
    transition: ease-in 500ms;
    background-color: white;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    transform: unset;
  }
`;
