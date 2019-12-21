import { GET_AUTH } from './../login/actions';
import { getPostsListAsync } from './actions';
import { Post } from './types';
import { getLogin } from '../../../lib/api/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getPostsListSaga(action:ReturnType<typeof getPostsListAsync.request>) {
  try {
    const login = yield call(getLogin, action.payload);
    yield put(getPostsListAsync.success(login));
  } catch (e) {
    yield put(getPostsListAsync.failure(e));
  }
};

export function* loginSaga() {
  yield takeEvery(GET_AUTH, getPostsListSaga);
};
