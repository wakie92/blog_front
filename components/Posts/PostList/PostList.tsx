import { AsyncState } from "../../../lib/Utils/asyncUtils";
import { Post } from "../../../store/modules/post";
import { AxiosError } from "axios";
import PostComponent from '../Post/Post';

type PostListsProps = {
  postsList: AsyncState<Post[], AxiosError>
  onGetPost: (id: number) => void,
};
const PostList = ({ postsList, onGetPost }: PostListsProps) => {
  const { data, loading, error } = postsList;
  if (!data) return null;
  console.log(data);
  const list = data.map(item => (
    <PostComponent
      title={item.title}
      preContent={item.subTitle}
      date={item.date}
      tagArr={item.tagArr}
      imgUrl={item.imgUrl}
      onClick={() => onGetPost(item.id)}
      key={`card-${String(item.date)}-${item.title}`}
    />
  ));
  return <>{list}</>;
};
export default PostList;