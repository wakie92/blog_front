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

type homeType = {
  getInitList: AsyncState<Post[], AxiosError>;
};
const Home: NextPage = ({ getInitList }: homeType) => (
  <>
    <Header />
    <PostsLayout getInitList={getInitList} />
  </>
);

Home.getInitialProps = async (ctx: NextPageContext) => {
  let getInitList:AsyncState<Post[], AxiosError> = asyncState.initial();
  try {
    const res = await GetPostsList(30);
    getInitList = asyncState.success(res);
  } catch (error) {
    getInitList = asyncState.error(error);
  }
  const res = await GetPostsList(30);
  getInitList
  console.log(res);
  return { getInitList };
};
export default Home;
