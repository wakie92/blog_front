import { getPostsListAsync } from './actions';
import { Post } from './types';
import { getLogin } from '../../../lib/api/apis';
// import { call, put, takeEvery } from 'redux-saga/effects';

// function* getPostsListSaga(action:ReturnType<typeof getPostsListAsync.request>) {
//   try {
//     const login: string = yield call(getLogin, action.payload);
//     yield put(getLoginReqAsync.success(login));
//   } catch (e) {
//     yield put(getLoginReqAsync.failure(e));
//   }
// };



// export function* githubSaga() {
//   yield takeEvery(GET_POSTS_LIST, getLoginReqAsync);
// }