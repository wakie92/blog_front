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
  const list = data.sort((a, b) => Number(b.id) - Number(a.id)).map(item => (
    <PostComponent
      title={item.title}
      preContent={item.content}
      date={item.date}
      id={item.id}
      imgUrl={item.imgUrl}
      onClick={() => onGetPost(item.id)}
      key={`card-${String(item.date)}-${item.title}`}
    />
  ));
  return <>{list}</>;
};
export default PostList;