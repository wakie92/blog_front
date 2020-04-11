import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import 'firebase/auth';
import { getPostsListAsync } from "../../store/modules/post";
import { RootState } from "../../store/modules";
import { PostsLayout } from "../../components/Posts";

const limitCnt = 30;
const PostListContainer = () => {

  const { postsList, isLogged } = useSelector(({ post, loginUI }: RootState) => ({
		postsList: post.postsList,
		isLogged: loginUI.isLogged,
	}));
	const dispatch = useDispatch();

  const reqGetPostsList = useCallback(() => {
		try {
			dispatch(getPostsListAsync.request(limitCnt));
		} catch (e) {
			throw e;
		}
	},[ dispatch ]);

  useEffect(() => {
		console.log('dfdfdf');
		if (!postsList.data) {
			reqGetPostsList();
			}
	}, []);
	
  return (
    <PostsLayout postsList={postsList} />
  );
}

export default PostListContainer;