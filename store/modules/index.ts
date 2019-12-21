import post  from './postUI';
import { combineReducers } from 'redux';
import write from './write';

const rootReducer = combineReducers({
  post,
  write,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;