import { PostsLayout } from '../../components/Posts';
import Header from '../../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';
import HeaderContainer from '../../containers/Header/HeaderContainer';

type blogType = {
  isServer: string;
};
const Blog: NextPage = ({ isServer }: blogType) => {
  return (
    <>
      <HeaderContainer />
      <PostsLayout />
    </>
  );
};

Blog.getInitialProps = async (
  ctx: NextPageContext
) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  ('BLog');
  return { isServer }
};

export default Blog;
