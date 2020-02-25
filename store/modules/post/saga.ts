import { getPostsListAsync, GET_POSTS_LIST, postAsync, UPDATE_POST, getPostAsync, GET_POST } from './actions';
import { Post } from './types';
import { GetPostsList, PostUpdate, GetPost } from '../../../lib/api/apis';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import createAsyncSaga from '../../../lib/Utils/createAsyncSaga';

const getPostsListSaga = createAsyncSaga(getPostsListAsync, GetPostsList);
const postUpdateSaga = createAsyncSaga(postAsync, PostUpdate);
const getPostSaga = createAsyncSaga(getPostAsync, GetPost);
export function* updateSaga() {
  yield takeLatest(UPDATE_POST, postUpdateSaga);
};
export function* postSaga() {
  yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
}
export function* getOnePostSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}
