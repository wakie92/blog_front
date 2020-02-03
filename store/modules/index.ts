import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import postUI  from './postUI';
import write from './write';
import { postSaga } from './post';
import post from './post/reducers';
import loginUI from './loginUI';
import loginAsync from './loginAsync';

const rootReducer = combineReducers({
  postUI,
  write,
  post,
  loginUI,
  loginAsync,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postSaga()]);
}