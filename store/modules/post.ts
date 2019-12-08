import { createAction, ActionType, createReducer } from 'typesafe-actions';

const GET_POSTS_LIST = 'post/GET_POSTS_LIST';

export const getPostsList = createAction(GET_POSTS_LIST, (payload): Post[] => payload);

const actions = {
  getPostsList,
};

type PostActions = ActionType<typeof actions>;

export type Post = {
  id: number;
  title: string;
  date: Date;
  content: string;
  reply ?: [];
};

export type PostState = {
  postsList: Post[];
};

const initialState: PostState = {
  postsList: [],
};

const post = createReducer<PostState, PostActions>(initialState, {
  [GET_POSTS_LIST]: (state, action) => ({ postList: action.payload }),
})

export default post;