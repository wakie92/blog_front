import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoginUIActions = ActionType<typeof actions>;

export type LoginUIState = {
  isLoginModal: boolean,
};
