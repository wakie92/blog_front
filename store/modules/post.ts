import {
  createAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
const INPUT_MD = 'post/INPUT_MD';
const INPUT_VALUE = 'post/INPUT_VALUE';

export const getPostsList = createAction(
  GET_POSTS_LIST,
  (payload: Post[]) => payload,
)<Post[]>();

export const inputMd = createAction(INPUT_MD, (post: Post) => post)<Post>();
export const getValue = createAction(INPUT_VALUE, (payload: string) => payload)<string>();

const actions = {
  getPostsList,
  inputMd,
  getValue,
};

type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: number;
  content: string;
  reply?: [];
};

export type PostState = {
  postsList: Post[];
  mdValue: string;
};

const initialState: PostState = {
  postsList: [
    {
      id: 1,
      title: 'wdsf',
      content: 'sdfsdfsfsdf',
      date: new Date().getFullYear(),
    },
  ],
  mdValue: 'kkkk',
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
    return (
    {
      ...state,
      postsList: state.postsList.concat(post),
  })},

  [INPUT_VALUE]: (state, { payload: value }) => {
    return {
      ...state,
      mdValue: value,
    }
  }
});

export default post;
