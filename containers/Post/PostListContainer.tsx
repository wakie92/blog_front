import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import 'firebase/auth';
import { getPostsListAsync, postAsync } from "../../store/modules/post";
import { RootState } from "../../store/modules";
import { PostsLayout } from "../../components/Posts";

const limitCnt = 30;
const PostListContainer = () => {

  const { postsList, isLogged, reqPost } = useSelector(({ post, loginUI }: RootState) => ({
		postsList: post.postsList,
		reqPost: post.reqPost,
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
		if (!postsList.data) {
			reqGetPostsList();
			}
	}, []);
	useEffect(() => {
		if(reqPost.data) {
			dispatch(postAsync.success(null));
			reqGetPostsList();
		}
	}, [reqPost.data, dispatch] )
  return (
    <PostsLayout postsList={postsList} />
  );
}

export default PostListContainer;