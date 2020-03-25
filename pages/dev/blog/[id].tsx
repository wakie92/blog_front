import { useState } from 'react';
import Head from 'next/head'
import { NextPage, NextPageContext } from 'next';
import { Post } from '../../../store/modules/post';
import { asyncState, AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { GetPost } from '../../../lib/api/apis';
import EditContainer from '../../../containers/Edit/EditContainer';
import Maybe from '../../../components/Maybe/Maybe';
import BlogPostContainer from '../../../containers/BlogPost/BlogPostContainer';

type blogType = {
  postData: AsyncState<Post, AxiosError>;
  resId: string;
};
const PostComponent: NextPage = ({ postData, resId }: blogType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
 console.log(resId);
  return (
    <>
      <Head>
        <title>{postData.data.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Maybe isVisible={editMode}>
        <EditContainer resId={resId} postData={postData} editMode={editMode}/>
      </Maybe>
      <Maybe isVisible={!editMode}>
        <BlogPostContainer resId={resId} postData={postData} editMode={editMode} setEditMode={setEditMode} />
      </Maybe>
    </>
  );
};

PostComponent.getInitialProps = async (ctx: NextPageContext) => {
  const isServer: string = ctx.req ? 'server' : 'client';
  let postData: AsyncState<Post, AxiosError> = asyncState.initial();
  let resId = '';
  const { id } = ctx.query;
  console.log(postData);
  try {
    const res = await GetPost(Number(id));
    resId = res.resId;
    console.log(res);
    postData = asyncState.success(res.res);
  } catch (error) {
    postData = asyncState.error(error);
  }
  return { postData, resId };
};

export default PostComponent;