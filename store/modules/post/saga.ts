import { LoginActions } from '../loginAsync/types';
import { GET_AUTH, getLoginReqAsync } from '../loginAsync/actions';
import { Post } from './types';
import { getLogin } from '../../../lib/api/apis';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getPostsListSaga(action:ReturnType<typeof getLoginReqAsync.request>) {
  try {
    const login: string = yield call(getLogin, action.payload);
    yield put(getLoginReqAsync.success(login));
  } catch (e) {
    yield put(getLoginReqAsync.failure(e));
  }
};

export function* loginSaga() {
  yield takeEvery(GET_AUTH, getPostsListSaga);
};
