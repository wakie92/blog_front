import {
  asyncState,
  transformToArray,
  handleAsyncActions,
} from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import { formatDate } from '../../../lib/Utils/utils';
import { createReducer, action } from 'typesafe-actions';
import { getPostsListAsync, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR } from './actions';

const initialState: PostState = {
  postsList: asyncState.initial([
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
  ]),
  reqPost: asyncState.initial(),
};

const post = createReducer<PostState, PostActions>(initialState, {
  [UPDATE_POST]: (state) => ({
    ...state,
    reqPost: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [UPDATE_POST_SUCCESS]: (state, action) => ({
    ...state,
    reqPost: {
      loading: false,
      error: null,
      data: action.payload,
    }
  }),
  [UPDATE_POST_ERROR]: (state, action) => ({
    ...state,
    reqPost: {
      loading: false,
      error: action.payload,
      data: null,
    }
  })
});
export default post;
