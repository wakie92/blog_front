import WriteContainer from '../containers/Write/WriteContainer';
import styled from 'styled-components';
import { NextPage, NextPageContext } from 'next';
import { AsyncState, asyncState } from '../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { Post, getPostsListAsync } from '../store/modules/post';
import { GetPostsList } from '../lib/api/apis';
import { NextPageCustom } from '../lib/types/nextCustomTypes';

type writeProps = {};
const Wrapper = styled.main`
  width: 100%;
  height: 100rem;
  margin: auto;
`;
const Write: NextPageCustom = ({}: writeProps) => {
  return (
    <Wrapper>
      <WriteContainer />
    </Wrapper>
  );
};

Write.getInitialProps = async ({ store, isServer }) => {
  if(isServer) {
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};

export default Write;
