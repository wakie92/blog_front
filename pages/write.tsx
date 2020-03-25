import WriteContainer from '../containers/Write/WriteContainer';
import styled from 'styled-components';
import { NextPage, NextPageContext } from 'next';
import { AsyncState, asyncState } from '../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { Post } from '../store/modules/post';
import { GetPostsList } from '../lib/api/apis';

type writeProps = {
  getInitList: AsyncState<Post[], AxiosError>;
};
const Wrapper = styled.main`
  width: 100%;
  height: 100rem;
  margin: auto;
`;
const Write: NextPage = ({ getInitList }: writeProps) => {
  return (
    <Wrapper>
      <WriteContainer getInitList={getInitList} />
    </Wrapper>
  );
};

Write.getInitialProps = async (ctx: NextPageContext) => {
  let getInitList:AsyncState<Post[], AxiosError> = asyncState.initial();
  try {
    const res = await GetPostsList<Post>(30);
    getInitList = asyncState.success(res);
  } catch (error) {
    getInitList = asyncState.error(error);
  }
  return { getInitList };
};

export default Write;
