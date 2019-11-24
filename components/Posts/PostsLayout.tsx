import styled from '@emotion/styled';
import Post from '../Post';

export default function PostsLayout() {
  return (
    <Layout>
      <ul>
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
};

const Layout = styled.section`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 400px;
    grid-gap: 1.5rem;
  }
`;