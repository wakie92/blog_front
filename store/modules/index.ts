import Post  from './post';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  Post,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;