import { PostsLayout } from '../../components/Posts';
import Header from '../../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';

type blogType = {
  isServer: string;
};
const Blog: NextPage = ({ isServer }: blogType) => {
  return (
    <>
      <Header />
      <PostsLayout />
    </>
  );
};

Blog.getInitialProps = async (
  ctx: NextPageContext
) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  console.log('BLog');
  return { isServer }
};

export default Blog;
