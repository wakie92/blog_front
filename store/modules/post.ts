import {
  deprecated,
  createAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';
const { createStandardAction } = deprecated;
let nextId = 1;
const GET_POSTS_LIST = 'post/GET_POSTS_LIST';
const INPUT_MD = 'post/INPUT_MD';

export const getPostsList = createAction(
  GET_POSTS_LIST,
  (payload): Post[] => payload,
)();

// export const inputMd = createAction(
//   INPUT_MD,
//   (payload: Post) => ({
//     id: nextId++,
//     ...payload
//   })
//   )();
export const inputMd = createStandardAction(INPUT_MD)<Post>();

const add = createAction('ADD', action => {
  return (amount: number) => action(amount);
});
const actions = {
  getPostsList,
  inputMd,
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
    }
  ],
  mdValue: '',
};

const post = createReducer<PostState, PostActions>(initialState, {
  [GET_POSTS_LIST]: (state, { payload }) => {
    return {
      ...state,
      postsList: payload,
    };
  },
  [INPUT_MD]: (state, { payload }) => {
    return {
      ...state,
      postsList: state.postsList.concat(payload),
    }
  }
});

export default post;
