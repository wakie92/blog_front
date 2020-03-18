import {
	getPostsListAsync,
	GET_POSTS_LIST,
	EDIT_POST,
	putPostAsync,
	postAsync,
	UPDATE_POST,
	getPostAsync,
	GET_POST,
  deletePostAsync,
  DELETE_POST
} from './actions';
import { GetPostsList, PostUpdate, GetPost, PutPost, DeletePost } from '../../../lib/api/apis';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import createAsyncSaga from '../../../lib/Utils/createAsyncSaga';

const deletePostSaga = createAsyncSaga(deletePostAsync, DeletePost);
const putPostSaga = createAsyncSaga(putPostAsync, PutPost);
const getPostsListSaga = createAsyncSaga(getPostsListAsync, GetPostsList);
const postUpdateSaga = createAsyncSaga(postAsync, PostUpdate);
const getPostSaga = createAsyncSaga(getPostAsync, GetPost);

export function* updateSaga() {
	yield takeLatest(UPDATE_POST, postUpdateSaga);
}
export function* postSaga() {
	yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
}
export function* getOnePostSaga() {
	yield takeLatest(GET_POST, getPostSaga);
}
export function* putSaga() {
	yield takeLatest(EDIT_POST, putPostSaga);
}
export function* deleteSaga() {
  yield takeLatest(DELETE_POST, deletePostSaga);
}
