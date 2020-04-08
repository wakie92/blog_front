import styled from 'styled-components';
import { ROUTES } from '../../lib/Routes/Routes';
import { colors } from '../../lib/styles/global';
import Hamburger from './Hamburger';
import { breakpoints } from '../../lib/styles/responsive';
import Maybe from '../Maybe/Maybe';
import router  from '../../routes';

type HeaderProps = {
  handleToggle: () => void;
  moveRouter: (url: string) => void;
  toggle: boolean;
  isLogged: boolean;
}
const Header = ({ handleToggle, toggle, isLogged, moveRouter }: HeaderProps) => {
  const { Link } = router;
  return (
    <>
      <Wrapper aColor={colors.violet9} breakpoints={breakpoints}>
        <div className="nav-box">
          <Link route='home'>
            <a className="blog-name">
              건망증 개발자 기록지
            </a>
          </Link>
          <SmallNav toggle={toggle}>
            <a href={ROUTES.about}>
              <span>About</span>
            </a>
          </SmallNav>
          <Hamburger toggle={toggle} onToggle={handleToggle} />
          <div className="nav">
            <Maybe isVisible={isLogged}>
              <>
                <a href={ROUTES.write}>write</a>
              </>
            </Maybe>
          </div>
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

const NavRouter = styled.div`

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
