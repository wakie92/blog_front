import {
  action,
  createAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';

let nextId = 1;
const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
const INPUT_MD = 'post/INPUT_MD';

export const getPostsList = createAction(
  GET_POSTS_LIST,
  (payload): Post[] => payload,
)();

export const inputMd = createAction(
  INPUT_MD,
  ({ title, date, content }: Post) => ({
    id: nextId++,
    title,
    date,
    content,
  }),
)();

const actions = {
  getPostsList,
  inputMd,
};

type PostActions = ActionType<typeof actions>;

export type Post = {
  id?: number;
  title: string;
  date: Date;
  content: string;
  reply?: [];
};

export type PostState = {
  postsList: Post[];
  mdValue: string;
};

const initialState: PostState = {
  postsList: [],
  mdValue: '',
};

const post = createReducer<PostState, PostActions>(initialState, {
  [GET_POSTS_LIST]: (state, { payload }) => {
    return {
      ...state,
      postsList: payload,
    }
  },
  [INPUT_MD]: (state, { payload }) => {
    console.log(payload);
    return {
      ...state,
      postsList: state.postsList.concat(payload),
    }
  }
});

export default post;
