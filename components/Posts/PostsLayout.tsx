import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post/Post';
import LoadingPost from './Post/LoadingPost';
import { breakpoints } from '../../lib/styles/responsive';
import { RootState } from '../../store/modules';
import { getPostsList } from '../../store/modules/post';


export default function PostsLayout() {
  const { postsList, mdValue } = useSelector(
    (state: RootState) => ({
      postsList: state.post.postsList,
      mdValue: state.post.mdValue,
    })
  );
  const dispatch = useDispatch();
  console.log(mdValue);
  useEffect(() => {
    dispatch(getPostsList(postsList));
  }, [dispatch, postsList]);
  return (
    <Layout breakpoints={breakpoints}>
      <h1>Development(전체글)</h1>
      <span>{mdValue}</span>
      <ul>
        <LoadingPost />
        {
          postsList.map(item => (
            <Post
              title={item.title}
              preContent={item.content}
              date={item.date}
              id={item.id}
              imgUrl={item.imgUrl}
              key={`card-${item.id}`}
            />
          ))
        }
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </Layout>
  );
}

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
