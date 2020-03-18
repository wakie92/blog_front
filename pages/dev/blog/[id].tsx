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
};
const PostComponent: NextPage = ({ postData }: blogType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
 
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
        <BlogPostContainer postData={postData} editMode={editMode} setEditMode={setEditMode} />
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