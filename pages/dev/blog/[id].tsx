import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import Header from '../../../components/CommonUI/Header';
import PostView from '../../../components/Posts/PostView/PostView';
import { NextPage, NextPageContext } from 'next';
import { getPostAsync } from '../../../store/modules/post';
import { useRouter } from 'next/router';
import { RootState } from '../../../store/modules';

type blogType = {
  isServer: string;
};
const Post: NextPage = ({ isServer }: blogType) => {
  const { post } = useSelector(({ post }: RootState) => ({
    post: post.post,
  }));
  const test =
    '<h1>Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). </h1>';
  const dispatch = useDispatch();
  const router = useRouter();
  
  const reqGetPost = useCallback((id: number) => {
    try {
      console.log(id);
      dispatch(getPostAsync.request(id));
    } catch (e) {
      throw e;
    }
  }, [dispatch])
  useEffect(() => {
    const { id } = router.query; 
    reqGetPost(Number(id));
  }, [reqGetPost]);
  return (
    <>
      <Header />
      <PostView postData={post} test={test} />
    </>
  );
};

Post.getInitialProps = async (ctx: NextPageContext) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  return isServer;
};

export default Post;