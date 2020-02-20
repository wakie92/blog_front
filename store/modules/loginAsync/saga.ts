import { getLoginReqAsync, GET_LOGIN } from './actions';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { getLogin } from '../../../lib/api/apis';

// function* getLoginSaga(action: ReturnType<typeof getLoginReqAsync.request>) {
//   try {
//     const login: string = yield call(getLogin, action.payload);
//     (login);
//     yield put(getLoginReqAsync.success(login));
//   } catch (e) {
//     yield put(getLoginReqAsync.failure(e));
//   }
// };

// export function* loginSaga() {
//   yield takeLatest(GET_LOGIN, getLoginSaga);
// }