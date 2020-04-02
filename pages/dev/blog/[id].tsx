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
import { useSelector } from 'react-redux';

type blogType = {};
const PostComponent: NextPageCustom = ({}: blogType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { postData } = useSelector(( state : RootState ) => ({
    postData: state.post.post
  }))
  const { data } = postData;
  console.log(data.res);
  return (
    <>
      <Head>
        <title>{data.res.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Maybe isVisible={editMode}>
        <EditContainer resId={resId} postData={postData} editMode={editMode}/>
      </Maybe> */}
      <Maybe isVisible={!editMode}>
        <BlogPostContainer editMode={editMode} setEditMode={setEditMode} />
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
  // try {
  //   const res = await GetPost(Number(id));
  //   resId = res.resId;
  //   postData = asyncState.success(res.res);
  // } catch (error) {
  //   postData = asyncState.error(error);
  // }
  return { };
};

export default PostComponent;