import { getPostsListAsync, GET_POSTS_LIST } from './actions';
import { Post } from './types';
import { GetPostsList } from '../../../lib/api/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getPostsListSaga(
  action: ReturnType<typeof getPostsListAsync.request>,
) {
  try {
    const postList: Post[] = yield call(GetPostsList);
    yield put(getPostsListAsync.success(postList));
  } catch (e) {
    yield put(getPostsListAsync.failure(e));
  }
}

export function* postSaga() {
  yield takeEvery(GET_POSTS_LIST, getPostsListSaga);
}
