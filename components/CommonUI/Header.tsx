import styled from 'styled-components';
import Link from 'next/link';
import { ROUTES } from '../../lib/Routes/Routes';

const Header = () => (
  <Wrapper>
    <div className="nav-box">
      <Link href={ROUTES.home}>
        <a>
          <span className="blog-name">건망증 개발자 기록지</span>
        </a>
      </Link>
      <nav className="nav">
        <Link href={ROUTES.about}>
          <a>
            <span>About</span>
          </a>
        </Link>
        <Link href={ROUTES.devBlog}>
          <a>
            <span>Development</span>
          </a>
        </Link>
        <Link href={ROUTES.about}>
          <a>
            <span>GitHub</span>
          </a>
        </Link>
        <Link href={ROUTES.about}>
          <a>
            <span>Facebook</span>
          </a>
        </Link>
      </nav>
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 90%;
  height: 6rem;
  padding-top: 10rem;
  margin: auto;
  /* background-color: #ced4da; */
  border-bottom: 1px solid #ced4da;
  display: flex;
  align-items: center;
  .nav-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .blog-name {
      font-size: 2rem;
      font-weight: 900;
    }
    .nav {
      display: flex;
      justify-content: flex-end;
      a {
        font-size: 2rem;
        color: #5f3dc4;
        & + a {
          margin-left: 1rem;
        }
      }
    }
  }
`;
export default Header;
