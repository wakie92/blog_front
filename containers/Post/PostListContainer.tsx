import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

import { AsyncState } from "../../lib/Utils/asyncUtils";
import { Post, getPostsListAsync } from "../../store/modules/post";
import { RootState } from "../../store/modules";
import { useCallback, useEffect } from "react";
import { PostsLayout } from "../../components/Posts";

const limitCnt = 30;
const PostListContainer = () => {

  const { postsList } = useSelector(({ post }: RootState) => ({
		postsList: post.postsList
	}));
	const dispatch = useDispatch();

  const reqGetPostsList = useCallback(async () => {
		try {
			dispatch(getPostsListAsync.request(limitCnt));
		} catch (e) {
			throw e;
		}
	},[ dispatch ]);

  useEffect(() => {
    !postsList.data && reqGetPostsList();
  }, [postsList]);
  
  return (
    <PostsLayout postsList={postsList} />
  );
}

export default PostListContainer;