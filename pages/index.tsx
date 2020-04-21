import { getPostsListAsync } from '../store/modules/post';
import HeaderContainer from '../containers/Header/HeaderContainer';
import { NextPageCustom } from '../lib/types/nextCustomTypes';
import PostListContainer from '../containers/Post/PostListContainer';

const Home: NextPageCustom = () => {
  return (
  <>
    <HeaderContainer />
    <PostListContainer />
  </>
)};

Home.getInitialProps = async ({ store, isServer, req }) => {
  if(isServer) {
    console.log('home');
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};
export default Home;
