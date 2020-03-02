import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import Header from '../../../components/CommonUI/Header';
import PostView from '../../../components/Posts/PostView/PostView';
import { NextPage, NextPageContext } from 'next';
import { getPostAsync, Post } from '../../../store/modules/post';
import { useRouter } from 'next/router';
import { RootState } from '../../../store/modules';
import { asyncState, AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { GetPost } from '../../../lib/api/apis';
import Footer from '../../../components/CommonUI/footer';

type blogType = {
  postData: AsyncState<Post, AxiosError>;
};
const PostComponent: NextPage = ({ postData }: blogType) => {
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
  console.log(postData);
  return (
    <>
      <Header />
      <PostView postData={postData} test={test} />
      <Footer />
    </>
  );
};

PostComponent.getInitialProps = async (ctx: NextPageContext) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  let postData: AsyncState<Post, AxiosError> = asyncState.initial();
  const { id } = ctx.query;
  try {
    const res:Post = await GetPost(Number(id));
    postData = asyncState.success(res);
  } catch (error) {
    postData = asyncState.error(error);
  }
  return { postData };
};

export default PostComponent;