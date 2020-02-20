import Link from 'next/link';
import { PostsLayout } from '../components/Posts';
import { Intro } from '../components/Intro';
import { ROUTES } from '../lib/Routes/Routes';
import Header from '../components/CommonUI/Header';
import { NextPage, NextPageContext } from 'next';
import { useDispatch } from 'react-redux';
import { getPostsListAsync, Post } from '../store/modules/post';
import { GetPostsList } from '../lib/api/apis';
import { asyncState, AsyncState } from '../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { Store } from 'redux';

interface CustomerNextContextProps extends NextPageContext {
  store?: Store
  }
type homeType = {
  getInitList: AsyncState<Post[], AxiosError>;
};
const Home: NextPage = ({ getInitList }: homeType) => (
  <>
    <Header />
    <PostsLayout getInitList={getInitList} />
  </>
);

Home.getInitialProps = async (ctx: CustomerNextContextProps) => {
  let getInitList:AsyncState<Post[], AxiosError> = asyncState.initial();
  // 리팩토링 필요. 
  // const { dispatch, getState }  = ctx.store;
  const itemLimit = 30;
  try {
    const res = await GetPostsList(itemLimit);
    getInitList = asyncState.success(res);
  } catch (error) {
    getInitList = asyncState.error(error);
  }
  return { getInitList };
};
export default Home;
