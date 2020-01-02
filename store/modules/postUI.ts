import { updateKey } from './loginAsync/types';
import { formatDate } from './../../lib/Utils/utils';
import { createAction, ActionType, createReducer } from 'typesafe-actions';

const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
const INPUT_MD = 'post/INPUT_MD';
const INPUT_VALUE = 'post/INPUT_VALUE';

export const getPostsList = createAction(
  GET_POSTS_LIST,
  (payload: Post[]) => payload,
)<Post[]>();

export const inputMd = createAction(INPUT_MD, (post: Post) => post)<Post>();
export const getValue = createAction(
  INPUT_VALUE,
  ({ name, value }: updateKey) => ({
    name,
    value,
  }),
)<updateKey>();

const actions = {
  getPostsList,
  inputMd,
  getValue,
};

export type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: string;
  content: string;
  imgUrl?: undefined | string;
  contentMd: string;
  reply?: [];
};

export type PostWrite = {
  title: string;
  inputValue: string;
  mdValue: string;
};

export type PostState = {
  postsList: Post[];
  postWrite: PostWrite;
};

const initialState: PostState = {
  postsList: [
    {
      id: 1,
      title: 'wdsf',
      imgUrl:
        'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
      contentMd:
        '<p>내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기<p>',
      content:
        '내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기내용미리보기',
      date: formatDate(new Date().toLocaleString()),
    },
  ],
  postWrite: {
    title: '',
    inputValue: '',
    mdValue: '',
  },
};

const post = createReducer<PostState, PostActions>(initialState, {
  [GET_POSTS_LIST]: (state, { payload }) => {
    return {
      ...state,
      postsList: payload,
    };
  },

  [INPUT_MD]: (state, { payload: post }) => {
    console.log(state.postsList);
    console.log(post);
    return {
      ...state,
      postsList: state.postsList.concat(post),
    };
  },

  [INPUT_VALUE]: (state, { name, value } : updateKey) => {
    return {
      ...state,
      postWrite: {
        ...state.postWrite,
        [name]: value,
      }
    };
  },
});

export default post;
