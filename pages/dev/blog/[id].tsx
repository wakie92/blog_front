import { useState } from 'react';
import Head from 'next/head'
import { getPostAsync } from '../../../store/modules/post';
import Maybe from '../../../components/Maybe/Maybe';
import BlogPostContainer from '../../../containers/BlogPost/BlogPostContainer';
import { NextPageCustom } from '../../../lib/types/nextCustomTypes';
import { RootState } from '../../../store/modules';
import { useSelector } from 'react-redux';
import EditContainer from '../../../containers/Edit/EditContainer';

type blogType = {};
const post: NextPageCustom = ({}: blogType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { postData } = useSelector(( state : RootState ) => ({
    postData: state.post.post
  }))
  console.log(postData);
  const { data } = postData;
  return (
    <>
      <Head>
        <title>{data.res.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Maybe isVisible={editMode}>
        <EditContainer editMode={editMode} />
      </Maybe>
      <Maybe isVisible={!editMode}>
        <BlogPostContainer editMode={editMode} setEditMode={setEditMode} />
      </Maybe>
    </>
  );
};

post.getInitialProps = async ({ store, isServer, query  }) => {
  const { id } = query;
  if(isServer) {
    console.log(id);
    await store.dispatch(getPostAsync.request(id as string));
  }
  return { };
};

export default post;