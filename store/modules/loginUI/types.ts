import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoginUIActions = ActionType<typeof actions>;

export type LoginUIState = {
  isLoginModal: boolean,
  email: string,
  password: string,
  isLogged: boolean,
};

export type updateKey = {
  name: string,
  value: string,
};