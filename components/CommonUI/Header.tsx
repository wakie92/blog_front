import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import { ROUTES } from '../../lib/Routes/Routes';
import { colors } from '../../lib/styles/global';
import Hamburger from './Hamburger';
import { breakpoints } from '../../lib/styles/responsive';
import { getLoginModal } from '../../store/modules/loginUI';
import LoginContainer from '../../containers/Login/LoginContainer';
import { loginPopup, logoutFn } from '../../lib/Utils/utils';

type HeaderProps = {
  onLoginModal: () => void;
  handleToggle: () => void;
  toggle: boolean;
}
const Header = ({ onLoginModal, handleToggle, toggle }: HeaderProps) => {
  return (
    <>
      <Wrapper aColor={colors.violet9} breakpoints={breakpoints}>
        <div className="nav-box">
          <Link href={ROUTES.home}>
            <a>
              <span className="blog-name">건망증 개발자 기록지</span>
            </a>
          </Link>
          <SmallNav toggle={toggle}>
            <Link href={ROUTES.about}>
              <a>
                <span>About</span>
              </a>
            </Link>
            <Link href={ROUTES.devBlog}>
              <a>
                <span>Development</span>
                <ul className="bolg-category">
                  <li>Web</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Html/css</li>
                </ul>
              </a>
            </Link>
            <Link href={ROUTES.write}>
              <a>
                <span>GitHub</span>
              </a>
            </Link>
            <Link href={ROUTES.about}>
              <a>
                <span>Facebook</span>
              </a>
            </Link>
          </SmallNav>
          <Hamburger toggle={toggle} onToggle={handleToggle} />
          <nav className="nav">
            <Link href={ROUTES.about}>
              <a>
                <span>About</span>
              </a>
            </Link>
            <Link href={ROUTES.write}>
              <a>
                <span>GitHub</span>
              </a>
            </Link>
            <a onClick={onLoginModal}>
              <span>Facebook</span>
            </a>
          </nav>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.header<{ aColor: string; breakpoints: object }>`
  width: calc(100% - 10rem);
  height: 6rem;
  padding-top: 10rem;
  margin: auto;
  border-bottom: 1px solid #ced4da;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    padding-top: 2rem;
  }
  .nav-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: ${breakpoints.medium}) {
      width: 100%;
      padding: 0 2rem;
    }
    .blog-name {
      font-size: 2rem;
      font-weight: 900;
    }
    .nav {
      display: flex;
      justify-content: flex-end;
      a {
        font-size: 2rem;
        cursor: pointer;
        color: ${props => props.aColor};
        & + a {
          margin-left: 1rem;
        }
      }
      @media screen and (max-width: ${breakpoints.small}) {
        display: none;
      }
    }
  }
`;

const SmallNav = styled.aside<{ toggle: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: ${props => (props.toggle ? 'visible' : 'hidden')};
  position: fixed;
  background-color: black;
  opacity: 0.8;
  width: 30rem;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 888;
  transition: all 500ms;
  transform: ${props =>
    props.toggle ? 'translateX(0rem)' : 'translateX(35rem)'};
  padding-top: 20rem;
  padding-left: 5rem;
  a {
    color: white !important;
    width: 80%;
    .bolg-category {
      font-size: 2rem;
      padding-left: 3rem;
    }
  }
  font-size: 3rem;
  @media screen and (max-width: ${breakpoints.small}) {
    transform: ${props => (props.toggle ? 'translateX()' : 'translateX(100%)')};
    width: calc(100% - 5rem);
  }
`;

export default Header;
