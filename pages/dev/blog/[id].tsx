import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head'
import Header from '../../../components/CommonUI/Header';
import PostView from '../../../components/Posts/PostView/PostView';
import { NextPage, NextPageContext } from 'next';
import { getPostAsync, Post } from '../../../store/modules/post';
import { useRouter } from 'next/router';
import { RootState } from '../../../store/modules';
import { asyncState, AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { GetPost } from '../../../lib/api/apis';
import Footer from '../../../components/CommonUI/Footer';
import EditContainer from '../../../containers/Edit/EditContainer';
import Maybe from '../../../components/Maybe/Maybe';

type blogType = {
  postData: AsyncState<Post, AxiosError>;
};
const PostComponent: NextPage = ({ postData }: blogType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editMode, setEditMode] = useState<boolean>(false);
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
  console.log(editMode);
  return (
    <>
      <Head>
        <title>{postData.data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Maybe isVisible={editMode}>
        <EditContainer postData={postData} editMode={editMode}/>
      </Maybe>
      <Maybe isVisible={!editMode}>
        <>
          <Header />
          <PostView postData={postData} editMode={editMode} setEditMode={setEditMode} />
          <Footer />
        </>
      </Maybe>
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