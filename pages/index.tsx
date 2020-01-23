import Link from 'next/link';
import { PostsLayout } from '../components/Posts';
import { Intro } from '../components/Intro';
import { ROUTES } from '../lib/Routes/Routes';
import Header from '../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';

type homeType = {
  isServer: string;
};
const Home: NextPage = ({ isServer }: homeType) => (
  <>
    <Header />
    <PostsLayout />
  </>
);

Home.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};
export default Home;
