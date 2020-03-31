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
import { useSelector } from 'react-redux';
import LoadingPost from '../components/Posts/Post/LoadingPost';

interface CustomerNextContextProps extends NextPage {
  store?: Store<RootState>
  }
type homeType = {
  getInitList?: AsyncState<Post[], AxiosError>;
};
const Home: NextPageCustom<homeType> = () => {
  const { postsList } = useSelector(({ post }: RootState) => ({
		postsList: post.postsList
  }));
  const renderPosts = postsList.loading ? <LoadingPost/> : <PostsLayout getInitList={postsList}/>;
  return (
  <>
    <HeaderContainer />
    {renderPosts}
  </>
)};

Home.getInitialProps = async ({ store, isServer }) => {
  console.log(store, isServer);
  if(isServer) {
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};
export default Home;
