import { useDispatch, useSelector } from 'react-redux';
import { useCallback, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import PostView from '../../components/Posts/PostView/PostView';
import { getPostAsync, Post, deletePostAsync } from '../../store/modules/post';
import Footer from '../../components/CommonUI/Footer';
import { ROUTES } from '../../lib/Routes/Routes';
import HeaderContainer from '../Header/HeaderContainer';
import { RootState } from '../../store/modules';
import { setInputValues } from '../../store/modules/postUI';

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

  const reqDeletePost = useCallback(() => {
    try {
      dispatch(deletePostAsync.request(postData.data.resId));
      router.back();
    } catch (e) {
      throw e;
    }
  }, [dispatch]);

  return (
    <>
      <HeaderContainer />
      <PostView 
        isLogged={isLogged} 
        reqDeletePost={reqDeletePost} 
        postData={postData} 
        editMode={editMode} 
        setEditMode={setEditMode} 
      />
      <Footer />
    </>
  )
}

export default BlogPostContainer;