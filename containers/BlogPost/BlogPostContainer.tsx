import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/CommonUI/Header';
import PostView from '../../components/Posts/PostView/PostView';
import { getPostAsync, Post, deletePostAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import Footer from '../../components/CommonUI/Footer';
import { ROUTES } from '../../lib/Routes/Routes';
import HeaderContainer from '../Header/HeaderContainer';
import { RootState } from '../../store/modules';

type BlogPostProps = {
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>; 
};
const BlogPostContainer = ({ editMode, setEditMode }: BlogPostProps) => {
  const dispatch = useDispatch();
  const { postData, isLogged } = useSelector(( state : RootState ) => ({
    postData: state.post.post,
    isLogged: state.loginUI.isLogged
  }))
  const router = useRouter();

  const reqDeletePost = useCallback((id: number) => {
    try {
      dispatch(deletePostAsync.request(postData.data.resId));
      router.push(ROUTES.home, ROUTES.home, { shallow: true })
    } catch (e) {
      throw e;
    }
  }, [dispatch]);

  return (
    <>
      <HeaderContainer />
      <PostView isLogged={isLogged} reqDeletePost={reqDeletePost} postData={postData.data.res} editMode={editMode} setEditMode={setEditMode} />
      <Footer />
    </>
  )
}

export default BlogPostContainer;