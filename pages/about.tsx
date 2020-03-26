import { Intro } from '../components/Intro';
import Header from '../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';
import HeaderContainer from '../containers/Header/HeaderContainer';

type aboutProps = {
  isServer: string;
};
const About: NextPage = ({ isServer }: aboutProps) => {
  return (
    <>
      <HeaderContainer />
      <Intro />
    </>
  );
};

About.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default About;
