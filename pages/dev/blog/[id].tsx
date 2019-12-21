import Header from '../../../components/CommonUI/Header';
import PostView from '../../../components/Posts/PostView/PostView';
import { NextPage, NextPageContext } from 'next';

type blogType = {
  isServer: string;
};
const Post: NextPage = ({ isServer }: blogType) => {
  const test =
    '<h1>Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). </h1>';

  return (
    <>
      <Header />
      <PostView test={test} />
    </>
  );
};

Post.getInitialProps = async (ctx: NextPageContext) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  return isServer;
};

export default Post;