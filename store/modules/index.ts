import post  from './postUI';
import { combineReducers } from 'redux';
import write from './write';
import loginUI from './loginUI';
import loginAsync from './loginAsync';

const rootReducer = combineReducers({
  post,
  write,
  loginUI,
  loginAsync,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;