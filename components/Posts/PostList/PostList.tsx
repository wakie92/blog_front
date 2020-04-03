import { AsyncState } from "../../../lib/Utils/asyncUtils";
import { Post } from "../../../store/modules/post";
import { AxiosError } from "axios";
import PostContainer from "../../../containers/Post/PostContainer";
import LoadingPost from "../Post/LoadingPost";

type PostListsProps = {
  postsList: AsyncState<Post[], AxiosError>
};
const PostList = ({ postsList }: PostListsProps) => {
  const { data, loading } = postsList;
  if (loading) return <LoadingPost />;
  const list = data.map(item => (
    <PostContainer
      title={item.title}
      preContent={item.subTitle}
      date={item.date}
      tagArr={item.tagArr}
      imgUrl={item.imgUrl}
      id={item.id}
      key={`card-${String(item.date)}-${item.title}`}
    />
  ));
  return <>{list}</>;
};
export default PostList;