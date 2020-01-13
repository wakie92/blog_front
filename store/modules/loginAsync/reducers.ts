import { handleAsyncActions } from './../../../lib/Utils/asyncUtils';
import { getLoginReqAsync } from './actions';
import { LoginState, LoginActions, updateKey } from './types';
import { createReducer } from 'typesafe-actions';
import { asyncState, transformToArray } from '../../../lib/Utils/asyncUtils';

const initialState: LoginState = {
  email: '',
  password: '',
  reqLogin: asyncState.initial(),
};

const login = createReducer<LoginState, LoginActions>(
  initialState,
).handleAction(
  transformToArray(getLoginReqAsync),
  handleAsyncActions(getLoginReqAsync, 'reqLogin'),
);
export default login;
