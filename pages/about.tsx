import { Intro } from '../components/Intro';
import Header from '../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';
import HeaderContainer from '../containers/Header/HeaderContainer';
import Footer from '../components/CommonUI/Footer';

type aboutProps = {
  isServer: string;
};
const about: NextPage = ({ isServer }: aboutProps) => {
  return (
    <>
      <HeaderContainer />
      <Intro />
      <Footer />
    </>
  );
};

about.getInitialProps = async (ctx: NextPageContext) => {
  const isServer = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default about;
