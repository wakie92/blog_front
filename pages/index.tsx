import { getPostsListAsync } from '../store/modules/post';
import HeaderContainer from '../containers/Header/HeaderContainer';
import { RootState } from '../store/modules';
import { NextPageCustom } from '../lib/types/nextCustomTypes';
import { useSelector } from 'react-redux';
import LoadingPost from '../components/Posts/Post/LoadingPost';
import PostListContainer from '../containers/Post/PostListContainer';

const Home: NextPageCustom = () => (
  <>
    <HeaderContainer />
    <PostListContainer />
  </>
);

Home.getInitialProps = async ({ store, isServer }) => {
  if(isServer) {
    console.log('index');
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};
export default Home;
