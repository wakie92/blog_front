import { getPostsListAsync, GET_POSTS_LIST, postAsync, UPDATE_POST } from './actions';
import { Post } from './types';
import { GetPostsList, PostUpdate } from '../../../lib/api/apis';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import createAsyncSaga from '../../../lib/Utils/createAsyncSaga';

const getPostsListSaga = createAsyncSaga(getPostsListAsync, GetPostsList);

function* postUpdateSaga(
  action: ReturnType<typeof postAsync.request>,
) {
  try {
    const postRes: string = yield call(PostUpdate, action.payload);
    yield put(postAsync.success(postRes));
  } catch(e) {
    yield put(postAsync.failure(e));
  }
}

export function* updateSaga() {
  yield takeLatest(UPDATE_POST, postUpdateSaga);
};
export function* postSaga() {
  yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
}
