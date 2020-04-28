
import { useState } from 'react';
import Head from 'next/head'
import { getPostAsync } from '../../../store/modules/post';
import Maybe from '../../../components/Maybe/Maybe';
import BlogPostContainer from '../../../containers/BlogPost/BlogPostContainer';
import { NextPageCustom, nextPageProps } from '../../../lib/types/nextCustomTypes';
import { RootState } from '../../../store/modules';
import { useSelector } from 'react-redux';
import EditContainer from '../../../containers/Edit/EditContainer';
import PostSeo from '../../../components/Posts/PostView/PostSeo';

type blogType = {};
const post: NextPageCustom = ({}: blogType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { postData } = useSelector(( state : RootState ) => ({
    postData: state.post.post
  }))
  return (
    <>
      <PostSeo
        data={postData.data}
      />
      <Maybe isVisible={editMode}>
        <EditContainer editMode={editMode} />
      </Maybe>
      <Maybe isVisible={!editMode}>
        <BlogPostContainer editMode={editMode} setEditMode={setEditMode} />
      </Maybe>
    </>
  );
};

post.getInitialProps = async ({ store, isServer, query  }: nextPageProps) => {
  const { id } = query;
  if(isServer) {
    await store.dispatch(getPostAsync.request(id as string));
  }
  return { };
};

export default post;