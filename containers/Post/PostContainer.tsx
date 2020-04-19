import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useCallback } from "react";
import routers  from '../../routes';
import { getPostAsync } from "../../store/modules/post";
import Post from "../../components/Posts/Post/Post";

type PostContainerProps = {
	title: string;
	preContent: string;
	date: string;
  imgUrl?: string;
  id: string;
	tagArr: string[];
};

const PostContainer = ({ title, preContent, date, id, imgUrl, tagArr }: PostContainerProps) => {
  const dispatch = useDispatch();
	const router = useRouter();
	const { pushRoute } = routers.Router;
	const reqGetPost = useCallback(
		(id: string) => {
			try {
				dispatch(getPostAsync.request(id));
				// router.push(`${ROUTES.devBlog}/${id}`, `${ROUTES.devBlog}/${id}`);
				pushRoute(`post`, { id });
			} catch (e) {
				throw e;
			}
		},
		[ dispatch ]
	);
  
  return (
    <Post 
      title={title}
      preContent={preContent}
      date={date}
      tagArr={tagArr}
      imgUrl={imgUrl}
      onClick={() => reqGetPost(id)}
    />
  )
}
export default PostContainer;