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
  postData: AsyncState<Post, AxiosError>;
  editMode: boolean;
  resId: string;
  setEditMode: Dispatch<SetStateAction<boolean>>; 
};
const BlogPostContainer = ({ postData, editMode, resId, setEditMode }: BlogPostProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLogged } = useSelector((state: RootState) => ({
    isLogged: state.loginUI.isLogged
  }))
  const reqGetPost = useCallback((id: number) => {
    try {
      console.log(id);
      dispatch(getPostAsync.request(id));
    } catch (e) { 
      throw e;
    }
  }, [dispatch])

  const reqDeletePost = useCallback((id: number) => {
    try {
      dispatch(deletePostAsync.request(resId));
      router.push(ROUTES.home, ROUTES.home, { shallow: true })
    } catch (e) {
      throw e;
    }
  }, [dispatch]);

  useEffect(() => {
    const { id } = router.query; 
    // reqGetPost(Number(id));
  }, [reqGetPost]);
  return (
    <>
      <HeaderContainer />
      <PostView isLogged={isLogged} reqDeletePost={reqDeletePost} postData={postData} editMode={editMode} setEditMode={setEditMode} />
      <Footer />
    </>
  )
}

export default BlogPostContainer;