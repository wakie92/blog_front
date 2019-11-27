import styled from 'styled-components';
import Post from './Post/Post';
import LoadingPost from './Post/LoadingPost';
import { breakpoints } from '../../lib/styles/responsive';

export default function PostsLayout() {
  return (
    <Layout breakpoints={breakpoints}>
      <ul>
        <LoadingPost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </Layout>
  );
}

const Layout = styled.main<{breakpoints: object}>`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 40rem;
    grid-gap: 1.5rem;
    @media screen and (max-width: ${breakpoints.xlarge}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 40rem;
    }
    @media screen and (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 40rem;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(1₩, 1fr);
      grid-auto-rows: 40rem;
    }
  }
`;
