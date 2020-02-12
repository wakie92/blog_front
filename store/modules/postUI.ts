import { updateKey } from './loginAsync/types';
import { createAction, ActionType, createReducer } from 'typesafe-actions';

const INPUT_VALUE = 'post/INPUT_VALUE';

export const getValue = createAction(
  INPUT_VALUE,
  ({ name, value }: updateKey) => ({
    name,
    value,
  }),
)<updateKey>();

const actions = {
  getValue,
};

export type PostActions = ActionType<typeof actions>;

export type PostWrite = {
  title: string;
  inputValue: string;
  mdValue: string;
};

export type PostState = {
  postWrite: PostWrite;
};

const initialState: PostState = {
  postWrite: {
    title: '',
    inputValue: '',
    mdValue: '',
  },
};

const post = createReducer<PostState, PostActions>(initialState, {
  [INPUT_VALUE]: (state, { payload: { name, value }}) => {
    return {
      ...state,
      postWrite: {
        ...state.postWrite,
        [name]: value,
      },
    };
  },
});

export default post;
