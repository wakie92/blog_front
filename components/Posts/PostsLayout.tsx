import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostComponent from "./Post/Post";
import LoadingPost from "./Post/LoadingPost";
import { breakpoints } from "../../lib/styles/responsive";
import { RootState } from "../../store/modules";
import { postSaga } from "../../store/modules/post/saga";
import { getPostsListAsync, Post } from "../../store/modules/post";
import { AxiosError } from "axios";
import { NextPageContext, NextPage } from "next";
import { AsyncState } from "../../lib/Utils/asyncUtils";
type PostListsProps = {
  postsList: AsyncState<Post[], AxiosError>
};
const PostList = ({ postsList }: PostListsProps) => {
  const { data, loading, error } = postsList;
  if (loading) return null;
  const list = data.map(item => (
    <PostComponent
      title={item.title}
      preContent={item.content}
      date={item.date}
      id={item.id}
      imgUrl={item.imgUrl}
      key={`card-${String(item.date)}-${item.title}`}
    />
  ));
  return <>{list}</>;
};

const PostsLayout: NextPage = () => {
  const { postsList } = useSelector(({ post }: RootState) => ({
    postsList: post.getPost.postsList,
  }));
  const dispatch = useDispatch();
  const reqGetPostsList = () => {
    try {
      console.log("ddddfdf");
      dispatch(getPostsListAsync.request(30));
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    reqGetPostsList();
  }, []);
  console.log(postsList);
  return (
    <Layout breakpoints={breakpoints}>
      <h1>Development(전체글)</h1>
      <ul>
        <LoadingPost />
        <PostList postsList={postsList} />
      </ul>
    </Layout>
  );
}

PostsLayout.getInitialProps = async (ctx: NextPageContext) => {
  const dispatch = useDispatch();
  console.log(ctx);
  const reqGetPostsList = () => {
    try {
      console.log("ddddfdf");
      dispatch(getPostsListAsync.request(30));
    } catch (e) {
      throw e;
    }
  };
  await reqGetPostsList();
  return { data: "dfdf" };
};
export default PostsLayout;

const Layout = styled.main<{ breakpoints: object }>`
  width: 90%;
  margin: auto;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50rem;
    grid-gap: 2.5rem;
    @media screen and (max-width: ${breakpoints.xlarge}) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 40rem;
    }
    @media screen and (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 40rem;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 40rem;
    }
  }
`;
