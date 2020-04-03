import styled from 'styled-components';
import { AxiosError } from 'axios';

import { breakpoints } from '../../lib/styles/responsive';
import { Post } from '../../store/modules/post';
import { AsyncState } from '../../lib/Utils/asyncUtils';
import PostList from './PostList/PostList';

type PostLayoutProps = {
	postsList?: AsyncState<Post[], AxiosError>;
};

const PostsLayout = ({ postsList }: PostLayoutProps) => (
	<Layout>
		<ul>
			<PostList postsList={postsList} />
		</ul>
	</Layout>
)

export default PostsLayout;

const Layout = styled.main`
  width: 90%;
  margin: 3rem auto;
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
      grid-auto-rows: 45rem;
    }
    @media screen and (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 30rem;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 23rem;
    }
  }
`;
