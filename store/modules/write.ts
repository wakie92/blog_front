import { createAction, ActionType, createReducer } from 'typesafe-actions';

const INPUT_V = 'write/INPUT_V';

export const getInputV = createAction(INPUT_V, payload => payload)<string>();

const actions = {
  getInputV,
};

type WriteActions = ActionType<typeof actions>;

export type Blog = {
  id?: number;
  title: string;
  date: number;
  content: string;
  reply?: [];
};

export type WriteState = {
  write: string;
  // blog: Blog[];
};

const initialState: WriteState = {
  write: '',
  // blog: [],
};

const write = createReducer<WriteState, WriteActions>(initialState, {
  [INPUT_V]: (state, action) => ({ write: action.payload }),
});

export default write;