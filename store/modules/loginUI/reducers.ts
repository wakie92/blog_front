import { createReducer } from 'typesafe-actions';
import { LoginUIState } from './types';

const initialState: LoginUIState = {
  isLoginModal: false,
};

const loginUI = createReducer<LoginUIState, LoginUIActions>(initialState, {
  [GET_LOGIN_MODAL]: state => ({
    ...state,
    isLoginModal: !state.isLoginModal,
  }),
});
