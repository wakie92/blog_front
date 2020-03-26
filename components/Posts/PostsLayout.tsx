import styled from "styled-components";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostComponent from "./Post/Post";
import LoadingPost from "./Post/LoadingPost";
import { breakpoints } from "../../lib/styles/responsive";
import { RootState } from "../../store/modules";
import { getPostsListAsync, Post, getPostAsync } from "../../store/modules/post";
import { AxiosError } from "axios";
import { AsyncState } from "../../lib/Utils/asyncUtils";
import PostList from "./PostList/PostList";
import Maybe from "../Maybe/Maybe";
import { useRouter } from "next/router";
import { ROUTES } from "../../lib/Routes/Routes";
import { firebaseDB } from "../../config/init-firebase";

type PostLayoutProps = {
  getInitList?: AsyncState<Post[], AxiosError>
}

const PostsLayout = ({ getInitList }: PostLayoutProps) => {
  const { postsList } = useSelector(({ post }: RootState) => ({
    postsList: post.postsList,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const reqGetPostsList = useCallback(async () => {
    try {
      dispatch(getPostsListAsync.success(getInitList.data));
    } catch (e) {
      throw e;
    }
  }, [dispatch]);

  const reqGetPost = useCallback((id: number) => {
    try {
      console.log(id);
      dispatch(getPostAsync.request(id))
      router.push(`${ROUTES.devBlog}/${id}`, `${ROUTES.devBlog}/${id}`);
    } catch (e) {
      throw e;
    }
  }, [dispatch])

  useEffect(() => {
    reqGetPostsList();  
  }, []);
  return (
    <Layout breakpoints={breakpoints}>
      <h1>Development(전체글)</h1>
      <ul>
        <Maybe isVisible={getInitList.loading}>
          <LoadingPost />
        </Maybe>
        <PostList onGetPost = {reqGetPost} postsList={getInitList ? getInitList : postsList} />
      </ul>
    </Layout>
  );
}
export default PostsLayout;
const Layout = styled.main<{ breakpoints: object }>`
  width: 90%;
  margin: auto;
  ul, li, ol {
    list-style: none;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(30rem, auto);
    grid-gap: 2.5rem;
    @media screen and (max-width: ${breakpoints.xlarge}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 30rem;
    }
    @media screen and (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 30rem;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: minmax(15rem, 20rem);
    }
    @media screen and (max-width: ${breakpoints.small}) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 30rem;
    }
  }
`;
