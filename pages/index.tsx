import { getPostsListAsync } from '../store/modules/post';
import HeaderContainer from '../containers/Header/HeaderContainer';
import { RootState } from '../store/modules';
import { NextPageCustom } from '../lib/types/nextCustomTypes';
import { useSelector } from 'react-redux';
import LoadingPost from '../components/Posts/Post/LoadingPost';
import PostListContainer from '../containers/Post/PostListContainer';
import { checkUser } from '../lib/Utils/utils';
import { useEffect } from 'react';

const Home: NextPageCustom = () => {
  
  useEffect(() => {
    console.log('index [useeffect]')
    checkUser();
  }, [])
  return (
  <>
    <HeaderContainer />
    <PostListContainer />
  </>
)};

Home.getInitialProps = async ({ store, isServer }) => {
  if(isServer) {
    await checkUser();
    console.log('home');
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};
export default Home;
