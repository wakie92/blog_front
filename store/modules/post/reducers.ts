import { PostState, PostActions, Post } from './types';
import formatDate from '../../../lib/Utils/utils';
import { createReducer } from 'typesafe-actions';
import {
  GET_POSTS_LIST,
  GET_POSTS_LIST_SUCCESS,
  GET_POSTS_LIST_ERROR,
} from './actions';
import { AxiosError } from 'axios';

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
};

const post = createReducer<PostState, PostActions>(initialState, {
  [GET_POSTS_LIST]: (state, payload: undefined) => {
    return {
      ...state,
      postsList: payload,
    };
  },
  [GET_POSTS_LIST_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      postsList: payload,
    };
  },
  [GET_POSTS_LIST_ERROR]: (state, payload) => {
    return {
      ...state,
      postsList: payload,
    };
  },
});
export default post;
