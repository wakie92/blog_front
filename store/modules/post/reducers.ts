import {
  asyncState,
  transformToArray,
  handleAsyncActions,
} from './../../../lib/Utils/asyncUtils';
import { PostState, PostActions, Post } from './types';
import formatDate from '../../../lib/Utils/utils';
import { createReducer } from 'typesafe-actions';
import { getPostsListAsync } from './actions';

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
};

const post = createReducer<PostState, PostActions>(initialState).handleAction(
  transformToArray(getPostsListAsync),
  handleAsyncActions(getPostsListAsync, 'postsList'),
);
export default post;
