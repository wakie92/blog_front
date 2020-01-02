import { createAction } from 'typesafe-actions';
import { updateKey } from '../loginAsync/types';


export const GET_AUTH = 'loginUI/GET_AUTH';
export const GET_LOGIN_MODAL = 'loginUI/GET_LOGIN_MODAL';
export const INITIALIZE = 'loginUI/INITIALIZE';

export const getAuth = createAction(GET_AUTH, ({ name, value }: updateKey) => ({
  name,
  value,
}))<updateKey>();

export const getLoginModal = createAction(GET_LOGIN_MODAL)();
export const initialize = createAction(INITIALIZE)();