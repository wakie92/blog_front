import styled from 'styled-components';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import PostComponent from './Post/Post';
import LoadingPost from './Post/LoadingPost';
import { breakpoints } from '../../lib/styles/responsive';
import { RootState } from '../../store/modules';
import { getPostsListAsync, Post, getPostAsync } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import PostList from './PostList/PostList';
import Maybe from '../Maybe/Maybe';
import { ROUTES } from '../../lib/Routes/Routes';

type PostLayoutProps = {
	postsList?: AsyncState<Post[], AxiosError>;
};

const PostsLayout = ({ postsList }: PostLayoutProps) => (
	<Layout>
		<h1>Development(전체글)</h1>
		<ul>
			<PostList postsList={postsList} />
		</ul>
	</Layout>
)

export default PostsLayout;

const Layout = styled.main`
  width: 90%;
  margin: auto;
  ul, li, ol {
    list-style: none;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50rem, auto);
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
