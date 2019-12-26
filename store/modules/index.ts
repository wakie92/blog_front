import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import post  from './postUI';
import write from './write';
import loginUI from './loginUI';
import loginAsync, { loginSaga } from './loginAsync';

const rootReducer = combineReducers({
  post,
  write,
  loginUI,
  loginAsync,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([loginSaga()]);
}