import { useState } from 'react';
import Head from 'next/head'
import { NextPage, NextPageContext } from 'next';
import { Post, getPostAsync } from '../../../store/modules/post';
import { asyncState, AsyncState } from '../../../lib/Utils/asyncUtils';
import { AxiosError } from 'axios';
import { GetPost } from '../../../lib/api/apis';
import EditContainer from '../../../containers/Edit/EditContainer';
import Maybe from '../../../components/Maybe/Maybe';
import BlogPostContainer from '../../../containers/BlogPost/BlogPostContainer';
import { NextPageCustom } from '../../../lib/types/nextCustomTypes';
import { setInputValues } from '../../../store/modules/postUI';
import { RootState } from '../../../store/modules';

type blogType = {
  postData: AsyncState<Post, AxiosError>;
  resId: string;
};
const PostComponent: NextPageCustom = ({ postData, resId }: blogType) => {
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

PostComponent.getInitialProps = async ({ store, isServer, query  }) => {
  let postData: AsyncState<Post, AxiosError> = asyncState.initial();
  const posProps = store.getState().post.post.data;
  let resId = '';
  const { id } = query;
  if(isServer) {
    await store.dispatch(getPostAsync.request(Number(id)));
    
    // store.dispatch(setInputValues({
    //   title,
    //   inputValue: rawContent,
    //   mdValue:contentMd,
    //   imgUrl, 
    //   subTitle,
    //   tagArr,
    //   tag: '', 
    // }));
  }
  try {
    const res = await GetPost(Number(id));
    console.log('******')
    console.log(posProps);
    console.log('******')
    resId = res.resId;
    console.log(res);
    postData = asyncState.success(res.res);
  } catch (error) {
    postData = asyncState.error(error);
  }
  return { postData, resId };
};

export default PostComponent;