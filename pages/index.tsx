import { PostsLayout } from '../components/Posts';
import { NextPage, NextPageContext } from 'next';
import { getPostsListAsync, Post } from '../store/modules/post';
import { GetPostsList } from '../lib/api/apis';
import { asyncState, AsyncState } from '../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { Store } from 'redux';
import HeaderContainer from '../containers/Header/HeaderContainer';
import { RootState } from '../store/modules';
import { NextPageCustom } from '../lib/types/nextCustomTypes';

interface CustomerNextContextProps extends NextPage {
  store?: Store<RootState>
  }
type homeType = {
  getInitList: AsyncState<Post[], AxiosError>;
};
const Home: NextPageCustom<{}, homeType> = ({ getInitList }: homeType) => (
  <>
    <HeaderContainer />
    <PostsLayout getInitList={getInitList} />
  </>
);

Home.getInitialProps = async ({ store, isServer }) => {
  let getInitList:AsyncState<Post[], AxiosError> = asyncState.initial();
  console.log(store, isServer);
  if(isServer) {
    console.log('-----------')
    try {
      await store.dispatch(getPostsListAsync.request(30));
      getInitList = store.getState().post.postsList;
      console.log(store.getState().post.postsList)
    //   getInitList = asyncState.success(res);
    } catch (error) {
      getInitList = asyncState.error(error);
    }
  }
  return { getInitList };
};
export default Home;
