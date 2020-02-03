import {
  asyncState,
  transformToArray,
  handleAsyncActions,
} from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import { formatDate } from '../../../lib/Utils/utils';
import { createReducer } from 'typesafe-actions';
import { getPostsListAsync, postAsync } from './actions';

const initialState: PostState = {
  postsList: asyncState.initial([]),
  reqPost: asyncState.initial(),
};

const post = createReducer<PostState, PostActions>(initialState).handleAction(
  transformToArray(getPostsListAsync),
  handleAsyncActions(getPostsListAsync, 'postsList'),
)
// handleActions 체이닝 방법 찾기 20200114
// .handleAction(
//   transformToArray(postAsyc),
//   handleAsyncActions(postAsync, 'reqPost'),
// );
export default post;
