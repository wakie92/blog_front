import WriteContainer from '../containers/Write/WriteContainer';
import styled from 'styled-components';
import { NextPage, NextPageContext } from 'next';

type writeProps = {
  isServer: string;
};
const Wrapper = styled.main`
  width: 100%;
  height: 100rem;
  margin: auto;
`;
const Write: NextPage = ({ isServer }: writeProps) => {
  return (
    <Wrapper>
      <WriteContainer />
    </Wrapper>
  );
};

Write.getInitialProps = async (ctx: NextPageContext) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  return { isServer };
};

export default Write;
