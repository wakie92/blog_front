import { Intro } from '../components/Intro';
import Header from '../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';

type aboutProps = {
  isServer: string;
};
const About: NextPage = ({ isServer }: aboutProps) => {
  return (
    <>
      <Header />
      <Intro />
    </>
  );
};

About.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default About;
