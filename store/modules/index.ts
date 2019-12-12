import Post  from './post';
import { combineReducers } from 'redux';
import write from './write';

const rootReducer = combineReducers({
  Post,
  write,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;